import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppFooterComponent } from "src/app/layouts/footer/footer.component";
import { AppHeaderComponent } from "src/app/layouts/header/header.component";
import { AppLayoutMainComponent } from "src/app/layouts/layout-main/layout-main.component";
import { AppLayoutComponent } from "src/app/layouts/layout/layout.component";
import { AppNavComponent } from "src/app/layouts/nav/nav.component";

@NgModule({
    declarations: [
        AppFooterComponent,
        AppHeaderComponent,
        AppLayoutComponent,
        AppLayoutMainComponent,
        AppNavComponent
    ],
    imports: [RouterModule]
})
export class AppLayoutsModule { }
