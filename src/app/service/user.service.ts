import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AppTokenService } from "src/app/core/services/token.service";
import { SignInModel } from "src/app/models/signIn.model";
//import { TokenModel } from ".src/app/models/token.model";
import { AddUserModel } from "src/app/models/user/add.user.model";
import { UpdateUserModel } from "src/app/models/user/update.user.model";
//import { UserModel } from ".src/app/models/user/user.model";
/*import { HTTP } from '@ionic-native/http/ngx';*/
import * as $ from "jquery";
@Injectable({ providedIn: "root" })
export class AppUserService {

  self: this
  tokenService = this.appTokenService;
  
  constructor(
    /*private readonly http: HttpClient,*/
    private readonly https: HttpClient,
        private readonly router: Router,
        private readonly appTokenService: AppTokenService) { }

    add(addUserModel: AddUserModel) {
      return this.https.post('add', addUserModel, {})
    }

    delete(userId: number) {
      return this.https.get(`Users/${userId}`, {});
    }

    list() {
      return this.https.get(`Users`, {});
    }

    select(userId: number) {
      return this.https.get(`Users/${userId}`, {} );
    }

  
   
  signIn(signInModel: SignInModel): void {
    console.log('start ==> ' + signInModel.username)
    var appUserService_________ = this.appTokenService
    var router______ = this.router
    try {
      $(document).ready(function () {
        var object = { username: 'admin', password: 'admin' };
        console.log('Object  ==> ' + object.password)
        $.ajax({
          type: "POST",
          url: "http://192.168.1.103:3001/login-processor",
          data: JSON.stringify(object),
          dataType: "application/json",
          crossDomain: true,
          contentType: "application/json",
          cache: false,
          success: function (data) {
            //alert(data);
            var object = data.responseText;
            var json = JSON.parse(object)
            try {
              appUserService_________.set(json.access_token)
              router______.navigate(["/main/home"])
            } catch (e) {
              console.log(e)
            }
          },
          error: function (data) {

            var object = data.responseText;
            var json = JSON.parse(object)
            try {
              appUserService_________.set(json.access_token)
              router______.navigate(["/main/home"])
            } catch (e) { console.log(e) }
          },
        });
      });
    } catch (e) { console.log(e)}
  }
 
  navigator(data: any) {
   alert('Start')
    this.appTokenService.set(data);
    this.router.navigate(["/main/home"]);
    alert('End')
  }

    signOut() {
        if (this.appTokenService.any()) {
          this.https.post(`Users/SignOut`, {}, {}).subscribe();
        }

        this.appTokenService.clear();
        this.router.navigate(["/login"]);
    }

    update(updateUserModel: UpdateUserModel) {
      return this.https.post(`Users/${updateUserModel.userId}`, updateUserModel, {});
    }
}
