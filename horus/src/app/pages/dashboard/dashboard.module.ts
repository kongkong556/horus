import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { LayoutModule } from '../../pages/layouts/layout.module';
import { DefaultComponent } from '../default.component';
import { NgSelectModule} from '@ng-select/ng-select';
import { BsDatepickerModule,ButtonsModule , } from 'ngx-bootstrap';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OwlDateTimeIntl, OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { DatetimeComponent } from '.././datetime/datetime.component';

import { 
    MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": DashboardComponent
            }
        ]
    }
];

export class DefaultIntl extends OwlDateTimeIntl  {
    cancelBtnLabel= 'ยกเลิก'
    setBtnLabel= 'เลือก'
    rangeFromLabel= 'วันที่เริ่มต้น'
    rangeToLabel= 'วันที่สิ้นสุด'
};

@NgModule({
    imports: [
        CommonModule,
         RouterModule.forChild(routes),
          LayoutModule ,
          NgSelectModule,
          BsDatepickerModule.forRoot(),
          ButtonsModule.forRoot(),
          MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,

  OwlDateTimeModule, 
  OwlNativeDateTimeModule,
         
    ],
    
    providers: [
        {provide: OwlDateTimeIntl, useClass: DefaultIntl},
        {provide: OWL_DATE_TIME_LOCALE, useValue: 'th'}
     
    ],
    exports: [
        RouterModule
    ], declarations: [
        DashboardComponent,
       DatetimeComponent
    ]
})

export class DashboardModule {
    
}