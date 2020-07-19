import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AppTokenService } from "src/app/core/services/token.service";
/*import { map, tap } from "rxjs/operators";*/
/*import * as $ from 'jquery';*/
/*import { SignInModel } from "src/app/models/signIn.model";*/
//import { TokenModel } from ".src/app/models/token.model";
import { AddUserModel } from "src/app/models/user/add.user.model";
import { UpdateUserModel } from "src/app/models/user/update.user.model";
/*import { HomeCallerInfo } from 'src/app/models/main.caller.inf.model';*/

import { HomePoliceCaseInfo } from 'src/app/models/main.police.info.model';

/*import { tap, map } from "rxjs/operators";*/
/*import { HomeModel } from 'src/app/models/app.home.saved.model';*/
//import { UserModel } from ".src/app/models/user/user.model";
/*import { HTTP } from '@ionic-native/http/ngx';*/
/*import * as $ from "jquery";*/
/*import {  HomeParentCatogry } from 'src/app/models/main.catogry.parent.model';*/
/*import { SubCatogryDetails } from 'src/app/models/main.subcatogry.response.model';*/
/*import { SubCatogryListDetails } from 'src/app/models/main.sub.catogries.list.model';*/

@Injectable({ providedIn: "root" })
export class AppPoliceService {

    self: this
    tokenService = this.appTokenService;
    keyLanguage: any
    responseText: '';
    result: String;
    splitter: String;
    finalRes: String;
    items: String[];
    dtos: String[]
    dtoos: String[]


    constructor(
        private readonly http: HttpClient,
        private readonly router: Router,
        private readonly appTokenService: AppTokenService) { }

    add(addUserModel: AddUserModel) {
        return this.http.post('add', addUserModel, {})
    }

    delete(userId: number) {
        return this.http.get(`Users/${userId}`, {});
    }

    list() {
        return this.http.get(`Users`, {});
    }

    select(userId: number) {
        return this.http.get(`Users/${userId}`, {});
    }


    Post(homeCallerInfo: HomePoliceCaseInfo): any {

        console.log('start ==> ' + homeCallerInfo)

        var objectModel = { callPolice: homeCallerInfo.callPolice, policecenter: homeCallerInfo.policecenter, policenumber: homeCallerInfo.policenumber, fileNumber: homeCallerInfo.fileNumber, volPerson: homeCallerInfo.volPerson, callPoliceDate: homeCallerInfo.callPoliceDate, description1: homeCallerInfo.description1, description2: homeCallerInfo.description2, description3: homeCallerInfo.description3   }

        $(document).ready(function () {
           
            $.ajax({
                type: "POST",
                url: "http://192.168.1.103:3001/save-police-processor",
                data: JSON.stringify(objectModel),
                dataType: "application/json",
                crossDomain: true,
                contentType: "application/json",
                cache: false,
                success: function (_data) {

                    try {


                    } catch (e) {
                        console.log(e)
                    }
                },
                error: function (_data) {
                    try {

                        //alert('success')
                        /*var object = data.responseText;
                        var json = JSON.parse(object)
                        var req2 = JSON.stringify(json);
                        this.result = JSON.parse(req2);
                        this.splitter = this.result.replace("[", "")
                        this.finalRes = this.splitter.replace("]", "")
                        this.items = this.finalRes.split(',')
                        let dtos: String[] = this.items;
                        AppCatogryService.prototype.dtos = dtos;*/

                    } catch (e) { alert(e) }
                },
            });
        });

       
    }



    navigator(data: any) {
        alert('Start')
        this.appTokenService.set(data);
        this.router.navigate(["/main/home"]);
        alert('End')
    }

    signOut() {
        if (this.appTokenService.any()) {
            this.http.post(`Users/SignOut`, {}, {}).subscribe();
        }

        this.appTokenService.clear();
        this.router.navigate(["/login"]);
    }

    update(updateUserModel: UpdateUserModel) {
        return this.http.post(`Users/${updateUserModel.userId}`, updateUserModel, {});
    }
}
