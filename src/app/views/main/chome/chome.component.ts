import { Component, ViewChild, OnInit, ElementRef, AfterViewInit } from "@angular/core";
import { FormBuilder, Validators, FormControl, FormGroup } from "@angular/forms";
/*import { AddItemService } from "src/app/services/item.service";*/
import { AppHomeService } from 'src/app/services/home.service.api';
/*import { ItemModel } from "src/app/models/Item.model";*/
import { HomeModel } from 'src/app/models/app.home.saved.model';
import { jqxValidatorComponent } from "jqwidgets-framework/jqwidgets-ng/jqxvalidator";
import { jqxDateTimeInputComponent } from "jqwidgets-framework/jqwidgets-ng/jqxdatetimeinput";
import { jqxInputComponent } from "jqwidgets-framework/jqwidgets-ng/jqxinput";
import { jqxTreeComponent } from "jqwidgets-ng/jqxtree";
import { jqxNotificationComponent } from "jqwidgets-ng/jqxnotification";
import { jqxButtonComponent } from "jqwidgets-ng/jqxbuttons";
import { Router } from "@angular/router";
import { AppTokenService } from "src/app/core/services/token.service";
import { CatogryListService } from "src/app/services/catogry.service";
import { jqxDropDownListComponent } from "jqwidgets-framework/jqwidgets-ng/jqxdropdownlist";
/*import { HttpClient } from "@angular/common/http";*/
/*import { Subscription } from "rxjs";
import { map, tap } from "rxjs/operators";*/
import * as $ from "jquery";
import { jqxDropDownButtonComponent } from 'jqwidgets-ng/jqxdropdownbutton';
import { jqxListBoxComponent } from 'jqwidgets-framework/jqwidgets-ng/jqxlistbox';
import { jqxLoaderComponent } from 'jqwidgets-framework/jqwidgets-ng/jqxloader';
/*import { AppCatogryService } from 'src/app/services/main.catogry.api.service';*/
import { jqxGridComponent } from 'jqwidgets-framework/jqwidgets-ng/jqxgrid'
import { jqxWindowComponent } from 'jqwidgets-framework/jqwidgets-ng/jqxwindow';
import { jqxTextAreaComponent } from "jqwidgets-framework/jqwidgets-ng/jqxtextarea";
import { jqxResponsivePanelComponent } from 'jqwidgets-framework/jqwidgets-ng/jqxresponsivepanel';
import { jqxPanelComponent } from 'jqwidgets-framework/jqwidgets-ng/jqxpanel';
import { AppCallerService } from 'src/app/services/main.caller.api.service';
import { HomeCallerInfo } from 'src/app/models/main.caller.inf.model';
import { NgxMaterialTimepickerComponent } from 'ngx-material-timepicker';
import { AppRecCallerService } from 'src/app/services/main.recive.calls.service';
import { HomeReciveCallerInfo } from 'src/app/models/main.receive.calls.info.model';
import { HomeCaseChildInfo } from 'src/app/models/main.situations.tabs.model';
import { AppChildernCaseService } from 'src/app/services/main.children.situation.api.service';
import { HomeVoilanceCaseInfo } from "../../../models/main.info.violance.model";
import { AppPoliceService } from 'src/app/services/main.police.info.service';
import { AppVoilanceService } from 'src/app/services/main.info.volaince.services';
import { HomePoliceCaseInfo } from "../../../models/main.police.info.model";
import { AppComponentCommunicateService } from 'src/app/services/main.component.communication.api.service';
import { HomeComponentCommunicateInfo } from "../../../models/main.comunication.component.model";
import { } from 'jqwidgets-framework/jqwidgets-ng/jqxdropdownbutton';
import { jqxPopoverComponent } from "jqwidgets-framework/jqwidgets-ng/jqxpopover";
import { jqxDataTableComponent } from "jqwidgets-framework/jqwidgets-ng/jqxdatatable";
import "src/assets/js/techdemo/techdemo.js";
import "src/assets/js/techdemo/jqxdatatbl.js";

/*import { jqxResponsivePanelComponent } from "jqwidgets-framework/jqwidgets-ng/jqxresponsivepanel/public_api";
import { jqxPanelComponent } from "jqwidgets-framework/jqwidgets-ng/jqxpanel/public_api";*/
/*import  "src/assets/jqwidgets/jqxcore.js";*/
/*import { jqxDataTableComponent } from 'jqwidgets-framework/jqwidgets-ng/jqxdatatable';*/
/*import { async } from "rxjs/internal/scheduler/async";*/
/*import { HomeParentCatogry } from "../../../models/main.catogry.parent.model";*/
import { ActivatedRoute } from '@angular/router';
import { AppUserService } from 'src/app/services/user.service';
import { jqxToolBarComponent } from "jqwidgets-ng/jqxtoolbar";
/*import { jqxFormComponent } from "jqwidgets-framework/jqwidgets-ng/jqxform/jqwidgets-ng-jqxform";*/
declare function Accept(): any;
declare function Reject(): any;
declare function Hangup(): any;
declare function Transfer(): any;
declare function Hold(): any;
declare function Mute(): any;
declare function CreateDatatble(): any;
declare function Refresh(): any;
declare const webphone_api: any;
declare function RefreshCpanel(): any;
declare function RefreshTabs(): any;
declare function SetCallerId(peer: any): any;
declare function PersonProfileHome(peer: any): any;
declare function destenation(_peername: any): any;
declare function CreateDatatbleHome(): any;
declare function JqGrid(extNo: any): any;
declare function JqGridMessages(username: any): any;
declare function JqGridAnswered(extNo: any): any;
declare function JqGridNoAnswered(extNo: any): any;
declare function OpenWordDocs(validate: any): any;

@Component({ selector: "app-search", templateUrl: "./chome.component.html" })
export class AppCHomeComponent implements OnInit , AfterViewInit {
    @ViewChild("notifications", { static: false }) notifications: ElementRef;

    static jqxToolBarComponent: jqxToolBarComponent;
    myValidator: jqxValidatorComponent;
    passwordInput: jqxInputComponent;
    catogries: CatogryListService;
    source: string[] = [];
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
    relationShip: string;
    startTime: string;
    endTime: string;
    img_______answer: any;
    caseSituationType: string;
    livesWithSituationType: string;
    selectedKeywords: string;
    stringSourceRelated: string;
    stringsourceCrminal: string;
    stringsourceSocial: string;
    stringsourceonmy: string;
    stringsourcePlace: string;
    stringsourceTime: string;
    componentOption: string;

    @ViewChild("submitButton", { static: false }) submitButton: jqxButtonComponent;
    @ViewChild("timeNotification", { static: false }) msgNotification: jqxNotificationComponent;
    @ViewChild("treeReference", { static: false }) tree: jqxTreeComponent;
    @ViewChild("validateform", { static: false }) validateform: jqxValidatorComponent;
    @ViewChild("dateTimeInput", { static: false }) dateTimeInput: jqxDateTimeInputComponent;
    @ViewChild('jqxLoader', { static: false }) jqxLoader: jqxLoaderComponent;
    @ViewChild("IsExist", { static: false }) IsExist: jqxInputComponent;
    @ViewChild('myDropDownButton', { static: false }) myDropDownButton: jqxDropDownButtonComponent;
    @ViewChild('myTree', { static: false }) myTree: jqxTreeComponent;
    @ViewChild("comboBoxReference", { static: false }) comboBoxReference: jqxDropDownListComponent;
    @ViewChild("sourcelist", { static: false }) sourcelist: jqxDropDownListComponent;
    @ViewChild("sourcelistzxy", { static: false }) sourcelistzxy: jqxDropDownListComponent;
    @ViewChild("communications", { static: false }) communications: jqxDropDownListComponent;
    @ViewChild("sourcLives", { static: false }) sourcLives: jqxDropDownListComponent;

    @ViewChild("sourceRelated", { static: false }) sourceRelated: jqxDropDownListComponent;
    @ViewChild("sourceSitutions", { static: false }) sourceSitutions: jqxDropDownListComponent;
    @ViewChild("sourceCrminal", { static: false }) sourceCrminal: jqxDropDownListComponent;
    @ViewChild("sourceSocial", { static: false }) sourceSocial: jqxDropDownListComponent;
    @ViewChild("sourceonmy", { static: false }) sourceonmy: jqxDropDownListComponent;
    @ViewChild("sourcePlace", { static: false }) sourcePlace: jqxDropDownListComponent;
    @ViewChild("sourceTime", { static: false }) sourceTime: jqxDropDownListComponent;
    @ViewChild("communicationssource", { static: false }) communicationssource: jqxDropDownListComponent;


    @ViewChild('medicalConsultation') medicalConsultation: ElementRef;
    @ViewChild('inquiriesDiseases') inquiriesDiseases: ElementRef;
    @ViewChild('hospitalAdmission') hospitalAdmission: ElementRef;
    @ViewChild('healthCare') healthCare: ElementRef;
    @ViewChild("jqxListBox", { static: false }) jqxListBoxItem: jqxListBoxComponent;

    static refresh(): any {

        /*alert('Test')*/

    }

    @ViewChild("picker2", { static: false }) picker2: NgxMaterialTimepickerComponent;
    @ViewChild("picker1", { static: false }) picker1: NgxMaterialTimepickerComponent;

    @ViewChild('selfHarming') selfHarming: ElementRef;
    @ViewChild('secretsDisclosure') secretsDisclosure: ElementRef;
    @ViewChild('depression') depression: ElementRef;
    @ViewChild('suicide') suicide: ElementRef;
    @ViewChild('obsessive') obsessive: ElementRef;
    @ViewChild('stealing') stealing: ElementRef;
    @ViewChild('nervousness') nervousness: ElementRef;
    @ViewChild('schizophrenia') schizophrenia: ElementRef;
    @ViewChild('fear') fear: ElementRef;
    @ViewChild('lying') lying: ElementRef;
    @ViewChild('adolescence') adolescence: ElementRef;
    @ViewChild('psychologicalDischarge') psychologicalDischarge: ElementRef;
    @ViewChild('boredom') boredom: ElementRef;
    @ViewChild('lifeEnd') lifeEnd: ElementRef;
    @ViewChild('peeReflex') peeReflex: ElementRef;
    @ViewChild('catogries') catogriesForm: ElementRef;
    @ViewChild('speechProblems') speechProblems: ElementRef;
    @ViewChild('LowSelfEsteem') LowSelfEsteem: ElementRef;
    @ViewChild('threat') threat: ElementRef;
    @ViewChild('deathThreat') deathThreat: ElementRef;
    @ViewChild('economicDeprivation') economicDeprivation: ElementRef;
    @ViewChild('control') control: ElementRef;
    @ViewChild('nailBiting') nailBiting: ElementRef;
    @ViewChild('nightmares') nightmares: ElementRef;
    @ViewChild('helpThanks') helpThanks: ElementRef;
    @ViewChild('volunteer') volunteer: ElementRef;
    @ViewChild('line') line: ElementRef;
    @ViewChild('helpChildern') helpChildern: ElementRef;
    @ViewChild('professional') professional: ElementRef;


    @ViewChild("jqxDateTimeInput", { static: false }) jqxDateTimeInput: jqxDateTimeInputComponent;
    @ViewChild("callPoliceDate", { static: false }) callPoliceDate: jqxDateTimeInputComponent;

    @ViewChild("keywords", { static: false }) keywords: jqxDropDownListComponent;

    @ViewChild('callerInfoNotes', { static: false }) callerInfoNotes: jqxTextAreaComponent;

    @ViewChild('descriptionverion1', { static: false }) descriptionverion1: jqxTextAreaComponent;
    @ViewChild('descriptionverion2', { static: false }) descriptionverion2: jqxTextAreaComponent;
    @ViewChild('descriptionverion3', { static: false }) descriptionverion3: jqxTextAreaComponent;
    @ViewChild('caseSitutationTypeTxT', { static: false }) caseSitutationTypeTxT: jqxTextAreaComponent;
    @ViewChild('componentOptionTxT', { static: false }) componentOptionTxT: jqxTextAreaComponent;

    @ViewChild('descriptionverion4', { static: false }) descriptionverion4: jqxTextAreaComponent;
    @ViewChild('descriptionverion5', { static: false }) descriptionverion5: jqxTextAreaComponent;
    @ViewChild('descriptionverion6', { static: false }) descriptionverion6: jqxTextAreaComponent;

    @ViewChild('descriptionverion7', { static: false }) descriptionverion7: jqxTextAreaComponent;
    @ViewChild('descriptionverion8', { static: false }) descriptionverion8: jqxTextAreaComponent;
    @ViewChild('descriptionverion9', { static: false }) descriptionverion9: jqxTextAreaComponent;

    @ViewChild('descriptionverion10', { static: false }) descriptionverion10: jqxTextAreaComponent;
    @ViewChild('descriptionverion11', { static: false }) descriptionverion11: jqxTextAreaComponent;
    @ViewChild('descriptionverion12', { static: false }) descriptionverion12: jqxTextAreaComponent;

    @ViewChild('descriptionverion13', { static: false }) descriptionverion13: jqxTextAreaComponent;
    @ViewChild('descriptionverion14', { static: false }) descriptionverion14: jqxTextAreaComponent;
    @ViewChild('descriptionverion15', { static: false }) descriptionverion15: jqxTextAreaComponent;

    @ViewChild('popup', { static: false }) popup: jqxPopoverComponent;

    @ViewChild('windowReference', { static: false }) window: jqxWindowComponent;

    @ViewChild('callcenter', { static: false }) callcenter: jqxToolBarComponent;
    dropDownListSource: string[] =
        [
            'Affogato',
            'Americano',
            'Bicerin',
            'Breve',
            'Café Bombón',
            'Café au lait',
            'Caffé Corretto',
            'Café Crema',
            'Caffé Latte',
            'Caffé macchiato',
            'Café mélange',
            'Coffee milk',
            'Cafe mocha',
            'Cappuccino',
            'Carajillo',
            'Cortado',
            'Cuban espresso',
            'Espresso',
            'Eiskaffee',
            'The Flat White',
            'Frappuccino',
            'Galao',
            'Greek frappé coffee',
            'Iced Coffee﻿',
            'Indian filter coffee',
            'Instant coffee',
            'Irish coffee',
            'Liqueur coffee'
        ];  

    Tabs(): any {

        RefreshCpanel()


    }

    
    CallChangeIcons() {

        this.initTools = (type: string, index: number, tool: any, _menuToolIninitialization: any): void => {
            let icon = document.createElement('div');
            if (type == "toggleButton") {
                icon.className = 'btn ';
            }
            switch (index) {
                case 0:

                    icon.setAttribute("title", "Forward");
                    icon.setAttribute("width", "30")
                    let img___________3 = document.createElement('img');
                    img___________3.src = 'assets/img/cloud_storage_208px.png'
                    img___________3.width = 50
                    img___________3.height = 50
                    img___________3.title = 'Forward tool';

                    img___________3.addEventListener("click", function () {
                        img___________3.src = "assets/img/icons8-natural-user-interface-2-96.png"
                    })

                    icon.append(img___________3)

                    tool[0].appendChild(icon);
                    break;


                case 1:
                   
                    icon.setAttribute("title", "search");
                    icon.setAttribute("width", "30")

                    let img________ = document.createElement('img');
                    img________.src = 'assets/img/cloud_storage_208px.png'
                    img________.width = 50
                    img________.height = 50
                    img________.title = 'Custom tool';

                    img________.addEventListener("click", function () {
                        img________.src = "assets/img/icons8-natural-user-interface-2-96.png"
                    })

                    icon.append(img________)

                    tool[0].appendChild(icon);

                    break;
                case 2:


                    icon.setAttribute("title", "Answer");
                    icon.setAttribute("width", "30")
                    let img_________ = document.createElement('img');
                    img_________.src = 'assets/img/viber.png'
                    img_________.width = 50
                    img_________.height = 50
                    img_________.title = 'Answer';

                    icon.append(img_________)

                    img_________.addEventListener("click", function () {
                        img_________.src = "assets/img/icons8-natural-user-interface-2-96.png"
                        Accept();
                    });

                    this.img_______answer = img_________

                    tool[0].appendChild(icon);
                    break;

                
                case 4:
                    tool.jqxToggleButton({ width: 80, toggled: true });
                    tool.text("CallEnd");
                    tool.on('click', () => {
                        try {
                            this.callcenter.refresh();
                        } catch (e) {
                            alert(e)
                        }
                    });
                    break;
                
                case 4:

                    

                    tool.jqxToggleButton({ width: 80, toggled: true });
                    tool.text("Queue");
                    tool.on("click", () => {
                        let toggled = tool.jqxToggleButton("toggled");
                        if (toggled) {

                        }
                    });

                    

                    break;
                case 5:

                    





                    icon.setAttribute("title", "Transfer");
                    icon.setAttribute("width", "30")
                    let img____________1 = document.createElement('img');
                    img____________1.src = 'assets/img/icons8-call-transfer-64_(1).png'
                    img____________1.width = 50
                    img____________1.height = 50
                    img____________1.title = 'Transfer tool';

                    img____________1.addEventListener("click", function () {
                        img____________1.src = "assets/img/icons8-natural-user-interface-2-96.png"
                        Transfer()
                    });

                    icon.append(img____________1)

                    tool[0].appendChild(icon);
                    break;
                case 5:

                    


                    icon.setAttribute("title", "Disconnect");
                    icon.setAttribute("width", "30")
                    let img____________2 = document.createElement('img');
                    img____________2.src = 'assets/img/icons8-phone-96.png'
                    img____________2.width = 50
                    img____________2.height = 50
                    img____________2.title = 'Custom tool';
                    img____________2.addEventListener("click", function () {
                        img____________2.src = "assets/img/icons8-natural-user-interface-2-96.png"
                        Reject()
                    });
                    icon.append(img____________2)

                    tool[0].appendChild(icon);
                    break;
                case 6:
                    
                    icon.setAttribute("title", "silent");
                    icon.setAttribute("width", "30")
                    let img____________4 = document.createElement('img');
                    img____________4.src = 'assets/img/icons8-silent-call-80.png'
                    img____________4.width = 50
                    img____________4.height = 50
                    img____________4.title = 'silent';
                    img____________4.addEventListener("click", function () {
                        img____________4.src = "assets/img/icons8-natural-user-interface-2-96.png"
                        Mute()
                    });
                    icon.append(img____________4)

                    tool[0].appendChild(icon);
                    break;

                case 7:
                    
                    icon.setAttribute("title", "Do not Disturb");
                    icon.setAttribute("width", "30")
                    let img____________5 = document.createElement('img');
                    img____________5.src = 'assets/img/icons8-do-not-disturb-48.png'
                    img____________5.width = 50
                    img____________5.height = 50
                    img____________5.title = 'Do not Disturb';
                    img____________5.addEventListener("click", function () {
                        img____________5.src = "assets/img/icons8-natural-user-interface-2-96.png"
                        Hold()
                    });
                    icon.append(img____________5)

                    tool[0].appendChild(icon);
                    break;
                case 9:
                    
                    icon.setAttribute("title", "Rejected");
                    icon.setAttribute("width", "30")
                    let img____________6 = document.createElement('img');
                    img____________6.src = 'assets/img/icons8-unavailable-64.png'
                    img____________6.width = 50
                    img____________6.height = 50
                    img____________6.title = 'Rejected';
                    img____________6.addEventListener("click", function () {
                        img____________6.src = "assets/img/icons8-natural-user-interface-2-96.png"
                        Reject()
                    });
                    icon.append(img____________6)

                    tool[0].appendChild(icon);
                    break;

            }
        };
        try {
            this.callcenter.initTools = this.initTools;
            this.callcenter.refresh();

        } catch (e) {
            alert(e)
        }
 }




    RefreshTab() {
        RefreshTabs()
    }

    Back(): any {

        this.appTokenService.set(this.appTokenService.get());
        this.router.navigate(["main/chome"], { queryParams: { empName: this.route.snapshot.queryParamMap.get('empName') } });
    }


    OpenTabs(): any {
        CreateDatatbleHome()
        OpenWordDocs('Tabs')
    }

    tools: string = 'toggleButton toggleButton toggleButton | toggleButton toggleButton toggleButton | toggleButton toggleButton toggleButton | toggleButton';
    initTools: any = (type: string, index: number, tool: any, _menuToolIninitialization: any): void => {
        let icon = document.createElement('div');
        if (type == "toggleButton") {
            icon.className = 'btn ';
        }
        switch (index) {
            case 0:

                icon.setAttribute("title", "Forward");
                icon.setAttribute("width", "30")
                let img___________3 = document.createElement('img');
                img___________3.src = 'assets/img/icons8-call-forwarding-80.png'
                img___________3.width = 50
                img___________3.height = 50
                img___________3.title = 'Forward tool';

                img___________3.addEventListener("click", function () {
                    img___________3.src = "assets/img/icons8-natural-user-interface-2-96.png"
                })

                icon.append(img___________3)

                tool[0].appendChild(icon);
                break;


            case 1:
               
                icon.setAttribute("title", "search");
                icon.setAttribute("width", "30")

                let img________ = document.createElement('img');
                img________.src = 'assets/img/icons8-search-database-50.png'
                img________.width = 50
                img________.height = 50
                img________.title = 'Custom tool';

                img________.addEventListener("click", function () {
                    img________.src = "assets/img/icons8-natural-user-interface-2-96.png"
                })

                icon.append(img________)

                tool[0].appendChild(icon);

                break;
            case 2:


                icon.setAttribute("title", "Answer");
                icon.setAttribute("width", "30")
                let img_________ = document.createElement('img');
                img_________.src = 'assets/img/viber.png'
                img_________.width = 50
                img_________.height = 50
                img_________.title = 'Answer';
                
                icon.append(img_________)

                img_________.addEventListener("click", function () {
                    img_________.src = "assets/img/icons8-natural-user-interface-2-96.png"
                    Accept();

                    
                });

                this.img_______answer = img_________

                tool[0].appendChild(icon);
                break;

            
            case 4:
                tool.jqxToggleButton({ width: 80, toggled: true });
                tool.text("CallEnd");
                tool.on('click', () => {
                    try {
                        Reject();
                        this.callcenter.refresh();
                    } catch (e) {
                        alert(e)
                    }
                });
                break;
            
            case 4:

                

                tool.jqxToggleButton({ width: 80, toggled: true });
                tool.text("Queue");
                tool.on("click", () => {
                    let toggled = tool.jqxToggleButton("toggled");
                    if (toggled) {
                        
                    }
                });

                

                break;
            case 5:

                





                icon.setAttribute("title", "Transfer");
                icon.setAttribute("width", "30")
                let img____________1 = document.createElement('img');
                img____________1.src = 'assets/img/icons8-call-transfer-64_(1).png'
                img____________1.width = 50
                img____________1.height = 50
                img____________1.title = 'Transfer tool';

                img____________1.addEventListener("click", function () {
                    img____________1.src = "assets/img/icons8-natural-user-interface-2-96.png"
                    Transfer()
                });

                icon.append(img____________1)

                tool[0].appendChild(icon);
                break;
            case 5:



                icon.setAttribute("title", "Disconnect");
                icon.setAttribute("width", "30")
                let img____________2 = document.createElement('img');
                img____________2.src = 'assets/img/icons8-phone-96.png'
                img____________2.width = 50
                img____________2.height = 50
                img____________2.title = 'Custom tool';
                img____________2.addEventListener("click", function () {
                    img____________2.src = "assets/img/icons8-natural-user-interface-2-96.png"
                    Reject()
                });
                icon.append(img____________2)

                tool[0].appendChild(icon);
                break;
            case 6:
                
                icon.setAttribute("title", "silent");
                icon.setAttribute("width", "30")
                let img____________4 = document.createElement('img');
                img____________4.src = 'assets/img/icons8-silent-call-80.png'
                img____________4.width = 50
                img____________4.height = 50
                img____________4.title = 'silent';
                img____________4.addEventListener("click", function () {
                    img____________4.src = "assets/img/icons8-natural-user-interface-2-96.png"
                    Mute()
                });
                icon.append(img____________4)

                tool[0].appendChild(icon);
                break;

            case 7:
                
                icon.setAttribute("title", "Do not Disturb");
                icon.setAttribute("width", "30")
                let img____________5 = document.createElement('img');
                img____________5.src = 'assets/img/icons8-do-not-disturb-48.png'
                img____________5.width = 50
                img____________5.height = 50
                img____________5.title = 'Do not Disturb';
                img____________5.addEventListener("click", function () {
                    img____________5.src = "assets/img/icons8-natural-user-interface-2-96.png"
                    Hold()
                });
                icon.append(img____________5)

                tool[0].appendChild(icon);
                break;
            case 9:
                
                icon.setAttribute("title", "Rejected");
                icon.setAttribute("width", "30")
                let img____________6 = document.createElement('img');
                img____________6.src = 'assets/img/icons8-unavailable-64.png'
                img____________6.width = 50
                img____________6.height = 50
                img____________6.title = 'Rejected';
                img____________6.addEventListener("click", function () {
                    img____________6.src = "assets/img/icons8-natural-user-interface-2-96.png"
                    Reject()
                });
                icon.append(img____________6)

                tool[0].appendChild(icon);
                break;

        }
    };

    refresh(): any {

        try {

            if (AppCHomeComponent.jqxToolBarComponent != null) {
                AppCHomeComponent.jqxToolBarComponent.refresh();
            } else {
                alert('Failed')
            }
        } catch (e) { alert(e); }
    }
    ToolBarBuilder() {


        this.tools = 'toggleButton toggleButton toggleButton | toggleButton toggleButton toggleButton | toggleButton toggleButton toggleButton | toggleButton';
        this.initTools = (type: string, index: number, tool: any, _menuToolIninitialization: any): void => {
            let icon = document.createElement('div');
            if (type == "toggleButton") {
                icon.className = 'btn ';
            }
            switch (index) {
                case 0:

                    icon.setAttribute("title", "Forward");
                    icon.setAttribute("width", "30")
                    let img___________3 = document.createElement('img');
                    img___________3.src = 'assets/img/icons8-call-forwarding-80.png'
                    img___________3.width = 50
                    img___________3.height = 50
                    img___________3.title = 'Forward tool';

                    icon.append(img___________3)

                    tool[0].appendChild(icon);
                    break;


                case 1:
                    
                    icon.setAttribute("title", "search");
                    icon.setAttribute("width", "30")

                    let img________ = document.createElement('img');
                    img________.src = 'assets/img/icons8-search-database-50.png'
                    img________.width = 50
                    img________.height = 50
                    img________.title = 'Custom tool';

                    icon.append(img________)

                    tool[0].appendChild(icon);

                    break;
                case 2:


                    icon.setAttribute("title", "Answer");
                    icon.setAttribute("width", "30")
                    let img_________ = document.createElement('img');
                    img_________.src = 'assets/img/viber.png'
                    img_________.width = 50
                    img_________.height = 50
                    img_________.title = 'Answer';

                    

                    icon.append(img_________)

                    img_________.addEventListener("click", function () {
                        img_________.src = "assets/img/answerready.png"
                        Accept();
                      
                    });



                    tool[0].appendChild(icon);
                    break;

                
                case 4:
                   
                    icon.setAttribute("title", "End tool");
                    icon.setAttribute("width", "30")
                    let img_____ = document.createElement('img');
                    img_____.src = 'assets/img/icons8-end-call-48.png'
                    img_____.width = 50
                    img_____.height = 50
                    img_____.title = 'End tool';
                    img_____.addEventListener("click", function () {
                        img_________.src = 'assets/img/viber.png'

                        Hangup()
                    });

                    icon.append(img_____)

                    tool[0].appendChild(icon);
                    break;
                case 4:

                   

                    tool.jqxToggleButton({ width: 80, toggled: true });
                    tool.text("Queue");
                    tool.on("click", () => {
                        let toggled = tool.jqxToggleButton("toggled");
                        if (toggled) {
                            
                        }
                    });

                    

                    break;
                case 5:






                    icon.setAttribute("title", "Transfer");
                    icon.setAttribute("width", "30")
                    let img____________1 = document.createElement('img');
                    img____________1.src = 'assets/img/icons8-call-transfer-64_(1).png'
                    img____________1.width = 50
                    img____________1.height = 50
                    img____________1.title = 'Transfer tool';

                    img____________1.addEventListener("click", function () {
                        Transfer()
                    });

                    icon.append(img____________1)

                    tool[0].appendChild(icon);
                    break;
                case 5:

                    


                    icon.setAttribute("title", "Disconnect");
                    icon.setAttribute("width", "30")
                    let img____________2 = document.createElement('img');
                    img____________2.src = 'assets/img/icons8-phone-96.png'
                    img____________2.width = 50
                    img____________2.height = 50
                    img____________2.title = 'Custom tool';
                    img____________2.addEventListener("click", function () {
                        img_________.src = 'assets/img/viber.png'
                        Reject()
                    });
                    icon.append(img____________2)

                    tool[0].appendChild(icon);
                    break;
                case 6:
                    
                    icon.setAttribute("title", "silent");
                    icon.setAttribute("width", "30")
                    let img____________4 = document.createElement('img');
                    img____________4.src = 'assets/img/icons8-silent-call-80.png'
                    img____________4.width = 50
                    img____________4.height = 50
                    img____________4.title = 'silent';
                    img____________4.addEventListener("click", function () {
                        Mute()
                    });
                    icon.append(img____________4)

                    tool[0].appendChild(icon);
                    break;

                case 7:
                    
                    icon.setAttribute("title", "Do not Disturb");
                    icon.setAttribute("width", "30")
                    let img____________5 = document.createElement('img');
                    img____________5.src = 'assets/img/icons8-do-not-disturb-48.png'
                    img____________5.width = 50
                    img____________5.height = 50
                    img____________5.title = 'Do not Disturb';
                    img____________5.addEventListener("click", function () {
                        Hold()
                    });
                    icon.append(img____________5)

                    tool[0].appendChild(icon);
                    break;
                case 9:
                    
                    icon.setAttribute("title", "Rejected");
                    icon.setAttribute("width", "30")
                    let img____________6 = document.createElement('img');
                    img____________6.src = 'assets/img/icons8-unavailable-64.png'
                    img____________6.width = 50
                    img____________6.height = 50
                    img____________6.title = 'Rejected';
                    img____________6.addEventListener("click", function () {
                        Reject()
                    });
                    icon.append(img____________5)

                    tool[0].appendChild(icon);
                    break;

            }
        };


    }


   


    countries: string[] = new Array('Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo, Democratic Republic', 'Congo, Republic of the', 'Costa Rica', 'Cote d\'Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Greenland', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Mongolia', 'Morocco', 'Monaco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Samoa', 'San Marino', ' Sao Tome', 'Saudi Arabia', 'Senegal', 'Serbia and Montenegro', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe');
    sourceTextArea = (query: any, response: any) => {
        let item = query.split(/,\s*/).pop();
       
        this.callerInfoNotes.query(item);
        response(this.countries);
    };
    renderer = (itemValue: any, inputValue: any) => {
        let terms = inputValue.split(/,\s*/);
     
        terms.pop();
       
        terms.push(itemValue);
        
        terms.push('');
        let value = terms.join(', ');
        return value;
    };

    count_1: number = 0;
    count_2: number = 0;
    count_3: number = 0;
    count_4: number = 0;
    count_5: number = 0;


    itemModel: HomeModel;
    Catogries: any;
    Description: any;
    CatogrySelected: any;
    //subscription: Subscription;
    item: any;
    selectedOption: any;
    form = this.formBuilder.group({
        nickname: new FormControl("nickname", Validators.required),
        age: new FormControl("age", Validators.required),
        gender: new FormControl("gender", Validators.required),
        location: new FormControl("location", Validators.required),
        state: new FormControl("state", Validators.required),
        desiredPlace: new FormControl("desiredPlace", Validators.required),
        placeCompany: new FormControl("placeCompany", Validators.required),
        publicReputation: new FormControl("publicReputation", Validators.required),
        caseType: new FormControl("caseType", Validators.required),
        currentCareer: new FormControl("currentCareer", Validators.required),
        socialSituations: new FormControl("socialSituations", Validators.required),
        economySitutation: new FormControl("economySitutation", Validators.required),
        healthSituation: new FormControl("healthSituation", Validators.required),
        nationality: new FormControl("nationality", Validators.required),
        personLanguage: new FormControl("personLanguage", Validators.required),
        ageViolance: new FormControl("ageViolance", Validators.required),
        fullName: new FormControl("fullName", Validators.required),
        idNumber: new FormControl("idNumber", Validators.required),
        association: new FormControl("association", Validators.required),
        medicalConsultation: new FormControl("medicalConsultation"),
        inquiriesDiseases: new FormControl("inquiriesDiseases"),
        hospitalAdmission: new FormControl("hospitalAdmission"),
        healthCare: new FormControl("healthCare"),
        selfHarming: new FormControl("selfHarming"),
        secretsDisclosure: new FormControl("secretsDisclosure"),
        depression: new FormControl("depression"),
        suicide: new FormControl("suicide"),
        obsessive: new FormControl("obsessive"),
        stealing: new FormControl("stealing"),
        nervousness: new FormControl("nervousness"),
        schizophrenia: new FormControl("schizophrenia"),
        fear: new FormControl("fear"),
        lying: new FormControl("lying"),
        adolescence: new FormControl("adolescence"),
        psychologicalDischarge: new FormControl("psychologicalDischarge"),
        boredom: new FormControl("boredom"),
        lifeEnd: new FormControl("lifeEnd"),
        peeReflex: new FormControl("peeReflex"),
        LowSelfEsteem: new FormControl("LowSelfEsteem"),
        threat: new FormControl("threat"),
        deathThreat: new FormControl("deathThreat"),
        economicDeprivation: new FormControl("economicDeprivation"),
        control: new FormControl("control"),
        nailBiting: new FormControl("nailBiting")
    });
    get selfHarmingMthd(): any { return this.form.get('selfHarming'); }
    initialDate: Date = new Date(2017, 8, 1);
    sendButton(): void {
        this.myValidator.validate(document.getElementById("validateform"));
        this.onSave();
    }
    sourcesub: any[] = [

    ];

    sourceCheckboxes: any[] = [
        "EconomicExploitation",
        "AbusViolence",
        "Displacement",
        "SexualThings",
        "MentalPsychologicalHealth",
        "NarcoticSubstances",
        "StudyMatters",
        "Discrimination",
        "Specialsneeds",
        "RequiringInformation",
        "PeerRelationships",
        "FamilyRelations",
        "LegalIssues",
        "ArmedConflict"
    ];

    treeSource: any[] =
        [
            {
                icon: "assets/img/icons8-call-disconnected-80.png", label: "CallMissing", expanded: true,
                items:
                    [
                        { icon: "assets/jqwidgets/styles/images/icon-calendar-light.png", label: "Calendar" },
                        { icon: "assets/jqwidgets/styles/images/icon-edit.png", label: "Contacts", selected: true }
                    ]
            },
            {
                icon: "assets/img/reports.jpg", label: "Cdr", expanded: true,
                items:
                    [
                        { icon: "assets/jqwidgets/styles/images/pdf.jpg", label: "Report" },
                        { icon: "assets/jqwidgets/styles/images/add.jpg", label: "Conference" },
                        { icon: "assets/jqwidgets/styles/images/charts.png", label: "Finance" },
                        { icon: "assets/jqwidgets/styles/images/search.png", label: "Search" }
                    ]
            }
            ,
        ];

    rules =
        [
            { input: "#ItemName", message: "ItemName is required!", action: "keyup, blur", rule: "required" },
            { input: "#Description", message: "Your Description must be between 3 and 255 characters!", action: "keyup, blur", rule: "length=3,255" },
            { input: "#MaxNum", message: "MaxNum is required!", action: "keyup, blur", rule: "required" },
            { input: "#MinNum", message: "MinNum is Required!", action: "keyup, blur", rule: "required" },
            { input: "#CatogryId", message: "CatogryId is Required!", action: "keyup, blur", rule: "required" },
            {
                input: "#dateTimeInput", message: "Your birth date must be between 1/1/1900 and 1/1/2050.", action: "valueChanged",
                rule: (_input: any, _commit: any): any => {
                    let date = this.dateTimeInput.value();
                    let result = date.getFullYear() >= 2000 && date.getFullYear() <= 2050;
                    return result;
                }
            }
        ];

    sourceDatatable: any =
        {
            dataType: 'json',
            type: 'GET',
            dataFields: [
                { name: 'id', type: 'string' },
                { name: 'date', type: 'string' },
                { name: 'src', type: 'string' },
                { name: 'dst', type: 'string' },
                { name: 'duration', type: 'string' },
                { name: 'accountcode', type: 'string' }
            ],
            addRow: function (_rowID: any, _rowData: any, _position: any, _commit: any) {

                _commit(true);

            },

            updateRow: function (_rowID: any, _rowData: any, _commit: any) {

                _commit(true);

            },

            deleteRow: function (_rowID: any, _commit: any) {

                _commit(true);

            },
            id: 'id',
            url: 'http://192.168.225.81:4110/api/asterriskSearchApi?extNo=' + sessionStorage.getItem("extNo")
        };

     
    columnsLatest: any[] =
        [
            { text: 'id', dataField: 'id', width: '20%', cellsRenderer: function (_row : any, _column : any, _value : any, rowData : any) {

                var image = ''

                

                image = "<div style='margin: 5px; margin-bottom: 3px;color:black;background-color:orange;font-size:medium;font-family:Calibri;font-weight:bold;'>";
                    
                

                
                image += rowData.id
                image += "</div>";
                return image;
            }
            },
            {
                text: 'date', dataField: 'date', width: '20%', cellsRenderer: function (_row: any, _column: any, _value: any, rowData: any) {

                    var image = ''

                    

                    image = "<div style='margin: 5px; margin-bottom: 3px;color:black;background-color:cadetblue;font-size:medium;font-family:Calibri;font-weight:bold;'>";
                    

                    
                    image += rowData.date
                    image += "</div>";
                    return image;
                }
            },
            {
                text: 'src', dataField: 'src', width: '16%', cellsRenderer: function (_row: any, _column: any, _value: any, rowData: any) {

                    var image = ''

                    

                    image = "<div style='margin: 5px; margin-bottom: 3px;color:white;background-color:dimgray;font-size:large;font-family:Calibri;font-weight:bold;'>";
                    

                    /*var imgurl = '../../images/' + rowData.firstname.toLowerCase() + '.png';
                    var img = '<img width="60" height="60" style="display: block;" src="' + imgurl + '"/>';*/
                    /*image += img;*/
                    image += rowData.src
                    image += "</div>";
                    return image;
                }
            },
            {
                text: 'dst', dataField: 'dst', width: '11%', cellsRenderer: function (_row: any, _column: any, _value: any, rowData: any) {

                    var image = ''

                    
                    image = "<div style='margin: 5px; margin-bottom: 3px;color:white;background-color:dimgray;font-size:large;font-family:Calibri;font-weight:bold;'>";
                   

                    
                    image += rowData.dst
                    image += "</div>";
                    return image;
                }
            },
            {
                text: 'duration', dataField: 'duration', width: '11%', cellsRenderer: function (_row: any, _column: any, _value: any, rowData: any) {

                    var image = ''

                    

                    image = "<div style='margin: 5px; margin-bottom: 3px;color:white;background-color:dimgray;font-size:large;font-family:Calibri;font-weight:bold;'>";
                 
                   
                    image += rowData.duration
                    image += "</div>";
                    return image;
                }
            },
            {
                text: 'Status', dataField: 'accountcode', width: '22%', cellsRenderer: function (_row: any, _column: any, _value: any, _rowData: any) {

                    var imgUrlCorrect = "assets/img/icons8-checkmark-64.png"

                    var imgUrlWA = "assets/img/icons8-id-not-verified-48.png"

                    var imgUrlNA = "assets/img/icons8-no-entry-30.png"

                    var imgUrlAddNotes = "assets/img/icons8-strikethrough-30.png"

                    var imgUrlblacklist = "assets/img/icons8-delete-user-male-50.png"

                    var imgCorrect = '<img width="30" height="30" style="display: block;" src="' + imgUrlCorrect + '"/>';
                    var imgWA = '<img width="30" height="30" style="display: block;" src="' + imgUrlWA + '"/>';
                    var imgNA = '<img width="30" height="30" style="display: block;" src="' + imgUrlNA + '"/>';
                    var imgNotes = '<img width="20" height="20" style="display: block;" src="' + imgUrlAddNotes + '"/>';

                    var imgBlacklist = '<img width="20" height="20" style="display: block;" src="' + imgUrlblacklist + '"/>';

                    var image = "<div class='row' style='margin-left:5px;'>" + imgCorrect + "&nbsp;&nbsp;&nbsp;&nbsp;" + imgWA + "&nbsp;&nbsp;&nbsp;&nbsp;" + imgNA + "&nbsp;&nbsp;&nbsp;&nbsp;" + imgNotes + "&nbsp;&nbsp;&nbsp;&nbsp;" + imgBlacklist + "</div>"
                    return image;
                }
            }

        ];


sourceDatatableProfile: any =
        {
            dataType: 'json',
            type:'GET',
            dataFields: [
                { name: 'ApplicantId', type: 'string' },
                { name: 'FullName', type: 'string' },
                { name: 'IdCard', type: 'string' },
                { name: 'LocationName', type: 'string' },
                { name: 'Name', type: 'string' },
                { name: 'CurrentAge', type: 'string' },
                { name: 'CreatedDate', type: 'string' },
                { name: 'UserCreated', type: 'string' }
            ],
            addRow: function (_rowID: any, _rowData: any, _position: any, _commit: any) {

                _commit(true);

            },

            updateRow: function (_rowID: any, _rowData: any, _commit: any) {

                _commit(true);

            },

            deleteRow: function (_rowID: any, _commit: any) {

                _commit(true);

            },
            id: 'ApplicantId',
            url: 'http://192.168.225.81:8090/api/apiSearch'
        };


    columnsProfile: any[] =
        [
            { text: 'ApplicantId', dataField: 'ApplicantId', width: '12%' },
            { text: 'FullName', dataField: 'FullName', width: '12%' },
            { text: 'LastModDate', dataField: 'IdCard', width: '12%' },
            { text: 'LocationName', dataField: 'LocationName', width: '12%' },
            { text: 'Name', dataField: 'Name', width: '12%' },
            { text: 'CurrentAge', dataField: 'CurrentAge', width: '12%' },
            { text: 'CreatedDate', dataField: 'CreatedDate', width: '12%' },
            { text: 'UserCreated', dataField: 'UserCreated', width: '16%' }
            
        ];

    @ViewChild('dataTable', { static: false }) dataTable: jqxDataTableComponent;

    dataAdapterLatest: any = new jqx.dataAdapter(this.sourceDatatable);
		
	@ViewChild('dataTableProfile', { static: false }) dataTableProfile: jqxDataTableComponent;

    dataAdapterProfile: any = new jqx.dataAdapter(this.sourceDatatableProfile);
		

 myAddButton: jqwidgets.jqxButton;
    myEditButton: jqwidgets.jqxButton;
    myDeleteButton: jqwidgets.jqxButton;
    myCancelButton: jqwidgets.jqxButton;
    myUpdateButton: jqwidgets.jqxButton;

    renderToolbar = (toolBar: any): void => {
        let theme = jqx.theme;

        let toTheme = (className: string): string => {
            if (theme == '') return className;
            return className + ' ' + className + '-' + theme;
        }
        
        let container = document.createElement('div');
        let fragment = document.createDocumentFragment();

        container.style.cssText = 'overflow: hidden; position: hidden; height: "100%"; width: "100%"'

        let createButtons = (_name: string, cssClass: string): any => {
            var button = document.createElement('div');
            
            button.style.cssText = 'padding: 3px; margin: 2px; float: left; border: none'

            let iconDiv = document.createElement('div');
            iconDiv.style.cssText = 'margin: 4px; width: 16px; height: 16px;'
            iconDiv.className = cssClass;

            button.appendChild(iconDiv);
            return button;
        }

        let buttons = [
            createButtons('addButton', toTheme('jqx-icon-plus')),
            createButtons('editButton', toTheme('jqx-icon-edit')),
            createButtons('deleteButton', toTheme('jqx-icon-delete')),
            createButtons('cancelButton', toTheme('jqx-icon-cancel')),
            createButtons('updateButton', toTheme('jqx-icon-save'))
        ];

        for (let i = 0; i < buttons.length; i++) {
            fragment.appendChild(buttons[i]);
        }

        container.appendChild(fragment)
        toolBar[0].appendChild(container);

        let addButtonOptions: jqwidgets.ButtonOptions =
        {
            height: 25, width: 25
        };
        let otherButtonsOptions: jqwidgets.ButtonOptions =
        {
            disabled: true, height: 25, width: 25
        };
      
        this.myAddButton = jqwidgets.createInstance(buttons[0], 'jqxButton', addButtonOptions);
        this.myEditButton = jqwidgets.createInstance(buttons[1], 'jqxButton', otherButtonsOptions);
        this.myDeleteButton = jqwidgets.createInstance(buttons[2], 'jqxButton', otherButtonsOptions);
        this.myCancelButton = jqwidgets.createInstance(buttons[3], 'jqxButton', otherButtonsOptions);
        this.myUpdateButton = jqwidgets.createInstance(buttons[4], 'jqxButton', otherButtonsOptions);

       

        this.myAddButton.addEventHandler('click', (_event: any) => {
            
        });

        this.myEditButton.addEventHandler('click', (_event: any) => {
            
        });

        this.myDeleteButton.addEventHandler('click', (_event: any) => {
            
        });

        this.myCancelButton.addEventHandler('click', (_event: any) => {
            
        });

        this.myUpdateButton.addEventHandler('click', (_event: any) => {
            
        });
    };

    columns: any[] =
        [
            { text: 'Order ID', editable: false, dataField: 'OrderID', width: 200 },
            { text: 'Freight', dataField: 'Freight', cellsFormat: 'f', cellsAlign: 'right', align: 'right', width: 200 },
            {
                text: 'Ship Country', dataField: 'ShipCountry', width: 250, columnType: 'custom',
                createEditor: (_row: any, cellValue: any, editor: any, _width: any, _height: any): void => {
                    // create jqxInput editor.
                    let inputContainer = document.createElement('input');
                    inputContainer.className = 'shipCountry';
                    inputContainer.style.cssText = 'border: none; box-sizing: border-box; padding-left: 4px;'
                    editor[0].appendChild(inputContainer);

                    let countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo, Democratic Republic', 'Congo, Republic of the', 'Costa Rica', 'Cote d`Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Greenland', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Mongolia', 'Morocco', 'Monaco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Samoa', 'San Marino', ' Sao Tome', 'Saudi Arabia', 'Senegal', 'Serbia and Montenegro', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'];

                    let InputOptions: jqwidgets.InputOptions = {
                        source: countries,
                        width: '100%',
                        height: '100%'
                    };
                    let myInput: jqwidgets.jqxInput = jqwidgets.createInstance('.shipCountry', 'jqxInput', InputOptions)
                    myInput.val(cellValue);
                },
                initEditor: (_row: any, cellvalue: any, editor: any, _celltext: any, _width: any, _height: any): void => {
                    
                    if (!cellvalue) cellvalue = '';
                    let inputField = editor.find('input');
                    inputField.val(cellvalue);
                },
                getEditorValue: (_row: any, _cellvalue: any, editor: any): void => {
                    
                    return editor.find('input').val();
                }
            },
            { text: 'Shipped Date', dataField: 'ShippedDate', cellsAlign: 'right', align: 'right', cellsFormat: 'dd/MM/yyyy' }
        ];

    updateButtons(action: string): void {
        switch (action) {
            case 'Select':
                this.myAddButton.setOptions({ disabled: false });
                this.myDeleteButton.setOptions({ disabled: false });
                this.myEditButton.setOptions({ disabled: false });
                this.myCancelButton.setOptions({ disabled: true });
                this.myUpdateButton.setOptions({ disabled: true });
                break;
            case 'Unselect':
                this.myAddButton.setOptions({ disabled: false });
                this.myDeleteButton.setOptions({ disabled: true });
                this.myEditButton.setOptions({ disabled: true });
                this.myCancelButton.setOptions({ disabled: true });
                this.myUpdateButton.setOptions({ disabled: true });
                break;
            case 'Edit':
                this.myAddButton.setOptions({ disabled: true });
                this.myDeleteButton.setOptions({ disabled: true });
                this.myEditButton.setOptions({ disabled: true });
                this.myCancelButton.setOptions({ disabled: false });
                this.myUpdateButton.setOptions({ disabled: false });
                break;
            case 'End Edit':
                this.myAddButton.setOptions({ disabled: false });
                this.myDeleteButton.setOptions({ disabled: false });
                this.myEditButton.setOptions({ disabled: false });
                this.myCancelButton.setOptions({ disabled: true });
                this.myUpdateButton.setOptions({ disabled: true });
                break;
        }
    };

    onRowSelect(_event: any): void {
       
    };

    onRowUnselect(_event: any): void {
        this.updateButtons('Unselect');
    };

    onRowEndEdit(_event: any): void {
        this.updateButtons('End Edit');
    };

    onRowBeginEdit(_event: any): void {
        this.updateButtons('Edit');
    };
    excelExport(): void {

        this.dataTable.exportData('xls');

    };

    xmlExport(): void {

        this.dataTable.exportData('xml');

    };

    csvExport(): void {

        this.dataTable.exportData('csv');

    };

    tsvExport(): void {

        this.dataTable.exportData('tsv');

    };

    htmlExport(): void {

        this.dataTable.exportData('html');

    };

    deleteRow(): void {



    };


    deleteSelectRow(): void {



    }

    delete() {



    }

    update() {


    }


    

    updateSelectRow(): void {



    }

    jsonExport(): void {

        this.dataTable.exportData('json');

    };

    pdfExport(): void {

        this.dataTable.exportData('pdf');

    };

    sourceLangaugeEnglish = [{ abusViolence: 'AbusViolence' }, { displacement: 'Displacement' }, { sexualThings: 'SexualThings' }, { mentalPsychologicalHealth: 'MentalPsychologicalHealth' }, { narcoticSubstances: 'NarcoticSubstances' }, { studyMatters: 'StudyMatters' }, { discrimination: 'Discrimination' }, { Specialsneeds: 'Specialsneeds' }, { requiringInformation: 'RequiringInformation' }, { peerRelationships: 'PeerRelationships' }, { legalIssues: 'LegalIssues' }]
    onClickOpenMessageNotification(): void {
        this.msgNotification.open();
    }
    nivagteriphone() {
        this.router.navigate(["iphone"]);
    }

    popupclick(): any {

        this.window.open();
    }

    keywordsInfo(event: any) {
        // alert('Test');
        let item = this.sourcelist.getItem(event.args.index);
        this.selectedKeywords = item.label;

        let sourceKeywords: any =
        {
            datatype: 'json',
            type: 'GET',
            datafields: [{ name: 'data' }],
            data: JSON.stringify([{ 'parent': this.keyLanguage }]),
            url: 'http://192.168.1.103:3001/keywords-processor?parent=' + this.selectedOption + "&" + "options=" + this.selectedKeywords
        };

        this.dataAdapterKeywordsJQ = new jqx.dataAdapter(sourceKeywords, {
            autoBind: true,
            beforeLoadComplete: function (records: any) {
                var data = new Array();
                var response = records[0];
                let res: String = response.data
                let zyz: String;
                let zzz: String[];
                let comma: String;
                if (res != null) {
                    comma = res.replace('[', '').replace(']', '')
                }
                if (comma != null) {
                    zyz = comma.replace('{', '').replace('}', ' ')
                }

                if (zyz != null) {
                    zzz = zyz.split(',')
                }


                for (let ww of zzz) {
                    let word = ww.replace('{', '').replace('}', '')
                    let key = word.split(':')[0]
                    let value = word.split(":")[1]
                    let selectedValue: String;
                    let selectedKeys: String;

                    selectedValue = value.replace('"', '').replace('"', '').trim()

                    selectedKeys = key.replace('"', '').replace('"', '').trim()

                    if (selectedKeys == 'catVal') {
                        data.push(selectedValue)
                    }
                }
                return data;
            }
        });


        this.keywords.source = this.dataAdapterKeywordsJQ
        this.dataAdapterKeywordsJQ.dataBind()
        var sources = { source: this.dataAdapterKeywordsJQ }
        this.keywords.setOptions(sources)

    }
    WriteNew() {
        this.route.snapshot.queryParamMap.get('empName');
        this.router.navigate(['/main/home'], { queryParams: { empName: this.route.snapshot.queryParamMap.get('empName')} });
    }
    select(event: any) {
        let item = this.sourcelistzxy.getItem(event.args.index);
        this.selectedOption = item.label;
        var selected = this.selectedOption;
        this.sourceLangaugeEnglish.forEach((value, _key) => {

            if (value.abusViolence == selected) {
                this.keyLanguage = 'الاساءة والعنف';
            } else if (value.discrimination == selected) {
                this.keyLanguage = 'تمييز';
            } else if (value.displacement == selected) {
                this.keyLanguage = 'تشرد و الهروب من البيت و الاحتياجات الخاصة';
            } else if (value.legalIssues == selected) {
                this.keyLanguage = 'الوضع الجنائي';
            } else if (value.mentalPsychologicalHealth == selected) {
                this.keyLanguage = 'الصحة العقلية و النفسية و الاجتماعية';
            } else if (value.narcoticSubstances == selected) {
                this.keyLanguage = 'المواد المخدرة';
            } else if (value.peerRelationships == selected) {
                this.keyLanguage = 'اعلاقة الاقران';
            } else if (value.requiringInformation == selected) {
                this.keyLanguage = 'طلب معلومات';
            } else if (value.sexualThings == selected) {
                this.keyLanguage = 'السؤال عن الامور الجنسية';
            } else if (value.studyMatters == selected) {
                this.keyLanguage = 'امور ذات علاقة بالدراسة';
            }

        })
        let sourceJQXX: any =
        {
            datatype: 'json',
            type: 'GET',
            datafields: [{ name: 'data' }],
            data: JSON.stringify([{ 'parent': this.keyLanguage }]),
            url: 'http://192.168.1.103:3001/lookups-processor?parent=' + this.keyLanguage
        };
        let sourceCrminal: any =
        {
            datatype: 'json',
            type: 'GET',
            datafields: [{ name: 'data' }],
            data: JSON.stringify([{ 'parent': this.keyLanguage }]),
            url: 'http://192.168.1.103:3001/lookups-processor?parent=' + 'الوضع الجنائي'
        };

        let sourceSituations: any =
        {
            datatype: 'json',
            type: 'GET',
            datafields: [{ name: 'data' }],
            data: JSON.stringify([{ 'parent': this.keyLanguage }]),
            url: 'http://192.168.1.103:3001/lookups-processor?parent=' + 'الصحة العقلية و النفسية و الاجتماعية'
        };

        this.sourceSituationsChildJQ = new jqx.dataAdapter(sourceSituations, {
            autoBind: true,
            beforeLoadComplete: function (records: any) {
                var data = new Array();
                var response = records[0];
                let res: String = response.data
                let zyz: String;
                let zzz: String[];
                let comma: String;
                if (res != null) {
                    comma = res.replace('[', '').replace(']', '')
                }
                if (comma != null) {
                    zyz = comma.replace('{', '').replace('}', ' ')
                }

                if (zyz != null) {
                    zzz = zyz.split(',')
                }


                for (let ww of zzz) {
                    let word = ww.replace('{', '').replace('}', '')
                    let key = word.split(':')[0]
                    let value = word.split(":")[1]
                    let selectedValue: String;
                    let selectedKeys: String;

                    selectedValue = value.replace('"', '').replace('"', '').trim()

                    selectedKeys = key.replace('"', '').replace('"', '').trim()

                    if (selectedKeys == 'catVal') {
                        data.push(selectedValue)
                    }
                }
                return data;
            }
        });

        this.sourceSitutions.source = this.sourceSituationsChildJQ
        this.sourceSituationsChildJQ.dataBind()
        var sources = { source: this.sourceSituationsChildJQ }
        this.sourceSitutions.setOptions(sources)

        this.dataAdapterCommunication = new jqx.dataAdapter(sourceCrminal, {
            autoBind: true,
            beforeLoadComplete: function (records: any) {
                var data = new Array();
                var response = records[0];
                let res: String = response.data
                let zyz: String;
                let zzz: String[];
                let comma: String;
                if (res != null) {
                    comma = res.replace('[', '').replace(']', '')
                }
                if (comma != null) {
                    zyz = comma.replace('{', '').replace('}', ' ')
                }

                if (zyz != null) {
                    zzz = zyz.split(',')
                }


                for (let ww of zzz) {
                    let word = ww.replace('{', '').replace('}', '')
                    let key = word.split(':')[0]
                    let value = word.split(":")[1]
                    let selectedValue: String;
                    let selectedKeys: String;

                    selectedValue = value.replace('"', '').replace('"', '').trim()

                    selectedKeys = key.replace('"', '').replace('"', '').trim()

                    if (selectedKeys == 'catVal') {
                        data.push(selectedValue)
                    }
                }
                return data;
            }
        });

        let sourceCrminalAjax: any =
        {
            datatype: 'json',
            type: 'GET',
            datafields: [{ name: 'data' }],
            data: JSON.stringify([{ 'parent': this.keyLanguage }]),
            url: 'http://192.168.1.103:3001/lookups-processor?parent=' + 'المعتدي'
        };

        this.dataAdapterSourceCrminal = new jqx.dataAdapter(sourceCrminalAjax, {
            autoBind: true,
            beforeLoadComplete: function (records: any) {
                var data = new Array();
                var response = records[0];
                let res: String = response.data
                let zyz: String;
                let zzz: String[];
                let comma: String;
                if (res != null) {
                    comma = res.replace('[', '').replace(']', '')
                }
                if (comma != null) {
                    zyz = comma.replace('{', '').replace('}', ' ')
                }

                if (zyz != null) {
                    zzz = zyz.split(',')
                }


                for (let ww of zzz) {
                    let word = ww.replace('{', '').replace('}', '')
                    let key = word.split(':')[0]
                    let value = word.split(":")[1]
                    let selectedValue: String;
                    let selectedKeys: String;

                    selectedValue = value.replace('"', '').replace('"', '').trim()

                    selectedKeys = key.replace('"', '').replace('"', '').trim()

                    if (selectedKeys == 'catVal') {
                        data.push(selectedValue)
                    }
                }
                return data;
            }
        });

        let sourcePlaceAjax: any =
        {
            datatype: 'json',
            type: 'GET',
            datafields: [{ name: 'data' }],
            data: JSON.stringify([{ 'parent': this.keyLanguage }]),
            url: 'http://192.168.1.103:3001/lookups-processor?parent=' + 'مكان الاعتداء'
        };
        this.dataAdapterSourcePlaceJQ = new jqx.dataAdapter(sourcePlaceAjax, {
            autoBind: true,
            beforeLoadComplete: function (records: any) {
                var data = new Array();
                var response = records[0];
                let res: String = response.data
                let zyz: String;
                let zzz: String[];
                let comma: String;
                if (res != null) {
                    comma = res.replace('[', '').replace(']', '')
                }
                if (comma != null) {
                    zyz = comma.replace('{', '').replace('}', ' ')
                }

                if (zyz != null) {
                    zzz = zyz.split(',')
                }


                for (let ww of zzz) {
                    let word = ww.replace('{', '').replace('}', '')
                    let key = word.split(':')[0]
                    let value = word.split(":")[1]
                    let selectedValue: String;
                    let selectedKeys: String;

                    selectedValue = value.replace('"', '').replace('"', '').trim()

                    selectedKeys = key.replace('"', '').replace('"', '').trim()

                    if (selectedKeys == 'catVal') {
                        data.push(selectedValue)
                    }
                }
                return data;
            }
        });


        let sourceSocialAjax: any =
        {
            datatype: 'json',
            type: 'GET',
            datafields: [{ name: 'data' }],
            data: JSON.stringify([{ 'parent': this.keyLanguage }]),
            url: 'http://192.168.1.103:3001/lookups-processor?parent=' + 'الحالة الاجتماعية'
        };

        this.dataAdapterSourceSocialJQ = new jqx.dataAdapter(sourceSocialAjax, {
            autoBind: true,
            beforeLoadComplete: function (records: any) {
                var data = new Array();
                var response = records[0];
                let res: String = response.data
                let zyz: String;
                let zzz: String[];
                let comma: String;
                if (res != null) {
                    comma = res.replace('[', '').replace(']', '')
                }
                if (comma != null) {
                    zyz = comma.replace('{', '').replace('}', ' ')
                }

                if (zyz != null) {
                    zzz = zyz.split(',')
                }


                for (let ww of zzz) {
                    let word = ww.replace('{', '').replace('}', '')
                    let key = word.split(':')[0]
                    let value = word.split(":")[1]
                    let selectedValue: String;
                    let selectedKeys: String;

                    selectedValue = value.replace('"', '').replace('"', '').trim()

                    selectedKeys = key.replace('"', '').replace('"', '').trim()

                    if (selectedKeys == 'catVal') {
                        data.push(selectedValue)
                    }
                }
                return data;
            }
        });


        let sourceTimeAjax: any =
        {
            datatype: 'json',
            type: 'GET',
            datafields: [{ name: 'data' }],
            data: JSON.stringify([{ 'parent': this.keyLanguage }]),
            url: 'http://192.168.1.103:3001/lookups-processor?parent=' + 'الزمن  بين الاعتداء'
        };

        this.dataAdapterSourceTimeJQ = new jqx.dataAdapter(sourceTimeAjax, {
            autoBind: true,
            beforeLoadComplete: function (records: any) {
                var data = new Array();
                var response = records[0];
                let res: String = response.data
                let zyz: String;
                let zzz: String[];
                let comma: String;
                if (res != null) {
                    comma = res.replace('[', '').replace(']', '')
                }
                if (comma != null) {
                    zyz = comma.replace('{', '').replace('}', ' ')
                }

                if (zyz != null) {
                    zzz = zyz.split(',')
                }


                for (let ww of zzz) {
                    let word = ww.replace('{', '').replace('}', '')
                    let key = word.split(':')[0]
                    let value = word.split(":")[1]
                    let selectedValue: String;
                    let selectedKeys: String;

                    selectedValue = value.replace('"', '').replace('"', '').trim()

                    selectedKeys = key.replace('"', '').replace('"', '').trim()

                    if (selectedKeys == 'catVal') {
                        data.push(selectedValue)
                    }
                }
                return data;
            }
        });


        let subAjax: any =
        {
            datatype: 'json',
            type: 'GET',
            datafields: [{ name: 'data' }],
            data: JSON.stringify([{ 'parent': this.keyLanguage }]),
            url: 'http://192.168.1.103:3001/lookups-processor?parent=' + this.keyLanguage
        };

        this.dataAdapterJQXX = new jqx.dataAdapter(subAjax, {
            autoBind: true,
            beforeLoadComplete: function (records: any) {
                var data = new Array();
                var response = records[0];
                let res: String = response.data
                let zyz: String;
                let zzz: String[];
                let comma: String;
                if (res != null) {
                    comma = res.replace('[', '').replace(']', '')
                }
                if (comma != null) {
                    zyz = comma.replace('{', '').replace('}', ' ')
                }

                if (zyz != null) {
                    zzz = zyz.split(',')
                }


                for (let ww of zzz) {
                    let word = ww.replace('{', '').replace('}', '')
                    let key = word.split(':')[0]
                    let value = word.split(":")[1]
                    let selectedValue: String;
                    let selectedKeys: String;

                    selectedValue = value.replace('"', '').replace('"', '').trim()

                    selectedKeys = key.replace('"', '').replace('"', '').trim()

                    if (selectedKeys == 'catVal') {
                        data.push(selectedValue)
                    }
                }
                return data;
            }
        });



        let sourceEconmyAjax: any =
        {
            datatype: 'json',
            type: 'GET',
            datafields: [{ name: 'data' }],
            data: JSON.stringify([{ 'parent': this.keyLanguage }]),
            url: 'http://192.168.1.103:3001/lookups-processor?parent=' + 'الوضع الاقتصادي'
        };


        this.dataAdapterSourceonmyJQ = new jqx.dataAdapter(sourceEconmyAjax, {
            autoBind: true,
            beforeLoadComplete: function (records: any) {
                var data = new Array();
                var response = records[0];
                let res: String = response.data
                let zyz: String;
                let zzz: String[];
                let comma: String;
                if (res != null) {
                    comma = res.replace('[', '').replace(']', '')
                }
                if (comma != null) {
                    zyz = comma.replace('{', '').replace('}', ' ')
                }

                if (zyz != null) {
                    zzz = zyz.split(',')
                }


                for (let ww of zzz) {
                    let word = ww.replace('{', '').replace('}', '')
                    let key = word.split(':')[0]
                    let value = word.split(":")[1]
                    let selectedValue: String;
                    let selectedKeys: String;

                    selectedValue = value.replace('"', '').replace('"', '').trim()

                    selectedKeys = key.replace('"', '').replace('"', '').trim()

                    if (selectedKeys == 'catVal') {
                        data.push(selectedValue)
                    }
                }
                return data;
            }
        });


        let scomponentCommunicationAjax: any =
        {
            datatype: 'json',
            type: 'GET',
            datafields: [{ name: 'data' }],
            data: JSON.stringify([{ 'parent': this.keyLanguage }]),
            url: 'http://192.168.1.103:3001/lookups-processor?parent=' + 'اداة الاتصال'
        };


        this.adaptercomponentcommunicationsJQ = new jqx.dataAdapter(scomponentCommunicationAjax, {
            autoBind: true,
            beforeLoadComplete: function (records: any) {
                var data = new Array();
                var response = records[0];
                let res: String = response.data
                let zyz: String;
                let zzz: String[];
                let comma: String;
                if (res != null) {
                    comma = res.replace('[', '').replace(']', '')
                }
                if (comma != null) {
                    zyz = comma.replace('{', '').replace('}', ' ')
                }

                if (zyz != null) {
                    zzz = zyz.split(',')
                }


                for (let ww of zzz) {
                    let word = ww.replace('{', '').replace('}', '')
                    let key = word.split(':')[0]
                    let value = word.split(":")[1]
                    let selectedValue: String;
                    let selectedKeys: String;

                    selectedValue = value.replace('"', '').replace('"', '').trim()

                    selectedKeys = key.replace('"', '').replace('"', '').trim()

                    if (selectedKeys == 'catVal') {
                        data.push(selectedValue)
                    }
                }
                return data;
            }
        });

        this.communicationssource.source = this.adaptercomponentcommunicationsJQ
        this.adaptercomponentcommunicationsJQ.dataBind()
        var sources = { source: this.adaptercomponentcommunicationsJQ }
        this.communicationssource.setOptions(sources)

        this.sourcePlace.source = this.dataAdapterSourcePlaceJQ
        this.dataAdapterSourcePlaceJQ.dataBind()
        var sources = { source: this.dataAdapterSourcePlaceJQ }
        this.sourcePlace.setOptions(sources)



        this.sourceonmy.source = this.dataAdapterSourceonmyJQ
        this.dataAdapterSourceonmyJQ.dataBind()
        var sources = { source: this.dataAdapterSourceonmyJQ }
        this.sourceonmy.setOptions(sources)

        this.sourceTime.source = this.dataAdapterSourceTimeJQ
        this.dataAdapterSourceTimeJQ.dataBind()
        var sources = { source: this.dataAdapterSourceTimeJQ }
        this.sourceTime.setOptions(sources)



        this.sourceSocial.source = this.dataAdapterSourceSocialJQ
        this.dataAdapterSourceSocialJQ.dataBind()
        var sources = { source: this.dataAdapterSourceSocialJQ }
        this.sourceSocial.setOptions(sources)

        this.communications.source = this.dataAdapterCommunication
        this.dataAdapterCommunication.dataBind()
        var sources = { source: this.dataAdapterCommunication }
        this.communications.setOptions(sources)

        this.sourcLives.source = this.dataAdapterCommunication
        this.dataAdapterCommunication.dataBind()
        var sources = { source: this.dataAdapterCommunication }
        this.sourcLives.setOptions(sources)


        this.sourceCrminal.source = this.dataAdapterSourceCrminal
        this.dataAdapterSourceCrminal.dataBind()
        var sources = { source: this.dataAdapterSourceCrminal }
        this.sourceCrminal.setOptions(sources)



        this.sourceRelated.source = this.dataAdapterCommunication
        this.dataAdapterCommunication.dataBind()
        var sources = { source: this.dataAdapterCommunication }
        this.sourceRelated.setOptions(sources)


        if (selected == 'AbusViolence') {
            this.dataAdapterJQXX = new jqx.dataAdapter(sourceJQXX, {
                autoBind: true,
                beforeLoadComplete: function (records: any) {
                    var data = new Array();
                    var response = records[0];
                    let res: String = response.data
                    let zyz: String;
                    let zzz: String[];
                    let comma: String;
                    if (res != null) {
                        comma = res.replace('[', '').replace(']', '')
                    }
                    if (comma != null) {
                        zyz = comma.replace('{', '').replace('}', ' ')
                    }

                    if (zyz != null) {
                        zzz = zyz.split(',')
                    }

                    for (let ww of zzz) {
                        let word = ww.replace('{', '').replace('}', '')
                        let key = word.split(':')[0]
                        let value = word.split(":")[1]
                        let selectedValue: String;
                        let selectedKeys: String;

                        selectedValue = value.replace('"', '').replace('"', '').trim()

                        selectedKeys = key.replace('"', '').replace('"', '').trim()

                        if (selectedKeys == 'catVal') {
                            data.push(selectedValue)
                        }
                    }
                    return data;
                }



            });

            this.sourcelist.source = this.dataAdapterJQXX
            this.dataAdapterJQXX.dataBind()
            var sources = { source: this.dataAdapterJQXX }
            this.sourcelist.setOptions(sources)


        } else if (selected == 'SexualThings') {
            this.dataAdapterJQXX = new jqx.dataAdapter(sourceJQXX, {
                autoBind: true,
                beforeLoadComplete: function (records: any) {
                    var data = new Array();
                    var response = records[0];
                    let res: String = response.data
                    let zyz: String;
                    let zzz: String[];
                    let comma: String;
                    if (res != null) {
                        comma = res.replace('[', '').replace(']', '')
                    }
                    if (comma != null) {
                        zyz = comma.replace('{', '').replace('}', ' ')
                    }

                    if (zyz != null) {
                        zzz = zyz.split(',')
                    }


                    for (let ww of zzz) {
                        let word = ww.replace('{', '').replace('}', '')
                        let key = word.split(':')[0]
                        let value = word.split(":")[1]
                        let selectedValue: String;
                        let selectedKeys: String;

                        selectedValue = value.replace('"', '').replace('"', '').trim()

                        selectedKeys = key.replace('"', '').replace('"', '').trim()

                        if (selectedKeys == 'catVal') {
                            data.push(selectedValue)
                        }
                    }
                    return data;
                }
            });

            this.sourcelist.source = this.dataAdapterJQXX
            this.dataAdapterJQXX.dataBind()
            var sources = { source: this.dataAdapterJQXX }
            this.sourcelist.setOptions(sources)
            
        } else if (selected == 'MentalPsychologicalHealth') {
            this.dataAdapterJQXX = new jqx.dataAdapter(sourceJQXX, {
                autoBind: true,
                beforeLoadComplete: function (records: any) {
                    var data = new Array();
                    var response = records[0];
                    let res: String = response.data
                    let zyz: String;
                    let zzz: String[];
                    let comma: String;
                    if (res != null) {
                        comma = res.replace('[', '').replace(']', '')
                    }
                    if (comma != null) {
                        zyz = comma.replace('{', '').replace('}', ' ')
                    }

                    if (zyz != null) {
                        zzz = zyz.split(',')
                    }

                    for (let ww of zzz) {
                        let word = ww.replace('{', '').replace('}', '')
                        let key = word.split(':')[0]
                        let value = word.split(":")[1]
                        let selectedValue: String;
                        let selectedKeys: String;

                        selectedValue = value.replace('"', '').replace('"', '').trim()

                        selectedKeys = key.replace('"', '').replace('"', '').trim()

                        if (selectedKeys == 'catVal') {
                            data.push(selectedValue)
                        }
                    }
                    return data;
                }
            });

            this.sourcelist.source = this.dataAdapterJQXX
            this.dataAdapterJQXX.dataBind()
            var sources = { source: this.dataAdapterJQXX }
            this.sourcelist.setOptions(sources)
           
        } else if (selected == 'NarcoticSubstances') {
            this.dataAdapterJQXX = new jqx.dataAdapter(sourceJQXX, {
                autoBind: true,
                beforeLoadComplete: function (records: any) {
                    var data = new Array();
                    var response = records[0];
                    let res: String = response.data
                    let zyz: String;
                    let zzz: String[];
                    let comma: String;
                    if (res != null) {
                        comma = res.replace('[', '').replace(']', '')
                    }
                    if (comma != null) {
                        zyz = comma.replace('{', '').replace('}', ' ')
                    }

                    if (zyz != null) {
                        zzz = zyz.split(',')
                    }


                    for (let ww of zzz) {
                        let word = ww.replace('{', '').replace('}', '')
                        let key = word.split(':')[0]
                        let value = word.split(":")[1]
                        let selectedValue: String;
                        let selectedKeys: String;

                        selectedValue = value.replace('"', '').replace('"', '').trim()

                        selectedKeys = key.replace('"', '').replace('"', '').trim()

                        if (selectedKeys == 'catVal') {
                            data.push(selectedValue)
                        }
                    }
                    return data;
                }
            });

            this.sourcelist.source = this.dataAdapterJQXX
            this.dataAdapterJQXX.dataBind()
            var sources = { source: this.dataAdapterJQXX }
            this.sourcelist.setOptions(sources)
           
        } else if (selected == 'StudyMatters') {
            this.dataAdapterJQXX = new jqx.dataAdapter(sourceJQXX, {
                autoBind: true,
                beforeLoadComplete: function (records: any) {
                    var data = new Array();
                    var response = records[0];
                    let res: String = response.data
                    let zyz: String;
                    let zzz: String[];
                    let comma: String;
                    if (res != null) {
                        comma = res.replace('[', '').replace(']', '')
                    }
                    if (comma != null) {
                        zyz = comma.replace('{', '').replace('}', ' ')
                    }

                    if (zyz != null) {
                        zzz = zyz.split(',')
                    }


                    for (let ww of zzz) {
                        let word = ww.replace('{', '').replace('}', '')
                        let key = word.split(':')[0]
                        let value = word.split(":")[1]
                        let selectedValue: String;
                        let selectedKeys: String;

                        selectedValue = value.replace('"', '').replace('"', '').trim()

                        selectedKeys = key.replace('"', '').replace('"', '').trim()

                        if (selectedKeys == 'catVal') {
                            data.push(selectedValue)
                        }
                    }
                    return data;
                }
            });

            this.sourcelist.source = this.dataAdapterJQXX
            this.dataAdapterJQXX.dataBind()
            var sources = { source: this.dataAdapterJQXX }
            this.sourcelist.setOptions(sources)
            
        } else if (selected == 'Discrimination') {
            this.dataAdapterJQXX = new jqx.dataAdapter(sourceJQXX, {
                autoBind: true,
                beforeLoadComplete: function (records: any) {
                    var data = new Array();
                    var response = records[0];
                    let res: String = response.data
                    let zyz: String;
                    let zzz: String[];
                    let comma: String;
                    if (res != null) {
                        comma = res.replace('[', '').replace(']', '')
                    }
                    if (comma != null) {
                        zyz = comma.replace('{', '').replace('}', ' ')
                    }

                    if (zyz != null) {
                        zzz = zyz.split(',')
                    }

                    for (let ww of zzz) {
                        let word = ww.replace('{', '').replace('}', '')
                        let key = word.split(':')[0]
                        let value = word.split(":")[1]
                        let selectedValue: String;
                        let selectedKeys: String;

                        selectedValue = value.replace('"', '').replace('"', '').trim()

                        selectedKeys = key.replace('"', '').replace('"', '').trim()

                        if (selectedKeys == 'catVal') {
                            data.push(selectedValue)
                        }
                    }
                    return data;
                }
            });

            this.sourcelist.source = this.dataAdapterJQXX
            this.dataAdapterJQXX.dataBind()
            var sources = { source: this.dataAdapterJQXX }
            this.sourcelist.setOptions(sources)
            
        } else if (selected == 'RequiringInformation') {
            this.dataAdapterJQXX = new jqx.dataAdapter(sourceJQXX, {
                autoBind: true,
                beforeLoadComplete: function (records: any) {
                    var data = new Array();
                    var response = records[0];
                    let res: String = response.data
                    let zyz: String;
                    let zzz: String[];
                    let comma: String;
                    if (res != null) {
                        comma = res.replace('[', '').replace(']', '')
                    }
                    if (comma != null) {
                        zyz = comma.replace('{', '').replace('}', ' ')
                    }

                    if (zyz != null) {
                        zzz = zyz.split(',')
                    }


                    for (let ww of zzz) {
                        let word = ww.replace('{', '').replace('}', '')
                        let key = word.split(':')[0]
                        let value = word.split(":")[1]
                        let selectedValue: String;
                        let selectedKeys: String;

                        selectedValue = value.replace('"', '').replace('"', '').trim()

                        selectedKeys = key.replace('"', '').replace('"', '').trim()

                        if (selectedKeys == 'catVal') {
                            data.push(selectedValue)
                        }
                    }
                    return data;
                }
            });

            this.sourcelist.source = this.dataAdapterJQXX
            this.dataAdapterJQXX.dataBind()
            var sources = { source: this.dataAdapterJQXX }
            this.sourcelist.setOptions(sources)
            /*alert("Success")*/
        } else if (selected == 'FamilyRelations') {
            this.dataAdapterJQXX = new jqx.dataAdapter(sourceJQXX, {
                autoBind: true,
                beforeLoadComplete: function (records: any) {
                    var data = new Array();
                    var response = records[0];
                    let res: String = response.data
                    let zyz: String;
                    let zzz: String[];
                    let comma: String;
                    if (res != null) {
                        comma = res.replace('[', '').replace(']', '')
                    }
                    if (comma != null) {
                        zyz = comma.replace('{', '').replace('}', ' ')
                    }

                    if (zyz != null) {
                        zzz = zyz.split(',')
                    }


                    for (let ww of zzz) {
                        let word = ww.replace('{', '').replace('}', '')
                        let key = word.split(':')[0]
                        let value = word.split(":")[1]
                        let selectedValue: String;
                        let selectedKeys: String;
                        selectedValue = value.replace('"', '').replace('"', '').trim()
                        selectedKeys = key.replace('"', '').replace('"', '').trim()
                        if (selectedKeys == 'catVal') {
                            data.push(selectedValue)
                        }
                    }
                    return data;
                }
            });

            this.sourcelist.source = this.dataAdapterJQXX
            this.dataAdapterJQXX.dataBind()
            var sources = { source: this.dataAdapterJQXX }
            this.sourcelist.setOptions(sources)
            /*alert("Success")*/
        } else if (selected == 'PeerRelationships') {
            this.dataAdapterJQXX = new jqx.dataAdapter(sourceJQXX, {
                autoBind: true,
                beforeLoadComplete: function (records: any) {
                    var data = new Array();
                    var response = records[0];
                    let res: String = response.data
                    let zyz: String;
                    let zzz: String[];
                    let comma: String;
                    if (res != null) {
                        comma = res.replace('[', '').replace(']', '')
                    }
                    if (comma != null) {
                        zyz = comma.replace('{', '').replace('}', ' ')
                    }

                    if (zyz != null) {
                        zzz = zyz.split(',')
                    }


                    for (let ww of zzz) {
                        let word = ww.replace('{', '').replace('}', '')
                        let key = word.split(':')[0]
                        let value = word.split(":")[1]
                        let selectedValue: String;
                        let selectedKeys: String;

                        selectedValue = value.replace('"', '').replace('"', '').trim()

                        selectedKeys = key.replace('"', '').replace('"', '').trim()

                        if (selectedKeys == 'catVal') {
                            data.push(selectedValue)
                        }
                    }
                    return data;
                }
            });

            this.sourcelist.source = this.dataAdapterJQXX
            this.dataAdapterJQXX.dataBind()
            var sources = { source: this.dataAdapterJQXX }
            this.sourcelist.setOptions(sources)
            
        } else if (selected == 'LegalIssues') {
            this.dataAdapterJQXX = new jqx.dataAdapter(sourceJQXX, {
                autoBind: true,
                beforeLoadComplete: function (records: any) {
                    var data = new Array();
                    var response = records[0];
                    let res: String = response.data
                    let zyz: String;
                    let zzz: String[];
                    let comma: String;
                    if (res != null) {
                        comma = res.replace('[', '').replace(']', '')
                    }
                    if (comma != null) {
                        zyz = comma.replace('{', '').replace('}', ' ')
                    }

                    if (zyz != null) {
                        zzz = zyz.split(',')
                    }


                    for (let ww of zzz) {
                        let word = ww.replace('{', '').replace('}', '')
                        let key = word.split(':')[0]
                        let value = word.split(":")[1]
                        let selectedValue: String;
                        let selectedKeys: String;

                        selectedValue = value.replace('"', '').replace('"', '').trim()

                        selectedKeys = key.replace('"', '').replace('"', '').trim()

                        if (selectedKeys == 'catVal') {
                            data.push(selectedValue)
                        }
                    }
                    return data;
                }
            });

            this.sourcelist.source = this.dataAdapterJQXX
            this.dataAdapterJQXX.dataBind()
            var sources = { source: this.dataAdapterJQXX }
            this.sourcelist.setOptions(sources)
            /*alert("Success")*/
        } else if (selected == 'ArmedConflict') {
            this.dataAdapterJQXX = new jqx.dataAdapter(sourceJQXX, {
                autoBind: true,
                beforeLoadComplete: function (records: any) {
                    var data = new Array();
                    var response = records[0];
                    let res: String = response.data
                    let zyz: String;
                    let zzz: String[];
                    let comma: String;
                    if (res != null) {
                        comma = res.replace('[', '').replace(']', '')
                    }
                    if (comma != null) {
                        zyz = comma.replace('{', '').replace('}', ' ')
                    }

                    if (zyz != null) {
                        zzz = zyz.split(',')
                    }


                    for (let ww of zzz) {
                        let word = ww.replace('{', '').replace('}', '')
                        let key = word.split(':')[0]
                        let value = word.split(":")[1]
                        let selectedValue: String;
                        let selectedKeys: String;

                        selectedValue = value.replace('"', '').replace('"', '').trim()

                        selectedKeys = key.replace('"', '').replace('"', '').trim()

                        if (selectedKeys == 'catVal') {
                            data.push(selectedValue)
                        }
                    }
                    return data;
                }
            });

            this.sourcelist.source = this.dataAdapterJQXX
            this.dataAdapterJQXX.dataBind()
            var sources = { source: this.dataAdapterJQXX }
            this.sourcelist.setOptions(sources)


            
        }
        return selected;
    }

    currentChoice(): any {
        return this.selectedOption;
    }

    clickBased(event: any): any {
        let item = this.jqxListBoxItem.getItem(event.args.index);
        this.selectedOption = item.label;
        
    }
    @ViewChild('dateInput', { static: false }) dateInput: jqxDateTimeInputComponent;
    @ViewChild('timeInput', { static: false }) timeInput: jqxDateTimeInputComponent;

    dateInputSettings: jqwidgets.DateTimeInputOptions = {
        width: '300px', height: '25px'
    }
    timeInputSettings: jqwidgets.DateTimeInputOptions = {
        formatString: "T", showTimeButton: true, showCalendarButton: false, width: '300px', height: '25px'
    }
    dateTimeInputSettings: jqwidgets.DateTimeInputOptions = {
        formatString: "F", showTimeButton: true, width: '300px', height: '25px'
    }
    selectTemplateDriven(): any {
        if (this.selectedOption == 'economicExploitation') {
            return true;
        } else if (this.selectedOption == 'abusViolence') {
            return true;
        } else if (this.selectedOption == 'economicExploitation') {
            return true;
        }
        else if (this.selectedOption == 'displacement') {
            return true;
        }
        else if (this.selectedOption == 'mentalPsychologicalHealth') {
            return true;
        }
        else if (this.selectedOption == 'narcoticSubstances') {
            return true;
        }
        else if (this.selectedOption == 'studyMatters') {
            return true;
        }
        else if (this.selectedOption == 'Specialseeds') {
            return true;
        }
        else if (this.selectedOption == 'requiringInformation') {
            return true;
        }
        else if (this.selectedOption == 'peerRelationships') {
            return true;
        }
        else if (this.selectedOption == 'familyRelations') {
            return true;
        }
        else if (this.selectedOption == 'legalIssues') {
            return true;
        }
        else if (this.selectedOption == 'armedConflict') {
            return true;
        }
        return false;
       
    }
    getWidthLatest(): any {
        return window.innerWidth;
    }
    getWidth(): any {
        return "100%";
    }
    getHeight(): any {
        alert(this.route.snapshot.queryParamMap.get('empName'));
        return "100%";
    }
    save(): void { }
    treeOnSelect(event: any): void {
        if (this.myTree) {
            let item = this.myTree.getItem(event.args.element);
            let dropDownContent = `<div style="position: relative; margin-left: 3px; margin-top: 4px;">${item.label}</div>`;
            this.myDropDownButton.setContent(dropDownContent);
        }
    }

    checkBoxOnChange(event: any): void {
        this.myDropDownButton.autoOpen(event.args.checked);
    }

    popupExtraPlac(): void {

    }



    constructor(private readonly appUserService: AppUserService, private route: ActivatedRoute,private readonly formBuilder: FormBuilder, private fb: FormBuilder/*, private readonly appCatogryService: AppCatogryService*/, private readonly apphomeService: AppHomeService, private readonly router: Router, private readonly appTokenService: AppTokenService, private appCallerService: AppCallerService, private readonly appRecCallerService: AppRecCallerService, private readonly appChildernCaseService: AppChildernCaseService, private readonly appVoilanceService: AppVoilanceService, private readonly appPoliceService: AppPoliceService, private readonly appComponentCommunicateService: AppComponentCommunicateService) {

        this.appUserService.AsterriskUserId(this.route.snapshot.queryParamMap.get('empName'));

        

            webphone_api.onCallStateChange(function (_event: any, _direction: any, peername: any, _peerdisplayname: any, _line: any, _callid: any) {
                try {
                
                    CreateDatatbleHome()
                    PersonProfileHome(peername)
                    destenation(peername)
                    JqGrid(peername)
                    SetCallerId(peername)

                } catch (e) { console.log(e) }
            });

       
        
    }

    onSave() {

        try {
            var nickname = (document.getElementById("nickname") as HTMLInputElement).value;
            var age = (document.getElementById("age") as HTMLInputElement).value;
            var gender = (document.getElementById("gender") as HTMLInputElement).value;
            var location = (document.getElementById("location") as HTMLInputElement).value;
            var state = (document.getElementById("state") as HTMLInputElement).value;
            var desiredPlace = (document.getElementById("desiredPlace") as HTMLInputElement).value;
            var publicReputation = (document.getElementById("publicReputation") as HTMLInputElement).value;
            var placeCompany = (document.getElementById("placeCompany") as HTMLInputElement).value;
            var caseType = (document.getElementById("caseType") as HTMLInputElement).value;
            var currentCareer = (document.getElementById("currentCareer") as HTMLInputElement).value;
            var socialSituations = (document.getElementById("socialSituations") as HTMLInputElement).value;
            var economySitutation = (document.getElementById("economySitutation") as HTMLInputElement).value;
            var healthSituation = (document.getElementById("healthSituation") as HTMLInputElement).value;
            var nationality = (document.getElementById("nationality") as HTMLInputElement).value;
            var personLanguage = (document.getElementById("personLanguage") as HTMLInputElement).value;
            var ageViolance = (document.getElementById("ageViolance") as HTMLInputElement).value;
            var fullName = (document.getElementById("fullName") as HTMLInputElement).value;
            var idNumber = (document.getElementById("idNumber") as HTMLInputElement).value;
            var association = (document.getElementById("association") as HTMLInputElement).value;
            let checkedItems = '';
            let items = this.sourcelist.getCheckedItems();

            for (let i = 0; i < items.length; i++) {

                checkedItems += items[i].label + ', ';
            }

            this.itemModel = {  id: null, name: null, roles: null, nickName: nickname, age: parseInt(age), gender: gender, location: location, state: state, desiredPlace: desiredPlace, publicReputation: publicReputation, placeCompany: placeCompany, caseType: caseType, currentCareer: currentCareer, socialSituations: socialSituations, economySitutation: economySitutation, healthSituation: healthSituation, nationality: nationality, personLanguage: personLanguage, ageViolance: parseInt(ageViolance), fullName: fullName, idNumber: idNumber, association: association, /*medicalConsultation: Boolean(medicalConsultation),*/ /*inquiriesDiseases: Boolean(inquiriesDiseases),*/ /*hospitalAdmission: Boolean(hospitalAdmission),*/ /*healthCare: Boolean(healthCare),*/ /*selfHarming: Boolean(selfHarming),*/ /*secretsDisclosure: Boolean(secretsDisclosure),*/ /*depression: Boolean(depression),*/ /*suicide: Boolean(suicide),*/ /*obsessive: Boolean(obsessive),*/ /*stealing: Boolean(stealing),*/ /*nervousness: Boolean(nervousness),*/ /*schizophrenia: Boolean(schizophrenia),*/ /*fear: Boolean(fear),*/ /*lying: Boolean(lying),*/ /*adolescence: Boolean(adolescence),*/ /*psychologicalDischarge: Boolean(psychologicalDischarge),*/ /*boredom: Boolean(boredom),*/ /*lifeEnd: Boolean(lifeEnd),*/ /*peeReflex: Boolean(peeReflex),*/ /*LowSelfEsteem: Boolean(LowSelfEsteem), threat: Boolean(threat), deathThreat: Boolean(deathThreat), economicDeprivation: Boolean(economicDeprivation), control: Boolean(control), nailBiting: Boolean(nailBiting), nightmares: Boolean(nightmares), speechProblems: Boolean(speechProblems), helpThanks: Boolean(helpThanks), line: Boolean(line), volunteer: volunteer, professional: professional*/  subCatogries: checkedItems };

            this.apphomeService.Post(this.itemModel);
            this.onClickOpenMessageNotification();
        } catch (e) {
            console.log(e)
        }
    }

    naviagte(): void {

        this.appTokenService.set(this.appTokenService.get());
        this.router.navigate(["main/mobile"]);
    }

    list(value: any): void {
        var request = JSON.stringify(value);
        var handler = JSON.parse(request);
        let src: string[] = [];
        $.each(handler, function (index, value) {
            src.push(value);
            console.log(value);
            console.log(index);
        });
        this.source = src;
    }

    treeSettings: jqwidgets.TreeOptions =
        {
            width: "100%",
            height: "100%",
            source: this.treeSource
        }
    notificationSettings: jqwidgets.NotificationOptions =
        {
            width: 500, position: "center", opacity: 0.9, showCloseButton: true, appendContainer: "validateform",
            autoOpen: true, animationOpenDelay: 800, closeOnClick: true,
            template: "success"
        };

    settings: jqwidgets.ComboBoxOptions =
        {
            source: this.source,
            width: 350,
            height: 25
        }

    DropDownList() {
        return this.source;
    }

    getHeightMenu(): any {

        return window.screen.height;
    }
    selectValue(event: any) {
        var args = event.args;
        var index = args.index;
        var item = args.item;
        var value = item.value;
        this.CatogrySelected = value;
        console.log(index + " " + value);
    }

    onCheckChange(): void {

        
        var el = this.tree.getSelectedItem().label;
        if (el === 'Conference')
            this.naviagte();
        
    }
    
    row: any[] = [];
    ngAfterViewInit() {

        try {

           

            CreateMenuBar();

            CreateDatatbleHome();

            JqGridAnswered(sessionStorage.getItem('extNo'))

            JqGridNoAnswered(sessionStorage.getItem('extNo'))

            JqGridMessages(this.route.snapshot.queryParamMap.get('empName'))

            Refresh();
            Refresh();

            CreateDatatble(); 

        } catch (e) {
            alert(e)
        }
        
        
    }
    filterForm: FormGroup;
    filterFields: any[];

    OpenEditor() {
        OpenWordDocs('Editor')
    }

    OpenCalender() {
        this.appTokenService.set(this.appTokenService.get());
        this.router.navigate(["main/calender"], { queryParams: { empName: this.route.snapshot.queryParamMap.get('empName') } });
    }

    ngOnInit(): void {
       
        CreateDatatbleHome();

        JqGridAnswered(sessionStorage.getItem('extNo'))

        JqGridNoAnswered(sessionStorage.getItem('extNo'))

        JqGridMessages(this.route.snapshot.queryParamMap.get('empName'))

        Refresh();
        Refresh();

        CreateDatatble();

        this.dataTable.source = this.dataAdapterLatest
        this.dataAdapterLatest.dataBind()
        var sources = { source: this.dataAdapterLatest }
        this.dataTable.setOptions(sources)
        AppCHomeComponent.jqxToolBarComponent = this.callcenter;

        this.dataTable.refresh();
        this.dataTable.refresh();


        
    }

    generateFilterForm(): FormGroup {
        const baseForm = this.fb.group({});
        this.filterFields.forEach(field => {
            baseForm.addControl(field.key, this.generateFormGroup(baseForm, field));
        });
        console.log(baseForm);
        return baseForm;
    }

    generateFormGroup(baseForm: FormGroup, field: any): FormGroup {
        if (field.group) {
            const formGroup = this.fb.group({});
            field.group.forEach((item: any) => {
                formGroup.addControl(item.key, this.generateFormGroup(formGroup, item));
            });
            return formGroup;
        } else {
            baseForm.addControl(field.key, new FormControl(""));
        }
        return baseForm;
    }


    @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;
    @ViewChild('myGrid', { static: false }) myGridxx: jqxGridComponent;
    @ViewChild('myDropDownList', { static: false }) myDropDownList: jqxDropDownListComponent;
    @ViewChild('myInput', { static: false }) myInput: jqxInputComponent;
    @ViewChild('myWindow', { static: false }) myWindow: jqxWindowComponent;

    datafields: any[] = [];
    sourceJQx: any =
        {
            unboundmode: true,
            totalrecords: 100,
            datafields: this.datafields
        }

    sourceCommunication: any =
        {
            unboundmode: true,
            totalrecords: 100,
            datafields: this.datafields
        }

    dataAdapterCommunication: any = new jqx.dataAdapter(this.sourceCommunication);



    sourceRelatedJQ: any =
        {
            unboundmode: true,
            totalrecords: 100,
            datafields: this.datafields
        }

    dataAdapterSourceRelated: any = new jqx.dataAdapter(this.sourceRelatedJQ);
    sourceCrminalJQ: any =
        {
            unboundmode: true,
            totalrecords: 100,
            datafields: this.datafields
        }

    dataAdapterSourceCrminal: any = new jqx.dataAdapter(this.sourceCrminalJQ);


    sourceSocialJQ: any =
        {
            unboundmode: true,
            totalrecords: 100,
            datafields: this.datafields
        }

    dataAdapterSourceSocialJQ: any = new jqx.dataAdapter(this.sourceSocialJQ);

    sourceonmyJQ: any =
        {
            unboundmode: true,
            totalrecords: 100,
            datafields: this.datafields
        }

    dataAdapterSourceonmyJQ: any = new jqx.dataAdapter(this.sourceonmyJQ);



    sourceTimeJQ: any =
        {
            unboundmode: true,
            totalrecords: 100,
            datafields: this.datafields
        }

    dataAdapterSourceTimeJQ: any = new jqx.dataAdapter(this.sourceTimeJQ);


    sourcePlaceJQ: any =
        {
            unboundmode: true,
            totalrecords: 100,
            datafields: this.datafields
        }

    dataAdapterSourcePlaceJQ: any = new jqx.dataAdapter(this.sourceTimeJQ);

    sourceCommunicationJQ: any =
        {
            unboundmode: true,
            totalrecords: 100,
            datafields: this.datafields
        }

    adaptersourcecommunicationsJQ: any = new jqx.dataAdapter(this.sourceCommunicationJQ);

    sourceJQxxx: any =
        {
            unboundmode: true,
            totalrecords: 100,
            datafields: this.datafields
        }
    getWidthJQgrid(): any {
        if (document.body.offsetWidth < 850) {
            return 700;
        }
        return 700;
    }
    dataAdapter: any = new jqx.dataAdapter(this.sourceJQx);

    dataAdapterJQXX: any = new jqx.dataAdapter(this.sourceJQxxx);
    numberrenderer = (_row: number, _column: any, value: any): string => {
        return '<div style="text-align: center; margin-top: 5px;">' + (1 + value) + '</div>';
    }

    
    
    myBtnOnClick(): void {
        this.myGrid.exportdata('xls', 'jqxGrid', false);
    };


    sourceJQXX: any =
        {
            datatype: 'xml',
            datafields: [
                { name: 'FullName', type: 'string' },
                { name: 'CaseType', type: 'int' },
                { name: 'CaseDate', type: 'float' },
                { name: 'IdCard', type: 'float' },
                { name: 'CaseName', type: 'bool' }
            ],
            root: 'FullName',
            record: 'IdCard',
            id: 'CaseType',
            url: './../../../sampledata/products.xml'
        };
    getWidthJQXX(): any {
        if (document.body.offsetWidth < 850) {
            return 700;
        }

        return 700;
    }
    aAdapterJQXX: any = new jqx.dataAdapter(this.sourceJQxxx);

    sourcecommunicationsJQ: any =
        {
            unboundmode: true,
            totalrecords: 100,
            datafields: this.datafields
        }

    adaptercomponentcommunicationsJQ: any = new jqx.dataAdapter(this.sourcecommunicationsJQ);


    sourceTab1: any =
        {
            unboundmode: true,
            totalrecords: 100,
            datafields: this.datafields
        }

    adaptersourTab1: any = new jqx.dataAdapter(this.sourceTab1);

    sourceSitutionsTab: any =
        {
            unboundmode: true,
            totalrecords: 100,
            datafields: this.datafields
        }

    sourceSitutionsJQ: any = new jqx.dataAdapter(this.sourceSitutionsTab);

    sourceLivesTab: any =
        {
            unboundmode: true,
            totalrecords: 100,
            datafields: this.datafields
        }

    sourceLivesbJQ: any = new jqx.dataAdapter(this.sourceLivesTab);

    sourceSituationsTab: any =
        {
            unboundmode: true,
            totalrecords: 100,
            datafields: this.datafields
        }

    sourceSituationsChildJQ: any = new jqx.dataAdapter(this.sourceSituationsTab);


    sourceKeywordsTab: any =
        {
            unboundmode: true,
            totalrecords: 100,
            datafields: this.datafields
        }

    dataAdapterKeywordsJQ = new jqx.dataAdapter(this.sourceKeywordsTab);

    sourceRelatedTab: any =
        {
            unboundmode: true,
            totalrecords: 100,
            datafields: this.datafields
        }


    cellsrenderer = (_row: number, _columnfield: string, value: string | number, _defaulthtml: string, columnproperties: any, _rowdata: any): string => {
        if (value < 20) {
            return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;">' + value + '</span>';
        }
        else {
            return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;">' + value + '</span>';
        }
    };
    columnsJQXX: any[] =
        [
            { text: 'FullName', columngroup: 'FullName', datafield: 'FullName', width: 250 },
            { text: 'CaseType', columngroup: 'CaseType', datafield: 'CaseType', cellsalign: 'right', align: 'right' },
            { text: 'CaseDate', columngroup: 'CaseDate', datafield: 'CaseDate', align: 'right', cellsalign: 'right', cellsformat: 'c2' },
            { text: 'IdCard', datafield: 'IdCard', cellsalign: 'right', cellsrenderer: this.cellsrenderer, width: 100 },
            { text: 'CaseName', columntype: 'checkbox', datafield: 'CaseName', align: 'center' }
        ];
    columngroups: any[] =
        [
            { text: 'CaseType', align: 'center', name: 'CaseType' }
        ];
    saveInfoCaller(): any {

        try {
            
            var sameCaller = (document.getElementById("association") as HTMLInputElement).checked;
           

            var phone = (document.getElementById("phone") as HTMLInputElement).checked;
            var email = (document.getElementById("email") as HTMLInputElement).checked;
            var sms = (document.getElementById("sms") as HTMLInputElement).checked;

            let communicationType = '';
            if (phone) {
                communicationType = 'phone';
            } else if (email) {
                communicationType = 'email';
            } else if (sms) {
                communicationType = 'sms';
            }

            var mobileNumber = (document.getElementById("mobile") as HTMLInputElement).value;
            var personName = (document.getElementById("personname") as HTMLInputElement).value;

            let callerInfoNotesTxt = this.callerInfoNotes.val();

            var descriptionverion1 = this.descriptionverion1.val();
            var descriptionverion2 = this.descriptionverion2.val();
            var descriptionverion3 = this.descriptionverion3.val();

            var homeCallerInfo = new HomeCallerInfo();

            homeCallerInfo.communicateType = communicationType
            homeCallerInfo.sameCaller = sameCaller
            homeCallerInfo.idNumber = mobileNumber
            homeCallerInfo.lastStep = descriptionverion3
            homeCallerInfo.nextStep = descriptionverion2
            homeCallerInfo.fullName = personName

            homeCallerInfo.description = callerInfoNotesTxt
            homeCallerInfo.description1 = descriptionverion1;
            homeCallerInfo.description2 = descriptionverion2;
            homeCallerInfo.description3 = descriptionverion3;

            homeCallerInfo.personName = personName;

            homeCallerInfo.realationShip = this.relationShip;

            this.appCallerService.Post(homeCallerInfo)
            this.onClickOpenMessageNotification();
        } catch (e) {
            alert(e)
        }


        
    }


    savePoliceCaller(): any {

        try {
            

            var unkown = (document.getElementById("unkown") as HTMLInputElement).checked;
            var cant = (document.getElementById("cant") as HTMLInputElement).checked;
            var calling = (document.getElementById("calling") as HTMLInputElement).checked;

            let communicationType = '';
            if (unkown) {
                communicationType = 'unkown';
            } else if (cant) {
                communicationType = 'cant';
            } else if (calling) {
                communicationType = 'calling';
            }

            var policecenter = (document.getElementById("policecenter") as HTMLInputElement).value;
            var policenumber = (document.getElementById("policenumber") as HTMLInputElement).value;

            var fileNumber = (document.getElementById("fileNumber") as HTMLInputElement).value;

            var volPerson = (document.getElementById("volPerson") as HTMLInputElement).value;

            let date = this.callPoliceDate.val();

            var descriptionverion1 = this.descriptionverion13.val();
            var descriptionverion2 = this.descriptionverion14.val();
            var descriptionverion3 = this.descriptionverion15.val();

            var homeCallerInfo = new HomePoliceCaseInfo();

            homeCallerInfo.callPolice = communicationType;
            homeCallerInfo.callPoliceDate = date
            homeCallerInfo.description1 = descriptionverion1
            homeCallerInfo.description2 = descriptionverion2
            homeCallerInfo.description3 = descriptionverion3
            homeCallerInfo.fileNumber = fileNumber
            homeCallerInfo.policenumber = policenumber
            homeCallerInfo.volPerson = volPerson
            homeCallerInfo.policecenter = policecenter

            

            this.appPoliceService.Post(homeCallerInfo)
            this.onClickOpenMessageNotification();
        } catch (e) {
            alert(e)
        }


        
    }

    saveCasesCaller(): any {
        try {

            /*var firstPerson = (document.getElementById("firstPerson") as HTMLInputElement).value;

            var secondPerson = (document.getElementById("secondPerson") as HTMLInputElement).value;

            var dateTime = this.jqxDateTimeInput.val()*/

            /*var start = this.startTime;

            var endTime = this.endTime;*/

            var description1 = this.descriptionverion7.val()

            var description2 = this.descriptionverion8.val()

            var description3 = this.descriptionverion9.val()

            var option__1 = this.caseSituationType;

            var option__2 = this.livesWithSituationType;

            var txtArea = this.caseSitutationTypeTxT.val()

            var object = new HomeCaseChildInfo()

            object.description1 = description1
            object.description2 = description2
            object.description3 = description3

            object.situationSelected = option__1

            object.livesWith = option__2
            object.textDescription = txtArea

            /*object.basedDate = dateTime
            object.description1 = description1
            object.description2 = description2
            object.description3 = description3
            object.secondPersonName = secondPerson
            object.firstPerson = firstPerson
            object.startTime = start
            object.endTime = endTime*/

            this.appChildernCaseService.Post(object)
            this.onClickOpenMessageNotification();
        } catch (e) {
            alert(e)
        }
        /* //alert(this.relationShip)
         var sameCaller = (document.getElementById("association") as HTMLInputElement).checked;
         *//* ReleationShip *//*

    var phone = (document.getElementById("phone") as HTMLInputElement).checked;
    var email = (document.getElementById("email") as HTMLInputElement).checked;
    var sms = (document.getElementById("sms") as HTMLInputElement).checked;

    let communicationType = '';
    if (phone) {
        communicationType = 'phone';
    } else if (email) {
        communicationType = 'email';
    } else if (sms) {
        communicationType = 'sms';
    }

    var mobileNumber = (document.getElementById("mobile") as HTMLInputElement).value;
    var personName = (document.getElementById("personname") as HTMLInputElement).value;

    let callerInfoNotesTxt = this.callerInfoNotes.val();

    var descriptionverion1 = this.descriptionverion1.val();
    var descriptionverion2 = this.descriptionverion2.val();
    var descriptionverion3 = this.descriptionverion3.val();

    var homeCallerInfo = new HomeCallerInfo();

    homeCallerInfo.communicateType = communicationType
    homeCallerInfo.sameCaller = sameCaller
    homeCallerInfo.idNumber = mobileNumber
    homeCallerInfo.lastStep = descriptionverion3
    homeCallerInfo.nextStep = descriptionverion2
    homeCallerInfo.fullName = personName

    homeCallerInfo.description = callerInfoNotesTxt
    homeCallerInfo.description1 = descriptionverion1;
    homeCallerInfo.description2 = descriptionverion2;
    homeCallerInfo.description3 = descriptionverion3;

    homeCallerInfo.personName = personName;

    homeCallerInfo.realationShip = this.relationShip;

    this.appCallerService.Post(homeCallerInfo)
} catch (e) {
    alert(e)
}*/
    }

    saveVolianceCaller(): any {
        try {

            var description1 = this.descriptionverion10.val()
            var description2 = this.descriptionverion11.val()
            var description3 = this.descriptionverion12.val()
            var vRelated = this.stringSourceRelated;
            var sourceCriminal = this.stringsourceCrminal;
            var sourceSocial___1 = this.stringsourceSocial;
            var sourceonmyString = this.stringsourceonmy;
            var place = this.stringsourcePlace
            var period = this.stringsourceTime

            var object = new HomeVoilanceCaseInfo()

            object.description1 = description1
            object.description2 = description2
            object.description3 = description3

            object.volianceRelated = vRelated;
            object.caseType = sourceCriminal
            object.socialSituation = sourceSocial___1
            object.econmySituation = sourceonmyString

            object.voliancePlace = place
            object.period = period

            /*object.situationSelected = option__1

            object.livesWith = option__2
            object.textDescription = txtArea*/

            /*object.basedDate = dateTime
            object.description1 = description1
            object.description2 = description2
            object.description3 = description3
            object.secondPersonName = secondPerson
            object.firstPerson = firstPerson
            object.startTime = start
            object.endTime = endTime*/

            this.appVoilanceService.Post(object)
            this.onClickOpenMessageNotification();
        } catch (e) {
            alert(e)
        }
        /* //alert(this.relationShip)
         var sameCaller = (document.getElementById("association") as HTMLInputElement).checked;
         *//* ReleationShip *//*

   var phone = (document.getElementById("phone") as HTMLInputElement).checked;
   var email = (document.getElementById("email") as HTMLInputElement).checked;
   var sms = (document.getElementById("sms") as HTMLInputElement).checked;

   let communicationType = '';
   if (phone) {
       communicationType = 'phone';
   } else if (email) {
       communicationType = 'email';
   } else if (sms) {
       communicationType = 'sms';
   }

   var mobileNumber = (document.getElementById("mobile") as HTMLInputElement).value;
   var personName = (document.getElementById("personname") as HTMLInputElement).value;

   let callerInfoNotesTxt = this.callerInfoNotes.val();

   var descriptionverion1 = this.descriptionverion1.val();
   var descriptionverion2 = this.descriptionverion2.val();
   var descriptionverion3 = this.descriptionverion3.val();

   var homeCallerInfo = new HomeCallerInfo();

   homeCallerInfo.communicateType = communicationType
   homeCallerInfo.sameCaller = sameCaller
   homeCallerInfo.idNumber = mobileNumber
   homeCallerInfo.lastStep = descriptionverion3
   homeCallerInfo.nextStep = descriptionverion2
   homeCallerInfo.fullName = personName

   homeCallerInfo.description = callerInfoNotesTxt
   homeCallerInfo.description1 = descriptionverion1;
   homeCallerInfo.description2 = descriptionverion2;
   homeCallerInfo.description3 = descriptionverion3;

   homeCallerInfo.personName = personName;

   homeCallerInfo.realationShip = this.relationShip;

   this.appCallerService.Post(homeCallerInfo)
} catch (e) {
   alert(e)
}*/
    }

    saveInfoReciveCaller(): any {
        try {

            var firstPerson = (document.getElementById("firstPerson") as HTMLInputElement).value;

            var secondPerson = (document.getElementById("secondPerson") as HTMLInputElement).value;

            var dateTime = this.jqxDateTimeInput.val()

            var start = this.startTime;

            var endTime = this.endTime;

            var description1 = this.descriptionverion4.val()

            var description2 = this.descriptionverion5.val()

            var description3 = this.descriptionverion6.val()

            var object = new HomeReciveCallerInfo()

            object.basedDate = dateTime
            object.description1 = description1
            object.description2 = description2
            object.description3 = description3
            object.secondPersonName = secondPerson
            object.firstPerson = firstPerson
            object.startTime = start
            object.endTime = endTime

            this.appRecCallerService.Post(object)
            this.onClickOpenMessageNotification();
        } catch (e) {
            alert(e)
        }
        
    }

    Call(): any {

        $(document).ready(function () {
            var dest = (document.getElementById("destinationnr") as HTMLInputElement).value;
            webphone_api.setparameter('destination', dest.trim());

            webphone_api.call(dest.trim());

        })
    }
    componentSelectedAjax(): any {
        var componentName = this.componentOption;
        var valueTxT = (document.getElementById("valueTxT") as HTMLInputElement).value;
        var componentOptionTxT = this.componentOptionTxT.val();
        var object = new HomeComponentCommunicateInfo()

        object.componentName = componentName
        object.valueTxT = valueTxT
        object.txtNotes = componentOptionTxT

        this.appComponentCommunicateService.Post(object)
        this.onClickOpenMessageNotification();

    }

    timeChange__(time: string) {
        this.startTime = time
    }
    timeChange_(time: string) {
        this.endTime = time
    }
    relationshipCaller(event: any): void {
        var item = this.communications.getItem(event.args.index)
        this.relationShip = item.label;
    }
    casesCaller(event: any): any {
        var item = this.sourceSitutions.getItem(event.args.index)
        this.caseSituationType = item.label;
    }

    casesSourceRelated(event: any): void {
        var item = this.sourceRelated.getItem(event.args.index)
        this.stringSourceRelated = item.label;
    }

    casesSourceCrminal(event: any): void {
        var item = this.sourceCrminal.getItem(event.args.index)
        this.stringsourceCrminal = item.label;
    }

    casesSourceSocial(event: any): void {
        var item = this.sourceSocial.getItem(event.args.index)
        this.stringsourceSocial = item.label;
    }

    casesSourceonmy(event: any): void {
        var item = this.sourceonmy.getItem(event.args.index)
        this.stringsourceonmy = item.label;
    }

    casesSourcePlace(event: any): void {
        var item = this.sourcePlace.getItem(event.args.index)
        this.stringsourcePlace = item.label;
    }

    casesSourceTime(event: any): void {
        var item = this.sourceTime.getItem(event.args.index)
        this.stringsourceTime = item.label;
    }

    livesWithCaller(event: any): void {

        var item = this.sourcLives.getItem(event.args.index)
        this.livesWithSituationType = item.label;
    }

    componentSelected(event: any): void {

        var item = this.communicationssource.getItem(event.args.index)
        this.componentOption = item.label;
    }

    @ViewChild('myResponsivePanel', { static: false }) myResponsivePanel: jqxResponsivePanelComponent;
    @ViewChild('myPanel', { static: false }) myPanel: jqxPanelComponent;
    @ViewChild('container', { static: false }) container: ElementRef;
    @ViewChild('toggleResponsivePanel', { static: false }) toggleResponsivePanel: ElementRef;
    flag: boolean = true;
    responsivePanelEventsHandler(event: any): void {
        if (this.myResponsivePanel) {
            if (event.args.element) {
                return;
            }
            let collapsed = this.myResponsivePanel.isCollapsed();
            let opened = this.myResponsivePanel.isOpened();
            if (this.flag) {
                collapsed = false;
                opened = false;
            }
            this.flag = false;
            if (!collapsed && !opened) {
                this.myResponsivePanel.elementRef.nativeElement.firstChild.style.display = 'block';
                this.toggleResponsivePanel.nativeElement.style.display = 'none';
            } else if (collapsed && opened) {
                this.myPanel.width('65%');
            } else if (collapsed && !opened) {
                this.myPanel.width('100%');
                this.myResponsivePanel.elementRef.nativeElement.firstChild.style.display = 'none';
                this.toggleResponsivePanel.nativeElement.style.display = 'block';
            } else if (!collapsed && opened) {
                this.myPanel.width('65%');
                this.myResponsivePanel.elementRef.nativeElement.firstChild.style.display = 'block';
                this.toggleResponsivePanel.nativeElement.style.display = 'block';
            }
        }
    }
    resizeSmallBtnOnClick(): void {
        this.myResponsivePanel.elementRef.nativeElement.firstChild.style.display = 'none';
        this.toggleResponsivePanel.nativeElement.style.display = 'block';
        this.container.nativeElement.style.width = '500px';
        this.myPanel.width('100%');
    };
    resizeBigBtnOnClick(): void {
        this.myPanel.width('100%');
        this.myResponsivePanel.elementRef.nativeElement.firstChild.style.display = 'block';
        this.toggleResponsivePanel.nativeElement.style.display = 'none';
        this.container.nativeElement.style.width = '800px';
        this.myPanel.width('65%');
    };


    clickOps(): any {

        this.dataTable.source = this.dataAdapterLatest
        this.dataAdapterLatest.dataBind()
        var sources = { source: this.dataAdapterLatest }
        this.dataTable.setOptions(sources)
    }
}
