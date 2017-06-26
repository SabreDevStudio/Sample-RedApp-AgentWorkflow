import {ServiceData} from '../models/ServiceData';
import CommandFlow = app.common.data.dto.CommandFlow;

export interface IExtPointService {

    fetchServiceData(): NgvPromise<ServiceData>;

    // sellCaptainPackages(captainsPackage: CaptainsPackage): NgvPromise<CaptainsPackageSellData>;

}