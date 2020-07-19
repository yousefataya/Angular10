import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppHomeComponent } from "src/app/views/main/home/home.component";
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
import { EditorModule } from '@tinymce/tinymce-angular';
import { DocumentEditorContainerModule } from '@syncfusion/ej2-angular-documenteditor';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations' 
import { ListBoxModule } from '@syncfusion/ej2-angular-dropdowns';
import { jqxLayoutModule } from 'jqwidgets-framework/jqwidgets-ng/jqxlayout';
/*import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';*/
import { jqxEditorModule } from 'jqwidgets-ng/jqxeditor'
import { jqxPivotGridModule } from 'jqwidgets-framework/jqwidgets-ng/jqxpivotgrid';
import { jqxSchedulerModule } from 'jqwidgets-framework/jqwidgets-ng/jqxscheduler';

/*import { } from '@sy'*/
const routes: Routes = [
    { path: "home", component: AppHomeComponent }
];

@NgModule({
  declarations: [AppHomeComponent],
  bootstrap: [AppHomeComponent],
    imports: [
        HttpClientModule,
      TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: httpTranslateLoader,
              deps: [HttpClient]
          }
      }),
        jqxDateTimeInputModule, jqxValidatorModule, jqxValidatorModule, jqxButtonModule, jqxCheckBoxModule, jqxMenuModule, jqxComboBoxModule, jqxToolBarModule, jqxPopoverModule, jqxNavigationBarModule, EditorModule, DocumentEditorContainerModule, DialogModule, TreeViewModule, ListBoxModule, jqxLayoutModule, jqxEditorModule, jqxPivotGridModule, jqxSchedulerModule ,/*RichTextEditorModule,*/
        jqxDateTimeInputModule, jqxExpanderModule, jqxInputModule, jqxTreeModule, jqxNotificationModule, jqxDropDownButtonModule, jqxDropDownListModule, jqxLoaderModule, jqxDateTimeInputModule, jqxTimePickerModule, jqxGridModule, jqxWindowModule, NgxMaterialTimepickerModule, jqxResponsivePanelModule /*SplitButtonModule, ToastModule, TabViewModule ,*/
        ,RouterModule.forChild(routes), MatDialogModule, jqxListBoxModule, jqxPanelModule, jqxTabsModule, jqxFormModule, ReactiveFormsModule, FormsModule, jqxListBoxModule, CommonModule, jqxTextAreaModule, /*jqxDataTableModule ,*/
        TranslateModule.forRoot()
    ]
})
export class AppHomeModule { }
export function httpTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http);
}