import { Component } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { AppInputComponent } from "src/app/components/input/input.component";

@Component({
    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: AppInputPasswordComponent, multi: true }],
    selector: "app-input-password",
    templateUrl: "../input.component.html"
})
export class AppInputPasswordComponent extends AppInputComponent {
    constructor() {
        super("password");
    }
}
