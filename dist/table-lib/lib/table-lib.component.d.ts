import { OnInit, ComponentFactoryResolver } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
export declare class TableLibComponent implements OnInit {
    private resolver;
    displayedColumns: string[];
    dataSource: ExampleDataSource;
    containers: any;
    expandedRow: number;
    constructor(resolver: ComponentFactoryResolver);
    ngOnInit(): void;
    expandRow(index: number): void;
    getCellColor(status: any): string;
    getCellImage(status: any): string;
    getAddressCellColor(status: any): string;
}
export interface PeriodicElement {
    Reference: string;
    NumberCustomer: string;
    Address: string;
    PhoneNumber: string;
    Status: string;
    Date: string;
    Time: string;
}
export declare class ExampleDataSource extends DataSource<PeriodicElement> {
    /** Stream of data that is provided to the table. */
    data: BehaviorSubject<PeriodicElement[]>;
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<PeriodicElement[]>;
    disconnect(): void;
}
