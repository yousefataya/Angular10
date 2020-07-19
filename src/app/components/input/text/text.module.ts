import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppInputTextComponent } from "src/app/components/input/text/text.component";

@NgModule({
    declarations: [
        AppInputTextComponent
    ],
    exports: [
        AppInputTextComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AppInputTextModule { }
