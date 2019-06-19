/// <ngv scope="public" />

/*************************************/
/* Auto-generated file.              */
/* Do not modify it.                 */
/* You may remove it.                */
/* You may commit it.                */
/* You may push it.                  */
/* Remove it if module name changed. */
/* tslint:disable                    */
/*************************************/

import {IModuleContext} from "sabre-ngv-core/modules/IModuleContext";
import {ModuleContext} from "sabre-ngv-core/modules/ModuleContext";
import {NgvServiceClass, NgvServiceType} from "sabre-ngv-app/_types";
import {AbstractService} from "sabre-ngv-app/app/services/impl/AbstractService";
import {Command} from "sabre-ngv-app/app/common/data/dto/Command";
import {CommandFlow} from "sabre-ngv-app/app/common/data/dto/CommandFlow";
import {AbstractServiceOptions} from "sabre-ngv-app/app/services/impl/AbstractServiceOptions";

// Cannot use IModuleContext['something'] for types - it seems to break generics
// types are copied from IModuleContext

/** @internal **/
export const context: IModuleContext = new ModuleContext();
/** @internal **/
export const cf: (command: Command) => CommandFlow = context.cf.bind(context);
/** @internal **/
export const registerService: <T extends AbstractService>(serviceClass: NgvServiceClass<T>, options?: AbstractServiceOptions) => void = context.registerService.bind(context);
/** @internal **/
export const getService: <T extends AbstractService>(serviceClass: NgvServiceType<T>) => T = context.getService.bind(context);
