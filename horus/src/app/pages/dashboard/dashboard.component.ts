import { Component, OnInit, ViewEncapsulation, AfterViewInit, Input ,  } from '@angular/core';
import { Helpers } from '../../helpers';
import { ScriptLoaderService } from '../../utils/_services/script-loader.service';
import { VariableAst } from '@angular/compiler';
import { NgOption} from '@ng-select/ng-select';
import { setTheme } from 'ngx-bootstrap/utils';

import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { getDate } from '../../../../node_modules/ngx-bootstrap/chronos/utils/date-getters';


import { BsLocaleService } from 'ngx-bootstrap/datepicker';


@Component({
    selector: "app-index",
    templateUrl: "./dashboard.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit, AfterViewInit {
    datepickerModel: Date;
    date1:number;
    datenow:string;
    dateTest:string;
    month:number;
    year:number;
    //dateData: {dateFrom:string, dateTo:string, dateRange:string, dateFromQuery:string, dateToQuery:string}
    dateData: {dateFrom:string, dateTo:string, dateRange:string, dateFromQuery:string, dateToQuery:string}

    constructor(private _script: ScriptLoaderService, private _localeService: BsLocaleService) {
        setTheme('bs4');
        this._localeService.use('th');
        //dateAdapter.setLocale('th-TH');
    }
    data: Array<NgOption> = [
        {value: '0', label: 'Aech'},
        {value: '1', label: 'Art3mis', disabled: true},
        {value: '2', label: 'Daito'},
        {value: '3', label: 'Parzival'},
        {value: '4', label: 'Shoto'}
    ];
    
    ngOnInit() {

       /* $("#selectData").change(function(){
                alert("data is : " + $('#selectData').val());
        });

        $('#checkbox1').click(function(){
            alert("checkbox1 click  : " + $("#checkbox1").val());
        });

        $('#checkbox2').click(function(){
            alert("checkbox1 click  : " + $("#checkbox2").val());
        });

        $("input[name$='radioOptions']").click(function(){
            alert("radio value : " + $("input[name$='radioOptions']:checked").val());
        });
        $('#date').click(function(){
            alert("checkbox1 click  : " + $("#date").val());
        }); */
        
    }
    
    ngAfterViewInit() {
        this._script.loadScripts('app-index',
        ['assets/app/js/dashboard.js']);
       // Helpers.bodyClass('m-page--wide m-header--fixed m-header--fixed-mobile m-footer--push m-aside--offcanvas-default');
    }
 
    changeFormat(event: MatDatepickerInputEvent<Date>) {
        var arr = ['มกราคม', 'กุมพาพันธ์', 'มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'];
        this.date1 = event.value.getDate();
        this.month = event.value.getMonth() ;
        this.datenow =arr[ this.month];

        this.year = event.value.getFullYear() + 543;
        this.dateTest = this.date1.toString() + "/" + this.datenow + "/" + this.year.toString();
      }


}