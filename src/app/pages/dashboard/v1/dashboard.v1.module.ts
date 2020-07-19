import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardV1Page } from "src/app/pages/dashboard/v1/dashboard-v1";
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
/*import { AppComponent } from "../../../app.component";*/


const routes: Routes = [
    { path: "dashboard", component: DashboardV1Page }
];

@NgModule({
    declarations: [DashboardV1Page],
    bootstrap: [DashboardV1Page],
  imports: [
        
        jqxDateTimeInputModule, jqxValidatorModule, jqxValidatorModule, jqxButtonModule, jqxCheckBoxModule, jqxMenuModule, jqxComboBoxModule, jqxToolBarModule, jqxPopoverModule, jqxNavigationBarModule,
        jqxDateTimeInputModule, jqxExpanderModule, jqxInputModule, jqxTreeModule, jqxNotificationModule, jqxDropDownButtonModule, jqxDropDownListModule,
        RouterModule.forChild(routes)
    ]
})
export class AppDashboardModule { }
