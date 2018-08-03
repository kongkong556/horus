import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.css']
})
export class DatetimeComponent implements OnInit {
  
  dateRange:string;
  dateFrom:string;
  dateTo:string;
  stringDate:string;
  dateFromQuery:string;
  dateToQuery:string;

  @Output() outputEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  getStringDate(event: MatDatepickerInputEvent<Date>) {
    
    this.stringDate = event.value.toString();
    let dateSplit= this.stringDate.split(",");
    let dateFromDate = new Date(dateSplit[0]);
    let dateToDate = new Date(dateSplit[1]);

    let date = this.setDate(dateFromDate, dateToDate);

    this.outputEvent.emit({dateFrom: date[0], dateTo: date[1], dateRange: date[2],
      dateFromQuery: date[3], dateToQuery: date[4]});
  }

  setDate(dateFromDate:Date, dateToDate:Date){

    let dateFromArray= [dateFromDate.getDate(), dateFromDate.getMonth() + 1 ,dateFromDate.getFullYear() + 543]
    let dateToArray= [dateToDate.getDate(), dateToDate.getMonth() + 1 , dateToDate.getFullYear() + 543]
    let dateFromArrayQuery = [dateFromDate.getFullYear(), dateFromDate.getMonth() + 1, dateFromDate.getDate()]
    let dateToArrayQuery = [dateToDate.getFullYear(), dateToDate.getMonth() + 1, dateToDate.getDate()]

    this.dateFrom = dateFromArray.join("/");
    this.dateTo = dateToArray.join("/");
    this.dateRange = this.dateFrom + " - " + this.dateTo ;
    this.dateFromQuery = dateFromArrayQuery.join("-");  
    this.dateToQuery = dateToArrayQuery.join("-");  
    
    return [this.dateFrom, this.dateTo, this.dateRange, this.dateFromQuery, this.dateToQuery]
  }

}
