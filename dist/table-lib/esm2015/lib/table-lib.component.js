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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtbGliLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSx3QkFBd0IsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUcsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFTckMsTUFBTSxPQUFPLGlCQUFpQjs7OztJQVExQixZQUFvQixRQUFrQztRQUFsQyxhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQU54RCxxQkFBZ0IsR0FBRyxDQUFDLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3BGLGVBQVUsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7SUFNckMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixpRUFBaUU7SUFDbkUsQ0FBQzs7Ozs7SUFDRCxTQUFTLENBQUMsS0FBYTtRQUNyQixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxFQUFFO1lBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQzs7Ozs7SUFDRCxZQUFZLENBQUMsTUFBTTtRQUNmLElBQUksTUFBTSxJQUFHLFFBQVEsRUFBQztZQUFFLE9BQU8sV0FBVyxDQUFDO1NBQUM7UUFDNUMsSUFBSSxNQUFNLElBQUcsV0FBVyxFQUFDO1lBQUUsT0FBTyxjQUFjLENBQUM7U0FBQztRQUNsRCxJQUFJLE1BQU0sSUFBRyxVQUFVLEVBQUM7WUFBRSxPQUFPLGFBQWEsQ0FBQztTQUFDO1FBQ2hELElBQUksTUFBTSxJQUFHLE1BQU0sRUFBQztZQUFFLE9BQU8sWUFBWSxDQUFDO1NBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFDRCxZQUFZLENBQUMsTUFBTTtRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLElBQUksTUFBTSxJQUFHLEdBQUcsRUFBQztZQUFFLE9BQU8sc0NBQXNDLENBQUM7U0FBQztRQUNsRSxJQUFJLE1BQU0sSUFBRyxRQUFRLEVBQUM7WUFBRSxPQUFPLHdDQUF3QyxDQUFDO1NBQUM7UUFDekUsSUFBSSxNQUFNLElBQUcsVUFBVSxFQUFDO1lBQUUsT0FBTywwQ0FBMEMsQ0FBQztTQUFDO1FBQzdFLElBQUksTUFBTSxJQUFHLE1BQU0sRUFBQztZQUFFLE9BQU8sc0NBQXNDLENBQUM7U0FBQztJQUN6RSxDQUFDOzs7OztJQUNDLG1CQUFtQixDQUFDLE1BQU07UUFDdEIsSUFBSSxNQUFNLElBQUcsUUFBUSxJQUFJLE1BQU0sSUFBRSxHQUFHLEVBQUM7WUFBRSxPQUFPLGFBQWEsQ0FBQztTQUFDO1FBQzdELG9EQUFvRDtRQUNwRCxJQUFJLE1BQU0sSUFBRyxVQUFVLEVBQUM7WUFBRSxPQUFPLFlBQVksQ0FBQztTQUFDO1FBQy9DLElBQUksTUFBTSxJQUFHLE1BQU0sRUFBQztZQUFFLE9BQU8sWUFBWSxDQUFDO1NBQUM7SUFDL0MsQ0FBQzs7O1lBM0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIseXJHQUF5Qzs7YUFFMUM7Ozs7WUFUMEIsd0JBQXdCOzs7eUJBaUJoRCxZQUFZLFNBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFOzs7O0lBSmxELDZDQUFvRjs7SUFDcEYsdUNBQXFDOztJQUdyQyx1Q0FBK0Q7O0lBQzdELHdDQUFvQjs7Ozs7SUFDUixxQ0FBMEM7Ozs7O0FBZ0MxRCxxQ0FRQzs7O0lBUEMsb0NBQWtCOztJQUNsQix5Q0FBdUI7O0lBQ3ZCLGtDQUFnQjs7SUFDaEIsc0NBQW9COztJQUNwQixpQ0FBYzs7SUFDZCwrQkFBYTs7SUFDYiwrQkFBYTs7O01BR1QsWUFBWSxHQUFzQjtJQUN0QyxFQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUUsY0FBYyxFQUFDLG9CQUFvQixFQUFFLE9BQU8sRUFBQyxrQkFBa0IsRUFBRSxXQUFXLEVBQUMsYUFBYSxFQUFFLE1BQU0sRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsRUFBRSxFQUFDO0lBQ3ZKLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBRSxjQUFjLEVBQUMsWUFBWSxFQUFFLE9BQU8sRUFBQyxrQkFBa0IsRUFBRSxXQUFXLEVBQUMsYUFBYSxFQUFFLE1BQU0sRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDO0lBQ25KLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBRSxjQUFjLEVBQUMsWUFBWSxFQUFFLE9BQU8sRUFBQyxrQkFBa0IsRUFBRSxXQUFXLEVBQUMsYUFBYSxFQUFFLE1BQU0sRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsVUFBVSxFQUFDO0lBQ2xLLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBRSxjQUFjLEVBQUMsb0JBQW9CLEVBQUUsT0FBTyxFQUFDLGtCQUFrQixFQUFFLFdBQVcsRUFBQyxhQUFhLEVBQUUsTUFBTSxFQUFDLFVBQVUsRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFFLElBQUksRUFBQyxVQUFVLEVBQUM7SUFDekssRUFBQyxTQUFTLEVBQUMsV0FBVyxFQUFFLGNBQWMsRUFBQyxvQkFBb0IsRUFBRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsV0FBVyxFQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLFVBQVUsRUFBQztJQUN2SyxFQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUUsY0FBYyxFQUFDLFlBQVksRUFBRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsV0FBVyxFQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLFVBQVUsRUFBQztJQUMvSixFQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUUsY0FBYyxFQUFDLG9CQUFvQixFQUFFLE9BQU8sRUFBQyxrQkFBa0IsRUFBRSxXQUFXLEVBQUMsYUFBYSxFQUFFLE1BQU0sRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFDO0lBQ3BLLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBRSxjQUFjLEVBQUMsWUFBWSxFQUFFLE9BQU8sRUFBQyxrQkFBa0IsRUFBRSxXQUFXLEVBQUMsYUFBYSxFQUFFLE1BQU0sRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFDO0lBQzVKLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBRSxjQUFjLEVBQUMsb0JBQW9CLEVBQUUsT0FBTyxFQUFDLGtCQUFrQixFQUFFLFdBQVcsRUFBQyxhQUFhLEVBQUUsTUFBTSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUM7SUFDdEssRUFBQyxTQUFTLEVBQUMsV0FBVyxFQUFFLGNBQWMsRUFBQyxvQkFBb0IsRUFBRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsV0FBVyxFQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUMsVUFBVSxFQUFDLElBQUksRUFBQyxZQUFZLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQztJQUN4SyxFQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUUsY0FBYyxFQUFDLG9CQUFvQixFQUFFLE9BQU8sRUFBQyxrQkFBa0IsRUFBRSxXQUFXLEVBQUMsYUFBYSxFQUFFLE1BQU0sRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFDO0NBQ3JLO0FBRUQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFVBQTJCO0lBQWxFOzs7OztRQUVFLFNBQUksR0FBRyxJQUFJLGVBQWUsQ0FBb0IsWUFBWSxDQUFDLENBQUM7SUFROUQsQ0FBQzs7Ozs7SUFMQyxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxVQUFVLEtBQUksQ0FBQztDQUNoQjs7Ozs7O0lBUkMsaUNBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBWaWV3Q2hpbGRyZW4sIFZpZXdDb250YWluZXJSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XHJcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImFwcC10YWJsZS1saWJcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL3RhYmxlLWxpYi5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi90YWJsZS1saWIuY29tcG9uZW50LnNjc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgXHJcbiAgZGlzcGxheWVkQ29sdW1ucyA9IFsnUmVmZXJlbmNlTnVtYmVyJywgJ0N1c3RvbWVySW5mbycsICdTdGF0dXMnLCAnRGF0ZScsICdBY3Rpb25zJ107XHJcbiAgZGF0YVNvdXJjZSA9IG5ldyBFeGFtcGxlRGF0YVNvdXJjZSgpO1xyXG4gIC8vIGRhdGFTb3VyY2U6IEV4YW1wbGVEYXRhU291cmNlIHwgbnVsbDtcclxuICBcclxuICBAVmlld0NoaWxkcmVuKCdjZGtyb3cnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgY29udGFpbmVycztcclxuICAgIGV4cGFuZGVkUm93OiBudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gdGhpcy5kYXRhU291cmNlID0gbmV3IEV4YW1wbGVEYXRhU291cmNlKHRoaXMuZXhhbXBsZURhdGFiYXNlKTtcclxuICB9XHJcbiAgZXhwYW5kUm93KGluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmV4cGFuZGVkUm93ICE9IG51bGwpIHtcclxuICAgICAgdGhpcy5jb250YWluZXJzLnRvQXJyYXkoKVt0aGlzLmV4cGFuZGVkUm93XS5jbGVhcigpO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXRDZWxsQ29sb3Ioc3RhdHVzKTpzdHJpbmcge1xyXG4gICAgICBpZiAoc3RhdHVzID09XCJWRVJJRllcIil7IHJldHVybiAncmVkLWNvbG9yJzt9XHJcbiAgICAgIGlmIChzdGF0dXMgPT1cIkRFU1BJVFVURVwiKXsgcmV0dXJuICd5ZWxsb3ctY29sb3InO31cclxuICAgICAgaWYgKHN0YXR1cyA9PVwiQ09NUExFVEVcIil7IHJldHVybiAnZ3JlZW4tY29sb3InO31cclxuICAgICAgaWYgKHN0YXR1cyA9PVwiQUNJQ1wiKXsgcmV0dXJuICdibHVlLWNvbG9yJzt9XHJcbiAgfVxyXG4gIGdldENlbGxJbWFnZShzdGF0dXMpOnN0cmluZyB7XHJcbiAgICBjb25zb2xlLmxvZygndGhpcyBpcyBzdGF0dXMnLCBzdGF0dXMpO1xyXG4gICAgaWYgKHN0YXR1cyA9PVwiIFwiKXsgcmV0dXJuICcuLi9hc3NldHMvaW1hZ2VzL3RhYmxlX2FsbF9pY29ucy5zdmcnO31cclxuICAgIGlmIChzdGF0dXMgPT1cIlZFUklGWVwiKXsgcmV0dXJuICcuLi9hc3NldHMvaW1hZ2VzL3RhYmxlX3ZlcmlmeV9pY29uLnN2Zyc7fVxyXG4gICAgaWYgKHN0YXR1cyA9PVwiQ09NUExFVEVcIil7IHJldHVybiAnLi4vYXNzZXRzL2ltYWdlcy90YWJsZV9jb21wbGV0ZV9pY29uLnN2Zyc7fVxyXG4gICAgaWYgKHN0YXR1cyA9PVwiQUNJQ1wiKXsgcmV0dXJuICcuLi9hc3NldHMvaW1hZ2VzL3RhYmxlX2FjaWNfaWNvbi5zdmcnO31cclxufVxyXG4gIGdldEFkZHJlc3NDZWxsQ29sb3Ioc3RhdHVzKTogc3RyaW5ne1xyXG4gICAgICBpZiAoc3RhdHVzID09XCJWRVJJRllcIiB8fCBzdGF0dXM9PVwiIFwiKXsgcmV0dXJuICdncmVlbi1jb2xvcic7fVxyXG4gICAgICAvLyBpZiAoc3RhdHVzID09XCJERVNQSVRVVEVcIil7IHJldHVybiAnZ3JlZW4tY29sb3InO31cclxuICAgICAgaWYgKHN0YXR1cyA9PVwiQ09NUExFVEVcIil7IHJldHVybiAnZGFyay1jb2xvcic7fVxyXG4gICAgICBpZiAoc3RhdHVzID09XCJBQ0lDXCIpeyByZXR1cm4gJ2RhcmstY29sb3InO31cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGVyaW9kaWNFbGVtZW50IHtcclxuICBSZWZlcmVuY2U6IHN0cmluZztcclxuICBOdW1iZXJDdXN0b21lcjogc3RyaW5nO1xyXG4gIEFkZHJlc3M6IHN0cmluZztcclxuICBQaG9uZU51bWJlcjogc3RyaW5nO1xyXG4gIFN0YXR1czpzdHJpbmc7XHJcbiAgRGF0ZTogc3RyaW5nO1xyXG4gIFRpbWU6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgRUxFTUVOVF9EQVRBOiBQZXJpb2RpY0VsZW1lbnRbXSA9IFtcclxuICB7UmVmZXJlbmNlOidQQzAxLTEwMTEnLCBOdW1iZXJDdXN0b21lcjonU3VqYW5hIEphbWFya2F0dGVsJywgQWRkcmVzczonc3V6am1yMTk5M0BnbWFpbCcsIFBob25lTnVtYmVyOic0NTIgNDU1IDQ5MScsIFN0YXR1czpcIiBcIiAsRGF0ZTonNTUgTWluJywgVGltZTonJ30sXHJcbiAge1JlZmVyZW5jZTonUEMwMS0xMDExJywgTnVtYmVyQ3VzdG9tZXI6J01hcmsgQnJvd24nLCBBZGRyZXNzOidzdXpqbXIxOTkzQGdtYWlsJywgUGhvbmVOdW1iZXI6JzQ1MiA0NTUgNDkxJywgU3RhdHVzOidWRVJJRlknLERhdGU6JzggSHIgNDAnLFRpbWU6Jyd9LFxyXG4gIHtSZWZlcmVuY2U6J1BDMDEtMTAxMScsIE51bWJlckN1c3RvbWVyOidNYXJrIEJyb3duJywgQWRkcmVzczonc3V6am1yMTk5M0BnbWFpbCcsIFBob25lTnVtYmVyOic0NTIgNDU1IDQ5MScsIFN0YXR1czonREVTUElUVVRFJyxEYXRlOicxNS8xMS8yMDE5JywgVGltZTonMDI6NDUgUE0nfSxcclxuICB7UmVmZXJlbmNlOidQQzAxLTEwMTEnLCBOdW1iZXJDdXN0b21lcjonU3VqYW5hIEphbWFya2F0dGVsJywgQWRkcmVzczonc3V6am1yMTk5M0BnbWFpbCcsIFBob25lTnVtYmVyOic0NTIgNDU1IDQ5MScsIFN0YXR1czonQ09NUExFVEUnLERhdGU6JzE1LzExLzIwMTknLCBUaW1lOicwMjo0NSBQTSd9LFxyXG4gIHtSZWZlcmVuY2U6J1BDMDEtMTAxMScsIE51bWJlckN1c3RvbWVyOidTdWphbmEgSmFtYXJrYXR0ZWwnLCBBZGRyZXNzOidzdXpqbXIxOTkzQGdtYWlsJywgUGhvbmVOdW1iZXI6JzQ1MiA0NTUgNDkxJywgU3RhdHVzOidWRVJJRlknLERhdGU6JzE1LzExLzIwMTknLCBUaW1lOicwMjo0NSBQTSd9LCBcclxuICB7UmVmZXJlbmNlOidQQzAxLTEwMTEnLCBOdW1iZXJDdXN0b21lcjonTWFyayBCcm93bicsIEFkZHJlc3M6J3N1emptcjE5OTNAZ21haWwnLCBQaG9uZU51bWJlcjonNDUyIDQ1NSA0OTEnLCBTdGF0dXM6J1ZFUklGWScsRGF0ZTonMTUvMTEvMjAxOScsIFRpbWU6JzAyOjQ1IFBNJ30sXHJcbiAge1JlZmVyZW5jZTonUEMwMS0xMDExJywgTnVtYmVyQ3VzdG9tZXI6J1N1amFuYSBKYW1hcmthdHRlbCcsIEFkZHJlc3M6J3N1emptcjE5OTNAZ21haWwnLCBQaG9uZU51bWJlcjonNDUyIDQ1NSA0OTEnLCBTdGF0dXM6J0FDSUMnLERhdGU6JzE1LzExLzIwMTknLFRpbWU6JzAyOjQ1IFBNJ30sXHJcbiAge1JlZmVyZW5jZTonUEMwMS0xMDExJywgTnVtYmVyQ3VzdG9tZXI6J01hcmsgQnJvd24nLCBBZGRyZXNzOidzdXpqbXIxOTkzQGdtYWlsJywgUGhvbmVOdW1iZXI6JzQ1MiA0NTUgNDkxJywgU3RhdHVzOidBQ0lDJyxEYXRlOicxNS8xMS8yMDE5JyxUaW1lOicwMjo0NSBQTSd9LFxyXG4gIHtSZWZlcmVuY2U6J1BDMDEtMTAxMScsIE51bWJlckN1c3RvbWVyOidTdWphbmEgSmFtYXJrYXR0ZWwnLCBBZGRyZXNzOidzdXpqbXIxOTkzQGdtYWlsJywgUGhvbmVOdW1iZXI6JzQ1MiA0NTUgNDkxJywgU3RhdHVzOidWRVJJRlknLERhdGU6JzE1LzExLzIwMTknLFRpbWU6JzAyOjQ1IFBNJ30sXHJcbiAge1JlZmVyZW5jZTonUEMwMS0xMDExJywgTnVtYmVyQ3VzdG9tZXI6J1N1amFuYSBKYW1hcmthdHRlbCcsIEFkZHJlc3M6J3N1emptcjE5OTNAZ21haWwnLCBQaG9uZU51bWJlcjonNDUyIDQ1NSA0OTEnLCBTdGF0dXM6J0NPTVBMRVRFJyxEYXRlOicxNS8xMS8yMDE5JyxUaW1lOicwMjo0NSBQTSd9LFxyXG4gIHtSZWZlcmVuY2U6J1BDMDEtMTAxMScsIE51bWJlckN1c3RvbWVyOidTdWphbmEgSmFtYXJrYXR0ZWwnLCBBZGRyZXNzOidzdXpqbXIxOTkzQGdtYWlsJywgUGhvbmVOdW1iZXI6JzQ1MiA0NTUgNDkxJywgU3RhdHVzOidBQ0lDJyxEYXRlOicxNS8xMS8yMDE5JyxUaW1lOicwMjo0NSBQTSd9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV4YW1wbGVEYXRhU291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZTxQZXJpb2RpY0VsZW1lbnQ+IHtcclxuICAvKiogU3RyZWFtIG9mIGRhdGEgdGhhdCBpcyBwcm92aWRlZCB0byB0aGUgdGFibGUuICovXHJcbiAgZGF0YSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UGVyaW9kaWNFbGVtZW50W10+KEVMRU1FTlRfREFUQSk7XHJcblxyXG4gIC8qKiBDb25uZWN0IGZ1bmN0aW9uIGNhbGxlZCBieSB0aGUgdGFibGUgdG8gcmV0cmlldmUgb25lIHN0cmVhbSBjb250YWluaW5nIHRoZSBkYXRhIHRvIHJlbmRlci4gKi9cclxuICBjb25uZWN0KCk6IE9ic2VydmFibGU8UGVyaW9kaWNFbGVtZW50W10+IHtcclxuICAgIHJldHVybiB0aGlzLmRhdGE7XHJcbiAgfVxyXG5cclxuICBkaXNjb25uZWN0KCkge31cclxufVxyXG4iXX0=