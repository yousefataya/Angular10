import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppFilesComponent } from "src/app/views/main/files/files.component";
import { AppFileModule } from "../../../components/file/file.module";

const routes: Routes = [
    { path: "", component: AppFilesComponent }
];

@NgModule({
    declarations: [AppFilesComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        AppFileModule
    ]
})
export class AppFilesModule { }
