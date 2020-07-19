import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppButtonModule } from "src/app/components/button/button.module";
import { AppInputPasswordModule } from "src/app/components/input/password/password.module";
import { AppInputTextModule } from "src/app/components/input/text/text.module";
import { AppLabelModule } from "src/app/components/label/label.module";
import { AppLoginComponent } from "src/app/views/login/login.component";
import { IonicModule } from "@ionic/angular";

const routes: Routes = [
    { path: "login", component: AppLoginComponent }
];

@NgModule({
    declarations: [AppLoginComponent],
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      HttpModule,
        ReactiveFormsModule,
        
        AppButtonModule,
        AppInputPasswordModule,
        AppInputTextModule,
        AppLabelModule,
        RouterModule.forChild(routes),
    ]
})
export class AppLoginModule { }
