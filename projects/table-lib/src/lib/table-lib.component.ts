import {Component, OnInit, ComponentFactoryResolver, ViewChildren, ViewContainerRef} from '@angular/core';
import {DataSource} from '@angular/cdk/table';
import {BehaviorSubject} from 'rxjs';
import {Observable} from 'rxjs';

@Component({
  selector: "app-table-lib",
  templateUrl: "./table-lib.component.html",
  styleUrls: ["./table-lib.component.scss"]
})

export class TableLibComponent implements OnInit {
  
  displayedColumns = ['ReferenceNumber', 'CustomerInfo', 'Status', 'Date', 'Actions'];
  dataSource = new ExampleDataSource();
  // dataSource: ExampleDataSource | null;
  
  @ViewChildren('cdkrow', { read: ViewContainerRef }) containers;
    expandedRow: number;
    constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    // this.dataSource = new ExampleDataSource(this.exampleDatabase);
  }
  expandRow(index: number) {
    if (this.expandedRow != null) {
      this.containers.toArray()[this.expandedRow].clear();
    }
  }
  getCellColor(status):string {
      if (status =="VERIFY"){ return 'red-color';}
      if (status =="DESPITUTE"){ return 'yellow-color';}
      if (status =="COMPLETE"){ return 'green-color';}
      if (status =="ACIC"){ return 'blue-color';}
  }
  getCellImage(status):string {
    console.log('this is status', status);
    if (status ==" "){ return '../assets/images/table_all_icons.svg';}
    if (status =="VERIFY"){ return '../assets/images/table_verify_icon.svg';}
    if (status =="COMPLETE"){ return '../assets/images/table_complete_icon.svg';}
    if (status =="ACIC"){ return '../assets/images/table_acic_icon.svg';}
}
  getAddressCellColor(status): string{
      if (status =="VERIFY" || status==" "){ return 'green-color';}
      if (status =="COMPLETE"){ return 'dark-color';}
      if (status =="ACIC"){ return 'dark-color';}
  }
}

export interface PeriodicElement {
  Reference: string;
  NumberCustomer: string;
  Address: string;
  PhoneNumber: string;
  Status:string;
  Date: string;
  Time: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Reference:'PC01-1011', NumberCustomer:'Sujana Jamarkattel', Address:'suzjmr1993@gmail', PhoneNumber:'452 455 491', Status:" " ,Date:'55 Min', Time:''},
  {Reference:'PC01-1011', NumberCustomer:'Mark Brown', Address:'suzjmr1993@gmail', PhoneNumber:'452 455 491', Status:'VERIFY',Date:'8 Hr 40',Time:''},
  {Reference:'PC01-1011', NumberCustomer:'Mark Brown', Address:'suzjmr1993@gmail', PhoneNumber:'452 455 491', Status:'DESPITUTE',Date:'15/11/2019', Time:'02:45 PM'},
  {Reference:'PC01-1011', NumberCustomer:'Sujana Jamarkattel', Address:'suzjmr1993@gmail', PhoneNumber:'452 455 491', Status:'COMPLETE',Date:'15/11/2019', Time:'02:45 PM'},
  {Reference:'PC01-1011', NumberCustomer:'Sujana Jamarkattel', Address:'suzjmr1993@gmail', PhoneNumber:'452 455 491', Status:'VERIFY',Date:'15/11/2019', Time:'02:45 PM'}, 
  {Reference:'PC01-1011', NumberCustomer:'Mark Brown', Address:'suzjmr1993@gmail', PhoneNumber:'452 455 491', Status:'VERIFY',Date:'15/11/2019', Time:'02:45 PM'},
  {Reference:'PC01-1011', NumberCustomer:'Sujana Jamarkattel', Address:'suzjmr1993@gmail', PhoneNumber:'452 455 491', Status:'ACIC',Date:'15/11/2019',Time:'02:45 PM'},
  {Reference:'PC01-1011', NumberCustomer:'Mark Brown', Address:'suzjmr1993@gmail', PhoneNumber:'452 455 491', Status:'ACIC',Date:'15/11/2019',Time:'02:45 PM'},
  {Reference:'PC01-1011', NumberCustomer:'Sujana Jamarkattel', Address:'suzjmr1993@gmail', PhoneNumber:'452 455 491', Status:'VERIFY',Date:'15/11/2019',Time:'02:45 PM'},
  {Reference:'PC01-1011', NumberCustomer:'Sujana Jamarkattel', Address:'suzjmr1993@gmail', PhoneNumber:'452 455 491', Status:'COMPLETE',Date:'15/11/2019',Time:'02:45 PM'},
  {Reference:'PC01-1011', NumberCustomer:'Sujana Jamarkattel', Address:'suzjmr1993@gmail', PhoneNumber:'452 455 491', Status:'ACIC',Date:'15/11/2019',Time:'02:45 PM'},
];

export class ExampleDataSource extends DataSource<PeriodicElement> {
  /** Stream of data that is provided to the table. */
  data = new BehaviorSubject<PeriodicElement[]>(ELEMENT_DATA);

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<PeriodicElement[]> {
    return this.data;
  }

  disconnect() {}
}
