import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppUserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {
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

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }
    signIn() {
        this.appUserService.signIn(this.form.value);
        /*var object = this.form.value*/
        /*this.https.post(`http://192.168.1.105:5000/login-processor`, { object }, {})
          .then((tokenModel) => {
            *//*var json = JSON.stringify(tokenModel)
        var obj = JSON.parse(json)*//*
        console.log(tokenModel.data.access_toen)
        *//*this.appTokenService.set(tokenModel.data.access_toen);
        this.router.navigate(["/main/home"]);*//*
      });*/
    }
}
