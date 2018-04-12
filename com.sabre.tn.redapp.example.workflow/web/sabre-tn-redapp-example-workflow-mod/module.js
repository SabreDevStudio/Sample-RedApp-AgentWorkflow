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
define("sabre-tn-redapp-example-workflow-mod/Context", ["require", "exports", "sabre-ngv-core/modules/ModuleContext"], function (require, exports, ModuleContext_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.context = new ModuleContext_1.ModuleContext();
    exports.cf = exports.context.cf.bind(exports.context);
    exports.registerService = exports.context.registerService.bind(exports.context);
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
            this.getModel().set('availData', JSON.stringify(availData));
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
    exports.rootReducer = function (state, action) {
        if (state === void 0) { state = INITIAL_STATE; }
        var updateName = stateUpdater(state)(action.id);
        switch (action.type) {
            case types_1.UPDATE:
                return updateName(action.value);
            case types_1.CANCEL:
                return INITIAL_STATE;
            default:
                return state;
        }
    };
    var stateUpdater = function (state) {
        return function (key) {
            return function (value) {
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
define("sabre-tn-redapp-example-workflow-mod/views/cmdHelperForm/sagas", ["require", "exports", "redux-saga/effects", "sabre-tn-redapp-example-workflow-mod/Context"], function (require, exports, effects_1, Context_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function rootSaga(eventBus) {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, [
                        submitFormSideEffectSaga(eventBus),
                        cancelFormSideEffectSaga(eventBus)
                    ]];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    }
    exports.default = rootSaga;
    function submitFormSideEffectSaga(eventBus) {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, effects_1.takeEvery(isSubmitAction, submitActionHandler, eventBus)];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    }
    function cancelFormSideEffectSaga(eventBus) {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, effects_1.takeEvery(isCancelAction, cancelActionHandler, eventBus)];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    }
    function isSubmitAction(action) {
        return action.type === 'submit';
    }
    function isCancelAction(action) {
        return action.type === 'cancel';
    }
    function submitActionHandler(eventBus, action) {
        var state, commandFlow;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, effects_1.select()];
                case 1:
                    state = _a.sent();
                    commandFlow = Context_2.cf('NGV://REDAPP/SERVICE/COM.SABRE.TN.REDAPP.EXAMPLE.WORKFLOW.XTPOINTSERVICES.INTERFACES.ICUSTOMSVC:EXECUTE')
                        .send();
                    return [4, effects_1.put({ type: 'cancel' })];
                case 2:
                    _a.sent();
                    return [2];
            }
        });
    }
    exports.submitActionHandler = submitActionHandler;
    function cancelActionHandler(eventBus, action) {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, eventBus.trigger('close-form')];
                case 1:
                    _a.sent();
                    return [2];
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
                        React.createElement("div", { className: "form-group" },
                            React.createElement("label", { htmlFor: "exampleFormControlSelect1" }, "Example select"),
                            React.createElement("select", { className: "form-control", id: "exampleFormControlSelect1" },
                                React.createElement("option", null, "1"),
                                React.createElement("option", null, "2"),
                                React.createElement("option", null, "3"),
                                React.createElement("option", null, "4"),
                                React.createElement("option", null, "5"))),
                        React.createElement("div", { className: 'tab-action-buttons' },
                            React.createElement("div", { className: 'action-buttons' },
                                React.createElement("button", { className: 'cancel-button js_form-cancel btn btn-outline btn-success', onClick: this.props.handleCancel }, "Cancel"),
                                React.createElement("button", { type: 'submit', className: 'search-button js_form-submit btn btn-success' }, "Submit")))))));
        };
        return Component;
    }(React.Component));
    exports.Component = Component;
    var mapStateToProps = function (state) { return state; };
    var mapDispatchToProps = function (dispatch, ownProp) { return ({
        handleChange: function (event) {
            return dispatch({ type: 'update', id: event.target.id, value: event.target.value });
        },
        handleSubmit: function (event) {
            event.preventDefault();
            return dispatch({ type: 'submit', id: '' });
        },
        handleCancel: function (event) {
            event.preventDefault();
            return dispatch({ type: 'cancel', id: '' });
        }
    }); };
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
        CmdHelperButton.prototype.initialize = function (options) {
            _super.prototype.initialize.call(this, options);
            this.registerContentEvents();
        };
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
define("sabre-tn-redapp-example-workflow-mod/views/modalDialog/ExtPointManualView", ["require", "exports", "sabre-ngv-app/app/AbstractView", "sabre-tn-redapp-example-workflow-mod/Context", "sabre-ngv-app/app/services/impl/I18nService", "sabre-ngv-core/decorators/classes/view/CssClass", "sabre-ngv-core/decorators/classes/Initial", "sabre-ngv-core/decorators/classes/view/Template", "sabre-ngv-core/decorators/methods/Bound"], function (require, exports, AbstractView_3, Context_4, I18nService_2, CssClass_6, Initial_6, Template_3, Bound_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var i18nService = Context_4.getService(I18nService_2.I18nService);
    var ExtPointManualView = (function (_super) {
        __extends(ExtPointManualView, _super);
        function ExtPointManualView(options) {
            var _this = _super.call(this, options) || this;
            _this.on('continue-action', _this._onContinueAction);
            _this.on('skip-action', _this._onSkipAction);
            _this.on('cancel-action', _this._onCancelAction);
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
            var iataCode = this.$el.find('#iataCode').val();
            var model = this.getModel();
            var commandFlow = model.getCF();
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
                Context_5.getService(LayerService_1.LayerService).showInModal(new ExtPointManualView_1.ExtPointManualView({ model: data }), {
                    title: data.getEventId(),
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
define("sabre-tn-redapp-example-workflow-mod/views/renderRS/RSResultPanel", ["require", "exports", "sabre-ngv-app/app/widgets/drawer/views/Drawer", "sabre-ngv-core/decorators/classes/Initial"], function (require, exports, Drawer_1, Initial_8) {
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
        return RSResultPanel;
    }(Drawer_1.Drawer));
    RSResultPanel = __decorate([
        Initial_8.Initial({
            drawerGroups: ['search-result']
        })
    ], RSResultPanel);
    exports.RSResultPanel = RSResultPanel;
});
define("sabre-tn-redapp-example-workflow-mod/views/renderRS/RSResultRow", ["require", "exports", "sabre-ngv-app/app/AbstractView", "sabre-ngv-core/decorators/classes/view/Template", "sabre-ngv-core/decorators/classes/view/CssClass", "sabre-ngv-app/app/widgets/drawer/mixins/WithDrawer", "sabre-ngv-core/decorators/classes/Initial", "sabre-ngv-core/decorators/classes/Mixin", "sabre-tn-redapp-example-workflow-mod/views/renderRS/RSResultPanel"], function (require, exports, AbstractView_4, Template_4, CssClass_7, WithDrawer_1, Initial_9, Mixin_1, RSResultPanel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RSResultRow = (function (_super) {
        __extends(RSResultRow, _super);
        function RSResultRow() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return RSResultRow;
    }(AbstractView_4.AbstractView));
    RSResultRow = __decorate([
        Mixin_1.Mixin(WithDrawer_1.WithDrawer),
        Initial_9.Initial({
            drawerDescriptor: RSResultPanel_1.RSResultPanel
        }),
        Template_4.Template('sabre-tn-redapp-example-workflow-mod:RSResultRow'),
        CssClass_7.CssClass('flight-row flight-novice-row')
    ], RSResultRow);
    exports.RSResultRow = RSResultRow;
});
define("sabre-tn-redapp-example-workflow-mod/models/SampleResults", ["require", "exports", "sabre-ngv-app/app/common/data/dto/EnhancedResponseData", "sabre-ngv-core/decorators/classes/Initial", "sabre-tn-redapp-example-workflow-mod/models/SampleResult"], function (require, exports, EnhancedResponseData_3, Initial_10, SampleResult_1) {
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
        Initial_10.Initial({
            dataRoot: '[d.Structure][o.ExtensionPoint_Summary][workflowdata.RSResultSet][0]'
        }),
        Initial_10.Initial({
            autoPropagateData: true,
            nonLazyMembers: [
                'sampleResults'
            ]
        })
    ], SampleResults);
    exports.SampleResults = SampleResults;
});
define("sabre-tn-redapp-example-workflow-mod/views/renderRS/REResultArea", ["require", "exports", "sabre-ngv-app/app/widgets/container/ListView", "sabre-ngv-core/decorators/classes/Initial", "sabre-ngv-core/decorators/classes/Mixin", "sabre-ngv-app/app/common/mixins/WithHighlightableChildren", "sabre-ngv-core/decorators/classes/view/Template", "sabre-ngv-core/decorators/classes/view/CssClass", "sabre-tn-redapp-example-workflow-mod/views/renderRS/RSResultRow"], function (require, exports, ListView_1, Initial_11, Mixin_2, WithHighlightableChildren_1, Template_5, CssClass_8, RSResultRow_1) {
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
        CssClass_8.CssClass('novice-output-mode-widget'),
        Template_5.Template('sabre-tn-redapp-example-workflow-mod:RSResultArea'),
        Initial_11.Initial({
            itemsProperty: 'model.sampleResults',
            itemDescriptor: RSResultRow_1.RSResultRow
        }),
        __metadata("design:paramtypes", [Object])
    ], RSResultArea);
    exports.RSResultArea = RSResultArea;
});
define("sabre-tn-redapp-example-workflow-mod/Main", ["require", "exports", "sabre-ngv-core/modules/Module", "sabre-tn-redapp-example-workflow-mod/Context", "sabre-tn-redapp-example-workflow-mod/Context", "sabre-ngv-app/app/services/impl/DtoService", "sabre-ngv-app/app/services/impl/DrawerService", "sabre-ngv-core/configs/drawer/LargeWidgetDrawerConfig", "sabre-tn-redapp-example-workflow-mod/views/decisionSupport/DsDrawerTile", "sabre-tn-redapp-example-workflow-mod/views/decisionSupport/DsTilePopOver", "sabre-tn-redapp-example-workflow-mod/views/lfsResults/LfsDrawerTile", "sabre-tn-redapp-example-workflow-mod/views/lfsResults/LfsTilePopOver", "sabre-ngv-xp/services/ExtensionPointService", "sabre-ngv-xp/configs/WidgetXPConfig", "sabre-tn-redapp-example-workflow-mod/views/cmdHelperForm/CmdHelperButton", "sabre-tn-redapp-example-workflow-mod/models/ManualExtensionPointEventData", "sabre-tn-redapp-example-workflow-mod/views/modalDialog/ExtPointManualView", "sabre-tn-redapp-example-workflow-mod/common/WorkFlowListener", "sabre-tn-redapp-example-workflow-mod/common/CustomXTPointService", "sabre-tn-redapp-example-workflow-mod/models/CustomSvcRS", "sabre-tn-redapp-example-workflow-mod/views/renderRS/REResultArea", "sabre-tn-redapp-example-workflow-mod/models/SampleResults"], function (require, exports, Module_1, Context_6, Context_7, DtoService_1, DrawerService_1, LargeWidgetDrawerConfig_1, DsDrawerTile_1, DsTilePopOver_1, LfsDrawerTile_1, LfsTilePopOver_1, ExtensionPointService_1, WidgetXPConfig_1, CmdHelperButton_1, ManualExtensionPointEventData_2, ExtPointManualView_2, WorkFlowListener_1, CustomXTPointService_2, CustomSvcRS_2, REResultArea_1, SampleResults_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Main = (function (_super) {
        __extends(Main, _super);
        function Main() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Main.prototype.init = function () {
            _super.prototype.init.call(this);
            var dtoSvc = Context_6.getService(DtoService_1.DtoService);
            var drwSvc = Context_6.getService(DrawerService_1.DrawerService);
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
            var decSupportWidget = new LargeWidgetDrawerConfig_1.LargeWidgetDrawerConfig(DsDrawerTile_1.DsDrawerTile, DsTilePopOver_1.DsTilePopOver, cfgAbstractViewOtionsNoAction);
            var lfsResultWidget = new LargeWidgetDrawerConfig_1.LargeWidgetDrawerConfig(LfsDrawerTile_1.LfsDrawerTile, LfsTilePopOver_1.LfsTilePopOver, cfgAbstractViewOtions);
            drwSvc.addConfig(['shopping-response'], decSupportWidget);
            drwSvc.addConfig(['flight-segment-common'], lfsResultWidget);
            Context_6.getService(ExtensionPointService_1.ExtensionPointService).addConfig('novice-buttons', new WidgetXPConfig_1.WidgetXPConfig(CmdHelperButton_1.default, -1000));
            dtoSvc.registerDataModel('[d.Structure][o.ExtensionPoint_Summary][workflowdata.RSResultSet][0]', SampleResults_1.SampleResults);
            dtoSvc.registerDataView(SampleResults_1.SampleResults, REResultArea_1.RSResultArea);
            var drawer = Context_6.getService(DrawerService_1.DrawerService);
            drawer.addConfig('search-result', {
                details: [
                    {
                        caption: ('Trip Information'),
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
                ]
            });
            new WorkFlowListener_1.WorkFlowListener().registerListener();
            dtoSvc.registerDataModel('[d.Structure][o.ExtensionPoint_Summary][workflowdata.ManualExtensionPointEventData]', ManualExtensionPointEventData_2.ManualExtensionPointEventData);
            dtoSvc.registerDataView(ManualExtensionPointEventData_2.ManualExtensionPointEventData, ExtPointManualView_2.ExtPointManualView);
            Context_7.registerService(CustomXTPointService_2.CustomXTPointService);
            dtoSvc.registerDataModel('[d.Structure][o.ExtensionPoint_Summary][workflowdata.CustomSvcRS]', CustomSvcRS_2.CustomSvcRS);
        };
        return Main;
    }(Module_1.Module));
    exports.Main = Main;
});
define("sabre-tn-redapp-example-workflow-mod", ["require", "exports", "sabre-tn-redapp-example-workflow-mod/Main", "sabre-tn-redapp-example-workflow-mod/Context"], function (require, exports, Main_1, Context_8) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Module_sabre_tn_redapp_example_workflow_mod = (function (_super) {
        __extends(Module_sabre_tn_redapp_example_workflow_mod, _super);
        function Module_sabre_tn_redapp_example_workflow_mod(manifest) {
            var _this = _super.call(this, manifest) || this;
            Context_8.context.setModule(_this);
            return _this;
        }
        return Module_sabre_tn_redapp_example_workflow_mod;
    }(Main_1.Main));
    exports.default = Module_sabre_tn_redapp_example_workflow_mod;
});

//# sourceMappingURL=module.js.map
