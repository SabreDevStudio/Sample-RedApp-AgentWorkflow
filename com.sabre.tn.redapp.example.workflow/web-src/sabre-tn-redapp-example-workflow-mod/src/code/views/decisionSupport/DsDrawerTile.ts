import {Tile} from "sabre-ngv-app/app/widgets/drawer/views/elements/Tile";
import {TileOptions} from "sabre-ngv-app/app/widgets/drawer/views/elements/TileOptions";
import {Initial} from 'sabre-ngv-core/decorators/classes/Initial';
import {CssClass} from 'sabre-ngv-core/decorators/classes/view/CssClass';

import {ShoppingData} from "sabre-ngv-app/app/responses/shopping/models/ShoppingData";

@Initial<TileOptions>({
    caption: 'tile widget'
})
@CssClass('drawer-tile')
export class DsDrawerTile extends Tile<ShoppingData> {
    selfDrawerContextModelPropagated(shopData: ShoppingData){
        var customFt = "footer";
        var customCt = "tile content";
        
        this.setDataContent({
            contents: [{
                content: customCt
            }],
            footer: customFt
        });
        
    }
}