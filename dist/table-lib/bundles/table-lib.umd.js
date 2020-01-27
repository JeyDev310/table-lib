(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/table'), require('rxjs'), require('@angular/common/http'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('table-lib', ['exports', '@angular/core', '@angular/cdk/table', 'rxjs', '@angular/common/http', '@angular/common'], factory) :
    (global = global || self, factory(global['table-lib'] = {}, global.ng.core, global.ng.cdk.table, global.rxjs, global.ng.common.http, global.ng.common));
}(this, (function (exports, core, table, rxjs, http, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
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
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/table-lib.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableLibComponent = /** @class */ (function () {
        function TableLibComponent(resolver) {
            this.resolver = resolver;
            this.displayedColumns = ['ReferenceNumber', 'CustomerInfo', 'Status', 'Date', 'Actions'];
            this.dataSource = new ExampleDataSource();
        }
        /**
         * @return {?}
         */
        TableLibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            // this.dataSource = new ExampleDataSource(this.exampleDatabase);
        };
        /**
         * @param {?} index
         * @return {?}
         */
        TableLibComponent.prototype.expandRow = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            if (this.expandedRow != null) {
                this.containers.toArray()[this.expandedRow].clear();
            }
        };
        /**
         * @param {?} status
         * @return {?}
         */
        TableLibComponent.prototype.getCellColor = /**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            if (status == "VERIFY") {
                return 'red-color';
            }
            if (status == "DESPITUTE") {
                return 'yellow-color';
            }
            if (status == "COMPLETE") {
                return 'green-color';
            }
            if (status == "ACIC") {
                return 'blue-color';
            }
        };
        /**
         * @param {?} status
         * @return {?}
         */
        TableLibComponent.prototype.getCellImage = /**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            console.log('this is status', status);
            if (status == " ") {
                return '../assets/images/table_all_icons.svg';
            }
            if (status == "VERIFY") {
                return '../assets/images/table_verify_icon.svg';
            }
            if (status == "COMPLETE") {
                return '../assets/images/table_complete_icon.svg';
            }
            if (status == "ACIC") {
                return '../assets/images/table_acic_icon.svg';
            }
        };
        /**
         * @param {?} status
         * @return {?}
         */
        TableLibComponent.prototype.getAddressCellColor = /**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            if (status == "VERIFY" || status == " ") {
                return 'green-color';
            }
            // if (status =="DESPITUTE"){ return 'green-color';}
            if (status == "COMPLETE") {
                return 'dark-color';
            }
            if (status == "ACIC") {
                return 'dark-color';
            }
        };
        TableLibComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "app-table-lib",
                        template: "<div class=\"example-container mat-elevation-z8\">\r\n    <div #insertionPoint></div>\r\n    <cdk-table #table [dataSource]=\"dataSource\" class=\"example-table\">\r\n\r\n        <ng-container cdkColumnDef=\"ReferenceNumber\">\r\n            <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell example-header-ReferenceNumber\"> Reference Number </cdk-header-cell>\r\n            <cdk-cell *cdkCellDef=\"let row\" class=\"example-cell example-header-ReferenceNumber\"> {{row.Reference}}</cdk-cell>\r\n        </ng-container>\r\n    \r\n        <ng-container cdkColumnDef=\"CustomerInfo\">\r\n            <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell example-header-custominfo\"> Customer Info </cdk-header-cell>\r\n            <cdk-cell *cdkCellDef=\"let row\" class=\"example-cell example-header-custominfo\"> \r\n                <span >{{row.NumberCustomer}} </span><br>\r\n                <span [ngClass]=\"getAddressCellColor(row.Status)\">{{row.Address}} | {{row.PhoneNumber}}</span>\r\n            </cdk-cell>\r\n        </ng-container>\r\n    \r\n        <ng-container cdkColumnDef=\"Status\">\r\n            <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell example-header-status\">Status</cdk-header-cell>\r\n            <cdk-cell *cdkCellDef=\"let row\" class=\"example-cell example-header-status\"\r\n                    [ngClass]=\"getCellColor(row.Status)\">\r\n\r\n                    <div style=\"width:80px; float: left;\">{{row.Status}}</div>\r\n                    <div><img src={{getCellImage(row.Status)}} alt=\"\" class=\"mCS_img_loaded\"></div>\r\n\r\n            </cdk-cell>\r\n        </ng-container>\r\n        \r\n        <ng-container cdkColumnDef=\"Date\">\r\n            <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell example-header-date\">Date</cdk-header-cell>\r\n            <cdk-cell *cdkCellDef=\"let row\" class=\"example-cell example-header-date date-bold\">\r\n            <span>{{row.Date}}</span><br>\r\n            <span>{{row.Time}}</span>\r\n            </cdk-cell>\r\n        </ng-container>\r\n\r\n        <ng-container cdkColumnDef=\"Actions\">\r\n            <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell example-header-actions\">Actions</cdk-header-cell>\r\n            <cdk-cell *cdkCellDef=\"let row\" class=\"example-cell example-header-actions\">\r\n                    <img src=\"../assets/images/action_icon.svg\" alt=\"\" class=\"mCS_img_loaded\">\r\n            </cdk-cell>\r\n        </ng-container>\r\n        \r\n        <cdk-header-row *cdkHeaderRowDef=\"displayedColumns; sticky: true\" class=\"example-header-row header-boder\"></cdk-header-row>\r\n    \r\n        <!-- <cdk-row [style.height.px]=\"placeholderHeight\" mat-row *cdkRowDef=\"let row; columns: displayedColumns; let index=index columns: []; when: placeholderWhen\" class=\"example-row\"\r\n            (click)=\"expandRow(index)\"\r\n            #cdkrow>\r\n        </cdk-row> -->\r\n        <cdk-row mat-row *cdkRowDef=\"let row; columns: displayedColumns; let index=index columns: [];\" class=\"example-row\"\r\n            (click)=\"expandRow(index)\"\r\n            #cdkrow>\r\n        </cdk-row>\r\n   \r\n    </cdk-table>\r\n</div>\r\n  \r\n",
                        styles: [".example-container{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;max-height:500px;min-width:300px;width:90%;border-radius:10px;overflow:auto;margin:20px auto auto}.example-table{-webkit-box-flex:1;flex:1 1 auto;overflow:auto;overflow-x:none}.example-row{display:inline-block;width:100%;-webkit-box-align:center;align-items:center;padding:6px 20px;cursor:pointer}.example-header-row{display:inline-block;width:100%;-webkit-box-align:center;align-items:center;padding:20px;top:0;border-bottom:1px solid #ccc;background:#f5f6fb}.example-cell,.example-header-cell{float:left}.example-header-cell{font-size:16px;font-weight:700;font-family:Graphik-500-Medium;float:left}.example-cell{font-size:14px;font-weight:500}.example-header-ReferenceNumber{width:20%}.example-header-custominfo{width:38%}.example-header-status{width:16%}.example-header-date{width:20%}.example-header-date.date-bold{font-weight:700}.example-header-actions{width:6%}::ng-deep .cdk-virtual-scroll-content-wrapper{-webkit-transform:translateY(0)!important;transform:translateY(0)!important}"]
                    }] }
        ];
        /** @nocollapse */
        TableLibComponent.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver }
        ]; };
        TableLibComponent.propDecorators = {
            containers: [{ type: core.ViewChildren, args: ['cdkrow', { read: core.ViewContainerRef },] }]
        };
        return TableLibComponent;
    }());
    if (false) {
        /** @type {?} */
        TableLibComponent.prototype.displayedColumns;
        /** @type {?} */
        TableLibComponent.prototype.dataSource;
        /** @type {?} */
        TableLibComponent.prototype.containers;
        /** @type {?} */
        TableLibComponent.prototype.expandedRow;
        /**
         * @type {?}
         * @private
         */
        TableLibComponent.prototype.resolver;
    }
    /**
     * @record
     */
    function PeriodicElement() { }
    if (false) {
        /** @type {?} */
        PeriodicElement.prototype.Reference;
        /** @type {?} */
        PeriodicElement.prototype.NumberCustomer;
        /** @type {?} */
        PeriodicElement.prototype.Address;
        /** @type {?} */
        PeriodicElement.prototype.PhoneNumber;
        /** @type {?} */
        PeriodicElement.prototype.Status;
        /** @type {?} */
        PeriodicElement.prototype.Date;
        /** @type {?} */
        PeriodicElement.prototype.Time;
    }
    /** @type {?} */
    var ELEMENT_DATA = [
        { Reference: 'PC01-1011', NumberCustomer: 'Sujana Jamarkattel', Address: 'suzjmr1993@gmail', PhoneNumber: '452 455 491', Status: " ", Date: '55 Min', Time: '' },
        { Reference: 'PC01-1011', NumberCustomer: 'Mark Brown', Address: 'suzjmr1993@gmail', PhoneNumber: '452 455 491', Status: 'VERIFY', Date: '8 Hr 40', Time: '' },
        { Reference: 'PC01-1011', NumberCustomer: 'Mark Brown', Address: 'suzjmr1993@gmail', PhoneNumber: '452 455 491', Status: 'DESPITUTE', Date: '15/11/2019', Time: '02:45 PM' },
        { Reference: 'PC01-1011', NumberCustomer: 'Sujana Jamarkattel', Address: 'suzjmr1993@gmail', PhoneNumber: '452 455 491', Status: 'COMPLETE', Date: '15/11/2019', Time: '02:45 PM' },
        { Reference: 'PC01-1011', NumberCustomer: 'Sujana Jamarkattel', Address: 'suzjmr1993@gmail', PhoneNumber: '452 455 491', Status: 'VERIFY', Date: '15/11/2019', Time: '02:45 PM' },
        { Reference: 'PC01-1011', NumberCustomer: 'Mark Brown', Address: 'suzjmr1993@gmail', PhoneNumber: '452 455 491', Status: 'VERIFY', Date: '15/11/2019', Time: '02:45 PM' },
        { Reference: 'PC01-1011', NumberCustomer: 'Sujana Jamarkattel', Address: 'suzjmr1993@gmail', PhoneNumber: '452 455 491', Status: 'ACIC', Date: '15/11/2019', Time: '02:45 PM' },
        { Reference: 'PC01-1011', NumberCustomer: 'Mark Brown', Address: 'suzjmr1993@gmail', PhoneNumber: '452 455 491', Status: 'ACIC', Date: '15/11/2019', Time: '02:45 PM' },
        { Reference: 'PC01-1011', NumberCustomer: 'Sujana Jamarkattel', Address: 'suzjmr1993@gmail', PhoneNumber: '452 455 491', Status: 'VERIFY', Date: '15/11/2019', Time: '02:45 PM' },
        { Reference: 'PC01-1011', NumberCustomer: 'Sujana Jamarkattel', Address: 'suzjmr1993@gmail', PhoneNumber: '452 455 491', Status: 'COMPLETE', Date: '15/11/2019', Time: '02:45 PM' },
        { Reference: 'PC01-1011', NumberCustomer: 'Sujana Jamarkattel', Address: 'suzjmr1993@gmail', PhoneNumber: '452 455 491', Status: 'ACIC', Date: '15/11/2019', Time: '02:45 PM' },
    ];
    var ExampleDataSource = /** @class */ (function (_super) {
        __extends(ExampleDataSource, _super);
        function ExampleDataSource() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * Stream of data that is provided to the table.
             */
            _this.data = new rxjs.BehaviorSubject(ELEMENT_DATA);
            return _this;
        }
        /** Connect function called by the table to retrieve one stream containing the data to render. */
        /**
         * Connect function called by the table to retrieve one stream containing the data to render.
         * @return {?}
         */
        ExampleDataSource.prototype.connect = /**
         * Connect function called by the table to retrieve one stream containing the data to render.
         * @return {?}
         */
        function () {
            return this.data;
        };
        /**
         * @return {?}
         */
        ExampleDataSource.prototype.disconnect = /**
         * @return {?}
         */
        function () { };
        return ExampleDataSource;
    }(table.DataSource));
    if (false) {
        /**
         * Stream of data that is provided to the table.
         * @type {?}
         */
        ExampleDataSource.prototype.data;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/table-lib.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableLibModule = /** @class */ (function () {
        function TableLibModule() {
        }
        TableLibModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [TableLibComponent],
                        imports: [
                            table.CdkTableModule,
                            http.HttpClientModule,
                            common.CommonModule
                        ],
                        exports: [TableLibComponent]
                    },] }
        ];
        return TableLibModule;
    }());

    exports.ExampleDataSource = ExampleDataSource;
    exports.TableLibComponent = TableLibComponent;
    exports.TableLibModule = TableLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=table-lib.umd.js.map
