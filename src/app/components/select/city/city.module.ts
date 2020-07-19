import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppSelectCityComponent } from "src/app/components/select/city/city.component";

@NgModule({
    declarations: [
        AppSelectCityComponent
    ],
    exports: [
        AppSelectCityComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AppSelectCityModule { }
