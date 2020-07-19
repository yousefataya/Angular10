import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppSearchComponent } from "src/app/views/main/search/search.component";
import { jqxDateTimeInputModule } from "jqwidgets-framework/jqwidgets-ng/jqxdatetimeinput";
import { jqxValidatorModule } from "jqwidgets-framework/jqwidgets-ng/jqxvalidator";
import { jqxButtonModule } from "jqwidgets-framework/jqwidgets-ng/jqxbuttons";
import { jqxCheckBoxModule } from "jqwidgets-framework/jqwidgets-ng/jqxcheckbox";
import { jqxExpanderModule } from "jqwidgets-framework/jqwidgets-ng/jqxexpander";
import { jqxInputModule } from "jqwidgets-framework/jqwidgets-ng/jqxinput";
import { jqxTreeModule } from "jqwidgets-framework/jqwidgets-ng/jqxtree";
import { jqxNotificationModule } from "jqwidgets-framework/jqwidgets-ng/jqxnotification";
import { jqxDropDownButtonModule } from "jqwidgets-ng/jqxdropdownbutton";
import { jqxDropDownListModule } from "jqwidgets-framework/jqwidgets-ng/jqxdropdownlist";
import { jqxMenuModule } from "jqwidgets-framework/jqwidgets-ng/jqxmenu";
import { jqxComboBoxModule } from "jqwidgets-framework/jqwidgets-ng/jqxcombobox";
import { jqxToolBarModule } from "jqwidgets-framework/jqwidgets-ng/jqxtoolbar";
import { jqxPopoverModule } from "jqwidgets-framework/jqwidgets-ng/jqxpopover";
import { jqxNavigationBarModule } from "jqwidgets-framework/jqwidgets-ng/jqxnavigationbar";
import { MatDialogModule } from "@angular/material/dialog";
//import { TranslateService } from '@ngx-translate/core';
/*import { TranslateModule } from '@ngx-translate/core';*/
import { jqxListBoxModule } from 'jqwidgets-framework/jqwidgets-ng/jqxlistbox';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
/*import { jqxExpanderModule } from 'jqwidgets-framework/jqwidgets-ng/jqxexpander';*/
import { jqxPanelModule } from 'jqwidgets-framework/jqwidgets-ng/jqxpanel';
import { jqxTabsModule } from 'jqwidgets-framework/jqwidgets-ng/jqxtabs';
import { jqxFormModule } from 'jqwidgets-framework/jqwidgets-ng/jqxform';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { jqxTextAreaModule } from 'jqwidgets-framework/jqwidgets-ng/jqxtextarea';
import { jqxLoaderModule } from 'jqwidgets-framework/jqwidgets-ng/jqxloader';
import { jqxTimePickerModule } from 'jqwidgets-framework/jqwidgets-ng/jqxtimepicker';
import { jqxGridModule } from 'jqwidgets-framework/jqwidgets-ng/jqxgrid';
import { jqxWindowModule } from 'jqwidgets-framework/jqwidgets-ng/jqxwindow';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { jqxResponsivePanelModule } from 'jqwidgets-framework/jqwidgets-ng/jqxresponsivepanel';
import { jqxDataTableModule } from 'jqwidgets-framework/jqwidgets-ng/jqxdatatable';
/*import { } from '@sy'*/
const routes: Routes = [
    { path: "home", component: AppSearchComponent }
];

@NgModule({
    declarations: [AppSearchComponent],
    bootstrap: [AppSearchComponent],
    imports: [
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpTranslateLoader,
                deps: [HttpClient]
            }
        }),
        jqxDateTimeInputModule, jqxDataTableModule ,jqxValidatorModule, jqxValidatorModule, jqxButtonModule, jqxCheckBoxModule, jqxMenuModule, jqxComboBoxModule, jqxToolBarModule, jqxPopoverModule, jqxNavigationBarModule,
        jqxDateTimeInputModule, jqxExpanderModule, jqxInputModule, jqxTreeModule, jqxNotificationModule, jqxDropDownButtonModule, jqxDropDownListModule, jqxLoaderModule, jqxDateTimeInputModule, jqxTimePickerModule, jqxGridModule, jqxWindowModule, NgxMaterialTimepickerModule, jqxResponsivePanelModule /*SplitButtonModule, ToastModule, TabViewModule ,*/
        , RouterModule.forChild(routes), MatDialogModule, jqxListBoxModule, jqxPanelModule, jqxTabsModule, jqxFormModule, ReactiveFormsModule, FormsModule, jqxListBoxModule, CommonModule, jqxTextAreaModule, /*jqxDataTableModule ,*/
        TranslateModule.forRoot()
    ]
})
export class AppSearchModule { }
export function httpTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http);
}