import { Component, ViewChild, ViewEncapsulation, Injectable, OnInit, ElementRef } from "@angular/core";
/*import { AddHallService } from "src/app/services/hallreservation.service";*/
import { HallModel } from "src/app/models/Hall.model";
import { jqxValidatorComponent } from "jqwidgets-framework/jqwidgets-ng/jqxvalidator";
import { jqxDateTimeInputComponent } from "jqwidgets-framework/jqwidgets-ng/jqxdatetimeinput";
import { jqxInputComponent } from "jqwidgets-framework/jqwidgets-ng/jqxinput";
import { jqxTreeComponent } from 'jqwidgets-ng/jqxtree';
import { jqxNotificationComponent } from 'jqwidgets-ng/jqxnotification';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { Router } from "@angular/router";
import { AppTokenService } from "src/app/core/services/token.service";
import { CatogryListService } from "src/app/services/catogry.service";
import { HttpClient } from "@angular/common/http";
import { Subscription } from "rxjs";
import { map, tap } from "rxjs/operators";
@Component({ selector: "app-home", templateUrl: "./hallreservations.component.html", encapsulation: ViewEncapsulation.None })
@Injectable({ providedIn: "root" })
export class AppReservationsComponent implements OnInit {
    @ViewChild('notifications', { static: false }) notifications: ElementRef;
    tools: string = 'button button button | button button button | button button | button';
    theme: string = '';
    initTools = (type: string, index: number, tool: any, _menuToolIninitialization: any): any => {
        let icon = document.createElement('div');
        if (type == 'button') {
            icon.className = 'jqx-editor-toolbar-icon jqx-editor-toolbar-icon-' + this.theme + ' buttonIcon ';
        }
        switch (index) {
            case 0:
                icon.className += 'jqx-editor-toolbar-icon-bold jqx-editor-toolbar-icon-bold-' + this.theme;
                icon.setAttribute('title', 'Bold');
                tool[0].appendChild(icon);
                break;
            case 1:
                icon.className += 'jqx-editor-toolbar-icon-italic jqx-editor-toolbar-icon-italic-' + this.theme;
                icon.setAttribute('title', 'Italic');
                tool[0].appendChild(icon);
                break;
            case 2:
                icon.className += 'jqx-editor-toolbar-icon-underline jqx-editor-toolbar-icon-underline-' + this.theme;
                icon.setAttribute('title', 'Underline');
                tool[0].appendChild(icon);
                break;
            case 3:
                icon.className += 'jqx-editor-toolbar-icon-justifyleft jqx-editor-toolbar-icon-justifyleft-' + this.theme;
                icon.setAttribute('title', 'Align Text Left');
                tool[0].appendChild(icon);
                break;
            case 4:
                icon.className += 'jqx-editor-toolbar-icon-justifycenter jqx-editor-toolbar-icon-justifycenter-' + this.theme;
                icon.setAttribute('title', 'Center');
                tool[0].appendChild(icon);
                break;
            case 5:
                icon.className += 'jqx-editor-toolbar-icon-justifyright jqx-editor-toolbar-icon-justifyright-' + this.theme;
                icon.setAttribute('title', 'Align Text Right');
                tool[0].appendChild(icon);
                break;
            case 6:
                icon.className += 'jqx-editor-toolbar-icon-outdent jqx-editor-toolbar-icon-outdent-' + this.theme;
                icon.setAttribute('title', 'Decrease Indent');
                tool[0].appendChild(icon);
                break;
            case 7:
                icon.className += 'jqx-editor-toolbar-icon-indent jqx-editor-toolbar-icon-indent-' + this.theme;
                icon.setAttribute('title', 'Increase Indent');
                tool[0].appendChild(icon);
                break;
            case 8:
                icon.className += 'jqx-editor-toolbar-icon-insertimage jqx-editor-toolbar-icon-insertimage-' + this.theme;
                icon.setAttribute('title', 'Insert Image');
                tool[0].appendChild(icon);
                break;
        }
    }

    myValidator: jqxValidatorComponent;
    passwordInput: jqxInputComponent;
    catogries: CatogryListService;
    source: string[] = [];

    @ViewChild('submitButton', { static: false }) submitButton: jqxButtonComponent;
    @ViewChild('msgNotification', { static: false }) msgNotification: jqxNotificationComponent;
    @ViewChild('treeReference', { static: false }) tree: jqxTreeComponent;
    @ViewChild('validateform', { static: false }) validateform: jqxValidatorComponent;
    @ViewChild('HallId', { static: false }) HallId: jqxDateTimeInputComponent;
    @ViewChild('HallName', { static: false }) HallName: jqxInputComponent;
    @ViewChild('startDate', { static: false }) startDate: jqxDateTimeInputComponent;
    @ViewChild('endDate', { static: false }) endDate: jqxDateTimeInputComponent;


    hallModel: HallModel;
    Catogries: any;
    Description: any;
    CatogrySelected: any;
    subscription: Subscription;
    item: any;
    ngOnInit() {
        this.fillCatogries();
    }
   
    initialDate: Date = new Date(2017, 8, 1);
    sendButton(): void {
        this.myValidator.validate(document.getElementById("validateform"));
        this.onSubmit();
    }
    treeSource: any[] =
        [
            {
                icon: "assets/jqwidgets/styles/images/mail.png", label: "Mail", expanded: true,
                items:
                    [
                        { icon: "assets/jqwidgets/styles/images/icon-calendar-light.png", label: "Calendar" },
                        { icon: "assets/jqwidgets/styles/images/icon-edit.png", label: "Contacts", selected: true }
                    ]
            },
            {
                icon: "assets/jqwidgets/styles/images/hrparent.png", label: "HR", expanded: true,
                items:
                    [
                        { icon: "assets/jqwidgets/styles/images/pdf.jpg", label: "Report" },
                        { icon: "assets/jqwidgets/styles/images/add.jpg", label: "Corporate" },
                        { icon: "assets/jqwidgets/styles/images/charts.png", label: "Finance" },
                        { icon: "assets/jqwidgets/styles/images/search.png", label: "Search" }
                    ]
            }
        ];

    rules =
        [
            { input: "#ItemName", message: "ItemName is required!", action: "keyup, blur", rule: "required" },
            { input: "#Description", message: "Your Description must be between 3 and 255 characters!", action: "keyup, blur", rule: "length=3,255" },
            { input: "#MaxNum", message: "MaxNum is required!", action: "keyup, blur", rule: "required" },
            { input: "#MinNum", message: "MinNum is Required!", action: "keyup, blur", rule: "required" },
            { input: "#CatogryId", message: "CatogryId is Required!", action: "keyup, blur", rule: "required" },
            {
                input: "#startDate", message: "The Date is invalid", action: "valueChanged",
                rule: (_input: any, _commit: any): any => {
                    let date = this.startDate.value();
                    let enddate = this.endDate.value();

                    let result = date < enddate;
                    return result;
                }
            },
            {
                input: "#endDate", message: "The Date is invalid", action: "valueChanged",
                rule: (_input: any, _commit: any): any => {
                    let date = this.startDate.value();
                    let enddate = this.endDate.value();

                    let result =   enddate < date;
                    return result;
                }
            }
            
        ];
    onClickOpenMessageNotification(): void {
        this.msgNotification.open();
    }
    getWidth(): any {
            return '100%';
    }
    getHeight(): any {
        return '100%';
    }
    constructor(/*private readonly addHallService: AddHallService,*/ private readonly router: Router, private readonly appTokenService: AppTokenService , private readonly http: HttpClient) { }
    onSubmit() {
        this.hallModel = { HallName: this.HallName.value(), HallNo: this.HallId.value(), HallReservationEndDate: this.endDate.value(), HallReservationStartDate: this.startDate.value() };
        this.onClickOpenMessageNotification();
        
    }

    naviagte() {
        this.appTokenService.set(this.appTokenService.get());
        this.router.navigate(["main/search"]);
    }

    list(value: any): void {
        var request = JSON.stringify(value);
        var handler = JSON.parse(request);
        let src:string[] = [];
        $.each(handler, function (index, value) {
            src.push(value);
            console.log(value);
            console.log(index);
        });
        this.source = src;
    }

    onCheckChange() {
        this.naviagte();
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

    selectValue(event: any) {
        var args = event.args;
        var index = args.index;
        var item = args.item;
        var value = item.value;
        this.CatogrySelected = value;
        console.log(index + " " + value);
    }

    fillCatogries(): void {
        this.subscription = this.http.get<string>(`Catogries/List`).pipe(
            map(response => response),
            tap(data => console.log("Item array", data))  
        ).subscribe(data => {
        this.Catogries = data;
            this.list(this.Catogries);
        });
    }
    row: any[] = [];
    ngAfterViewInit() {
        let table = '<table style="min-width: 100px;"><tr><td style="width: 30px;" rowspan="2">' + '</td><input type="button" class="btn-info" value="Logout"/><td>' +'</td><input type="button" class="btn-info" value="Management"/><td>'+'</tr></table>';
            this.notifications.nativeElement.innerHTML += table;
        
    }
}
