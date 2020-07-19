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
/*import { tap, map } from "rxjs/operators";*/
/*import { HomeModel } from 'src/app/models/app.home.saved.model';*/
//import { UserModel } from ".src/app/models/user/user.model";
/*import { HTTP } from '@ionic-native/http/ngx';*/
/*import * as $ from "jquery";*/
/*import {  HomeParentCatogry } from 'src/app/models/main.catogry.parent.model';*/
/*import { SubCatogryDetails } from 'src/app/models/main.subcatogry.response.model';*/
/*import { SubCatogryListDetails } from 'src/app/models/main.sub.catogries.list.model';*/

@Injectable({ providedIn: "root" })
export class AppCatogryService {

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
    /*sourceLangauge : []*/

    constructor(
        /*private readonly http: HttpClient,*/
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

    //sourceLangaugeArabic = [{ abusViolence: 'الاساءة والعنف' }, { displacement: 'تشرد و الهروب من البيت و الاحتياجات الخاصة' }, { sexualThings: 'تشرد و الهروب من البيت و الاحتياجات الخاصة' }, { mentalPsychologicalHealth: 'تشرد و الهروب من البيت و الاحتياجات الخاصة' }, { narcoticSubstances: 'المواد المخدرة' }, { studyMatters: 'امور ذات علاقة بالدراسة' }, { 'discrimination': 'تمييز' }, { Specialsneeds: 'تشرد و الهروب من البيت و الاحتياجات الخاصة' }, { requiringInformation: 'طلب معلومات' }, { peerRelationships: 'علاقة الاقران' }, { legalIssues: 'الوضع الجنائي' }]
    sourceLangaugeEnglish = [{ abusViolence: 'AbusViolence' }, { displacement: 'Displacement' }, { sexualThings: 'SexualThings' }, { mentalPsychologicalHealth: 'MentalPsychologicalHealth' }, { narcoticSubstances: 'NarcoticSubstances' }, { studyMatters: 'StudyMatters' }, { discrimination: 'Discrimination' }, { Specialsneeds: 'Specialsneeds' }, { requiringInformation: 'RequiringInformation' }, { peerRelationships: 'PeerRelationships' }, { legalIssues: 'LegalIssues' }]

    Post(homeParentCatogry: any): any {

        console.log('start ==> ' + homeParentCatogry)

        try {

            this.sourceLangaugeEnglish.forEach((value, _key) => {
                /*alert(value[''] + "" + value)*/
                if (value.abusViolence == homeParentCatogry) {
                    this.keyLanguage = 'الاساءة والعنف';
                } else if (value.discrimination == homeParentCatogry) {
                    this.keyLanguage = 'تمييز';
                } else if (value.displacement == homeParentCatogry) {
                    this.keyLanguage = 'تشرد و الهروب من البيت و الاحتياجات الخاصة';
                } else if (value.legalIssues == homeParentCatogry) {
                    this.keyLanguage = 'الوضع الجنائي';
                } else if (value.mentalPsychologicalHealth == homeParentCatogry) {
                    this.keyLanguage = 'الصحة العقلية و النفسية و الاجتماعية';
                } else if (value.narcoticSubstances == homeParentCatogry) {
                    this.keyLanguage = 'المواد المخدرة';
                } else if (value.peerRelationships == homeParentCatogry) {
                    this.keyLanguage = 'اعلاقة الاقران';
                } else if (value.requiringInformation == homeParentCatogry) {
                    this.keyLanguage = 'طلب معلومات';
                } else if (value.sexualThings == homeParentCatogry) {
                    this.keyLanguage = 'السؤال عن الامور الجنسية';
                } else if (value.studyMatters == homeParentCatogry) {
                    this.keyLanguage = 'امور ذات علاقة بالدراسة';
                }
            })

        } catch (e) {
            alert(e)
        }
        var objectModel = { parent: this.keyLanguage }

         /*this.http.post<String>(`http://localhost:3001/lookups-processor`, objectModel, {}).pipe(
            map(response => response),
            tap(data => console.log("Item array", data))).subscribe((data: any) => {
                var req = JSON.stringify(data);
                var response = JSON.parse(req);
                var req2 = JSON.stringify(response.data);
                this.result = JSON.parse(req2);
                this.splitter = this.result.replace("[", "")
                this.finalRes = this.splitter.replace("]", "")
                this.items = this.finalRes.split(',')
                let dtos : String[] = this.items;
                this.dtos = dtos;
                
            });*/

       
            $(document).ready(function () {
                var object = { username: 'admin', password: 'admin' };
                console.log('Object  ==> ' + object.password)
                $.ajax({
                    type: "POST",
                    url: "http://192.168.1.103:3001/lookups-processor",
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
                    error: function (data) {
                        try {

                            var object = data.responseText;
                            var json = JSON.parse(object)
                            var req2 = JSON.stringify(json);
                            this.result = JSON.parse(req2);
                            this.splitter = this.result.replace("[", "")
                            this.finalRes = this.splitter.replace("]", "")
                            this.items = this.finalRes.split(',')
                            let dtos: String[] = this.items;
                            AppCatogryService.prototype.dtos = dtos;

                        } catch (e) {  alert(e) }
                    },
                });
            });

        alert('Dtos')

        alert(this.dtos.length)

        return this.dtos;
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
