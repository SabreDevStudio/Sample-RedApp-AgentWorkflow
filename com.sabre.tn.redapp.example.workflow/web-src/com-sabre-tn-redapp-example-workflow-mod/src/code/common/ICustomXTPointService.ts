import { NgvPromise } from "sabre-ngv-app/_types";
import { CustomSvcRQData } from "../models/CustomSvcRQData";
import { CustomSvcRS } from "../models/CustomSvcRS";

export interface ICustomXTPointService {
    fetchServiceData(svcRQ: CustomSvcRQData): NgvPromise<CustomSvcRS>;
}