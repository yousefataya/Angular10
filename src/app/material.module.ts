import { NgModule } from '@angular/core';


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

@NgModule({
    imports: [
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
export class MaterialModule { }
