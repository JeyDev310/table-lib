import { Component, ComponentFactoryResolver, ViewChildren, ViewContainerRef, NgModule } from '@angular/core';
import { DataSource, CdkTableModule } from '@angular/cdk/table';
import { BehaviorSubject } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/table-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableLibComponent {
    /**
     * @param {?} resolver
     */
    constructor(resolver) {
        this.resolver = resolver;
        this.displayedColumns = ['ReferenceNumber', 'CustomerInfo', 'Status', 'Date', 'Actions'];
        this.dataSource = new ExampleDataSource();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.dataSource = new ExampleDataSource(this.exampleDatabase);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    expandRow(index) {
        if (this.expandedRow != null) {
            this.containers.toArray()[this.expandedRow].clear();
        }
    }
    /**
     * @param {?} status
     * @return {?}
     */
    getCellColor(status) {
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
    }
    /**
     * @param {?} status
     * @return {?}
     */
    getCellImage(status) {
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
    }
    /**
     * @param {?} status
     * @return {?}
     */
    getAddressCellColor(status) {
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
    }
}
TableLibComponent.decorators = [
    { type: Component, args: [{
                selector: "app-table-lib",
                template: "<div class=\"example-container mat-elevation-z8\">\r\n    <div #insertionPoint></div>\r\n    <cdk-table #table [dataSource]=\"dataSource\" class=\"example-table\">\r\n\r\n        <ng-container cdkColumnDef=\"ReferenceNumber\">\r\n            <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell example-header-ReferenceNumber\"> Reference Number </cdk-header-cell>\r\n            <cdk-cell *cdkCellDef=\"let row\" class=\"example-cell example-header-ReferenceNumber\"> {{row.Reference}}</cdk-cell>\r\n        </ng-container>\r\n    \r\n        <ng-container cdkColumnDef=\"CustomerInfo\">\r\n            <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell example-header-custominfo\"> Customer Info </cdk-header-cell>\r\n            <cdk-cell *cdkCellDef=\"let row\" class=\"example-cell example-header-custominfo\"> \r\n                <span >{{row.NumberCustomer}} </span><br>\r\n                <span [ngClass]=\"getAddressCellColor(row.Status)\">{{row.Address}} | {{row.PhoneNumber}}</span>\r\n            </cdk-cell>\r\n        </ng-container>\r\n    \r\n        <ng-container cdkColumnDef=\"Status\">\r\n            <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell example-header-status\">Status</cdk-header-cell>\r\n            <cdk-cell *cdkCellDef=\"let row\" class=\"example-cell example-header-status\"\r\n                    [ngClass]=\"getCellColor(row.Status)\">\r\n\r\n                    <div style=\"width:80px; float: left;\">{{row.Status}}</div>\r\n                    <div><img src={{getCellImage(row.Status)}} alt=\"\" class=\"mCS_img_loaded\"></div>\r\n\r\n            </cdk-cell>\r\n        </ng-container>\r\n        \r\n        <ng-container cdkColumnDef=\"Date\">\r\n            <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell example-header-date\">Date</cdk-header-cell>\r\n            <cdk-cell *cdkCellDef=\"let row\" class=\"example-cell example-header-date date-bold\">\r\n            <span>{{row.Date}}</span><br>\r\n            <span>{{row.Time}}</span>\r\n            </cdk-cell>\r\n        </ng-container>\r\n\r\n        <ng-container cdkColumnDef=\"Actions\">\r\n            <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell example-header-actions\">Actions</cdk-header-cell>\r\n            <cdk-cell *cdkCellDef=\"let row\" class=\"example-cell example-header-actions\">\r\n                    <img src=\"../assets/images/action_icon.svg\" alt=\"\" class=\"mCS_img_loaded\">\r\n            </cdk-cell>\r\n        </ng-container>\r\n        \r\n        <cdk-header-row *cdkHeaderRowDef=\"displayedColumns; sticky: true\" class=\"example-header-row header-boder\"></cdk-header-row>\r\n    \r\n        <!-- <cdk-row [style.height.px]=\"placeholderHeight\" mat-row *cdkRowDef=\"let row; columns: displayedColumns; let index=index columns: []; when: placeholderWhen\" class=\"example-row\"\r\n            (click)=\"expandRow(index)\"\r\n            #cdkrow>\r\n        </cdk-row> -->\r\n        <cdk-row mat-row *cdkRowDef=\"let row; columns: displayedColumns; let index=index columns: [];\" class=\"example-row\"\r\n            (click)=\"expandRow(index)\"\r\n            #cdkrow>\r\n        </cdk-row>\r\n   \r\n    </cdk-table>\r\n</div>\r\n  \r\n",
                styles: [".example-container{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;max-height:500px;min-width:300px;width:90%;border-radius:10px;overflow:auto;margin:20px auto auto}.example-table{-webkit-box-flex:1;flex:1 1 auto;overflow:auto;overflow-x:none}.example-row{display:inline-block;width:100%;-webkit-box-align:center;align-items:center;padding:6px 20px;cursor:pointer}.example-header-row{display:inline-block;width:100%;-webkit-box-align:center;align-items:center;padding:20px;top:0;border-bottom:1px solid #ccc;background:#f5f6fb}.example-cell,.example-header-cell{float:left}.example-header-cell{font-size:16px;font-weight:700;font-family:Graphik-500-Medium;float:left}.example-cell{font-size:14px;font-weight:500}.example-header-ReferenceNumber{width:20%}.example-header-custominfo{width:38%}.example-header-status{width:16%}.example-header-date{width:20%}.example-header-date.date-bold{font-weight:700}.example-header-actions{width:6%}::ng-deep .cdk-virtual-scroll-content-wrapper{-webkit-transform:translateY(0)!important;transform:translateY(0)!important}"]
            }] }
];
/** @nocollapse */
TableLibComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
TableLibComponent.propDecorators = {
    containers: [{ type: ViewChildren, args: ['cdkrow', { read: ViewContainerRef },] }]
};
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
const ELEMENT_DATA = [
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
class ExampleDataSource extends DataSource {
    constructor() {
        super(...arguments);
        /**
         * Stream of data that is provided to the table.
         */
        this.data = new BehaviorSubject(ELEMENT_DATA);
    }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    connect() {
        return this.data;
    }
    /**
     * @return {?}
     */
    disconnect() { }
}
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
class TableLibModule {
}
TableLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TableLibComponent],
                imports: [
                    CdkTableModule,
                    HttpClientModule,
                    CommonModule
                ],
                exports: [TableLibComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: table-lib.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ExampleDataSource, TableLibComponent, TableLibModule };
//# sourceMappingURL=table-lib.js.map
