import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AppTokenService } from "src/app/core/services/token.service";
/*import { SignInModel } from "src/app/models/signIn.model";*/
//import { TokenModel } from ".src/app/models/token.model";
import { AddUserModel } from "src/app/models/user/add.user.model";
import { UpdateUserModel } from "src/app/models/user/update.user.model";
import { HomeModel } from  'src/app/models/app.home.saved.model';
//import { UserModel } from ".src/app/models/user/user.model";
/*import { HTTP } from '@ionic-native/http/ngx';*/
/*import * as $ from "jquery";*/
@Injectable({ providedIn: "root" })
export class AppHomeService {

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
        return this.https.get(`Users/${userId}`, {});
    }



    Post(homenModel: HomeModel): void {
        console.log('start ==> ' + homenModel.fullName)
    /*public name: string;
    public nickName: string;
    public roles: string[];
    public age: number;
    public gender: string;
    public location: string;
    public state: string;
    public desiredPlace: string;  *//* المكان*//*
    public placeCompany: string;
    public publicReputation: string;  *//* كيف سمعت عن المركز*//*
    public caseType: string;
    public currentCareer: string;
    public socialSituations: string;
    public economySitutation: string;
    public healthSituation: string;
    public nationality: string;
    public personLanguage: string;
    public ageViolance: number;
    public fullName: string;
    public idNumber: string;
    public association: string;

    *//*check boxs*//*


    public medicalConsultation: boolean;
    public inquiriesDiseases: boolean;
    public hospitalAdmission: boolean;
    public healthCare: boolean;
    public selfHarming: boolean;
    public secretsDisclosure: boolean;
    public depression: boolean;
    public suicide: boolean;
    public obsessive: boolean;
    public stealing: boolean;
    public nervousness: boolean;
    public schizophrenia: boolean;
    public fear: boolean;
    public lying: boolean;
    public adolescence: boolean;
    public psychologicalDischarge: boolean;
    public boredom: boolean;
    public lifeEnd: boolean;
    public peeReflex: boolean;
    public LowSelfEsteem: boolean;
    public threat: boolean;
    public deathThreat: boolean;
    public economicDeprivation: boolean;
    public control: boolean;
    public nailBiting: boolean;
    public nightmares: boolean;
    public speechProblems: boolean;
    public helpThanks: boolean;
    public line: boolean;
    public volunteer: boolean;
    public helpChildern: boolean;
    public professional: boolean;*/
        /*var appUserService_________ = this.appTokenService
        var router______ = this.router*/

        try {
            $(document).ready(function () {
               // var object = { nickName: homenModel.nickName, roles: homenModel.roles, age: homenModel.age, gender: homenModel.gender, location: homenModel.location, state: homenModel.state };
                console.log('Object  ==> ' + homenModel.nickName)
                $.ajax({
                    type: "POST",
                    url: "http://192.168.225.80:3001/save-processor",
                    data: JSON.stringify(homenModel),
                    dataType: "application/json",
                    crossDomain: true,
                    contentType: "application/json",
                    cache: false,
                    success: function (_data) {
                        //alert(data);
                        /*var object = data.responseText;
                        var json = JSON.parse(object)*/
                        try {
                           /* appUserService_________.set(json.access_token)
                            router______.navigate(["/main/home"])*/
                            alert('');
                        } catch (e) {
                            console.log(e)
                        }
                    },
                    error: function (_data) {

                        /*var object = data.responseText;
                        var json = JSON.parse(object)*/
                        try {
                            /*appUserService_________.set(json.access_token)
                            router______.navigate(["/main/home"])*/
                        } catch (e) { console.log(e) }
                    },
                });
            });
        } catch (e) { console.log(e) }
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
