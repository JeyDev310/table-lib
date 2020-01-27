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
                    template: "<div class=\"example-container mat-elevation-z8\">\r\n    <div #insertionPoint></div>\r\n    <cdk-table #table [dataSource]=\"dataSource\" class=\"example-table\">\r\n\r\n        <ng-container cdkColumnDef=\"ReferenceNumber\">\r\n            <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell example-header-ReferenceNumber\"> Reference Number </cdk-header-cell>\r\n            <cdk-cell *cdkCellDef=\"let row\" class=\"example-cell example-header-ReferenceNumber\"> {{row.Reference}}</cdk-cell>\r\n        </ng-container>\r\n    \r\n        <ng-container cdkColumnDef=\"CustomerInfo\">\r\n            <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell example-header-custominfo\"> Customer Info </cdk-header-cell>\r\n            <cdk-cell *cdkCellDef=\"let row\" class=\"example-cell example-header-custominfo\"> \r\n                <span >{{row.NumberCustomer}} </span><br>\r\n                <span [ngClass]=\"getAddressCellColor(row.Status)\">{{row.Address}} | {{row.PhoneNumber}}</span>\r\n            </cdk-cell>\r\n        </ng-container>\r\n    \r\n        <ng-container cdkColumnDef=\"Status\">\r\n            <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell example-header-status\">Status</cdk-header-cell>\r\n            <cdk-cell *cdkCellDef=\"let row\" class=\"example-cell example-header-status\"\r\n                    [ngClass]=\"getCellColor(row.Status)\">\r\n\r\n                    <div style=\"width:80px; float: left;\">{{row.Status}}</div>\r\n                    <div><img src={{getCellImage(row.Status)}} alt=\"\" class=\"mCS_img_loaded\"></div>\r\n\r\n            </cdk-cell>\r\n        </ng-container>\r\n        \r\n        <ng-container cdkColumnDef=\"Date\">\r\n            <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell example-header-date\">Date</cdk-header-cell>\r\n            <cdk-cell *cdkCellDef=\"let row\" class=\"example-cell example-header-date date-bold\">\r\n            <span>{{row.Date}}</span><br>\r\n            <span>{{row.Time}}</span>\r\n            </cdk-cell>\r\n        </ng-container>\r\n\r\n        <ng-container cdkColumnDef=\"Actions\">\r\n            <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell example-header-actions\">Actions</cdk-header-cell>\r\n            <cdk-cell *cdkCellDef=\"let row\" class=\"example-cell example-header-actions\">\r\n                    <img src=\"../assets/images/action_icon.svg\" alt=\"\" class=\"mCS_img_loaded\">\r\n            </cdk-cell>\r\n        </ng-container>\r\n        \r\n        <cdk-header-row *cdkHeaderRowDef=\"displayedColumns; sticky: true\" class=\"example-header-row header-boder\"></cdk-header-row>\r\n    \r\n        <!-- <cdk-row [style.height.px]=\"placeholderHeight\" mat-row *cdkRowDef=\"let row; columns: displayedColumns; let index=index columns: []; when: placeholderWhen\" class=\"example-row\"\r\n            (click)=\"expandRow(index)\"\r\n            #cdkrow>\r\n        </cdk-row> -->\r\n        <!-- <cdk-row mat-row *cdkRowDef=\"let row; columns: displayedColumns; let index=index columns: [];\" class=\"example-row\"\r\n        (click)=\"expandRow(index)\"\r\n        #cdkrow>\r\n    </cdk-row> -->\r\n        <cdk-row mat-row *cdkRowDef=\"let row; columns: displayedColumns; let index=index columns: [];\" class=\"example-row\"\r\n            (click)=\"expandRow(index)\"\r\n            #cdkrow>\r\n        </cdk-row>\r\n   \r\n    </cdk-table>\r\n</div>\r\n  \r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtbGliLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsd0JBQXdCLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBR3JDO0lBY0ksMkJBQW9CLFFBQWtDO1FBQWxDLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBTnhELHFCQUFnQixHQUFHLENBQUMsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDcEYsZUFBVSxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztJQU1yQyxDQUFDOzs7O0lBRUQsb0NBQVE7OztJQUFSO1FBQ0UsaUVBQWlFO0lBQ25FLENBQUM7Ozs7O0lBQ0QscUNBQVM7Ozs7SUFBVCxVQUFVLEtBQWE7UUFDckIsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksRUFBRTtZQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNyRDtJQUNILENBQUM7Ozs7O0lBQ0Qsd0NBQVk7Ozs7SUFBWixVQUFhLE1BQU07UUFDZixJQUFJLE1BQU0sSUFBRyxRQUFRLEVBQUM7WUFBRSxPQUFPLFdBQVcsQ0FBQztTQUFDO1FBQzVDLElBQUksTUFBTSxJQUFHLFdBQVcsRUFBQztZQUFFLE9BQU8sY0FBYyxDQUFDO1NBQUM7UUFDbEQsSUFBSSxNQUFNLElBQUcsVUFBVSxFQUFDO1lBQUUsT0FBTyxhQUFhLENBQUM7U0FBQztR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QVUsRUFBQztDQUNySztBQUVEO0lBQXVDLDZDQUEyQjtJQUFsRTtRQUFBLHFFQVVDOzs7O1FBUkMsVUFBSSxHQUFHLElBQUksZUFBZSxDQUFvQixZQUFZLENBQUMsQ0FBQzs7SUFROUQsQ0FBQztJQU5DLGlHQUFpRzs7Ozs7SUFDakcsbUNBQU87Ozs7SUFBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsc0NBQVU7OztJQUFWLGNBQWMsQ0FBQztJQUNqQix3QkFBQztBQUFELENBQUMsQUFWRCxDQUF1QyxVQUFVLEdBVWhEOzs7Ozs7O0lBUkMsaUNBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBWaWV3Q2hpbGRyZW4sIFZpZXdDb250YWluZXJSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XHJcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImFwcC10YWJsZS1saWJcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL3RhYmxlLWxpYi5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi90YWJsZS1saWIuY29tcG9uZW50LnNjc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgXHJcbiAgZGlzcGxheWVkQ29sdW1ucyA9IFsnUmVmZXJlbmNlTnVtYmVyJywgJ0N1c3RvbWVySW5mbycsICdTdGF0dXMnLCAnRGF0ZScsICdBY3Rpb25zJ107XHJcbiAgZGF0YVNvdXJjZSA9IG5ldyBFeGFtcGxlRGF0YVNvdXJjZSgpO1xyXG4gIC8vIGRhdGFTb3VyY2U6IEV4YW1wbGVEYXRhU291cmNlIHwgbnVsbDtcclxuICBcclxuICBAVmlld0NoaWxkcmVuKCdjZGtyb3cnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgY29udGFpbmVycztcclxuICAgIGV4cGFuZGVkUm93OiBudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gdGhpcy5kYXRhU291cmNlID0gbmV3IEV4YW1wbGVEYXRhU291cmNlKHRoaXMuZXhhbXBsZURhdGFiYXNlKTtcclxuICB9XHJcbiAgZXhwYW5kUm93KGluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmV4cGFuZGVkUm93ICE9IG51bGwpIHtcclxuICAgICAgdGhpcy5jb250YWluZXJzLnRvQXJyYXkoKVt0aGlzLmV4cGFuZGVkUm93XS5jbGVhcigpO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXRDZWxsQ29sb3Ioc3RhdHVzKTpzdHJpbmcge1xyXG4gICAgICBpZiAoc3RhdHVzID09XCJWRVJJRllcIil7IHJldHVybiAncmVkLWNvbG9yJzt9XHJcbiAgICAgIGlmIChzdGF0dXMgPT1cIkRFU1BJVFVURVwiKXsgcmV0dXJuICd5ZWxsb3ctY29sb3InO31cclxuICAgICAgaWYgKHN0YXR1cyA9PVwiQ09NUExFVEVcIil7IHJldHVybiAnZ3JlZW4tY29sb3InO31cclxuICAgICAgaWYgKHN0YXR1cyA9PVwiQUNJQ1wiKXsgcmV0dXJuICdibHVlLWNvbG9yJzt9XHJcbiAgfVxyXG4gIGdldENlbGxJbWFnZShzdGF0dXMpOnN0cmluZyB7XHJcbiAgICBjb25zb2xlLmxvZygndGhpcyBpcyBzdGF0dXMnLCBzdGF0dXMpO1xyXG4gICAgaWYgKHN0YXR1cyA9PVwiIFwiKXsgcmV0dXJuICcuLi9hc3NldHMvaW1hZ2VzL3RhYmxlX2FsbF9pY29ucy5zdmcnO31cclxuICAgIGlmIChzdGF0dXMgPT1cIlZFUklGWVwiKXsgcmV0dXJuICcuLi9hc3NldHMvaW1hZ2VzL3RhYmxlX3ZlcmlmeV9pY29uLnN2Zyc7fVxyXG4gICAgaWYgKHN0YXR1cyA9PVwiQ09NUExFVEVcIil7IHJldHVybiAnLi4vYXNzZXRzL2ltYWdlcy90YWJsZV9jb21wbGV0ZV9pY29uLnN2Zyc7fVxyXG4gICAgaWYgKHN0YXR1cyA9PVwiQUNJQ1wiKXsgcmV0dXJuICcuLi9hc3NldHMvaW1hZ2VzL3RhYmxlX2FjaWNfaWNvbi5zdmcnO31cclxufVxyXG4gIGdldEFkZHJlc3NDZWxsQ29sb3Ioc3RhdHVzKTogc3RyaW5ne1xyXG4gICAgICBpZiAoc3RhdHVzID09XCJWRVJJRllcIiB8fCBzdGF0dXM9PVwiIFwiKXsgcmV0dXJuICdncmVlbi1jb2xvcic7fVxyXG4gICAgICBpZiAoc3RhdHVzID09XCJDT01QTEVURVwiKXsgcmV0dXJuICdkYXJrLWNvbG9yJzt9XHJcbiAgICAgIGlmIChzdGF0dXMgPT1cIkFDSUNcIil7IHJldHVybiAnZGFyay1jb2xvcic7fVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQZXJpb2RpY0VsZW1lbnQge1xyXG4gIFJlZmVyZW5jZTogc3RyaW5nO1xyXG4gIE51bWJlckN1c3RvbWVyOiBzdHJpbmc7XHJcbiAgQWRkcmVzczogc3RyaW5nO1xyXG4gIFBob25lTnVtYmVyOiBzdHJpbmc7XHJcbiAgU3RhdHVzOnN0cmluZztcclxuICBEYXRlOiBzdHJpbmc7XHJcbiAgVGltZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBFTEVNRU5UX0RBVEE6IFBlcmlvZGljRWxlbWVudFtdID0gW1xyXG4gIHtSZWZlcmVuY2U6J1BDMDEtMTAxMScsIE51bWJlckN1c3RvbWVyOidTdWphbmEgSmFtYXJrYXR0ZWwnLCBBZGRyZXNzOidzdXpqbXIxOTkzQGdtYWlsJywgUGhvbmVOdW1iZXI6JzQ1MiA0NTUgNDkxJywgU3RhdHVzOlwiIFwiICxEYXRlOic1NSBNaW4nLCBUaW1lOicnfSxcclxuICB7UmVmZXJlbmNlOidQQzAxLTEwMTEnLCBOdW1iZXJDdXN0b21lcjonTWFyayBCcm93bicsIEFkZHJlc3M6J3N1emptcjE5OTNAZ21haWwnLCBQaG9uZU51bWJlcjonNDUyIDQ1NSA0OTEnLCBTdGF0dXM6J1ZFUklGWScsRGF0ZTonOCBIciA0MCcsVGltZTonJ30sXHJcbiAge1JlZmVyZW5jZTonUEMwMS0xMDExJywgTnVtYmVyQ3VzdG9tZXI6J01hcmsgQnJvd24nLCBBZGRyZXNzOidzdXpqbXIxOTkzQGdtYWlsJywgUGhvbmVOdW1iZXI6JzQ1MiA0NTUgNDkxJywgU3RhdHVzOidERVNQSVRVVEUnLERhdGU6JzE1LzExLzIwMTknLCBUaW1lOicwMjo0NSBQTSd9LFxyXG4gIHtSZWZlcmVuY2U6J1BDMDEtMTAxMScsIE51bWJlckN1c3RvbWVyOidTdWphbmEgSmFtYXJrYXR0ZWwnLCBBZGRyZXNzOidzdXpqbXIxOTkzQGdtYWlsJywgUGhvbmVOdW1iZXI6JzQ1MiA0NTUgNDkxJywgU3RhdHVzOidDT01QTEVURScsRGF0ZTonMTUvMTEvMjAxOScsIFRpbWU6JzAyOjQ1IFBNJ30sXHJcbiAge1JlZmVyZW5jZTonUEMwMS0xMDExJywgTnVtYmVyQ3VzdG9tZXI6J1N1amFuYSBKYW1hcmthdHRlbCcsIEFkZHJlc3M6J3N1emptcjE5OTNAZ21haWwnLCBQaG9uZU51bWJlcjonNDUyIDQ1NSA0OTEnLCBTdGF0dXM6J1ZFUklGWScsRGF0ZTonMTUvMTEvMjAxOScsIFRpbWU6JzAyOjQ1IFBNJ30sIFxyXG4gIHtSZWZlcmVuY2U6J1BDMDEtMTAxMScsIE51bWJlckN1c3RvbWVyOidNYXJrIEJyb3duJywgQWRkcmVzczonc3V6am1yMTk5M0BnbWFpbCcsIFBob25lTnVtYmVyOic0NTIgNDU1IDQ5MScsIFN0YXR1czonVkVSSUZZJyxEYXRlOicxNS8xMS8yMDE5JywgVGltZTonMDI6NDUgUE0nfSxcclxuICB7UmVmZXJlbmNlOidQQzAxLTEwMTEnLCBOdW1iZXJDdXN0b21lcjonU3VqYW5hIEphbWFya2F0dGVsJywgQWRkcmVzczonc3V6am1yMTk5M0BnbWFpbCcsIFBob25lTnVtYmVyOic0NTIgNDU1IDQ5MScsIFN0YXR1czonQUNJQycsRGF0ZTonMTUvMTEvMjAxOScsVGltZTonMDI6NDUgUE0nfSxcclxuICB7UmVmZXJlbmNlOidQQzAxLTEwMTEnLCBOdW1iZXJDdXN0b21lcjonTWFyayBCcm93bicsIEFkZHJlc3M6J3N1emptcjE5OTNAZ21haWwnLCBQaG9uZU51bWJlcjonNDUyIDQ1NSA0OTEnLCBTdGF0dXM6J0FDSUMnLERhdGU6JzE1LzExLzIwMTknLFRpbWU6JzAyOjQ1IFBNJ30sXHJcbiAge1JlZmVyZW5jZTonUEMwMS0xMDExJywgTnVtYmVyQ3VzdG9tZXI6J1N1amFuYSBKYW1hcmthdHRlbCcsIEFkZHJlc3M6J3N1emptcjE5OTNAZ21haWwnLCBQaG9uZU51bWJlcjonNDUyIDQ1NSA0OTEnLCBTdGF0dXM6J1ZFUklGWScsRGF0ZTonMTUvMTEvMjAxOScsVGltZTonMDI6NDUgUE0nfSxcclxuICB7UmVmZXJlbmNlOidQQzAxLTEwMTEnLCBOdW1iZXJDdXN0b21lcjonU3VqYW5hIEphbWFya2F0dGVsJywgQWRkcmVzczonc3V6am1yMTk5M0BnbWFpbCcsIFBob25lTnVtYmVyOic0NTIgNDU1IDQ5MScsIFN0YXR1czonQ09NUExFVEUnLERhdGU6JzE1LzExLzIwMTknLFRpbWU6JzAyOjQ1IFBNJ30sXHJcbiAge1JlZmVyZW5jZTonUEMwMS0xMDExJywgTnVtYmVyQ3VzdG9tZXI6J1N1amFuYSBKYW1hcmthdHRlbCcsIEFkZHJlc3M6J3N1emptcjE5OTNAZ21haWwnLCBQaG9uZU51bWJlcjonNDUyIDQ1NSA0OTEnLCBTdGF0dXM6J0FDSUMnLERhdGU6JzE1LzExLzIwMTknLFRpbWU6JzAyOjQ1IFBNJ30sXHJcbl07XHJcblxyXG5leHBvcnQgY2xhc3MgRXhhbXBsZURhdGFTb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlPFBlcmlvZGljRWxlbWVudD4ge1xyXG4gIC8qKiBTdHJlYW0gb2YgZGF0YSB0aGF0IGlzIHByb3ZpZGVkIHRvIHRoZSB0YWJsZS4gKi9cclxuICBkYXRhID0gbmV3IEJlaGF2aW9yU3ViamVjdDxQZXJpb2RpY0VsZW1lbnRbXT4oRUxFTUVOVF9EQVRBKTtcclxuXHJcbiAgLyoqIENvbm5lY3QgZnVuY3Rpb24gY2FsbGVkIGJ5IHRoZSB0YWJsZSB0byByZXRyaWV2ZSBvbmUgc3RyZWFtIGNvbnRhaW5pbmcgdGhlIGRhdGEgdG8gcmVuZGVyLiAqL1xyXG4gIGNvbm5lY3QoKTogT2JzZXJ2YWJsZTxQZXJpb2RpY0VsZW1lbnRbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcclxuICB9XHJcblxyXG4gIGRpc2Nvbm5lY3QoKSB7fVxyXG59XHJcbiJdfQ==