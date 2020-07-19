import { Routes, RouterModule } from "@angular/router";
import { AppRouteGuard } from "src/app/core/guards/route.guard";
import { AppCustomPreloader } from "src/app/AppCustomPreloader";
import { NgModule } from "@angular/core";
/*import { DashboardV1Page } from "src/app/pages/dashboard/v1/dashboard-v1";*/
import { AppMobileComponent } from 'src/app/views/main/mobile/mobile.component';
import { AppSearchComponent } from 'src/app/views/main/search/search.component';
import { AppLoginComponent } from "src/app/views/login/login.component";
/*import { BasicLoginModule } from 'src/app/theme/auth/login/basic-login/basic-login.module';*/
import { BasicLoginComponent  } from 'src/app/theme/auth/login/basic-login/basic-login.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './components/dashboard/dahsboard.component';
import { LessonDetailsComponent } from './components/lesson-details/lesson-details.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ProfileComponent } from './components/profile/profile.component';
import { VideoSessionComponent } from './components/video-session/video-session.component';
import { AppHomeComponent } from "./views/main/home/home.component";
import { AsterriskHomeComponent } from "./views/main/asterrisk/asterrisk.component";
import { AppCPanelComponent } from "./views/main/cpanel/cpanel.component";
import { AppCHomeComponent } from "src/app/views/main/chome/chome.component";
import { CalenderkHomeComponent } from "./views/main/calender/calender.component";
import { TrendsHomeComponent } from "./views/main/trends/trends.component";

/*import { AppCallLogsComponent } from "./views/main/calllogs/logs.component";*/
export const ROUTES: Routes = [
    {
    path: "",
        component: BasicLoginComponent,
        loadChildren: () => import("src/app/theme/auth/login/basic-login/basic-login.module").then((x) => x.AppSawaLoginModule)
    },
    {
        path: "login",
        component: BasicLoginComponent,
        loadChildren: () => import("src/app/theme/auth/login/basic-login/basic-login.module").then((x) => x.AppSawaLoginModule)
    },
    {
        path: "smartlogin",
        component: AppLoginComponent,
        loadChildren: () => import("src/app/views/login/login.module").then((x) => x.AppLoginModule)
    },
    {
        path: "main",
        runGuardsAndResolvers:"always",
        canActivate: [AppRouteGuard],
        children: [
            {
                path: "files",
                loadChildren: () => import("src/app/pages/dashboard/v1/dashboard-v1").then((x) => x.DashboardV1Page)
            },
            
            {
                path: "home",
                component: AppHomeComponent,
                runGuardsAndResolvers: "always",
                loadChildren: () => import("src/app/views/main/home/home.module").then((x) => x.AppHomeModule)
            },
            {
                path: "calender",
                component: CalenderkHomeComponent,
                runGuardsAndResolvers: "always",
                loadChildren: () => import("src/app/views/main/calender/calender.module").then((x) => x.AppCalenderModule)
            },
            {
                path: "trends",
                component: TrendsHomeComponent ,
                runGuardsAndResolvers: "always",
                loadChildren: () => import("src/app/views/main/trends/trends.module").then((x) => x.AppTrendsModule)
            },
            
            {
                path: "list",
                loadChildren: () => import("src/app/views/main/list/list.module").then((x) => x.AppListModule)
            },
            {
                path: "rxjs",
                loadChildren: () => import("src/app/views/main/rxjs/rxjs.module").then((x) => x.AppRxjsModule)
            },
            /*{
                path: "search",
                loadChildren: () => import("src/app/views/search/search.module").then((x) => x.AppSearchModule)
            },*/
            {
              path: "mobile",
              component: AppMobileComponent,
              runGuardsAndResolvers: "always",
              loadChildren: () => import("src/app/views/main/mobile/mobile.module").then((x) => x.MobilePageModule)
            },
            {
                path: "conference",
                component: AppMobileComponent,
                runGuardsAndResolvers: "always",
                loadChildren: () => import("src/app/views/main/conference/conference.module").then((x) => x.ConferencePageModule)
            }
          ,
            {
                path: "search",
                component: AppSearchComponent,
                runGuardsAndResolvers: "always",
                loadChildren: () => import("src/app/views/main/search/search.module").then((x) => x.AppSearchModule)
            },
            {
                path: "cpanel",
                component: AppCPanelComponent,
                runGuardsAndResolvers: "always",
                loadChildren: () => import("src/app/views/main/cpanel/cpanel.module").then((x) => x.AppCpanelModule)
            },
			 {
                path: "chome",
                component: AppCHomeComponent,
                runGuardsAndResolvers: "always",
                loadChildren: () => import("src/app/views/main/chome/chome.module").then((x) => x.AppCHomeModule)
            },
           /* {
                path: "logs",
                component: AppCallLogsComponent,
                runGuardsAndResolvers: "always",
                loadChildren: () => import("src/app/views/main/calllogs/logs.module").then((x) => x.AppCallLogsModule)
            },*/
            {
                path: "asterrisk",
                component: AsterriskHomeComponent,
                runGuardsAndResolvers: "always",
                loadChildren: () => import("src/app/views/main/asterrisk/asterrisk.module").then((x) => x.AppAsterriskModule)
            },
            {
                path: 'Pressentation',
                component: PresentationComponent,
                pathMatch: 'full',
                data: { state: 'presentation' }
            },
            {
                path: 'lessons',
                component: DashboardComponent,
                canActivate: [AuthGuard],
                data: { state: 'lessons' }
            },
            {
                path: 'lesson-details/:id',
                component: LessonDetailsComponent,
                canActivate: [AuthGuard],
                data: { state: 'lesson-details' }
            },
            {
                path: 'profile',
                component: ProfileComponent,
                canActivate: [AuthGuard],
                data: { state: 'profile' }
            },
            {
                path: 'lesson/:id',
                component: VideoSessionComponent,
                canActivate: [AuthGuard],
                data: { state: 'session' }
            },
        ]
    },
    { path: "**", redirectTo: "" }
    
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES, { preloadingStrategy: AppCustomPreloader })], //own custom preloader
    exports: [RouterModule],
    providers: [AppCustomPreloader]
})

export class AppRoutingModule { }
