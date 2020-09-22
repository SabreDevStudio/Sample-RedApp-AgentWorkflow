package com.sabre.tn.redapp.example.showcase.xtpointservices;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointCommand;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointDataOperation;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointResponse;
import com.sabre.stl.pos.srw.nextgen.flow.ext.v2.FlowExtPointResponseWrapper;
import com.sabre.stl.pos.srw.nextgen.redapp.nudge.v1.RedAppNudgeAction;
import com.sabre.stl.pos.srw.nextgen.redapp.nudge.v1.RedAppNudgeInitEntry;
import com.sabre.stl.pos.srw.nextgen.redapp.nudge.v1.RedAppNudgeInitRQ;
import com.sabre.stl.pos.srw.nextgen.redapp.nudge.v1.RedAppNudgeInitRS;
import com.sabre.stl.pos.srw.nextgen.redapp.nudge.v1.RedAppNudgeItem;
import com.sabre.tn.redapp.example.showcase.Activator;
import com.sabre.tn.redapp.example.showcase.xtpointservices.interfaces.INudgeInit;

public class NudgeInit implements INudgeInit {

	@Override
	public FlowExtPointCommand execute(FlowExtPointCommand extPointCommand) {
		// TODO Auto-generated method stub
		Activator.getDefault().getLoggerService().info("Nudge Init hanndler reach");
		Optional<RedAppNudgeInitRQ> rq = fetchRequest(extPointCommand, RedAppNudgeInitRQ.class);
		List<RedAppNudgeItem> entries = checkEntries(rq.get());
		if(entries!=null && !entries.isEmpty()){
			RedAppNudgeInitRS rs = new RedAppNudgeInitRS();
			rs.getItem().addAll(entries);
			extPointCommand.getResponses().add(wrapResponse(rs));
			return extPointCommand;
		}else{
			return null;	
		}
		
	}

	private List<RedAppNudgeItem> checkEntries(RedAppNudgeInitRQ request){
		List<RedAppNudgeItem> retList = new ArrayList<RedAppNudgeItem>();
		for (RedAppNudgeInitEntry item : request.getEntries()) {
			String entry = "NUDGE init entry :"
					.concat(item.getLocation()!=null?item.getLocation().name():"NO_LOCATION").concat("/")
					.concat(item.getOrigin()!=null?item.getOrigin():"NO_ORIGIN").concat("/")
					.concat(item.getDestination()!=null?item.getDestination():"NO_DESTINATION").concat("/")
					.concat(item.getStart()!=null?item.getStart().toString():"NO_START").concat("/")
					.concat(item.getEnd()!=null?item.getEnd().toString():"NO_END").concat("/");
			Activator.getDefault().getLoggerService().info(entry);
			
			if(item.getLocation().name().equals("SHOPPING")){

				RedAppNudgeItem it = new RedAppNudgeItem();
				it.setIcon("INFO");
				it.setMessage("THE NUDGE MESSAGE COMES FROM THE PROFILE SETTINGS");
				RedAppNudgeAction ac = new RedAppNudgeAction();
				ac.setId("ACTIONFOR_" + item.getLocation().name());
				ac.setLabel("ACTIONFOR_" + item.getLocation().name());
				it.getAction().add(ac);
				retList.add(it);

			}else{
				
			
				RedAppNudgeItem it = new RedAppNudgeItem();
				it.setIcon("INFO");
				it.setMessage(entry);
				RedAppNudgeAction ac = new RedAppNudgeAction();
				ac.setId("ACTIONFOR_" + item.getLocation().name());
				ac.setLabel("ACTIONFOR_" + item.getLocation().name());
				it.getAction().add(ac);
				retList.add(it);

			}
		}
		return retList;
		
	}
	
    private <T> Optional <T> fetchRequest(FlowExtPointCommand extPointCommand, Class <T> type)
    {
        return extPointCommand.getRequests().stream().map(wrapper -> wrapper.getRequest())
            .filter(type::isInstance).map(type::cast).findFirst();
    }
    
    private FlowExtPointResponseWrapper wrapResponse(Object response)
    {
        FlowExtPointResponseWrapper wrapper = new FlowExtPointResponseWrapper();
        wrapper.setResponse(new FlowExtPointResponse());
        wrapper.getResponse().setStructure(response);
        wrapper.setOperation(FlowExtPointDataOperation.ADD);
        return wrapper;
    }
}
