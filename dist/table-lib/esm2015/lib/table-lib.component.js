/**
 * @fileoverview added by tsickle
 * Generated from: lib/table-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ComponentFactoryResolver, ViewChildren, ViewContainerRef } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject } from 'rxjs';
export class TableLibComponent {
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
                template: "<div class=\"example-container mat-elevation-z8\">\r\n    <div #insertionPoint></div>\r\n    <cdk-table #table [dataSource]=\"dataSource\" class=\"example-table\">\r\n\r\n        <ng-container cdkColumnDef=\"ReferenceNumber\">\r\n            <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell example-header-ReferenceNumber\"> Reference Number </cdk-header-cell>\r\n            <cdk-cell *cdkCellDef=\"let row\" class=\"example-cell example-header-ReferenceNumber\"> {{row.Reference}}</cdk-cell>\r\n        </ng-container>\r\n    \r\n        <ng-container cdkColumnDef=\"CustomerInfo\">\r\n            <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell example-header-custominfo\"> Customer Info </cdk-header-cell>\r\n            <cdk-cell *cdkCellDef=\"let row\" class=\"example-cell example-header-custominfo\"> \r\n                <span >{{row.NumberCustomer}} </span><br>\r\n                <span [ngClass]=\"getAddressCellColor(row.Status)\">{{row.Address}} | {{row.PhoneNumber}}</span>\r\n            </cdk-cell>\r\n        </ng-container>\r\n    \r\n        <ng-container cdkColumnDef=\"Status\">\r\n            <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell example-header-status\">Status</cdk-header-cell>\r\n            <cdk-cell *cdkCellDef=\"let row\" class=\"example-cell example-header-status\"\r\n                    [ngClass]=\"getCellColor(row.Status)\">\r\n\r\n                    <div style=\"width:80px; float: left;\">{{row.Status}}</div>\r\n                    <div><img src={{getCellImage(row.Status)}} alt=\"\" class=\"mCS_img_loaded\"></div>\r\n\r\n            </cdk-cell>\r\n        </ng-container>\r\n        \r\n        <ng-container cdkColumnDef=\"Date\">\r\n            <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell example-header-date\">Date</cdk-header-cell>\r\n            <cdk-cell *cdkCellDef=\"let row\" class=\"example-cell example-header-date date-bold\">\r\n            <span>{{row.Date}}</span><br>\r\n            <span>{{row.Time}}</span>\r\n            </cdk-cell>\r\n        </ng-container>\r\n\r\n        <ng-container cdkColumnDef=\"Actions\">\r\n            <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell example-header-actions\">Actions</cdk-header-cell>\r\n            <cdk-cell *cdkCellDef=\"let row\" class=\"example-cell example-header-actions\">\r\n                    <img src=\"../assets/images/action_icon.svg\" alt=\"\" class=\"mCS_img_loaded\">\r\n            </cdk-cell>\r\n        </ng-container>\r\n        \r\n        <cdk-header-row *cdkHeaderRowDef=\"displayedColumns; sticky: true\" class=\"example-header-row header-boder\"></cdk-header-row>\r\n    \r\n        <!-- <cdk-row [style.height.px]=\"placeholderHeight\" mat-row *cdkRowDef=\"let row; columns: displayedColumns; let index=index columns: []; when: placeholderWhen\" class=\"example-row\"\r\n            (click)=\"expandRow(index)\"\r\n            #cdkrow>\r\n        </cdk-row> -->\r\n        <!-- <cdk-row mat-row *cdkRowDef=\"let row; columns: displayedColumns; let index=index columns: [];\" class=\"example-row\"\r\n        (click)=\"expandRow(index)\"\r\n        #cdkrow>\r\n    </cdk-row> -->\r\n        <cdk-row mat-row *cdkRowDef=\"let row; columns: displayedColumns; let index=index columns: [];\" class=\"example-row\"\r\n            (click)=\"expandRow(index)\"\r\n            #cdkrow>\r\n        </cdk-row>\r\n   \r\n    </cdk-table>\r\n</div>\r\n  \r\n",
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
export class ExampleDataSource extends DataSource {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtbGliLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSx3QkFBd0IsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUcsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFTckMsTUFBTSxPQUFPLGlCQUFpQjs7OztJQVExQixZQUFvQixRQUFrQztRQUFsQyxhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQU54RCxxQkFBZ0IsR0FBRyxDQUFDLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3BGLGVBQVUsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7SUFNckMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixpRUFBaUU7SUFDbkUsQ0FBQzs7Ozs7SUFDRCxTQUFTLENBQUMsS0FBYTtRQUNyQixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxFQUFFO1lBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQzs7Ozs7SUFDRCxZQUFZLENBQUMsTUFBTTtRQUNmLElBQUksTUFBTSxJQUFHLFFBQVEsRUFBQztZQUFFLE9BQU8sV0FBVyxDQUFDO1NBQUM7UUFDNUMsSUFBSSxNQUFNLElBQUcsV0FBVyxFQUFDO1lBQUUsT0FBTyxjQUFjLENBQUM7U0FBQztRQUNsRCxJQUFJLE1BQU0sSUFBRyxVQUFVLEVBQUM7WUFBRSxPQUFPLGFBQWEsQ0FBQztTQUFDO1FBQ2hELElB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LElBQUksZUFBZSxDQUFvQixZQUFZLENBQUMsQ0FBQztJQVE5RCxDQUFDOzs7OztJQUxDLE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELFVBQVUsS0FBSSxDQUFDO0NBQ2hCOzs7Ozs7SUFSQyxpQ0FBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFZpZXdDaGlsZHJlbiwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcclxuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiYXBwLXRhYmxlLWxpYlwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vdGFibGUtbGliLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL3RhYmxlLWxpYi5jb21wb25lbnQuc2Nzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlTGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBcclxuICBkaXNwbGF5ZWRDb2x1bW5zID0gWydSZWZlcmVuY2VOdW1iZXInLCAnQ3VzdG9tZXJJbmZvJywgJ1N0YXR1cycsICdEYXRlJywgJ0FjdGlvbnMnXTtcclxuICBkYXRhU291cmNlID0gbmV3IEV4YW1wbGVEYXRhU291cmNlKCk7XHJcbiAgLy8gZGF0YVNvdXJjZTogRXhhbXBsZURhdGFTb3VyY2UgfCBudWxsO1xyXG4gIFxyXG4gIEBWaWV3Q2hpbGRyZW4oJ2Nka3JvdycsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSBjb250YWluZXJzO1xyXG4gICAgZXhwYW5kZWRSb3c6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgRXhhbXBsZURhdGFTb3VyY2UodGhpcy5leGFtcGxlRGF0YWJhc2UpO1xyXG4gIH1cclxuICBleHBhbmRSb3coaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuZXhwYW5kZWRSb3cgIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lcnMudG9BcnJheSgpW3RoaXMuZXhwYW5kZWRSb3ddLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldENlbGxDb2xvcihzdGF0dXMpOnN0cmluZyB7XHJcbiAgICAgIGlmIChzdGF0dXMgPT1cIlZFUklGWVwiKXsgcmV0dXJuICdyZWQtY29sb3InO31cclxuICAgICAgaWYgKHN0YXR1cyA9PVwiREVTUElUVVRFXCIpeyByZXR1cm4gJ3llbGxvdy1jb2xvcic7fVxyXG4gICAgICBpZiAoc3RhdHVzID09XCJDT01QTEVURVwiKXsgcmV0dXJuICdncmVlbi1jb2xvcic7fVxyXG4gICAgICBpZiAoc3RhdHVzID09XCJBQ0lDXCIpeyByZXR1cm4gJ2JsdWUtY29sb3InO31cclxuICB9XHJcbiAgZ2V0Q2VsbEltYWdlKHN0YXR1cyk6c3RyaW5nIHtcclxuICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHN0YXR1cycsIHN0YXR1cyk7XHJcbiAgICBpZiAoc3RhdHVzID09XCIgXCIpeyByZXR1cm4gJy4uL2Fzc2V0cy9pbWFnZXMvdGFibGVfYWxsX2ljb25zLnN2Zyc7fVxyXG4gICAgaWYgKHN0YXR1cyA9PVwiVkVSSUZZXCIpeyByZXR1cm4gJy4uL2Fzc2V0cy9pbWFnZXMvdGFibGVfdmVyaWZ5X2ljb24uc3ZnJzt9XHJcbiAgICBpZiAoc3RhdHVzID09XCJDT01QTEVURVwiKXsgcmV0dXJuICcuLi9hc3NldHMvaW1hZ2VzL3RhYmxlX2NvbXBsZXRlX2ljb24uc3ZnJzt9XHJcbiAgICBpZiAoc3RhdHVzID09XCJBQ0lDXCIpeyByZXR1cm4gJy4uL2Fzc2V0cy9pbWFnZXMvdGFibGVfYWNpY19pY29uLnN2Zyc7fVxyXG59XHJcbiAgZ2V0QWRkcmVzc0NlbGxDb2xvcihzdGF0dXMpOiBzdHJpbmd7XHJcbiAgICAgIGlmIChzdGF0dXMgPT1cIlZFUklGWVwiIHx8IHN0YXR1cz09XCIgXCIpeyByZXR1cm4gJ2dyZWVuLWNvbG9yJzt9XHJcbiAgICAgIGlmIChzdGF0dXMgPT1cIkNPTVBMRVRFXCIpeyByZXR1cm4gJ2RhcmstY29sb3InO31cclxuICAgICAgaWYgKHN0YXR1cyA9PVwiQUNJQ1wiKXsgcmV0dXJuICdkYXJrLWNvbG9yJzt9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBlcmlvZGljRWxlbWVudCB7XHJcbiAgUmVmZXJlbmNlOiBzdHJpbmc7XHJcbiAgTnVtYmVyQ3VzdG9tZXI6IHN0cmluZztcclxuICBBZGRyZXNzOiBzdHJpbmc7XHJcbiAgUGhvbmVOdW1iZXI6IHN0cmluZztcclxuICBTdGF0dXM6c3RyaW5nO1xyXG4gIERhdGU6IHN0cmluZztcclxuICBUaW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXHJcbiAge1JlZmVyZW5jZTonUEMwMS0xMDExJywgTnVtYmVyQ3VzdG9tZXI6J1N1amFuYSBKYW1hcmthdHRlbCcsIEFkZHJlc3M6J3N1emptcjE5OTNAZ21haWwnLCBQaG9uZU51bWJlcjonNDUyIDQ1NSA0OTEnLCBTdGF0dXM6XCIgXCIgLERhdGU6JzU1IE1pbicsIFRpbWU6Jyd9LFxyXG4gIHtSZWZlcmVuY2U6J1BDMDEtMTAxMScsIE51bWJlckN1c3RvbWVyOidNYXJrIEJyb3duJywgQWRkcmVzczonc3V6am1yMTk5M0BnbWFpbCcsIFBob25lTnVtYmVyOic0NTIgNDU1IDQ5MScsIFN0YXR1czonVkVSSUZZJyxEYXRlOic4IEhyIDQwJyxUaW1lOicnfSxcclxuICB7UmVmZXJlbmNlOidQQzAxLTEwMTEnLCBOdW1iZXJDdXN0b21lcjonTWFyayBCcm93bicsIEFkZHJlc3M6J3N1emptcjE5OTNAZ21haWwnLCBQaG9uZU51bWJlcjonNDUyIDQ1NSA0OTEnLCBTdGF0dXM6J0RFU1BJVFVURScsRGF0ZTonMTUvMTEvMjAxOScsIFRpbWU6JzAyOjQ1IFBNJ30sXHJcbiAge1JlZmVyZW5jZTonUEMwMS0xMDExJywgTnVtYmVyQ3VzdG9tZXI6J1N1amFuYSBKYW1hcmthdHRlbCcsIEFkZHJlc3M6J3N1emptcjE5OTNAZ21haWwnLCBQaG9uZU51bWJlcjonNDUyIDQ1NSA0OTEnLCBTdGF0dXM6J0NPTVBMRVRFJyxEYXRlOicxNS8xMS8yMDE5JywgVGltZTonMDI6NDUgUE0nfSxcclxuICB7UmVmZXJlbmNlOidQQzAxLTEwMTEnLCBOdW1iZXJDdXN0b21lcjonU3VqYW5hIEphbWFya2F0dGVsJywgQWRkcmVzczonc3V6am1yMTk5M0BnbWFpbCcsIFBob25lTnVtYmVyOic0NTIgNDU1IDQ5MScsIFN0YXR1czonVkVSSUZZJyxEYXRlOicxNS8xMS8yMDE5JywgVGltZTonMDI6NDUgUE0nfSwgXHJcbiAge1JlZmVyZW5jZTonUEMwMS0xMDExJywgTnVtYmVyQ3VzdG9tZXI6J01hcmsgQnJvd24nLCBBZGRyZXNzOidzdXpqbXIxOTkzQGdtYWlsJywgUGhvbmVOdW1iZXI6JzQ1MiA0NTUgNDkxJywgU3RhdHVzOidWRVJJRlknLERhdGU6JzE1LzExLzIwMTknLCBUaW1lOicwMjo0NSBQTSd9LFxyXG4gIHtSZWZlcmVuY2U6J1BDMDEtMTAxMScsIE51bWJlckN1c3RvbWVyOidTdWphbmEgSmFtYXJrYXR0ZWwnLCBBZGRyZXNzOidzdXpqbXIxOTkzQGdtYWlsJywgUGhvbmVOdW1iZXI6JzQ1MiA0NTUgNDkxJywgU3RhdHVzOidBQ0lDJyxEYXRlOicxNS8xMS8yMDE5JyxUaW1lOicwMjo0NSBQTSd9LFxyXG4gIHtSZWZlcmVuY2U6J1BDMDEtMTAxMScsIE51bWJlckN1c3RvbWVyOidNYXJrIEJyb3duJywgQWRkcmVzczonc3V6am1yMTk5M0BnbWFpbCcsIFBob25lTnVtYmVyOic0NTIgNDU1IDQ5MScsIFN0YXR1czonQUNJQycsRGF0ZTonMTUvMTEvMjAxOScsVGltZTonMDI6NDUgUE0nfSxcclxuICB7UmVmZXJlbmNlOidQQzAxLTEwMTEnLCBOdW1iZXJDdXN0b21lcjonU3VqYW5hIEphbWFya2F0dGVsJywgQWRkcmVzczonc3V6am1yMTk5M0BnbWFpbCcsIFBob25lTnVtYmVyOic0NTIgNDU1IDQ5MScsIFN0YXR1czonVkVSSUZZJyxEYXRlOicxNS8xMS8yMDE5JyxUaW1lOicwMjo0NSBQTSd9LFxyXG4gIHtSZWZlcmVuY2U6J1BDMDEtMTAxMScsIE51bWJlckN1c3RvbWVyOidTdWphbmEgSmFtYXJrYXR0ZWwnLCBBZGRyZXNzOidzdXpqbXIxOTkzQGdtYWlsJywgUGhvbmVOdW1iZXI6JzQ1MiA0NTUgNDkxJywgU3RhdHVzOidDT01QTEVURScsRGF0ZTonMTUvMTEvMjAxOScsVGltZTonMDI6NDUgUE0nfSxcclxuICB7UmVmZXJlbmNlOidQQzAxLTEwMTEnLCBOdW1iZXJDdXN0b21lcjonU3VqYW5hIEphbWFya2F0dGVsJywgQWRkcmVzczonc3V6am1yMTk5M0BnbWFpbCcsIFBob25lTnVtYmVyOic0NTIgNDU1IDQ5MScsIFN0YXR1czonQUNJQycsRGF0ZTonMTUvMTEvMjAxOScsVGltZTonMDI6NDUgUE0nfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjbGFzcyBFeGFtcGxlRGF0YVNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2U8UGVyaW9kaWNFbGVtZW50PiB7XHJcbiAgLyoqIFN0cmVhbSBvZiBkYXRhIHRoYXQgaXMgcHJvdmlkZWQgdG8gdGhlIHRhYmxlLiAqL1xyXG4gIGRhdGEgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFBlcmlvZGljRWxlbWVudFtdPihFTEVNRU5UX0RBVEEpO1xyXG5cclxuICAvKiogQ29ubmVjdCBmdW5jdGlvbiBjYWxsZWQgYnkgdGhlIHRhYmxlIHRvIHJldHJpZXZlIG9uZSBzdHJlYW0gY29udGFpbmluZyB0aGUgZGF0YSB0byByZW5kZXIuICovXHJcbiAgY29ubmVjdCgpOiBPYnNlcnZhYmxlPFBlcmlvZGljRWxlbWVudFtdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xyXG4gIH1cclxuXHJcbiAgZGlzY29ubmVjdCgpIHt9XHJcbn1cclxuIl19