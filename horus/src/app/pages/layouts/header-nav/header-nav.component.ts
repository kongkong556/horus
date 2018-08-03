import { Component, OnInit,Input, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Menu } from '../../../models/menu'
declare let mLayout: any;
@Component({
    selector: "app-header-nav",
    templateUrl: "./header-nav.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class HeaderNavComponent implements OnInit, AfterViewInit {
    @Input() fullname: any;
    menus = [
        new Menu('Type of Payment[Employ0002]', '/employ/0002'),
        new Menu('Type of Payment[test for]', '/5555')
    ];
    constructor() {

    }
    ngOnInit() {
        this.fullname = sessionStorage.getItem("fullname");
    }
    ngAfterViewInit() {

        mLayout.initHeader();

    }

}