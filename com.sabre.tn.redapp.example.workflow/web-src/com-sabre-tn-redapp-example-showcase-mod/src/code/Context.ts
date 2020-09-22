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
import {I18nService, ScopedTranslator} from "sabre-ngv-app/app/services/impl/I18nService";

/** @internal **/
export const context: IModuleContext = new ModuleContext("com-sabre-tn-redapp-example-showcase-mod");
/** @internal **/
export const cf: IModuleContext['cf'] = context.cf.bind(context);
/** @internal **/
export const registerService: IModuleContext['registerService'] = context.registerService.bind(context);
/** @internal **/
export const getService: IModuleContext['getService'] = context.getService.bind(context);
/** @internal **/
export const t: ScopedTranslator = getService(I18nService).getScopedTranslator('com-sabre-tn-redapp-example-showcase-mod/translations');
