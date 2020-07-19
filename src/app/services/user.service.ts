import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AppTokenService } from "src/app/core/services/token.service";
import { SignInModel } from "src/app/models/signIn.model";
//import { TokenModel } from ".src/app/models/token.model";
import { AddUserModel } from "src/app/models/user/add.user.model";
import { UpdateUserModel } from "src/app/models/user/update.user.model";
//import { map, tap } from "rxjs/operators";
//import { UserModel } from ".src/app/models/user/user.model";
/*import { HTTP } from '@ionic-native/http/ngx';*/
/*import * as $ from "jquery";
import { map } from "rxjs-compat/operator/map";*/

declare const webphone_api: any;

/*declare function AnswerModal(form : any): any;*/
declare function Accept(): any;
declare function Reject(): any;
declare function Hangup(): any;
declare function Transfer(): any;
declare function Hold(): any;
declare function Mute(): any;
declare function ChomeInit(userName: any, passwordNAN: any, destinationNAN: any): any;

@Injectable({ providedIn: "root" })
export class AppUserService {

   static extNo: string;

    self: this
    tokenService = this.appTokenService;
    static validate = false;
    constructor(
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
        return this.https.get(`Users/${userId}`, {});
    }



    signIn(signInModel: SignInModel): any {
        try {

            var router________ = this.router;
            var empName = (document.getElementById("usernamesys") as HTMLInputElement).value;
            $(document).ready(function () {
                var object = { Username: (document.getElementById("usernamesys") as HTMLInputElement).value, Password: (document.getElementById("passwordsys") as HTMLInputElement).value };
                console.log(signInModel.username + " " + signInModel.password + " ")
                $.ajax({
                    type: "POST",
                    url: "http://192.168.225.81:5000/api/apiSearchLogin",
                    data: JSON.stringify(object),
                    dataType: "application/json",
                    crossDomain: true,
                    contentType: "application/json",
                    cache: false,
                    success: function (data: any) {
                        //alert(data);
                        var object = data.responseText;
                        var json = JSON.parse(object)
                        var res = json.result;
                        /*alert(res)*/
                        if(res != 'false'){
                            new AppTokenService().set(json.result)
                            
                            router________.navigate(['/main/chome'], { queryParams: { empName: empName } });
                        }

                    },
                    error: function (data: any) {

                        var object = data.responseText;
                        var json = JSON.parse(object)
						
						var res = json.result;
                        /*alert(res)*/
                        if(res != 'false'){
                            new AppTokenService().set(json.result)
                           
                            router________.navigate(['/main/chome'], { queryParams: { empName: empName } });
                        }
                    }

                });
            });

        } catch (e) { console.log(e) }

    }

    navigator() {
        this.router.navigate(["/main/home"]);

    }

    static validateor(value: any): any {
        AppUserService.validate = value
    }
    static getValue(): any {
       return AppUserService.validate;
    }
    verify(signInModel: SignInModel): any {
        var router________ = this.router;
        $.ajax({
            type: "POST",
            url: "http://192.168.1.103:3001/login-processor",
            data: JSON.stringify(signInModel),
            dataType: "application/json",
            crossDomain: true,
            contentType: "application/json",
            cache: false,
            success: function (data: any) {
                //alert(data);
                var object = data.responseText;
                var json = JSON.parse(object)


                try {
                    new AppTokenService().set(json.access_token)
                    router________.navigate(["/main/home"]);
                } catch (e) {
                    console.log(e)
                }
            },
            error: function (data: any) {

                var object = data.responseText;
                var json = JSON.parse(object)
                try {
                    new AppTokenService().set(json.access_token)
                    router________.navigate(["/main/home"]);
                } catch (e) { console.log(e) }
            },
        });

    }

    AsterriskUserId(userName : string): any {
        //var router________ = this.router;
        $.ajax({
            type: "GET",
            url: "http://192.168.225.81:8090/api/excelSheetApiSearch?employeeName=" + userName,
            dataType: "application/json",
            crossDomain: true,
            contentType: "application/json",
            cache: false,
            success: function (data: any) {
                //alert(data);
                var object = data.responseText;
                var json = JSON.parse(object)
                
                let userops: string = json.extension;
            /*alert(json.username + "  " + userops)*/
                if (window.sessionStorage.getItem('extNo') == userops && window.sessionStorage.getItem("userName") == userName) {
                    
                    window.sessionStorage.setItem("extNo", json.extension);
                    window.sessionStorage.setItem("userName", json.username);
                    window.sessionStorage.setItem("password", json.password);

                } else {

                    window.sessionStorage.clear()
                }

                
            /* alert(window.sessionStorage.getItem("extNo"))*/
            /*alert(json.extension + ":" + json.password)*/
              
                ChomeInit(json.extension , json.password , json.extension);
                /*alert("Object ..........  : " + json.password + " ........... "+ json.extension);
               */

                /*Start();*/


                
            },
            error: function (data: any) {

                var object = data.responseText;
                var json = JSON.parse(object)

                //let userops: string = json.extension;
                /*alert(json.username + "  " + userops)*/
                /*alert(userName + " " + json.username)*/
            /*alert(window.sessionStorage.getItem('extNo') + " " + json.extension)*/

                if (window.sessionStorage.getItem("userName") != null && !window.sessionStorage.getItem("userName").trim().startsWith(userName.trim())) {
                  
                    window.sessionStorage.clear()

                } 

                window.sessionStorage.setItem("extNo", json.extension);
                window.sessionStorage.setItem("userName", json.username);
                window.sessionStorage.setItem("password", json.password);
                /*alert(window.sessionStorage.getItem("extNo"))*/
				ChomeInit(json.extension , json.password , json.extension);
                /*alert("Object ..........  : " + json.password + " ........... "+ json.extension);*/
				
            },
        });

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
