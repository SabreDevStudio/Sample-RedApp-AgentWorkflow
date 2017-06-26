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


@CssClass('drawer-tile pricing-branded-fare-tile')
@Mixin(WithoutFocusOnClick)
export class DecisionSupportTile extends Tile<FlightSegment> implements WithoutFocusOnClick {

    selfDrawerContextModelPropagated(cpa: FlightSegment) {
        if (cpa.getOriginIata().endsWith('DFW')) {
            this.setDataContent(this.getSampleContent());
        } else {
            this.setDataContent(this.getFullContent());
        }
    }

    getSampleContent(): string | TileContent {
        return {
            contentTitle: 'average co2',
            footer: 'from 0.10 ton/pax to 0.17 ton/pax',
            contents: [
                {
                    content: 'Lowest - 0.10 ton/pax<br/>Highest - 0.17 ton/pax'
                }
            ]
        };
    }

    getSampleContentTE(): string | TileContent {
        return {
            contentTitle: 'ticket evolution',
            footer: 'looking for events in LAS area',
            contents: [
                {
                    content: '24 SPORTING EVENTS<BR/>23 CONCERTS<br/>12 THEATRE SHOWS'
                }
            ]
        };
    }

    getFullContent(): string | TileContent {
        return {
            contentTitle: 'decision support widget',
            footer: 'expand panel for more content',
            contents: [
                {
                    title: 'many ways to',
                    content: 'WEIGHT ON DECISION'
            },
            {
                title: 'if u dare',
                content: 'CLICK FOR MORE'
            }
            ]
        };
    }
}
