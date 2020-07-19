import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppUserService } from 'src/app/services/user.service';
/*import { HTTP } from '@ionic-native/http/ngx';*/
@Component({ selector: 'app-login', templateUrl: './login.component.html' })

export class AppLoginComponent {

    username: string;
    password: string;
    form = this.formBuilder.group({
        username: [this.username, Validators.required],
        password: [this.password, Validators.required]
    });

  constructor(
        /*private readonly https: HTTP,*/
        private readonly formBuilder: FormBuilder,
        private readonly appUserService: AppUserService) {
    }

    signIn() {
        this.appUserService.signIn(this.form.value);
    }
}
