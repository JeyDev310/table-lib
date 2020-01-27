/**
 * @fileoverview added by tsickle
 * Generated from: lib/table-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ComponentFactoryResolver, ViewChildren, ViewContainerRef } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject } from 'rxjs';
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
        { type: Component, args: [{
                    selector: "app-table-lib",
                    template: "<div class=\"example-container mat-elevation-z8\">\r\n    <div #insertionPoint></div>\r\n    <cdk-table #table [dataSource]=\"dataSource\" class=\"example-table\">\r\n\r\n        <ng-container cdkColumnDef=\"ReferenceNumber\">\r\n            <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell example-header-ReferenceNumber\"> Reference Number </cdk-header-cell>\r\n            <cdk-cell *cdkCellDef=\"let row\" class=\"example-cell example-header-ReferenceNumber\"> {{row.Reference}}</cdk-cell>\r\n        </ng-container>\r\n    \r\n        <ng-container cdkColumnDef=\"CustomerInfo\">\r\n            <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell example-header-custominfo\"> Customer Info </cdk-header-cell>\r\n            <cdk-cell *cdkCellDef=\"let row\" class=\"example-cell example-header-custominfo\"> \r\n                <span >{{row.NumberCustomer}} </span><br>\r\n                <span [ngClass]=\"getAddressCellColor(row.Status)\">{{row.Address}} | {{row.PhoneNumber}}</span>\r\n            </cdk-cell>\r\n        </ng-container>\r\n    \r\n        <ng-container cdkColumnDef=\"Status\">\r\n            <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell example-header-status\">Status</cdk-header-cell>\r\n            <cdk-cell *cdkCellDef=\"let row\" class=\"example-cell example-header-status\"\r\n                    [ngClass]=\"getCellColor(row.Status)\">\r\n\r\n                    <div style=\"width:80px; float: left;\">{{row.Status}}</div>\r\n                    <div><img src={{getCellImage(row.Status)}} alt=\"\" class=\"mCS_img_loaded\"></div>\r\n\r\n            </cdk-cell>\r\n        </ng-container>\r\n        \r\n        <ng-container cdkColumnDef=\"Date\">\r\n            <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell example-header-date\">Date</cdk-header-cell>\r\n            <cdk-cell *cdkCellDef=\"let row\" class=\"example-cell example-header-date date-bold\">\r\n            <span>{{row.Date}}</span><br>\r\n            <span>{{row.Time}}</span>\r\n            </cdk-cell>\r\n        </ng-container>\r\n\r\n        <ng-container cdkColumnDef=\"Actions\">\r\n            <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell example-header-actions\">Actions</cdk-header-cell>\r\n            <cdk-cell *cdkCellDef=\"let row\" class=\"example-cell example-header-actions\">\r\n                    <img src=\"../assets/images/action_icon.svg\" alt=\"\" class=\"mCS_img_loaded\">\r\n            </cdk-cell>\r\n        </ng-container>\r\n        \r\n        <cdk-header-row *cdkHeaderRowDef=\"displayedColumns; sticky: true\" class=\"example-header-row header-boder\"></cdk-header-row>\r\n    \r\n        <!-- <cdk-row [style.height.px]=\"placeholderHeight\" mat-row *cdkRowDef=\"let row; columns: displayedColumns; let index=index columns: []; when: placeholderWhen\" class=\"example-row\"\r\n            (click)=\"expandRow(index)\"\r\n            #cdkrow>\r\n        </cdk-row> -->\r\n        <cdk-row mat-row *cdkRowDef=\"let row; columns: displayedColumns; let index=index columns: [];\" class=\"example-row\"\r\n            (click)=\"expandRow(index)\"\r\n            #cdkrow>\r\n        </cdk-row>\r\n   \r\n    </cdk-table>\r\n</div>\r\n  \r\n",
                    styles: [".example-container{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;max-height:500px;min-width:300px;width:90%;border-radius:10px;overflow:auto;margin:20px auto auto}.example-table{-webkit-box-flex:1;flex:1 1 auto;overflow:auto;overflow-x:none}.example-row{display:inline-block;width:100%;-webkit-box-align:center;align-items:center;padding:6px 20px;cursor:pointer}.example-header-row{display:inline-block;width:100%;-webkit-box-align:center;align-items:center;padding:20px;top:0;border-bottom:1px solid #ccc;background:#f5f6fb}.example-cell,.example-header-cell{float:left}.example-header-cell{font-size:16px;font-weight:700;font-family:Graphik-500-Medium;float:left}.example-cell{font-size:14px;font-weight:500}.example-header-ReferenceNumber{width:20%}.example-header-custominfo{width:38%}.example-header-status{width:16%}.example-header-date{width:20%}.example-header-date.date-bold{font-weight:700}.example-header-actions{width:6%}::ng-deep .cdk-virtual-scroll-content-wrapper{-webkit-transform:translateY(0)!important;transform:translateY(0)!important}"]
                }] }
    ];
    /** @nocollapse */
    TableLibComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    TableLibComponent.propDecorators = {
        containers: [{ type: ViewChildren, args: ['cdkrow', { read: ViewContainerRef },] }]
    };
    return TableLibComponent;
}());
export { TableLibComponent };
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
export function PeriodicElement() { }
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
    tslib_1.__extends(ExampleDataSource, _super);
    function ExampleDataSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Stream of data that is provided to the table.
         */
        _this.data = new BehaviorSubject(ELEMENT_DATA);
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
}(DataSource));
export { ExampleDataSource };
if (false) {
    /**
     * Stream of data that is provided to the table.
     * @type {?}
     */
    ExampleDataSource.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtbGliLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsd0JBQXdCLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBR3JDO0lBY0ksMkJBQW9CLFFBQWtDO1FBQWxDLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBTnhELHFCQUFnQixHQUFHLENBQUMsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDcEYsZUFBVSxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztJQU1yQyxDQUFDOzs7O0lBRUQsb0NBQVE7OztJQUFSO1FBQ0UsaUVBQWlFO0lBQ25FLENBQUM7Ozs7O0lBQ0QscUNBQVM7Ozs7SUFBVCxVQUFVLEtBQWE7UUFDckIsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksRUFBRTtZQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNyRDtJQUNILENBQUM7Ozs7O0lBQ0Qsd0NBQVk7Ozs7SUFBWixVQUFhLE1BQU07UUFDZixJQUFJLE1BQU0sSUFBRyxRQUFRLEVBQUM7WUFBRSxPQUFPLFdBQVcsQ0FBQztTQUFDO1FBQzVDLElBQUksTUFBTSxJQUFHLFdBQVcsRUFBQztZQUFFLE9BQU8sY0FBYyxDQUFDO1NBQUM7UUFDbEQsSUFBSSxNQUFNLElBQUcsVUFBVSxFQUFDO1lBQUUsT0FBTyxhQUFhLENBQUM7U0FBQztRQUNoRCxJQUFJLE1BQU0sSUFBRyxNQUFNLEVBQUM7WUFBRSxPQUFPLFlBQVksQ0FBQztTQUFDO0lBQy9DLENBQUM7Ozs7O0lBQ0Qsd0NBQVk7Ozs7SUFBWixVQUFhLE1BQU07UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN0QyxJQUFJLE1BQU0sSUFBRyxHQUFHLEVBQUM7WUFBRSxPQUFPLHNDQUFzQyxDQUFDO1NBQUM7UUFDbEUsSUFBSSxNQUFNLElBQUcsUUFBUSxFQUFDO1lBQUUsT0FBTyx3Q0FBd0MsQ0FBQztTQUFDO1FBQ3pFLElBQUksTUFBTSxJQUFHLFVBQVUsRUFBQztZQUFFLE9BQU8sMENBQTBDLENBQUM7U0FBQztRQUM3RSxJQUFJLE1BQU0sSUFBRyxNQUFNLEVBQUM7WUFBRSxPQUFPLHNDQUFzQyxDQUFDO1NBQUM7SUFDekUsQ0FBQzs7Ozs7SUFDQywrQ0FBbUI7Ozs7SUFBbkIsVUFBb0IsTUFBTTtRQUN0QixJQUFJLE1BQU0sSUFBRyxRQUFRLElBQUksTUFBTSxJQUFFLEdBQUcsRUFBQztZQUFFLE9BQU8sYUFBYSxDQUFDO1NBQUM7UUFDN0Qsb0RBQW9EO1FBQ3BELElBQUksTUFBTSxJQUFHLFVBQVUsRUFBQztZQUFFLE9BQU8sWUFBWSxDQUFDO1NBQUM7UUFDL0MsSUFBSSxNQUFNLElBQUcsTUFBTSxFQUFDO1lBQUUsT0FBTyxZQUFZLENBQUM7U0FBQztJQUMvQyxDQUFDOztnQkEzQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qix5ckdBQXlDOztpQkFFMUM7Ozs7Z0JBVDBCLHdCQUF3Qjs7OzZCQWlCaEQsWUFBWSxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTs7SUFnQ3BELHdCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0F0Q1ksaUJBQWlCOzs7SUFFNUIsNkNBQW9GOztJQUNwRix1Q0FBcUM7O0lBR3JDLHVDQUErRDs7SUFDN0Qsd0NBQW9COzs7OztJQUNSLHFDQUEwQzs7Ozs7QUFnQzFELHFDQVFDOzs7SUFQQyxvQ0FBa0I7O0lBQ2xCLHlDQUF1Qjs7SUFDdkIsa0NBQWdCOztJQUNoQixzQ0FBb0I7O0lBQ3BCLGlDQUFjOztJQUNkLCtCQUFhOztJQUNiLCtCQUFhOzs7SUFHVCxZQUFZLEdBQXNCO0lBQ3RDLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBRSxjQUFjLEVBQUMsb0JBQW9CLEVBQUUsT0FBTyxFQUFDLGtCQUFrQixFQUFFLFdBQVcsRUFBQyxhQUFhLEVBQUUsTUFBTSxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxFQUFFLEVBQUM7SUFDdkosRUFBQyxTQUFTLEVBQUMsV0FBVyxFQUFFLGNBQWMsRUFBQyxZQUFZLEVBQUUsT0FBTyxFQUFDLGtCQUFrQixFQUFFLFdBQVcsRUFBQyxhQUFhLEVBQUUsTUFBTSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUM7SUFDbkosRUFBQyxTQUFTLEVBQUMsV0FBVyxFQUFFLGNBQWMsRUFBQyxZQUFZLEVBQUUsT0FBTyxFQUFDLGtCQUFrQixFQUFFLFdBQVcsRUFBQyxhQUFhLEVBQUUsTUFBTSxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFFLElBQUksRUFBQyxVQUFVLEVBQUM7SUFDbEssRUFBQyxTQUFTLEVBQUMsV0FBVyxFQUFFLGNBQWMsRUFBQyxvQkFBb0IsRUFBRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsV0FBVyxFQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUMsVUFBVSxFQUFDLElBQUksRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLFVBQVUsRUFBQztJQUN6SyxFQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUUsY0FBYyxFQUFDLG9CQUFvQixFQUFFLE9BQU8sRUFBQyxrQkFBa0IsRUFBRSxXQUFXLEVBQUMsYUFBYSxFQUFFLE1BQU0sRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsVUFBVSxFQUFDO0lBQ3ZLLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBRSxjQUFjLEVBQUMsWUFBWSxFQUFFLE9BQU8sRUFBQyxrQkFBa0IsRUFBRSxXQUFXLEVBQUMsYUFBYSxFQUFFLE1BQU0sRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsVUFBVSxFQUFDO0lBQy9KLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBRSxjQUFjLEVBQUMsb0JBQW9CLEVBQUUsT0FBTyxFQUFDLGtCQUFrQixFQUFFLFdBQVcsRUFBQyxhQUFhLEVBQUUsTUFBTSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUM7SUFDcEssRUFBQyxTQUFTLEVBQUMsV0FBVyxFQUFFLGNBQWMsRUFBQyxZQUFZLEVBQUUsT0FBTyxFQUFDLGtCQUFrQixFQUFFLFdBQVcsRUFBQyxhQUFhLEVBQUUsTUFBTSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUM7SUFDNUosRUFBQyxTQUFTLEVBQUMsV0FBVyxFQUFFLGNBQWMsRUFBQyxvQkFBb0IsRUFBRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsV0FBVyxFQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxZQUFZLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQztJQUN0SyxFQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUUsY0FBYyxFQUFDLG9CQUFvQixFQUFFLE9BQU8sRUFBQyxrQkFBa0IsRUFBRSxXQUFXLEVBQUMsYUFBYSxFQUFFLE1BQU0sRUFBQyxVQUFVLEVBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFDO0lBQ3hLLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBRSxjQUFjLEVBQUMsb0JBQW9CLEVBQUUsT0FBTyxFQUFDLGtCQUFrQixFQUFFLFdBQVcsRUFBQyxhQUFhLEVBQUUsTUFBTSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUM7Q0FDcks7QUFFRDtJQUF1Qyw2Q0FBMkI7SUFBbEU7UUFBQSxxRUFVQzs7OztRQVJDLFVBQUksR0FBRyxJQUFJLGVBQWUsQ0FBb0IsWUFBWSxDQUFDLENBQUM7O0lBUTlELENBQUM7SUFOQyxpR0FBaUc7Ozs7O0lBQ2pHLG1DQUFPOzs7O0lBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELHNDQUFVOzs7SUFBVixjQUFjLENBQUM7SUFDakIsd0JBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBdUMsVUFBVSxHQVVoRDs7Ozs7OztJQVJDLGlDQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgVmlld0NoaWxkcmVuLCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEYXRhU291cmNlfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xyXG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJhcHAtdGFibGUtbGliXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi90YWJsZS1saWIuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vdGFibGUtbGliLmNvbXBvbmVudC5zY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVMaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIFxyXG4gIGRpc3BsYXllZENvbHVtbnMgPSBbJ1JlZmVyZW5jZU51bWJlcicsICdDdXN0b21lckluZm8nLCAnU3RhdHVzJywgJ0RhdGUnLCAnQWN0aW9ucyddO1xyXG4gIGRhdGFTb3VyY2UgPSBuZXcgRXhhbXBsZURhdGFTb3VyY2UoKTtcclxuICAvLyBkYXRhU291cmNlOiBFeGFtcGxlRGF0YVNvdXJjZSB8IG51bGw7XHJcbiAgXHJcbiAgQFZpZXdDaGlsZHJlbignY2Rrcm93JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIGNvbnRhaW5lcnM7XHJcbiAgICBleHBhbmRlZFJvdzogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBFeGFtcGxlRGF0YVNvdXJjZSh0aGlzLmV4YW1wbGVEYXRhYmFzZSk7XHJcbiAgfVxyXG4gIGV4cGFuZFJvdyhpbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5leHBhbmRlZFJvdyAhPSBudWxsKSB7XHJcbiAgICAgIHRoaXMuY29udGFpbmVycy50b0FycmF5KClbdGhpcy5leHBhbmRlZFJvd10uY2xlYXIoKTtcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0Q2VsbENvbG9yKHN0YXR1cyk6c3RyaW5nIHtcclxuICAgICAgaWYgKHN0YXR1cyA9PVwiVkVSSUZZXCIpeyByZXR1cm4gJ3JlZC1jb2xvcic7fVxyXG4gICAgICBpZiAoc3RhdHVzID09XCJERVNQSVRVVEVcIil7IHJldHVybiAneWVsbG93LWNvbG9yJzt9XHJcbiAgICAgIGlmIChzdGF0dXMgPT1cIkNPTVBMRVRFXCIpeyByZXR1cm4gJ2dyZWVuLWNvbG9yJzt9XHJcbiAgICAgIGlmIChzdGF0dXMgPT1cIkFDSUNcIil7IHJldHVybiAnYmx1ZS1jb2xvcic7fVxyXG4gIH1cclxuICBnZXRDZWxsSW1hZ2Uoc3RhdHVzKTpzdHJpbmcge1xyXG4gICAgY29uc29sZS5sb2coJ3RoaXMgaXMgc3RhdHVzJywgc3RhdHVzKTtcclxuICAgIGlmIChzdGF0dXMgPT1cIiBcIil7IHJldHVybiAnLi4vYXNzZXRzL2ltYWdlcy90YWJsZV9hbGxfaWNvbnMuc3ZnJzt9XHJcbiAgICBpZiAoc3RhdHVzID09XCJWRVJJRllcIil7IHJldHVybiAnLi4vYXNzZXRzL2ltYWdlcy90YWJsZV92ZXJpZnlfaWNvbi5zdmcnO31cclxuICAgIGlmIChzdGF0dXMgPT1cIkNPTVBMRVRFXCIpeyByZXR1cm4gJy4uL2Fzc2V0cy9pbWFnZXMvdGFibGVfY29tcGxldGVfaWNvbi5zdmcnO31cclxuICAgIGlmIChzdGF0dXMgPT1cIkFDSUNcIil7IHJldHVybiAnLi4vYXNzZXRzL2ltYWdlcy90YWJsZV9hY2ljX2ljb24uc3ZnJzt9XHJcbn1cclxuICBnZXRBZGRyZXNzQ2VsbENvbG9yKHN0YXR1cyk6IHN0cmluZ3tcclxuICAgICAgaWYgKHN0YXR1cyA9PVwiVkVSSUZZXCIgfHwgc3RhdHVzPT1cIiBcIil7IHJldHVybiAnZ3JlZW4tY29sb3InO31cclxuICAgICAgLy8gaWYgKHN0YXR1cyA9PVwiREVTUElUVVRFXCIpeyByZXR1cm4gJ2dyZWVuLWNvbG9yJzt9XHJcbiAgICAgIGlmIChzdGF0dXMgPT1cIkNPTVBMRVRFXCIpeyByZXR1cm4gJ2RhcmstY29sb3InO31cclxuICAgICAgaWYgKHN0YXR1cyA9PVwiQUNJQ1wiKXsgcmV0dXJuICdkYXJrLWNvbG9yJzt9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBlcmlvZGljRWxlbWVudCB7XHJcbiAgUmVmZXJlbmNlOiBzdHJpbmc7XHJcbiAgTnVtYmVyQ3VzdG9tZXI6IHN0cmluZztcclxuICBBZGRyZXNzOiBzdHJpbmc7XHJcbiAgUGhvbmVOdW1iZXI6IHN0cmluZztcclxuICBTdGF0dXM6c3RyaW5nO1xyXG4gIERhdGU6IHN0cmluZztcclxuICBUaW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXHJcbiAge1JlZmVyZW5jZTonUEMwMS0xMDExJywgTnVtYmVyQ3VzdG9tZXI6J1N1amFuYSBKYW1hcmthdHRlbCcsIEFkZHJlc3M6J3N1emptcjE5OTNAZ21haWwnLCBQaG9uZU51bWJlcjonNDUyIDQ1NSA0OTEnLCBTdGF0dXM6XCIgXCIgLERhdGU6JzU1IE1pbicsIFRpbWU6Jyd9LFxyXG4gIHtSZWZlcmVuY2U6J1BDMDEtMTAxMScsIE51bWJlckN1c3RvbWVyOidNYXJrIEJyb3duJywgQWRkcmVzczonc3V6am1yMTk5M0BnbWFpbCcsIFBob25lTnVtYmVyOic0NTIgNDU1IDQ5MScsIFN0YXR1czonVkVSSUZZJyxEYXRlOic4IEhyIDQwJyxUaW1lOicnfSxcclxuICB7UmVmZXJlbmNlOidQQzAxLTEwMTEnLCBOdW1iZXJDdXN0b21lcjonTWFyayBCcm93bicsIEFkZHJlc3M6J3N1emptcjE5OTNAZ21haWwnLCBQaG9uZU51bWJlcjonNDUyIDQ1NSA0OTEnLCBTdGF0dXM6J0RFU1BJVFVURScsRGF0ZTonMTUvMTEvMjAxOScsIFRpbWU6JzAyOjQ1IFBNJ30sXHJcbiAge1JlZmVyZW5jZTonUEMwMS0xMDExJywgTnVtYmVyQ3VzdG9tZXI6J1N1amFuYSBKYW1hcmthdHRlbCcsIEFkZHJlc3M6J3N1emptcjE5OTNAZ21haWwnLCBQaG9uZU51bWJlcjonNDUyIDQ1NSA0OTEnLCBTdGF0dXM6J0NPTVBMRVRFJyxEYXRlOicxNS8xMS8yMDE5JywgVGltZTonMDI6NDUgUE0nfSxcclxuICB7UmVmZXJlbmNlOidQQzAxLTEwMTEnLCBOdW1iZXJDdXN0b21lcjonU3VqYW5hIEphbWFya2F0dGVsJywgQWRkcmVzczonc3V6am1yMTk5M0BnbWFpbCcsIFBob25lTnVtYmVyOic0NTIgNDU1IDQ5MScsIFN0YXR1czonVkVSSUZZJyxEYXRlOicxNS8xMS8yMDE5JywgVGltZTonMDI6NDUgUE0nfSwgXHJcbiAge1JlZmVyZW5jZTonUEMwMS0xMDExJywgTnVtYmVyQ3VzdG9tZXI6J01hcmsgQnJvd24nLCBBZGRyZXNzOidzdXpqbXIxOTkzQGdtYWlsJywgUGhvbmVOdW1iZXI6JzQ1MiA0NTUgNDkxJywgU3RhdHVzOidWRVJJRlknLERhdGU6JzE1LzExLzIwMTknLCBUaW1lOicwMjo0NSBQTSd9LFxyXG4gIHtSZWZlcmVuY2U6J1BDMDEtMTAxMScsIE51bWJlckN1c3RvbWVyOidTdWphbmEgSmFtYXJrYXR0ZWwnLCBBZGRyZXNzOidzdXpqbXIxOTkzQGdtYWlsJywgUGhvbmVOdW1iZXI6JzQ1MiA0NTUgNDkxJywgU3RhdHVzOidBQ0lDJyxEYXRlOicxNS8xMS8yMDE5JyxUaW1lOicwMjo0NSBQTSd9LFxyXG4gIHtSZWZlcmVuY2U6J1BDMDEtMTAxMScsIE51bWJlckN1c3RvbWVyOidNYXJrIEJyb3duJywgQWRkcmVzczonc3V6am1yMTk5M0BnbWFpbCcsIFBob25lTnVtYmVyOic0NTIgNDU1IDQ5MScsIFN0YXR1czonQUNJQycsRGF0ZTonMTUvMTEvMjAxOScsVGltZTonMDI6NDUgUE0nfSxcclxuICB7UmVmZXJlbmNlOidQQzAxLTEwMTEnLCBOdW1iZXJDdXN0b21lcjonU3VqYW5hIEphbWFya2F0dGVsJywgQWRkcmVzczonc3V6am1yMTk5M0BnbWFpbCcsIFBob25lTnVtYmVyOic0NTIgNDU1IDQ5MScsIFN0YXR1czonVkVSSUZZJyxEYXRlOicxNS8xMS8yMDE5JyxUaW1lOicwMjo0NSBQTSd9LFxyXG4gIHtSZWZlcmVuY2U6J1BDMDEtMTAxMScsIE51bWJlckN1c3RvbWVyOidTdWphbmEgSmFtYXJrYXR0ZWwnLCBBZGRyZXNzOidzdXpqbXIxOTkzQGdtYWlsJywgUGhvbmVOdW1iZXI6JzQ1MiA0NTUgNDkxJywgU3RhdHVzOidDT01QTEVURScsRGF0ZTonMTUvMTEvMjAxOScsVGltZTonMDI6NDUgUE0nfSxcclxuICB7UmVmZXJlbmNlOidQQzAxLTEwMTEnLCBOdW1iZXJDdXN0b21lcjonU3VqYW5hIEphbWFya2F0dGVsJywgQWRkcmVzczonc3V6am1yMTk5M0BnbWFpbCcsIFBob25lTnVtYmVyOic0NTIgNDU1IDQ5MScsIFN0YXR1czonQUNJQycsRGF0ZTonMTUvMTEvMjAxOScsVGltZTonMDI6NDUgUE0nfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjbGFzcyBFeGFtcGxlRGF0YVNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2U8UGVyaW9kaWNFbGVtZW50PiB7XHJcbiAgLyoqIFN0cmVhbSBvZiBkYXRhIHRoYXQgaXMgcHJvdmlkZWQgdG8gdGhlIHRhYmxlLiAqL1xyXG4gIGRhdGEgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFBlcmlvZGljRWxlbWVudFtdPihFTEVNRU5UX0RBVEEpO1xyXG5cclxuICAvKiogQ29ubmVjdCBmdW5jdGlvbiBjYWxsZWQgYnkgdGhlIHRhYmxlIHRvIHJldHJpZXZlIG9uZSBzdHJlYW0gY29udGFpbmluZyB0aGUgZGF0YSB0byByZW5kZXIuICovXHJcbiAgY29ubmVjdCgpOiBPYnNlcnZhYmxlPFBlcmlvZGljRWxlbWVudFtdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xyXG4gIH1cclxuXHJcbiAgZGlzY29ubmVjdCgpIHt9XHJcbn1cclxuIl19