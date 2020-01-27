import {Tile} from "sabre-ngv-app/app/widgets/drawer/views/elements/Tile";
import {TileOptions} from "sabre-ngv-app/app/widgets/drawer/views/elements/TileOptions";
import {Initial} from 'sabre-ngv-core/decorators/classes/Initial';
import {CssClass} from 'sabre-ngv-core/decorators/classes/view/CssClass';
import {FlightSegment} from "sabre-ngv-app/app/common/data/flight/FlightSegment";

// import {ShoppingData} from "sabre-ngv-app/app/responses/shopping/models/ShoppingData";

@Initial<TileOptions>({
    caption: 'tile widget'
})
@CssClass('drawer-tile')
export class LfsDrawerTile extends Tile<FlightSegment> {
    selfDrawerContextModelPropagated(flightSeg: FlightSegment){
        var customFt = "footer";
        var customCt1 = "c1";
        var customCt2 = "c2";
        
        this.setDataContent({
            contents: [{
                content: customCt1
            },{
                content: customCt2
            }],
            footer: customFt
        });
        
    }
}