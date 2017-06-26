import Tile = app.widgets.drawer.views.elements.Tile;
import TileOptions = app.widgets.drawer.views.elements.TileOptions;
import {Initial} from 'sabre-ngv-core/decorators/classes/Initial';
import WithoutFocusOnClick = app.common.mixins.WithoutFocusOnClick;

import {Mixin} from 'sabre-ngv-core/decorators/classes/Mixin';
import TileContent = app.widgets.drawer.views.elements.TileContent;
import {CssClass} from 'sabre-ngv-core/decorators/classes/view/CssClass';

import FlightSegment = app.common.data.flight.FlightSegment;
// import ShoppingData = app.responses.shopping.models.ShoppingData


@Initial<TileOptions>({
    caption: ''
})


@CssClass('drawer-tile')
@Mixin(WithoutFocusOnClick)
export class ResultPanelTile extends Tile<FlightSegment> implements WithoutFocusOnClick {

    selfDrawerContextModelPropagated(cpa: FlightSegment) {
        this.setDataContent(this.getSampleContent());
    }

    getSampleContent(): string | TileContent {
        return {
            contentTitle: 'result panel widget',
            footer: 'context specific insights',
            contents: [
                {
                    content: '<i class="fa fa-money"><span>&nbsp;UPSELL</span></i><br/><i class="fa fa-usd">&nbsp;<span>ANCILIARIES</span></i><br/><i class="fa fa-info">&nbsp;<span>INFORMATION</span></i>'
            }
            ]
        };
    }
}
