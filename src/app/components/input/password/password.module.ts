import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppInputPasswordComponent } from "src/app/components/input/password/password.component";

@NgModule({
    declarations: [
        AppInputPasswordComponent
    ],
    exports: [
        AppInputPasswordComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AppInputPasswordModule { }
