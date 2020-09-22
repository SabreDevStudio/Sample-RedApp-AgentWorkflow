import { AbstractModelOptions } from "sabre-ngv-app/app/AbstractModelOptions";
import { ViewDescriptor } from "sabre-ngv-app/_types";
import { Drawer } from "sabre-ngv-app/app/widgets/drawer/views/Drawer";

export declare interface DrawerDescriptorOptions extends AbstractModelOptions {
    drawerDescriptor: ViewDescriptor<Drawer>;
}