var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<amd-module name="sabre-tn-redapp-example-workflow-mod/Context" />
/// <ngv scope="public" />
define("sabre-tn-redapp-example-workflow-mod/Context", ["require", "exports", "sabre-ngv-core/modules/ModuleContext"], function (require, exports, ModuleContext_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Cannot use IModuleContext['something'] for types - it seems to break generics
    // types are copied from IModuleContext
    /** @internal **/
    exports.context = new ModuleContext_1.ModuleContext("sabre-tn-redapp-example-workflow-mod");
    /** @internal **/
    exports.cf = exports.context.cf.bind(exports.context);
    /** @internal **/
    exports.registerService = exports.context.registerService.bind(exports.context);
    /** @internal **/
    exports.getService = exports.context.getService.bind(exports.context);
});
define("sabre-tn-redapp-example-workflow-mod/views/decisionSupport/DsDrawerTile", ["require", "exports", "sabre-ngv-app/app/widgets/drawer/views/elements/Tile", "sabre-ngv-core/decorators/classes/Initial", "sabre-ngv-core/decorators/classes/view/CssClass"], function (require, exports, Tile_1, Initial_1, CssClass_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DsDrawerTile = (function (_super) {
        __extends(DsDrawerTile, _super);
        function DsDrawerTile() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DsDrawerTile.prototype.selfDrawerContextModelPropagated = function (shopData) {
            var customFt = "footer";
            var customCt = "tile content";
            this.setDataContent({
                contents: [{
                        content: customCt
                    }],
                footer: customFt
            });
        };
        return DsDrawerTile;
    }(Tile_1.Tile));
    DsDrawerTile = __decorate([
        Initial_1.Initial({
            caption: 'tile widget'
        }),
        CssClass_1.CssClass('drawer-tile')
    ], DsDrawerTile);
    exports.DsDrawerTile = DsDrawerTile;
});
define("sabre-tn-redapp-example-workflow-mod/views/decisionSupport/DsTilePopOver", ["require", "exports", "sabre-ngv-core/decorators/classes/view/Template", "sabre-ngv-app/app/AbstractView", "sabre-ngv-core/decorators/classes/view/CssClass"], function (require, exports, Template_1, AbstractView_1, CssClass_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DsTilePopOver = (function (_super) {
        __extends(DsTilePopOver, _super);
        function DsTilePopOver() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DsTilePopOver.prototype.selfDrawerContextModelPropagated = function (availData) {
            this.getModel().set('availData', JSON.stringify(availData, null, '\t'));
            this.getModel().set('ctDEC', true);
            this.render();
        };
        return DsTilePopOver;
    }(AbstractView_1.AbstractView));
    DsTilePopOver = __decorate([
        CssClass_2.CssClass('decisionsupport-widgetview'),
        Template_1.Template('sabre-tn-redapp-example-workflow-mod:Example')
    ], DsTilePopOver);
    exports.DsTilePopOver = DsTilePopOver;
});
define("sabre-tn-redapp-example-workflow-mod/views/lfsResults/LfsDrawerTile", ["require", "exports", "sabre-ngv-app/app/widgets/drawer/views/elements/Tile", "sabre-ngv-core/decorators/classes/Initial", "sabre-ngv-core/decorators/classes/view/CssClass"], function (require, exports, Tile_2, Initial_2, CssClass_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // import {ShoppingData} from "sabre-ngv-app/app/responses/shopping/models/ShoppingData";
    var LfsDrawerTile = (function (_super) {
        __extends(LfsDrawerTile, _super);
        function LfsDrawerTile() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LfsDrawerTile.prototype.selfDrawerContextModelPropagated = function (flightSeg) {
            var customFt = "footer";
            var customCt1 = "c1";
            var customCt2 = "c2";
            this.setDataContent({
                contents: [{
                        content: customCt1
                    }, {
                        content: customCt2
                    }],
                footer: customFt
            });
        };
        return LfsDrawerTile;
    }(Tile_2.Tile));
    LfsDrawerTile = __decorate([
        Initial_2.Initial({
            caption: 'tile widget'
        }),
        CssClass_3.CssClass('drawer-tile')
    ], LfsDrawerTile);
    exports.LfsDrawerTile = LfsDrawerTile;
});
define("sabre-tn-redapp-example-workflow-mod/models/CustomSvcRQ", ["require", "exports", "sabre-ngv-app/app/AbstractModel"], function (require, exports, AbstractModel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CustomSvcRQ = (function (_super) {
        __extends(CustomSvcRQ, _super);
        function CustomSvcRQ() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CustomSvcRQ;
    }(AbstractModel_1.AbstractModel));
    exports.CustomSvcRQ = CustomSvcRQ;
});
/*

export interface CustomSvcRQ {
    'workflowdata.CustomSvcRQ': [{'workflowdata.actionCode': string,
        'workflowdata.rqPayload': string}];
}

*/ 
define("sabre-tn-redapp-example-workflow-mod/models/ICustomSvcRQ", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("sabre-tn-redapp-example-workflow-mod/models/CustomSvcRQData", ["require", "exports", "sabre-ngv-app/app/common/data/dto/request/RequestData"], function (require, exports, RequestData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CustomSvcRQData = (function (_super) {
        __extends(CustomSvcRQData, _super);
        function CustomSvcRQData(rqData) {
            var _this = _super.call(this) || this;
            _this.rqData = rqData;
            return _this;
        }
        CustomSvcRQData.prototype.getRequestStructure = function () {
            var rqd = this.rqData;
            return {
                'workflowdata.CustomSvcRQ': [{
                        'workflowdata.actionCode': rqd.actionCode,
                        'workflowdata.rqPayload': rqd.rqPayload
                    }]
            };
            // throw new Error("Method not implemented.");
        };
        return CustomSvcRQData;
    }(RequestData_1.RequestData));
    exports.CustomSvcRQData = CustomSvcRQData;
});
define("sabre-tn-redapp-example-workflow-mod/models/CustomSvcRS", ["require", "exports", "sabre-ngv-app/app/common/data/dto/EnhancedResponseData", "sabre-ngv-core/decorators/classes/Initial"], function (require, exports, EnhancedResponseData_1, Initial_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CustomSvcRS = (function (_super) {
        __extends(CustomSvcRS, _super);
        function CustomSvcRS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CustomSvcRS.prototype.getActionCode = function () {
            return this.fromRoot().get('[workflowdata.actionCode]').value();
        };
        CustomSvcRS.prototype.getRsPayload = function () {
            return this.fromRoot().get('[workflowdata.rsPayload]').value();
        };
        CustomSvcRS.prototype.getCF = function () {
            return this.getCommandFlow();
        };
        return CustomSvcRS;
    }(EnhancedResponseData_1.EnhancedResponseData));
    CustomSvcRS = __decorate([
        Initial_3.Initial({
            autoPropagateData: true,
            nonLazyMembers: ['actionCode', 'rsPayload']
        }),
        Initial_3.Initial({
            dataRoot: '[d.Structure][o.ExtensionPoint_Summary][workflowdata.CustomSvcRS]'
        })
    ], CustomSvcRS);
    exports.CustomSvcRS = CustomSvcRS;
});
define("sabre-tn-redapp-example-workflow-mod/common/ICustomXTPointService", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("sabre-tn-redapp-example-workflow-mod/common/CustomXTPointService", ["require", "exports", "sabre-ngv-app/app/services/impl/AbstractService", "sabre-ngv-app/cf", "sabre-tn-redapp-example-workflow-mod/models/CustomSvcRS"], function (require, exports, AbstractService_1, cf_1, CustomSvcRS_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CustomXTPointService = (function (_super) {
        __extends(CustomXTPointService, _super);
        function CustomXTPointService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CustomXTPointService.prototype.fetchServiceData = function (svcRQ) {
            return cf_1.cf(CustomXTPointService.FETCH_SERVICE_NAME)
                .addRequestDataObject(svcRQ)
                .setLocalPreference('silent', true)
                .setLocalPreference('capture', true)
                .setLocalPreference('uiBlocking', true)
                .retrieveData(CustomSvcRS_1.CustomSvcRS);
            // throw new Error("Method not implemented.");
        };
        return CustomXTPointService;
    }(AbstractService_1.AbstractService));
    CustomXTPointService.SERVICE_NAME = 'CustomXTPointService';
    CustomXTPointService.FETCH_SERVICE_NAME = 'NGV://REDAPP/SERVICE/COM.SABRE.TN.REDAPP.EXAMPLE.WORKFLOW.XTPOINTSERVICES.INTERFACES.ICUSTOMSVC:EXECUTE';
    exports.CustomXTPointService = CustomXTPointService;
});
define("sabre-tn-redapp-example-workflow-mod/views/lfsResults/LfsTilePopOver", ["require", "exports", "sabre-ngv-core/decorators/classes/view/Template", "sabre-ngv-app/app/AbstractView", "sabre-tn-redapp-example-workflow-mod/Context", "sabre-ngv-core/decorators/classes/view/CssClass", "sabre-tn-redapp-example-workflow-mod/common/CustomXTPointService", "sabre-tn-redapp-example-workflow-mod/models/CustomSvcRQ", "sabre-tn-redapp-example-workflow-mod/models/CustomSvcRQData"], function (require, exports, Template_2, AbstractView_2, Context_1, CssClass_4, CustomXTPointService_1, CustomSvcRQ_1, CustomSvcRQData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /*
    @Initial<AbstractViewOptions>({
        title: 'Brand Package',
        events: {
            'click .bf-select': 'selectColumn',
            'click .bf-column-title ::stop-event': 'selectColumn',
            'click .cp-passenger-row': 'updateActionButtons',
            'input input[name="cp-travel-date"]' : 'enableSell'
         }
    })*/
    var LfsTilePopOver = (function (_super) {
        __extends(LfsTilePopOver, _super);
        function LfsTilePopOver() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LfsTilePopOver.prototype.selfDrawerContextModelPropagated = function (availData) {
            this.getModel().set('availData', JSON.stringify(availData));
            this.getModel().set('ctSEG', true);
            this.getModel().set('ucList', { uc: [{ id: 'addOTH', desc: 'adds OTH segment to current PNR', ft: 'HOST, Refresh Trip Summmary' }, { id: 'openWeb', desc: 'Open WebKit View', ft: 'JXBrowser, OpenView' }] });
            this.render();
        };
        LfsTilePopOver.prototype.selfSomeAction = function () {
            var rq = new CustomSvcRQ_1.CustomSvcRQ();
            var actCode = this.$el.find('input[name=optionsUC]:checked').val();
            rq.actionCode = actCode;
            Context_1.getService(CustomXTPointService_1.CustomXTPointService).fetchServiceData(new CustomSvcRQData_1.CustomSvcRQData(rq)).done(this.afterSomeActionResponse.bind(this));
        };
        LfsTilePopOver.prototype.afterSomeActionResponse = function (dtaResponse) {
            this.getModel().set('availData', JSON.stringify(dtaResponse));
            this.render();
        };
        return LfsTilePopOver;
    }(AbstractView_2.AbstractView));
    LfsTilePopOver = __decorate([
        CssClass_4.CssClass('decisionsupport-widgetview'),
        Template_2.Template('sabre-tn-redapp-example-workflow-mod:Example')
    ], LfsTilePopOver);
    exports.LfsTilePopOver = LfsTilePopOver;
});
define("sabre-tn-redapp-example-workflow-mod/views/cmdHelperForm/State", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("sabre-tn-redapp-example-workflow-mod/views/cmdHelperForm/Action", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("sabre-tn-redapp-example-workflow-mod/views/cmdHelperForm/types", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name="sabre-tn-redapp-example-workflow-mod/views/cmdHelperForm/types" />
    exports.UPDATE = 'update';
    exports.CANCEL = 'cancel';
});
define("sabre-tn-redapp-example-workflow-mod/views/cmdHelperForm/reducers", ["require", "exports", "sabre-tn-redapp-example-workflow-mod/views/cmdHelperForm/types"], function (require, exports, types_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var INITIAL_STATE = {
        customerName: 'provide customer name',
        tripId: 'provide trip id'
    };
    /**
     * Return a configured root reducer.
     * See Redux docs for a detailed description of the reducers' composition.
     *
     * We do no composition here, just the simplest scenario.
     *
     * @param {State} state: current state
     * @param {Action} action: actio dispatched in React class
     * @returns {State} new state. Mind the immutability!!!!
     */
    exports.rootReducer = function (state, action) {
        if (state === void 0) { state = INITIAL_STATE; }
        var updateName = stateUpdater(state)(action.id);
        switch (action.type) {
            case types_1.UPDATE:
                return updateName(action.value);
            case types_1.CANCEL:
                return INITIAL_STATE;
            default:
                // note that we do not handle 'submit' action at all here,
                // it'll be passed further by Redux and handled by Saga middleware
                return state;
        }
    };
    /**
     * Curried function for partial application,
     * which is a very handy way of reconfiguring the context on the fly
     */
    var stateUpdater = function (state) {
        return function (key) {
            return function (value) {
                // keep data immutable with Object.assign, _.extend or just ES6 {...state}
                var newState = __assign({}, state);
                newState[key] = value;
                return newState;
            };
        };
    };
});
define("sabre-tn-redapp-example-workflow-mod/models/SearchFormRequest", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("sabre-tn-redapp-example-workflow-mod/common/Consts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name="sabre-tn-redapp-example-workflow-mod/common/Consts" />
    exports.TRIP_ID = 'tripId';
    exports.CUSTOMER_NAME = 'customerName';
});
define("sabre-tn-redapp-example-workflow-mod/models/SearchFormRequestData", ["require", "exports", "sabre-ngv-app/app/common/data/dto/request/RequestData", "sabre-tn-redapp-example-workflow-mod/common/Consts"], function (require, exports, RequestData_2, Consts_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SearchFormRequestData = (function (_super) {
        __extends(SearchFormRequestData, _super);
        function SearchFormRequestData(payload) {
            var _this = _super.call(this) || this;
            _this.payload = payload;
            return _this;
        }
        SearchFormRequestData.prototype.getRequestStructure = function () {
            return {
                'com_sabre_redapp_example3_web_form.SearchFormRqStruct': [{
                        'com_sabre_redapp_example3_web_form.tripId': this.payload[Consts_1.TRIP_ID],
                        'com_sabre_redapp_example3_web_form.customerName': this.payload[Consts_1.CUSTOMER_NAME]
                    }]
            };
        };
        return SearchFormRequestData;
    }(RequestData_2.RequestData));
    exports.SearchFormRequestData = SearchFormRequestData;
});
define("sabre-tn-redapp-example-workflow-mod/views/cmdHelperForm/sagas", ["require", "exports", "redux-saga", "sabre-tn-redapp-example-workflow-mod/Context", "sabre-tn-redapp-example-workflow-mod/models/CustomSvcRQData", "sabre-tn-redapp-example-workflow-mod/models/CustomSvcRQ"], function (require, exports, redux_saga_1, Context_2, CustomSvcRQData_2, CustomSvcRQ_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var takeEvery = redux_saga_1.effects.takeEvery, put = redux_saga_1.effects.put, call = redux_saga_1.effects.call, select = redux_saga_1.effects.select;
    /**
     * @link https://redux-saga.js.org/
     *
     * @param eventBus
     * @returns {any}
     */
    function rootSaga(eventBus) {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, [
                        submitFormSideEffectSaga(eventBus),
                        cancelFormSideEffectSaga(eventBus)
                    ]];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    exports.default = rootSaga;
    /**
     * When a 'submit' action happens, do a side effect: trigger an event on the passed EventBus
     */
    function submitFormSideEffectSaga(eventBus) {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, takeEvery(isSubmitAction, submitActionHandler, eventBus)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    /**
     * When a 'cancel' action happens, do a side effect: trigger an event on the passed EventBus
     */
    function cancelFormSideEffectSaga(eventBus) {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, takeEvery(isCancelAction, cancelActionHandler, eventBus)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    /**
     * Predicate used to filter the actions
     */
    function isSubmitAction(action) {
        return action.type === 'submit';
    }
    /**
     * Predicate used to filter the actions
     */
    function isCancelAction(action) {
        return action.type === 'cancel';
    }
    /**
     * Submit action handler
     */
    function submitActionHandler(eventBus, action) {
        var state, rq, commandFlow;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, select()];
                case 1:
                    state = _a.sent();
                    rq = new CustomSvcRQ_2.CustomSvcRQ();
                    rq.actionCode = "dbQuery";
                    rq.rqPayload = "";
                    commandFlow = Context_2.cf('NGV://REDAPP/SERVICE/COM.SABRE.TN.REDAPP.EXAMPLE.WORKFLOW.XTPOINTSERVICES.INTERFACES.ICUSTOMSVC:EXECUTE')
                        .addRequestDataObject(new CustomSvcRQData_2.CustomSvcRQData(rq))
                        .send();
                    //.addRequestDataObject(new SearchFormRequestData(state))
                    // clean and close form after submit
                    return [4 /*yield*/, put({ type: 'cancel' })];
                case 2:
                    //.addRequestDataObject(new SearchFormRequestData(state))
                    // clean and close form after submit
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    exports.submitActionHandler = submitActionHandler;
    /**
     * Trigger 'cancel' event
     */
    function cancelActionHandler(eventBus, action) {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, eventBus.trigger('close-form')];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    exports.cancelActionHandler = cancelActionHandler;
});
define("sabre-tn-redapp-example-workflow-mod/views/cmdHelperForm/Form", ["require", "exports", "react", "react-redux", "sabre-tn-redapp-example-workflow-mod/Context", "sabre-ngv-app/app/services/impl/I18nService"], function (require, exports, React, react_redux_1, Context_3, I18nService_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i18n = Context_3.getService(I18nService_1.I18nService);
    var t = i18n.getScopedTranslator('formplugin-sabre-sdk-sample-form/translations');
    var Component = (function (_super) {
        __extends(Component, _super);
        function Component() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Component.prototype.render = function () {
            return (React.createElement("div", { className: 'container-fluid' },
                React.createElement("div", { className: 'tab-pane active' },
                    React.createElement("form", { onSubmit: this.props.handleSubmit.bind(this), ref: 'form' },
                        React.createElement("div", { className: "form-group" },
                            React.createElement("label", { htmlFor: "exampleInputEmail1" }, "Email address"),
                            React.createElement("input", { type: "email", className: "form-control", id: "exampleInputEmail1", placeholder: "Email" })),
                        React.createElement("div", { className: 'tab-action-buttons' },
                            React.createElement("div", { className: 'action-buttons' },
                                React.createElement("button", { className: 'cancel-button js_form-cancel btn btn-outline btn-success', onClick: this.props.handleCancel }, "Cancel"),
                                React.createElement("button", { type: 'submit', className: 'search-button js_form-submit btn btn-success' }, "Submit")))))));
        };
        return Component;
    }(React.Component));
    exports.Component = Component;
    /**
     * Simple scenario, no fancy mapping here, our state is 1:1 with the form props
     */
    var mapStateToProps = function (state) { return state; };
    /**
     * Remember, no 'this' in functions defined here!
     * Context is re-bound by Redux#connect
     */
    var mapDispatchToProps = function (dispatch, ownProp) { return ({
        // Read react d.ts for all available event types, there're many of them
        handleChange: function (event) {
            return dispatch({ type: 'update', id: event.target.id, value: event.target.value });
        },
        // NOTE: Submit sends an Action which will trigger the saga.
        // Saga will then fire a side effect: an event on the parent event bus
        handleSubmit: function (event) {
            event.preventDefault();
            return dispatch({ type: 'submit', id: '' });
        },
        handleCancel: function (event) {
            event.preventDefault();
            return dispatch({ type: 'cancel', id: '' });
        }
    }); };
    /**
     * connect component's state with Redux
     */
    exports.Form = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Component);
});
define("sabre-tn-redapp-example-workflow-mod/views/cmdHelperForm/CmdHelperButton", ["require", "exports", "sabre-ngv-core/decorators/classes/view/CssClass", "sabre-ngv-core/decorators/classes/Initial", "sabre-ngv-UIComponents/commandHelperButton/components/AbstractBootstrapPopoverButton", "sabre-ngv-UIComponents/baseComponent/components/StatefulComponentWithSaga", "sabre-tn-redapp-example-workflow-mod/views/cmdHelperForm/reducers", "sabre-tn-redapp-example-workflow-mod/views/cmdHelperForm/sagas", "sabre-tn-redapp-example-workflow-mod/views/cmdHelperForm/Form"], function (require, exports, CssClass_5, Initial_4, AbstractBootstrapPopoverButton_1, StatefulComponentWithSaga_1, reducers_1, sagas_1, Form_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CmdHelperButton = (function (_super) {
        __extends(CmdHelperButton, _super);
        function CmdHelperButton() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.content = new StatefulComponentWithSaga_1.default({
                componentName: 'SamplePopover',
                rootReducer: reducers_1.rootReducer,
                rootSaga: sagas_1.default,
                rootReactComponent: Form_1.Form,
                parentEventBus: _this.eventBus
            });
            return _this;
        }
        CmdHelperButton.prototype.getContent = function () {
            return this.content;
        };
        /**
         * Initialize Button
         */
        CmdHelperButton.prototype.initialize = function (options) {
            _super.prototype.initialize.call(this, options);
            this.registerContentEvents();
        };
        /**
         * An example event handler to demonstrate proper side effect handling in React layer.
         *
         * We implement here child(React) => parent(app) communication pattern
         * with Redux-Saga middleware triggering an event on parent's event bus
         * when given Redux Action gets dispatched.
         */
        CmdHelperButton.prototype.registerContentEvents = function () {
            this.eventBus.on('close-form', this.handleCloseEvent.bind(this));
        };
        CmdHelperButton.prototype.handleCloseEvent = function () {
            this.content.unmount();
            this.togglePopover();
            this.content.dispose();
        };
        return CmdHelperButton;
    }(AbstractBootstrapPopoverButton_1.default));
    CmdHelperButton = __decorate([
        CssClass_5.CssClass('com_sabre_tn_redapp_example_workflow btn btn-default'),
        Initial_4.Initial({
            caption: '<i class="fa fa-search"></i> <span class="hidden-xs dn-x-hidden-0-8">DB Query</span>',
            type: 'default'
        })
    ], CmdHelperButton);
    exports.default = CmdHelperButton;
});
define("sabre-tn-redapp-example-workflow-mod/models/ManualExtensionPointEventData", ["require", "exports", "sabre-ngv-app/app/common/data/dto/EnhancedResponseData", "sabre-ngv-core/decorators/classes/Initial"], function (require, exports, EnhancedResponseData_2, Initial_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ManualExtensionPointEventData = (function (_super) {
        __extends(ManualExtensionPointEventData, _super);
        function ManualExtensionPointEventData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ManualExtensionPointEventData.prototype.getCF = function () {
            return this.getCommandFlow();
        };
        ManualExtensionPointEventData.prototype.getEventId = function () {
            return this.fromRoot().get('[eventId]').value();
        };
        return ManualExtensionPointEventData;
    }(EnhancedResponseData_2.EnhancedResponseData));
    ManualExtensionPointEventData = __decorate([
        Initial_5.Initial({
            dataRoot: '[d.Structure][o.ExtensionPoint_Summary][workflowdata.ManualExtensionPointEventData]'
        }),
        Initial_5.Initial({
            autoPropagateData: true,
            nonLazyMembers: [
                'eventId',
                'message',
                'dialogType',
                'dialogResult'
            ]
        })
    ], ManualExtensionPointEventData);
    exports.ManualExtensionPointEventData = ManualExtensionPointEventData;
});
define("sabre-tn-redapp-example-workflow-mod/views/modalDialog/ExtPointManualView", ["require", "exports", "sabre-ngv-app/app/AbstractView", "sabre-tn-redapp-example-workflow-mod/Context", "sabre-ngv-app/app/services/impl/I18nService", "sabre-ngv-core/decorators/classes/view/CssClass", "sabre-ngv-core/decorators/classes/Initial", "sabre-ngv-core/decorators/classes/view/Template", "sabre-ngv-core/decorators/methods/Bound", "sabre-tn-redapp-example-workflow-mod/models/CustomSvcRQData", "sabre-tn-redapp-example-workflow-mod/models/CustomSvcRQ"], function (require, exports, AbstractView_3, Context_4, I18nService_2, CssClass_6, Initial_6, Template_3, Bound_1, CustomSvcRQData_3, CustomSvcRQ_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i18nService = Context_4.getService(I18nService_2.I18nService);
    var ExtPointManualView = (function (_super) {
        __extends(ExtPointManualView, _super);
        function ExtPointManualView(options) {
            var _this = _super.call(this, options) || this;
            console.log("aqui");
            console.log(_this, _this.getModel());
            var evtId = _this.getModel().getEventId().toString();
            if (evtId == "BeforeShoppingGetClientID") {
                _this.getModel().set('getClientID', true);
                _this.on('continue-action', _this._onSaveAction);
                _this.on('skip-action', _this._onSkipAction);
                _this.on('cancel-action', _this._onCancelAction);
            }
            else {
                _this.on('continue-action', _this._onContinueAction);
                _this.on('skip-action', _this._onSkipAction);
                _this.on('cancel-action', _this._onCancelAction);
            }
            return _this;
        }
        ExtPointManualView.prototype._onCancelAction = function () {
            var model = this.getModel();
            var commandFlow = model.getCF();
            commandFlow.getFlowControl().setFlowControlAction('CANCEL');
            commandFlow.send();
            this.triggerOnEventBus('close-modal');
        };
        ExtPointManualView.prototype._onSkipAction = function () {
            var model = this.getModel();
            var commandFlow = model.getCF();
            commandFlow.getFlowControl().setFlowControlAction('SKIP');
            commandFlow.send();
            this.triggerOnEventBus('close-modal');
        };
        ExtPointManualView.prototype._onContinueAction = function () {
            var model = this.getModel();
            var commandFlow = model.getCF();
            commandFlow.getFlowControl().setFlowControlAction('CONTINUE');
            commandFlow.send();
            this.triggerOnEventBus('close-modal');
        };
        ExtPointManualView.prototype._onCloseAction = function () {
            this.triggerOnEventBus('close-modal');
        };
        ExtPointManualView.prototype._onSaveAction = function () {
            var corpId = this.$el.find('.txt-corp-id').val();
            var actCode = this.$el.find('.txt-account-code').val();
            var model = this.getModel();
            var rq = new CustomSvcRQ_3.CustomSvcRQ();
            rq.actionCode = "addClientID";
            rq.rqPayload = corpId + "#" + actCode;
            var commandFlow = model.getCF(); // .addRequestDataObject(new AirlineRequestData(iataCode));
            commandFlow.addRequestDataObject(new CustomSvcRQData_3.CustomSvcRQData(rq));
            commandFlow.send();
            this.triggerOnEventBus('close-modal');
        };
        return ExtPointManualView;
    }(AbstractView_3.AbstractView));
    __decorate([
        Bound_1.Bound,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ExtPointManualView.prototype, "_onCancelAction", null);
    __decorate([
        Bound_1.Bound,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ExtPointManualView.prototype, "_onSkipAction", null);
    __decorate([
        Bound_1.Bound,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ExtPointManualView.prototype, "_onContinueAction", null);
    __decorate([
        Bound_1.Bound,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ExtPointManualView.prototype, "_onCloseAction", null);
    __decorate([
        Bound_1.Bound,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ExtPointManualView.prototype, "_onSaveAction", null);
    ExtPointManualView = __decorate([
        CssClass_6.CssClass('profile-details-view'),
        Template_3.Template('sabre-tn-redapp-example-workflow-mod:ModalContent'),
        Initial_6.Initial({
            templateOptions: {
                helpers: {
                    _t: i18nService.getScopedHelper('com_sabre_sdk_sample_workflow/translations')
                }
            }
        }),
        __metadata("design:paramtypes", [Object])
    ], ExtPointManualView);
    exports.ExtPointManualView = ExtPointManualView;
});
define("sabre-tn-redapp-example-workflow-mod/common/WorkFlowListener", ["require", "exports", "sabre-ngv-app/app/AbstractObject", "sabre-ngv-core/services/LayerService", "sabre-tn-redapp-example-workflow-mod/Context", "sabre-tn-redapp-example-workflow-mod/models/ManualExtensionPointEventData", "sabre-tn-redapp-example-workflow-mod/views/modalDialog/ExtPointManualView"], function (require, exports, AbstractObject_1, LayerService_1, Context_5, ManualExtensionPointEventData_1, ExtPointManualView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WorkFlowListener = (function (_super) {
        __extends(WorkFlowListener, _super);
        function WorkFlowListener() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WorkFlowListener.prototype.registerListener = function () {
            this.listenToEventBus('data-received', this.dataReceivedHandler);
        };
        WorkFlowListener.prototype.dataReceivedHandler = function (data, cf) {
            if (data instanceof ManualExtensionPointEventData_1.ManualExtensionPointEventData) {
                if (data.getEventId().toString() == "BypassManual") {
                    cf.getFlowControl().setFlowControlAction('SKIP');
                    cf.send();
                }
                else {
                    Context_5.getService(LayerService_1.LayerService).showInModal(new ExtPointManualView_1.ExtPointManualView({ model: data }), {
                        title: data.getEventId().toString(),
                        actions: [{
                                caption: 'Skip',
                                actionName: 'skip',
                                type: 'secondary',
                                cssClass: 'btn'
                            }, {
                                caption: 'Continue',
                                actionName: 'continue',
                                type: 'success',
                                cssClass: 'btn btn-success'
                            }, {
                                caption: 'Cancel',
                                actionName: 'cancel',
                                type: 'secondary',
                                cssClass: 'btn'
                            }]
                    }), {
                        display: 'areaView'
                    };
                }
            }
        };
        return WorkFlowListener;
    }(AbstractObject_1.AbstractObject));
    exports.WorkFlowListener = WorkFlowListener;
});
define("sabre-tn-redapp-example-workflow-mod/models/SampleResult", ["require", "exports", "sabre-ngv-app/app/AbstractModel", "sabre-ngv-core/decorators/classes/Initial"], function (require, exports, AbstractModel_2, Initial_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SampleResult = (function (_super) {
        __extends(SampleResult, _super);
        function SampleResult(result) {
            var _this = _super.call(this, result) || this;
            _this.result = result;
            return _this;
        }
        ;
        SampleResult.prototype.getField1 = function () {
            return this.get('field1');
        };
        SampleResult.prototype.getField2 = function () {
            return this.get('field2');
        };
        return SampleResult;
    }(AbstractModel_2.AbstractModel));
    SampleResult = __decorate([
        Initial_7.Initial({
            autoPropagateData: true,
            nonLazyMembers: [
                'field1',
                'field2'
            ]
        }),
        __metadata("design:paramtypes", [Object])
    ], SampleResult);
    exports.SampleResult = SampleResult;
});
define("sabre-tn-redapp-example-workflow-mod/views/renderRS/RSActionPopup", ["require", "exports", "sabre-ngv-app/app/AbstractView", "sabre-tn-redapp-example-workflow-mod/Context", "sabre-ngv-app/app/services/impl/I18nService", "sabre-ngv-core/decorators/classes/view/CssClass", "sabre-ngv-core/decorators/classes/Initial", "sabre-ngv-core/decorators/classes/view/Template", "sabre-ngv-core/decorators/methods/Bound", "sabre-tn-redapp-example-workflow-mod/common/CustomXTPointService", "sabre-tn-redapp-example-workflow-mod/models/CustomSvcRQ", "sabre-tn-redapp-example-workflow-mod/models/CustomSvcRQData"], function (require, exports, AbstractView_4, Context_6, I18nService_3, CssClass_7, Initial_8, Template_4, Bound_2, CustomXTPointService_2, CustomSvcRQ_4, CustomSvcRQData_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i18nService = Context_6.getService(I18nService_3.I18nService);
    var RSActionPopup = (function (_super) {
        __extends(RSActionPopup, _super);
        function RSActionPopup(options) {
            var _this = _super.call(this, options) || this;
            _this.on('continue-action', _this._onContinueAction);
            _this.on('cancel-action', _this._onCancelAction);
            return _this;
        }
        RSActionPopup.prototype._onCancelAction = function () {
            this.triggerOnEventBus('close-modal');
        };
        RSActionPopup.prototype._onSkipAction = function () {
            this.triggerOnEventBus('close-modal');
        };
        RSActionPopup.prototype._onContinueAction = function () {
            var rq = new CustomSvcRQ_4.CustomSvcRQ();
            var name = this.$el.find('.paxname').val();
            var surname = this.$el.find('.paxsurname').val();
            var triptype = this.$el.find('.traveltype').val();
            // this.getModel().getField1();
            rq.actionCode = "copyname";
            rq.rqPayload = name + "/" + surname + "#" + triptype;
            Context_6.getService(CustomXTPointService_2.CustomXTPointService).fetchServiceData(new CustomSvcRQData_4.CustomSvcRQData(rq)).done(this.afterSomeActionResponse.bind(this));
        };
        RSActionPopup.prototype.afterSomeActionResponse = function () {
            this.triggerOnEventBus('close-modal');
        };
        RSActionPopup.prototype._onCloseAction = function () {
            this.triggerOnEventBus('close-modal');
        };
        RSActionPopup.prototype._onSaveAction = function () {
            this.triggerOnEventBus('close-modal');
        };
        return RSActionPopup;
    }(AbstractView_4.AbstractView));
    __decorate([
        Bound_2.Bound,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], RSActionPopup.prototype, "_onCancelAction", null);
    __decorate([
        Bound_2.Bound,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], RSActionPopup.prototype, "_onSkipAction", null);
    __decorate([
        Bound_2.Bound,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], RSActionPopup.prototype, "_onContinueAction", null);
    __decorate([
        Bound_2.Bound,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], RSActionPopup.prototype, "_onCloseAction", null);
    __decorate([
        Bound_2.Bound,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], RSActionPopup.prototype, "_onSaveAction", null);
    RSActionPopup = __decorate([
        CssClass_7.CssClass('profile-details-view'),
        Template_4.Template('sabre-tn-redapp-example-workflow-mod:RSActionPopupContent'),
        Initial_8.Initial({
            templateOptions: {
                helpers: {
                    _t: i18nService.getScopedHelper('com_sabre_sdk_sample_workflow/translations')
                }
            }
        }),
        __metadata("design:paramtypes", [Object])
    ], RSActionPopup);
    exports.RSActionPopup = RSActionPopup;
});
///<amd-module name="sabre-tn-redapp-example-workflow-mod/views/renderRS/RSResultPanel" />
define("sabre-tn-redapp-example-workflow-mod/views/renderRS/RSResultPanel", ["require", "exports", "sabre-ngv-app/app/widgets/drawer/views/Drawer", "sabre-ngv-core/decorators/classes/Initial", "sabre-tn-redapp-example-workflow-mod/Context", "sabre-tn-redapp-example-workflow-mod/models/CustomSvcRQ", "sabre-tn-redapp-example-workflow-mod/models/CustomSvcRQData", "sabre-tn-redapp-example-workflow-mod/common/CustomXTPointService", "sabre-ngv-core/services/LayerService", "sabre-tn-redapp-example-workflow-mod/views/renderRS/RSActionPopup"], function (require, exports, Drawer_1, Initial_9, Context_7, CustomSvcRQ_5, CustomSvcRQData_5, CustomXTPointService_3, LayerService_2, RSActionPopup_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RSResultPanel = (function (_super) {
        __extends(RSResultPanel, _super);
        function RSResultPanel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RSResultPanel.prototype.initialize = function (options) {
            _super.prototype.initialize.call(this, options);
        };
        RSResultPanel.prototype.selfCustomAction = function () {
            console.log('you clicked some action');
            var rq = new CustomSvcRQ_5.CustomSvcRQ();
            var actCode = "resultButton";
            rq.actionCode = actCode;
            Context_7.getService(CustomXTPointService_3.CustomXTPointService).fetchServiceData(new CustomSvcRQData_5.CustomSvcRQData(rq)).done(this.afterSomeActionResponse.bind(this));
        };
        RSResultPanel.prototype.selfShowPopupAction = function () {
            console.log('you clicked other hot action');
            Context_7.getService(LayerService_2.LayerService).showInModal(new RSActionPopup_1.RSActionPopup({ model: this.getModel() }), {
                title: 'Detailed View',
                actions: [{
                        caption: 'Copy to PNR',
                        actionName: 'continue',
                        type: 'success',
                        cssClass: 'btn btn-success'
                    }, {
                        caption: 'Cancel',
                        actionName: 'cancel',
                        type: 'secondary',
                        cssClass: 'btn'
                    }]
            }), {
                display: 'areaView'
            };
        };
        RSResultPanel.prototype.afterSomeActionResponse = function (dtaResponse) {
            // this.getModel().set('availData', JSON.stringify(dtaResponse));
            // this.render();
        };
        return RSResultPanel;
    }(Drawer_1.Drawer));
    RSResultPanel = __decorate([
        Initial_9.Initial({
            drawerGroups: ['search-result']
        })
    ], RSResultPanel);
    exports.RSResultPanel = RSResultPanel;
});
define("sabre-tn-redapp-example-workflow-mod/views/renderRS/RSResultRow", ["require", "exports", "sabre-ngv-app/app/AbstractView", "sabre-ngv-core/decorators/classes/view/Template", "sabre-ngv-core/decorators/classes/view/CssClass", "sabre-ngv-app/app/widgets/drawer/mixins/WithDrawer", "sabre-ngv-core/decorators/classes/Initial", "sabre-ngv-core/decorators/classes/Mixin", "sabre-tn-redapp-example-workflow-mod/views/renderRS/RSResultPanel"], function (require, exports, AbstractView_5, Template_5, CssClass_8, WithDrawer_1, Initial_10, Mixin_1, RSResultPanel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RSResultRow = (function (_super) {
        __extends(RSResultRow, _super);
        function RSResultRow() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return RSResultRow;
    }(AbstractView_5.AbstractView));
    RSResultRow = __decorate([
        Mixin_1.Mixin(WithDrawer_1.WithDrawer),
        Initial_10.Initial({
            drawerDescriptor: RSResultPanel_1.RSResultPanel
        }),
        Template_5.Template('sabre-tn-redapp-example-workflow-mod:RSResultRow'),
        CssClass_8.CssClass('flight-row flight-novice-row')
    ], RSResultRow);
    exports.RSResultRow = RSResultRow;
});
define("sabre-tn-redapp-example-workflow-mod/models/SampleResults", ["require", "exports", "sabre-ngv-app/app/common/data/dto/EnhancedResponseData", "sabre-ngv-core/decorators/classes/Initial", "sabre-tn-redapp-example-workflow-mod/models/SampleResult"], function (require, exports, EnhancedResponseData_3, Initial_11, SampleResult_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SampleResults = (function (_super) {
        __extends(SampleResults, _super);
        function SampleResults() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SampleResults.prototype.getSampleResults = function () {
            return this.fromRoot().get('[sampleResult]').value().map(function (item) {
                return new SampleResult_1.SampleResult(item);
            });
        };
        return SampleResults;
    }(EnhancedResponseData_3.EnhancedResponseData));
    SampleResults = __decorate([
        Initial_11.Initial({
            dataRoot: '[d.Structure][o.ExtensionPoint_Summary][workflowdata.RSResultSet][0]'
        }),
        Initial_11.Initial({
            autoPropagateData: true,
            nonLazyMembers: [
                'sampleResults'
            ]
        })
    ], SampleResults);
    exports.SampleResults = SampleResults;
});
define("sabre-tn-redapp-example-workflow-mod/views/renderRS/REResultArea", ["require", "exports", "sabre-ngv-app/app/widgets/container/ListView", "sabre-ngv-core/decorators/classes/Initial", "sabre-ngv-core/decorators/classes/Mixin", "sabre-ngv-app/app/common/mixins/WithHighlightableChildren", "sabre-ngv-core/decorators/classes/view/Template", "sabre-ngv-core/decorators/classes/view/CssClass", "sabre-tn-redapp-example-workflow-mod/views/renderRS/RSResultRow"], function (require, exports, ListView_1, Initial_12, Mixin_2, WithHighlightableChildren_1, Template_6, CssClass_9, RSResultRow_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RSResultArea = (function (_super) {
        __extends(RSResultArea, _super);
        function RSResultArea(options) {
            return _super.call(this, options) || this;
        }
        return RSResultArea;
    }(ListView_1.ListView));
    RSResultArea = __decorate([
        Mixin_2.Mixin(WithHighlightableChildren_1.WithHighlightableChildren),
        CssClass_9.CssClass('novice-output-mode-widget'),
        Template_6.Template('sabre-tn-redapp-example-workflow-mod:RSResultArea'),
        Initial_12.Initial({
            itemsProperty: 'model.sampleResults',
            itemDescriptor: RSResultRow_1.RSResultRow
        }),
        __metadata("design:paramtypes", [Object])
    ], RSResultArea);
    exports.RSResultArea = RSResultArea;
});
define("sabre-tn-redapp-example-workflow-mod/views/customFlows/HelperFlowsView", ["require", "exports", "sabre-ngv-app/app/AbstractView", "sabre-ngv-core/decorators/classes/view/Template", "sabre-ngv-core/decorators/classes/Initial", "sabre-ngv-app/app/services/impl/I18nService", "sabre-tn-redapp-example-workflow-mod/Context", "sabre-ngv-core/decorators/classes/view/CssClass", "sabre-tn-redapp-example-workflow-mod/models/CustomSvcRQData", "sabre-tn-redapp-example-workflow-mod/models/CustomSvcRQ"], function (require, exports, AbstractView_6, Template_7, Initial_13, I18nService_4, Context_8, CssClass_10, CustomSvcRQData_6, CustomSvcRQ_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i18nService = Context_8.getService(I18nService_4.I18nService);
    var HelperFlowsView = (function (_super) {
        __extends(HelperFlowsView, _super);
        function HelperFlowsView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HelperFlowsView.prototype.initialize = function (options) {
            _super.prototype.initialize.call(this, options);
            // this.getData();
        };
        HelperFlowsView.prototype.selfDoFlowAction = function () {
            var _this = this;
            console.log("aka");
            console.log(this.$('#selFlow').val());
            var rq = new CustomSvcRQ_6.CustomSvcRQ();
            rq.actionCode = "doTask";
            rq.rqPayload = this.$('#selFlow').val();
            new Promise(function (resolve) {
                var getFlows = Context_8.cf('NGV://REDAPP/SERVICE/COM.SABRE.TN.REDAPP.EXAMPLE.WORKFLOW.XTPOINTSERVICES.INTERFACES.ICUSTOMSVC:EXECUTE')
                    .addRequestDataObject(new CustomSvcRQData_6.CustomSvcRQData(rq))
                    .setLocalPreference('silentRequest', true)
                    .send();
                getFlows.done(function (mcf) {
                    _this.triggerOnEventBus('close-modal');
                });
            });
        };
        HelperFlowsView.prototype.getData = function () {
            var _this = this;
            var rq = new CustomSvcRQ_6.CustomSvcRQ();
            rq.actionCode = "getFlows";
            new Promise(function (resolve) {
                var getFlows = Context_8.cf('NGV://REDAPP/SERVICE/COM.SABRE.TN.REDAPP.EXAMPLE.WORKFLOW.XTPOINTSERVICES.INTERFACES.ICUSTOMSVC:EXECUTE')
                    .addRequestDataObject(new CustomSvcRQData_6.CustomSvcRQData(rq))
                    .send();
                getFlows.done(function (mcf) {
                    console.log(mcf.getDataStructs());
                    console.log(mcf.getDataObjects());
                    _this.render();
                });
            });
        };
        return HelperFlowsView;
    }(AbstractView_6.AbstractView));
    HelperFlowsView = __decorate([
        Initial_13.Initial({
            templateOptions: {
                helpers: {
                    _t: i18nService.getScopedHelper('sabre-ngv-wizard/translations')
                }
            }
        }),
        Template_7.Template('sabre-tn-redapp-example-workflow-mod:HelperFlowsView'),
        CssClass_10.CssClass('profile-details-view')
    ], HelperFlowsView);
    exports.HelperFlowsView = HelperFlowsView;
});
define("sabre-tn-redapp-example-workflow-mod/views/customFlows/MessageView", ["require", "exports", "sabre-ngv-app/app/AbstractView", "sabre-ngv-core/decorators/classes/view/Template", "sabre-ngv-core/decorators/classes/Initial", "sabre-ngv-app/app/services/impl/I18nService", "sabre-tn-redapp-example-workflow-mod/Context", "sabre-ngv-core/decorators/classes/view/CssClass"], function (require, exports, AbstractView_7, Template_8, Initial_14, I18nService_5, Context_9, CssClass_11) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i18nService = Context_9.getService(I18nService_5.I18nService);
    var MessageView = (function (_super) {
        __extends(MessageView, _super);
        function MessageView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MessageView.prototype.initialize = function (options) {
            _super.prototype.initialize.call(this, options);
        };
        return MessageView;
    }(AbstractView_7.AbstractView));
    MessageView = __decorate([
        Initial_14.Initial({
            templateOptions: {
                helpers: {
                    _t: i18nService.getScopedHelper('sabre-ngv-wizard/translations')
                }
            }
        }),
        Template_8.Template('sabre-tn-redapp-example-workflow-mod:MessageView'),
        CssClass_11.CssClass('profile-details-view')
    ], MessageView);
    exports.MessageView = MessageView;
});
define("sabre-tn-redapp-example-workflow-mod/views/customFlows/QCCheckView", ["require", "exports", "sabre-ngv-app/app/AbstractView", "sabre-ngv-core/decorators/classes/view/Template", "sabre-ngv-core/decorators/classes/Initial", "sabre-ngv-app/app/services/impl/I18nService", "sabre-tn-redapp-example-workflow-mod/Context", "sabre-tn-redapp-example-workflow-mod/Context", "sabre-ngv-core/decorators/classes/view/CssClass", "sabre-ngv-core/services/LayerService", "sabre-tn-redapp-example-workflow-mod/views/customFlows/MessageView"], function (require, exports, AbstractView_8, Template_9, Initial_15, I18nService_6, Context_10, Context_11, CssClass_12, LayerService_3, MessageView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i18nService = Context_10.getService(I18nService_6.I18nService);
    var QCCheckView = (function (_super) {
        __extends(QCCheckView, _super);
        function QCCheckView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        QCCheckView.prototype.initialize = function (options) {
            _super.prototype.initialize.call(this, options);
        };
        QCCheckView.prototype.selfSubmitPnrAction = function (resolve) {
            var _this = this;
            var totChk = 0;
            var size = this.$('.ack-field').length;
            this.$('.ack-field').each(function (idx, fldFound) {
                var fld = $(fldFound);
                var cmd = fld.val();
                var chk = fld.prop('checked');
                var dis = fld.prop('disabled');
                console.log(idx, fld, cmd, chk, dis);
                if (!dis && chk) {
                    Context_11.cf(cmd).send().done(function (cfResponse) {
                        if (idx == 0) {
                            if (!_this.checkIfUserLogged(cfResponse)) {
                                resolve();
                            }
                        }
                    }).fail(function () {
                        _this.handleFailure('PNR');
                    });
                }
                if (chk) {
                    totChk++;
                }
            });
            if (totChk >= size) {
                Context_10.getService(LayerService_3.LayerService).showInModal(new MessageView_1.MessageView({
                    model: { message: "QC Check complete" }
                }), { title: "QC" }, { display: 'areaView' });
            }
            else {
                this.triggerOnEventBus('close-modal');
            }
        };
        QCCheckView.prototype.checkIfUserLogged = function (cfResponse) {
            var responseText = cfResponse.getDataStructs()[0]['d.Screen']['d.Text'];
            if (responseText.includes('SIGN IN') || responseText.includes('PROCESSING ERROR DETECTED - L1004')) {
                Context_10.getService(LayerService_3.LayerService).showInModal(new MessageView_1.MessageView({
                    model: { message: "Command failed, not signed in" }
                }), { title: "PNR Status" }, { display: 'areaView' });
                return false;
            }
            return true;
        };
        QCCheckView.prototype.handleFailure = function (segment) {
            Context_10.getService(LayerService_3.LayerService).showInModal(new MessageView_1.MessageView({
                model: { message: segment + " check failed" }
            }), { title: "PNR Check" }, { display: 'areaView' });
        };
        return QCCheckView;
    }(AbstractView_8.AbstractView));
    QCCheckView = __decorate([
        Initial_15.Initial({
            templateOptions: {
                helpers: {
                    _t: i18nService.getScopedHelper('customworkflow-sabre-sdk-sample/translations')
                }
            }
        }),
        Template_9.Template('sabre-tn-redapp-example-workflow-mod:QCCheckView'),
        CssClass_12.CssClass('profile-details-view')
    ], QCCheckView);
    exports.QCCheckView = QCCheckView;
});
define("sabre-tn-redapp-example-workflow-mod/common/CQHint", ["require", "exports", "sabre-tn-redapp-example-workflow-mod/Context", "sabre-ngv-core/services/LayerService", "sabre-tn-redapp-example-workflow-mod/views/customFlows/QCCheckView", "sabre-tn-redapp-example-workflow-mod/models/CustomSvcRQ", "sabre-tn-redapp-example-workflow-mod/models/CustomSvcRQData", "sabre-tn-redapp-example-workflow-mod/common/CustomXTPointService"], function (require, exports, Context_12, LayerService_4, QCCheckView_1, CustomSvcRQ_7, CustomSvcRQData_7, CustomXTPointService_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function hintACTCODE() {
        var rq = new CustomSvcRQ_7.CustomSvcRQ();
        rq.actionCode = "getFlows";
        var qcOptions = {
            title: 'Quality control tracker',
            actions: [{
                    className: 'app.common.views.Button',
                    caption: 'Cancel',
                    actionName: 'cancel',
                    type: 'secondary'
                }, {
                    className: 'app.common.views.Button',
                    caption: 'Submit',
                    actionName: 'submit-pnr',
                    type: 'secondary'
                }]
        };
        //let tenDaysAheadFlight = '1' + datesService.getNow().add(10, 'days').format('DDMMM').toUpperCase() + 'LGWKRK';
        Context_12.getService(CustomXTPointService_4.CustomXTPointService).fetchServiceData(new CustomSvcRQData_7.CustomSvcRQData(rq)).done(function (cfResponse) {
            console.log('aqui');
            console.log(cfResponse);
            console.log(cfResponse.rsPayload);
            console.log(cfResponse.getActionCode());
            console.log(cfResponse.getRsPayload());
            console.log(JSON.stringify(cfResponse));
            var rsDta = JSON.parse(cfResponse.getRsPayload().toString());
            //[{"id":"1","label":"label of flow","description":"description of policy","command":"51"},{"id":"2","label":"received from","description":"description of policy","command":"6MYSELF"}];
            //rsDta = cfResponse.getDataStructs()['d.Structure']['o.ExtensionPoint_Summary'];
            console.log(rsDta);
            //console.log(cfResponse.getDataStructs());
            Context_12.getService(LayerService_4.LayerService).showInModal(new QCCheckView_1.QCCheckView({
                model: { flows: rsDta }
            }), qcOptions, { display: 'areaView' });
        });
    }
    exports.hintACTCODE = hintACTCODE;
});
define("sabre-tn-redapp-example-workflow-mod/views/customFlows/ShellPnrView", ["require", "exports", "sabre-ngv-app/app/AbstractView", "sabre-ngv-core/decorators/classes/view/Template", "sabre-ngv-core/decorators/classes/Initial", "sabre-ngv-app/app/services/impl/I18nService", "sabre-tn-redapp-example-workflow-mod/Context", "sabre-tn-redapp-example-workflow-mod/Context", "sabre-ngv-core/decorators/classes/view/CssClass", "sabre-ngv-core/services/LayerService", "sabre-tn-redapp-example-workflow-mod/views/customFlows/MessageView"], function (require, exports, AbstractView_9, Template_10, Initial_16, I18nService_7, Context_13, Context_14, CssClass_13, LayerService_5, MessageView_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i18nService = Context_13.getService(I18nService_7.I18nService);
    var ShellPnrView = (function (_super) {
        __extends(ShellPnrView, _super);
        function ShellPnrView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ShellPnrView.prototype.initialize = function (options) {
            _super.prototype.initialize.call(this, options);
        };
        ShellPnrView.prototype.selfSubmitPnrAction = function (resolve) {
            var _this = this;
            new Promise(function () {
                _this.triggerOnEventBus('close-modal');
                var flight = _this.$('.flight-field').find('.flight-field-cl').val();
                var ticket = _this.$('.ticket-field').find('.ticket-field-cl').val();
                var name = _this.$('.name-field').find('.name-field-cl').val();
                var agentInfo = _this.$('.agentinfo-field').find('.agentinfo-field-cl').val();
                var phone = _this.$('.phone-field').find('.phone-field-cl').val();
                var taw = _this.$('.taw-field').find('.taw-field-cl').val();
                Context_14.cf("" + flight).send().done(function (cfResponse) {
                    if (!_this.checkIfUserLogged(cfResponse)) {
                        resolve();
                    }
                    Context_14.cf("" + ticket).send().done(function () {
                        Context_14.cf("" + name).send().done(function () {
                            Context_14.cf("" + agentInfo).send().done(function () {
                                Context_14.cf("" + phone).send().done(function () {
                                    Context_14.cf("" + taw).send().done(function () {
                                        Context_14.cf('WP').send().done(function () {
                                            Context_14.cf('PQ').send().done(function () {
                                                Context_13.getService(LayerService_5.LayerService).showInModal(new MessageView_2.MessageView({
                                                    model: { message: "PNR created" }
                                                }), { title: "PNR Status" }, { display: 'areaView' });
                                            }).fail(function () {
                                                _this.handleFailure('PQ');
                                            });
                                        }).fail(function () {
                                            _this.handleFailure('WP');
                                        });
                                    }).fail(function () {
                                        _this.handleFailure('TAW');
                                    });
                                }).fail(function () {
                                    _this.handleFailure('Phone');
                                });
                            }).fail(function () {
                                _this.handleFailure('agentInfo');
                            });
                        }).fail(function () {
                            _this.handleFailure('Name');
                        });
                    }).fail(function () {
                        _this.handleFailure('Ticket');
                    });
                }).fail(function () {
                    _this.handleFailure('PNR');
                });
            });
        };
        ShellPnrView.prototype.checkIfUserLogged = function (cfResponse) {
            var responseText = cfResponse.getDataStructs()[0]['d.Screen']['d.Text'];
            if (responseText.includes('SIGN IN') || responseText.includes('PROCESSING ERROR DETECTED - L1004')) {
                Context_13.getService(LayerService_5.LayerService).showInModal(new MessageView_2.MessageView({
                    model: { message: "Command failed, not signed in" }
                }), { title: "PNR Status" }, { display: 'areaView' });
                return false;
            }
            return true;
        };
        ShellPnrView.prototype.handleFailure = function (segment) {
            Context_13.getService(LayerService_5.LayerService).showInModal(new MessageView_2.MessageView({
                model: { message: segment + " creation failed" }
            }), { title: "PNR Status" }, { display: 'areaView' });
        };
        return ShellPnrView;
    }(AbstractView_9.AbstractView));
    ShellPnrView = __decorate([
        Initial_16.Initial({
            templateOptions: {
                helpers: {
                    _t: i18nService.getScopedHelper('customworkflow-sabre-sdk-sample/translations')
                }
            }
        }),
        Template_10.Template('sabre-tn-redapp-example-workflow-mod:ShellPNRView'),
        CssClass_13.CssClass('profile-details-view')
    ], ShellPnrView);
    exports.ShellPnrView = ShellPnrView;
});
define("sabre-tn-redapp-example-workflow-mod/Main", ["require", "exports", "sabre-ngv-core/modules/Module", "sabre-tn-redapp-example-workflow-mod/Context", "sabre-tn-redapp-example-workflow-mod/Context", "sabre-ngv-app/app/services/impl/DtoService", "sabre-ngv-app/app/services/impl/DrawerService", "sabre-ngv-core/configs/drawer/LargeWidgetDrawerConfig", "sabre-tn-redapp-example-workflow-mod/views/decisionSupport/DsDrawerTile", "sabre-tn-redapp-example-workflow-mod/views/decisionSupport/DsTilePopOver", "sabre-tn-redapp-example-workflow-mod/views/lfsResults/LfsDrawerTile", "sabre-tn-redapp-example-workflow-mod/views/lfsResults/LfsTilePopOver", "sabre-ngv-xp/services/ExtensionPointService", "sabre-ngv-xp/configs/WidgetXPConfig", "sabre-tn-redapp-example-workflow-mod/views/cmdHelperForm/CmdHelperButton", "sabre-tn-redapp-example-workflow-mod/models/ManualExtensionPointEventData", "sabre-tn-redapp-example-workflow-mod/common/WorkFlowListener", "sabre-tn-redapp-example-workflow-mod/common/CustomXTPointService", "sabre-tn-redapp-example-workflow-mod/models/CustomSvcRS", "sabre-tn-redapp-example-workflow-mod/views/renderRS/REResultArea", "sabre-tn-redapp-example-workflow-mod/models/SampleResults", "sabre-ngv-redAppSidePanel/models/RedAppSidePanelButton", "sabre-ngv-xp/configs/RedAppSidePanelConfig", "sabre-tn-redapp-example-workflow-mod/views/customFlows/HelperFlowsView", "sabre-ngv-core/services/LayerService", "sabre-tn-redapp-example-workflow-mod/models/CustomSvcRQ", "sabre-tn-redapp-example-workflow-mod/models/CustomSvcRQData", "sabre-ngv-hints/HintXPConfig", "sabre-tn-redapp-example-workflow-mod/common/CQHint", "sabre-tn-redapp-example-workflow-mod/views/customFlows/ShellPnrView", "sabre-ngv-app/app/services/impl/DatesService", "sabre-tn-redapp-example-workflow-mod/views/customFlows/QCCheckView"], function (require, exports, Module_1, Context_15, Context_16, DtoService_1, DrawerService_1, LargeWidgetDrawerConfig_1, DsDrawerTile_1, DsTilePopOver_1, LfsDrawerTile_1, LfsTilePopOver_1, ExtensionPointService_1, WidgetXPConfig_1, CmdHelperButton_1, ManualExtensionPointEventData_2, WorkFlowListener_1, CustomXTPointService_5, CustomSvcRS_2, REResultArea_1, SampleResults_1, RedAppSidePanelButton_1, RedAppSidePanelConfig_1, HelperFlowsView_1, LayerService_6, CustomSvcRQ_8, CustomSvcRQData_8, HintXPConfig_1, CQHint_1, ShellPnrView_1, DatesService_1, QCCheckView_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var datesService = Context_15.getService(DatesService_1.DatesService);
    var Main = (function (_super) {
        __extends(Main, _super);
        function Main() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // protected autoExposeClasses = false;
        Main.prototype.init = function () {
            var _this = this;
            _super.prototype.init.call(this);
            // initialize your module here
            var dtoSvc = Context_15.getService(DtoService_1.DtoService);
            var drwSvc = Context_15.getService(DrawerService_1.DrawerService);
            var cfgAbstractViewOtions = {
                title: 'AIR SEGMENT WIDGET',
                maximized: true,
                cssClass: 'dn-panel results-panel-widget-container',
                actions: [
                    {
                        caption: ('CANCEL'),
                        actionName: 'close',
                        type: 'secondary',
                        cssClass: 'btn',
                        className: 'app.common.views.Button'
                    },
                    {
                        caption: ('ACTION'),
                        actionName: 'some',
                        type: 'default',
                        cssClass: 'btn',
                        className: 'app.common.views.Button'
                    }
                ]
            };
            var cfgAbstractViewOtionsNoAction = {
                title: 'DECISION SUPPORT WIDGET',
                maximized: true,
                cssClass: 'dn-panel results-panel-widget-container'
            };
            // const decSupportWidget = new LargeWidgetDrawerConfig( DsDrawerTile, DsTilePopOver, cfgAbstractViewOtionsNoAction);
            var lfsResultWidget = new LargeWidgetDrawerConfig_1.LargeWidgetDrawerConfig(LfsDrawerTile_1.LfsDrawerTile, LfsTilePopOver_1.LfsTilePopOver, cfgAbstractViewOtions);
            var decSupportWidget = new LargeWidgetDrawerConfig_1.LargeWidgetDrawerConfig(DsDrawerTile_1.DsDrawerTile, DsTilePopOver_1.DsTilePopOver, cfgAbstractViewOtionsNoAction);
            drwSvc.addConfig(['shopping-response'], decSupportWidget);
            //include DOCUMENTATION about available "tags" for configuring where the tile widget will appear
            //drwSvc.addConfig( ['flight-segment-common'], lfsResultWidget);
            drwSvc.addConfig(['shopping-flight-segment'], lfsResultWidget);
            // command helper button contribution
            // FIXME!!!!!
            /*
    
    
                This example needs to be more consistent on the code used, it mixes React+Saga with AbstractView, etc
                Change the impleentation to use only Abstractview and handlebars templates
    
            */
            Context_15.getService(ExtensionPointService_1.ExtensionPointService).addConfig('novice-buttons', new WidgetXPConfig_1.WidgetXPConfig(CmdHelperButton_1.default, -1000));
            dtoSvc.registerDataModel('[d.Structure][o.ExtensionPoint_Summary][workflowdata.RSResultSet][0]', SampleResults_1.SampleResults);
            dtoSvc.registerDataView(SampleResults_1.SampleResults, REResultArea_1.RSResultArea);
            var drawer = Context_15.getService(DrawerService_1.DrawerService);
            drawer.addConfig('search-result', {
                details: [
                    {
                        caption: ('Traveler Information'),
                        print: '{{#with drawer-context-model}}' +
                            '<span class="drawer-detail-caption">' + ('FIELD1') + ': </span>' +
                            '<span class="drawer-detail-value">' + '{{field1}}' + '</span>' +
                            '{{/with}}'
                    },
                    {
                        print: '{{#with drawer-context-model}}' +
                            '<span class="drawer-detail-caption">' + ('FIELD2') + ': </span>' +
                            '<span class="drawer-detail-value">' + '{{field2}}' + '</span>' +
                            '{{/with}}'
                    }
                ],
                actions: [{
                        caption: 'Backend Action',
                        actionName: 'custom',
                        type: 'secondary',
                        cssClass: 'btn',
                        className: 'app.common.views.Button'
                    },
                    {
                        caption: 'Details and Copy',
                        actionName: 'show-popup',
                        type: 'success',
                        cssClass: 'btn',
                        className: 'app.common.views.Button'
                    }]
            });
            new WorkFlowListener_1.WorkFlowListener().registerListener();
            dtoSvc.registerDataModel('[d.Structure][o.ExtensionPoint_Summary][workflowdata.ManualExtensionPointEventData]', ManualExtensionPointEventData_2.ManualExtensionPointEventData);
            //dtoSvc.registerDataView(ManualExtensionPointEventData, ExtPointManualView);
            //custome extension point service
            Context_16.registerService(CustomXTPointService_5.CustomXTPointService);
            dtoSvc.registerDataModel('[d.Structure][o.ExtensionPoint_Summary][workflowdata.CustomSvcRS]', CustomSvcRS_2.CustomSvcRS);
            var xp = Context_15.getService(ExtensionPointService_1.ExtensionPointService);
            var mySidePanelConfig = new RedAppSidePanelConfig_1.RedAppSidePanelConfig([
                //new RedAppSidePanelButton("HELPER FLOWS",'btn btn-secondary',() => this.afterGetFlows([{"id":"1","label":"customer info completed","command":"*A"},{"id":"2","label":"received from completed","command":"6MYSELF"}])),
                new RedAppSidePanelButton_1.RedAppSidePanelButton("PNR SHELL", 'btn', function () { return _this.createPNR(); }),
                new RedAppSidePanelButton_1.RedAppSidePanelButton("QC CHECK", 'btn', function () { return _this.doQCCheck(); }),
                new RedAppSidePanelButton_1.RedAppSidePanelButton("RAISE EVT", 'btn btn-secondary', function () { return _this.doRaiseEvent(); })
            ]);
            xp.addConfig('redAppSidePanel', mySidePanelConfig);
            xp.addConfig('hintACTCODE', new HintXPConfig_1.HintXPConfig(CQHint_1.hintACTCODE));
        };
        Main.prototype.showHelperFlows = function () {
            //let rq: CustomSvcRQ = new CustomSvcRQ();
            var _this = this;
            // this.getModel().getField1();
            //rq.actionCode = "getFlows";
            //rq.rqPayload = "";
            // getService(CustomXTPointService).fetchServiceData(new CustomSvcRQData(rq)).done(this.afterGetFlows.bind(this));
            var rq = new CustomSvcRQ_8.CustomSvcRQ();
            rq.actionCode = "getFlows";
            new Promise(function (resolve) {
                var getFlows = Context_15.cf('NGV://REDAPP/SERVICE/COM.SABRE.TN.REDAPP.EXAMPLE.WORKFLOW.XTPOINTSERVICES.INTERFACES.ICUSTOMSVC:EXECUTE')
                    .addRequestDataObject(new CustomSvcRQData_8.CustomSvcRQData(rq))
                    .setLocalPreference('silentRequest', true)
                    .send();
                getFlows.done(function (mcf) {
                    console.log(mcf.getDataStructs());
                    console.log(mcf.getDataStructs()[0]);
                    console.log(mcf.getDataStructs()[0]['d.Structure']['o.ExtensionPoint_Summary']);
                    console.log(JSON.parse(mcf.getDataStructs()[0]['d.Structure']['o.ExtensionPoint_Summary']));
                    //this.afterGetFlows(JSON.parse(mcf.getDataStructs()[0]['d.Structure']['o.ExtensionPoint_Summary']));
                    _this.afterGetFlows([{ "id": "1", "label": "label of flow", "command": "*A" }, { "id": "2", "label": "received from", "command": "6MYSELF" }]);
                });
            });
        };
        Main.prototype.afterGetFlows = function (dta) {
            var mdlOptions = {
                title: "Helper Flows",
                actions: [{
                        className: 'app.common.views.Button',
                        caption: 'Cancel',
                        actionName: 'cancel',
                        type: 'secondary'
                    }, {
                        className: 'app.common.views.Button',
                        caption: 'Submit',
                        actionName: 'do-flow',
                        type: 'primary'
                    }]
            };
            console.log(dta);
            Context_15.getService(LayerService_6.LayerService).showInModal(new HelperFlowsView_1.HelperFlowsView({ model: { flows: dta } }), mdlOptions, { display: 'areaView' });
        };
        Main.prototype.createPNR = function () {
            var pnrOptions = {
                title: 'Add to PNR',
                actions: [{
                        className: 'app.common.views.Button',
                        caption: 'Cancel',
                        actionName: 'cancel',
                        type: 'secondary'
                    }, {
                        className: 'app.common.views.Button',
                        caption: 'Submit',
                        actionName: 'submit-pnr',
                        type: 'secondary'
                    }]
            };
            var tenDaysAheadFlight = '1' + datesService.getNow().add(10, 'days').format('DDMMM').toUpperCase() + 'LGWKRK';
            Context_15.getService(LayerService_6.LayerService).showInModal(new ShellPnrView_1.ShellPnrView({
                model: { flight: tenDaysAheadFlight }
            }), pnrOptions, { display: 'areaView' });
        };
        Main.prototype.doQCCheck = function () {
            var rq = new CustomSvcRQ_8.CustomSvcRQ();
            rq.actionCode = "getFlows";
            var qcOptions = {
                title: 'Quality control tracker',
                actions: [{
                        className: 'app.common.views.Button',
                        caption: 'Cancel',
                        actionName: 'cancel',
                        type: 'secondary'
                    }, {
                        className: 'app.common.views.Button',
                        caption: 'Submit',
                        actionName: 'submit-pnr',
                        type: 'secondary'
                    }]
            };
            //let tenDaysAheadFlight = '1' + datesService.getNow().add(10, 'days').format('DDMMM').toUpperCase() + 'LGWKRK';
            Context_15.getService(CustomXTPointService_5.CustomXTPointService).fetchServiceData(new CustomSvcRQData_8.CustomSvcRQData(rq)).done(function (cfResponse) {
                console.log('aqui');
                console.log(cfResponse);
                console.log(cfResponse.rsPayload);
                console.log(cfResponse.getActionCode());
                console.log(cfResponse.getRsPayload());
                console.log(JSON.stringify(cfResponse));
                var rsDta = JSON.parse(cfResponse.getRsPayload().toString());
                //[{"id":"1","label":"label of flow","description":"description of policy","command":"51"},{"id":"2","label":"received from","description":"description of policy","command":"6MYSELF"}];
                //rsDta = cfResponse.getDataStructs()['d.Structure']['o.ExtensionPoint_Summary'];
                console.log(rsDta);
                //console.log(cfResponse.getDataStructs());
                Context_15.getService(LayerService_6.LayerService).showInModal(new QCCheckView_2.QCCheckView({
                    model: { flows: rsDta }
                }), qcOptions, { display: 'areaView' });
            });
            /*
             cf('NGV://REDAPP/SERVICE/COM.SABRE.TN.REDAPP.EXAMPLE.WORKFLOW.XTPOINTSERVICES.INTERFACES.ICUSTOMSVC:EXECUTE')
             .setLocalPreference('silentRequest', true)
             .addRequestDataObject(new CustomSvcRQData(rq))
             .send()
             .done((cfResponse) => {
                 let rsDta = [{"id":"1","label":"label of flow","description":"description of policy","command":"51"},{"id":"2","label":"received from","description":"description of policy","command":"6MYSELF"}];
                 //rsDta = cfResponse.getDataStructs()['d.Structure']['o.ExtensionPoint_Summary'];
                 console.log('aqui');
                 console.log(rsDta);
                     console.log(cfResponse.getDataStructs());
                     console.log(cfResponse);
                 
                 getService(LayerService).showInModal(new QCCheckView({
                     model: {flows: rsDta} as any
                 }), qcOptions , {display: 'areaView'});
         
             });
             */
        };
        Main.prototype.doFileFinish = function () {
            var rq = new CustomSvcRQ_8.CustomSvcRQ();
            rq.actionCode = "fileFinish";
            Context_15.cf('NGV://REDAPP/SERVICE/COM.SABRE.TN.REDAPP.EXAMPLE.WORKFLOW.XTPOINTSERVICES.INTERFACES.ICUSTOMSVC:EXECUTE')
                .setLocalPreference('silentRequest', true)
                .addRequestDataObject(new CustomSvcRQData_8.CustomSvcRQData(rq))
                .send();
        };
        Main.prototype.doRaiseEvent = function () {
            var rq = new CustomSvcRQ_8.CustomSvcRQ();
            rq.actionCode = "raiseEvent";
            Context_15.cf('NGV://REDAPP/SERVICE/COM.SABRE.TN.REDAPP.EXAMPLE.WORKFLOW.XTPOINTSERVICES.INTERFACES.ICUSTOMSVC:EXECUTE')
                .setLocalPreference('silentRequest', true)
                .addRequestDataObject(new CustomSvcRQData_8.CustomSvcRQData(rq))
                .send();
        };
        Main.prototype.selfCloseFromHereAction = function () {
            console.log('Ping from action');
        };
        return Main;
    }(Module_1.Module));
    exports.Main = Main;
});
///<amd-module name="sabre-tn-redapp-example-workflow-mod" />
define("sabre-tn-redapp-example-workflow-mod", ["require", "exports", "sabre-tn-redapp-example-workflow-mod/Main", "sabre-tn-redapp-example-workflow-mod/Context"], function (require, exports, Main_1, Context_17) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Module_sabre_tn_redapp_example_workflow_mod = (function (_super) {
        __extends(Module_sabre_tn_redapp_example_workflow_mod, _super);
        function Module_sabre_tn_redapp_example_workflow_mod(manifest) {
            var _this = _super.call(this, manifest) || this;
            Context_17.context.setModule(_this);
            return _this;
        }
        return Module_sabre_tn_redapp_example_workflow_mod;
    }(Main_1.Main));
    exports.default = Module_sabre_tn_redapp_example_workflow_mod;
});

//# sourceMappingURL=module.js.map
