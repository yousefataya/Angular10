import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ErrorHandler } from "@angular/core";
import { RouterModule, RouteReuseStrategy } from "@angular/router";
import { ROUTES } from "src/app/app.routes";
import { AppErrorHandler } from "src/app/core/handlers/error.handler";
import { AppHttpInterceptor } from "src/app/core/interceptors/http.interceptor";
import { jqxDateTimeInputModule } from 'jqwidgets-framework/jqwidgets-ng/jqxdatetimeinput';
import { NgxLoadingModule } from "ngx-loading";
//import { AppLoginComponent } from "src/app/views/login/login.component";
import { AppLoginModule } from "src/app/views/login/login.module";
import { AppHomeModule } from "src/app/views/main/home/home.module";
import { MobilePageModule } from "src/app/views/main/mobile/mobile.module";
import { NewContactPageModule } from "src/app/views/main/new-contact/new-contact.module";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
//import { AppLoginComponent } from "src/app/views/login/login.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
// Main Component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterComponent } from './footer/footer.component';

// Component Module
import { NvD3Module } from 'ng2-nvd3';
import { AgmCoreModule } from '@agm/core';
//import { NgSlimScrollModule } from 'ngx-slimscroll';
import { CalendarModule } from 'angular-calendar';
import { FullCalendarModule } from 'ng-fullcalendar';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TrendModule } from 'ngx-trend';
import { HighlightJsModule } from 'ngx-highlight-js'
import { CountdownModule } from 'ngx-countdown';
import { NgxTagsInputModule } from 'ngx-tags-input';


// Pages

/*import {  DashboardV1Page} from './pages/dashboard/v1/dashboard-v1';*/
import { DashboardV2Page } from './pages/dashboard/v2/dashboard-v2';
import { EmailInboxPage } from './pages/email/inbox/email-inbox';
import { EmailComposePage } from './pages/email/compose/email-compose';
import { EmailDetailPage } from './pages/email/detail/email-detail';

// Page Options
import { PageBlank } from './pages/page-options/page-blank/page-blank';
import { PageFooter } from './pages/page-options/page-with-footer/page-with-footer';
import { PageWithoutSidebar } from './pages/page-options/page-without-sidebar/page-without-sidebar';
import { PageSidebarRight } from './pages/page-options/page-with-right-sidebar/page-with-right-sidebar';
import { PageSidebarMinified } from './pages/page-options/page-with-minified-sidebar/page-with-minified-sidebar';
import { PageFullHeight } from './pages/page-options/page-full-height/page-full-height';
import { PageTwoSidebar } from './pages/page-options/page-with-two-sidebar/page-with-two-sidebar';
import { PageSidebarWide } from './pages/page-options/page-with-wide-sidebar/page-with-wide-sidebar';
import { PageSidebarLight } from './pages/page-options/page-with-light-sidebar/page-with-light-sidebar';
import { PageSidebarTransparent } from './pages/page-options/page-with-transparent-sidebar/page-with-transparent-sidebar';
import { PageTopMenu } from './pages/page-options/page-with-top-menu/page-with-top-menu';
import { PageMixedMenu } from './pages/page-options/page-with-mixed-menu/page-with-mixed-menu';


// UI Element
import { UIGeneralPage } from './pages/ui-elements/general/general';
import { UITypographyPage } from './pages/ui-elements/typography/typography';
import { UITabsAccordionsPage } from './pages/ui-elements/tabs-accordions/tabs-accordions';
import { UIModalNotificationPage } from './pages/ui-elements/modal-notification/modal-notification';
import { UIWidgetBoxesPage } from './pages/ui-elements/widget-boxes/widget-boxes';
import { UIMediaObjectPage } from './pages/ui-elements/media-object/media-object';
import { UIButtonsPage } from './pages/ui-elements/buttons/buttons';
import { UIIconsPage } from './pages/ui-elements/icons/icons';
import { UISimpleLineIconsPage } from './pages/ui-elements/simple-line-icons/simple-line-icons';
import { UIIoniconsPage } from './pages/ui-elements/ionicons/ionicons';
import { UILanguageIconPage } from './pages/ui-elements/language-icon/language-icon';
import { UISocialButtonsPage } from './pages/ui-elements/social-buttons/social-buttons';

// Bootstrap 4
import { Bootstrap4Page } from './pages/bootstrap-4/bootstrap-4';

// Calendar
/*import { CalendarPage } from './pages/calendar/calendar';*/

// Map
import { MapPage } from './pages/map/map';

// Gallery
import { GalleryV1Page } from './pages/gallery/gallery-v1/gallery-v1';
import { GalleryV2Page } from './pages/gallery/gallery-v2/gallery-v2';

// Extra Pages
import { ExtraTimelinePage } from './pages/extra/extra-timeline/extra-timeline';
import { ExtraComingSoonPage } from './pages/extra/extra-coming-soon/extra-coming-soon';
import { ExtraSearchResultsPage } from './pages/extra/extra-search-results/extra-search-results';
import { ExtraInvoicePage } from './pages/extra/extra-invoice/extra-invoice';
import { ExtraErrorPage } from './pages/extra/extra-error/extra-error';
import { ExtraProfilePage } from './pages/extra/extra-profile/extra-profile';

// User Login / Register
import { LoginV1Page } from './pages/login/login-v1/login-v1';
import { LoginV2Page } from './pages/login/login-v2/login-v2';
import { LoginV3Page } from './pages/login/login-v3/login-v3';
import { RegisterV3Page } from './pages/register/register-v3/register-v3';

// Helper
import { HelperCssPage } from './pages/helper/helper-css/helper-css';

// Chart
import { ChartNgxPage } from './pages/chart/chart-ngx/chart-ngx';
import { ChartD3Page } from './pages/chart/chart-d3/chart-d3';

// Table
import { TablesPage } from './pages/tables/tables';

// Form
import { FormStuffPage } from './pages/form-stuff/form-stuff';
/*import { MaterialModule } from './material.module';*/
/*import { EventService } from './pages/calendar/event.service';*/
import { DashboardComponent } from './components/dashboard/dahsboard.component';
import { LessonDetailsComponent } from './components/lesson-details/lesson-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { VideoSessionComponent } from './components/video-session/video-session.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { JoinSessionDialogComponent } from './components/dashboard/join-session-dialog.component';
import { AuthGuard } from './auth.guard';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.app.service';
import { LessonService } from './services/lesson.service';
import { VideoSessionService } from './services/video-session.service';
import { PresentationComponent } from './components/presentation/presentation.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppSawaLoginModule } from 'src/app/theme/auth/login/basic-login/basic-login.module';
/*import { BasicLoginComponent } from 'src/app/theme/auth/login/basic-login/basic-login.component';*/

import { AppDashboardModule } from './pages/dashboard/v1/dashboard.v1.module';
import { AppSearchModule } from "./views/main/search/search.module";
import { AppAsterriskModule } from "./views/main/asterrisk/asterrisk.module";
import { AppCpanelModule } from "./views/main/cpanel/cpanel.module";
import { AppCHomeModule } from "./views/main/chome/chome.module";
/*import { AppCallLogsModule } from "./views/main/calllogs/logs.module";*/
/*import { DashboardV1Page } from './pages/dashboard/v1/dashboard-v1';*/
/*import { ReactiveFormsModule } from "@angular/forms";*/

@NgModule({
  bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        HeaderComponent,
        SidebarComponent,
        SidebarRightComponent,
        TopMenuComponent,
        FooterComponent,
/*        BasicLoginComponent,*/
        DashboardV2Page,
        EmailInboxPage,
        EmailComposePage,
        EmailDetailPage,
        PageBlank,
        PageFooter,
        PageWithoutSidebar,
        PageSidebarRight,
        PageSidebarMinified,
        PageFullHeight,
        PageTwoSidebar,
        PageSidebarWide,
        PageSidebarLight,
        PageSidebarTransparent,
        PageTopMenu,
        PageMixedMenu,
        UIGeneralPage,
        UITypographyPage,
        UITabsAccordionsPage,
        UIModalNotificationPage,
        UIWidgetBoxesPage,
        UIMediaObjectPage,
        UIButtonsPage,
        UIIconsPage,
        UISimpleLineIconsPage,
        UIIoniconsPage,
        UILanguageIconPage,
        UISocialButtonsPage,
        Bootstrap4Page,
       /* CalendarPage,*/
        FormStuffPage,
        /*AppDashboardModule,*/
        MapPage,
        GalleryV1Page,
        GalleryV2Page,
        ExtraTimelinePage,
        ExtraComingSoonPage,
        ExtraSearchResultsPage,
        ExtraInvoicePage,
        ExtraErrorPage,
        ExtraProfilePage,
        LoginV1Page,
        LoginV2Page,
        LoginV3Page,
        RegisterV3Page,
        HelperCssPage,
        PresentationComponent,
        DashboardComponent,
        LessonDetailsComponent,
        ProfileComponent,
        VideoSessionComponent,
        ErrorMessageComponent,
        JoinSessionDialogComponent,
        ChartNgxPage,
        ChartD3Page,

        TablesPage],
    imports: [
        AppSawaLoginModule,
      MatButtonModule,
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatInputModule,
      MatCardModule,
      MatFormFieldModule,
      MatDialogModule,
      MatRadioModule,
      MatCheckboxModule,
      MatSnackBarModule,
      AgmCoreModule.forRoot({ apiKey: 'AIzaSyC5gJ5x8Yw7qP_DqvNq3IdZi2WUSiDjskk' }),
      BrowserAnimationsModule,
      BrowserModule,
      CountdownModule,
      NgxTagsInputModule,
      FullCalendarModule,
      AppDashboardModule,
      FormsModule,
      HighlightJsModule,
      NgxChartsModule,
      NvD3Module,
      ReactiveFormsModule,
      SlimLoadingBarModule.forRoot(),
      TrendModule,
      CalendarModule,
      NgbModule,
    AppLoginModule,
    CommonModule,
    IonicModule.forRoot(),
        AppHomeModule,
        AppCpanelModule,
        AppSearchModule,
		AppCHomeModule,
    AppAsterriskModule,
    MobilePageModule,
    NewContactPageModule,
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxLoadingModule.forRoot({}),
    FormsModule, jqxDateTimeInputModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
    StatusBar,
      SplashScreen,
      /*EventService,*/
      AuthenticationService,
      UserService,
      LessonService,
      VideoSessionService,
      AuthGuard,
      Title,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true }
    ],
    exports: [
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatCardModule,
        MatFormFieldModule,
        MatDialogModule,
        MatRadioModule,
        MatCheckboxModule,
        MatSnackBarModule
    ]
})
export class AppModule { }

