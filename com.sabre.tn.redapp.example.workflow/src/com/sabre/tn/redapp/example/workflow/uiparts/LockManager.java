package com.sabre.tn.redapp.example.workflow.uiparts;

import java.util.Collection;

import com.sabre.edge.cf.core.registry.service.ClientResponse;
import com.sabre.edge.cf.core.registry.service.ISRWCommunication;
import com.sabre.edge.cf.host.data.LockRequest;
import com.sabre.edge.cf.host.data.LockResponse;
import com.sabre.edge.cf.host.data.UnlockRequest;
import com.sabre.edge.cf.host.service.external.LockServiceClient;
import com.sabre.edge.cf.host.service.external.UnlockServiceClient;
import com.sabre.edge.cf.model.IError;
import com.sabre.edge.platform.core.logging.ILoggerService;
import com.sabre.edge.platform.core.logging.types.Level;


public class LockManager {

	private static ISRWCommunication com;


	private long lockId = -1;

	private ILoggerService logger;

	public LockManager(ISRWCommunication com, ILoggerService logger) {
		super();
		this.com = com;
		this.logger = logger;
	}

	public long getLockId() {
		return lockId;
	}

	public void releaseLock() throws Exception {
		if (lockId != -1) {
			pause(1000);
			ClientResponse<LockResponse> rsp = new UnlockServiceClient(com)
					.send(new UnlockRequest(lockId));
			if (rsp.isSuccess()) {
				logger.log(Level.INFO, "lockId: " + lockId + " released");
			} else {
				logger.log(Level.INFO, "unable to release lockId " + lockId);
				throw new Exception(toString(rsp.getErrors()));
			}
		}
		lockId = -1;

	}

	private String toString(Collection<IError> errors) {
		StringBuilder sb = new StringBuilder();
		for (IError error : errors) {
			sb = sb.length() > 0 ? sb.append(" : ").append(error.getCode())
					.append("-").append(error.getDescription()) : sb
					.append(error.getCode()).append("-")
					.append(error.getDescription());
		}
		return sb.toString();
	}

	public void obtainLock() throws Exception {
		Collection<IError> errors = null;
		for (int i = 0; i < 20; i++) {
			try {
				ClientResponse<LockResponse> rsp = new LockServiceClient(com)
						.send(new LockRequest());
				if (rsp.isSuccess()) {
					LockResponse lr = (LockResponse) rsp.getPayload();
					lockId = lr.getLockId();
					if (lockId > -1) {
						logger.log(Level.INFO, "lockId: " + lockId
								+ " obtained");
						return;
					}
				} else {
					errors = rsp.getErrors();
					pause(2000);
				}
			} catch (Throwable e) {
					logger.log(Level.INFO,
							"unable to get lock " + e.getMessage());
				pause(2000);
				continue;
			}
		}
		logger.log(Level.INFO, "Unable to obtain lockId");
		throw new Exception(toString(errors));

	}

	@SuppressWarnings("static-access")
	private static void pause(int ms) {
		try {
			Thread.currentThread().sleep(ms);
		} catch (InterruptedException e) {

		}
	}

}
