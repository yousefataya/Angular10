import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppListComponent } from "src/app/views/main/list/list.component";

const routes: Routes = [
    { path: "", component: AppListComponent }
];

@NgModule({
    declarations: [AppListComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class AppListModule { }
