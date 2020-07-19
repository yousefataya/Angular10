import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {CardComponent} from './card/card.component';
import {CardToggleDirective} from './card/card-toggle.directive';
import {ModalBasicComponent} from './modal-basic/modal-basic.component';
import {ModalAnimationComponent} from './modal-animation/modal-animation.component';
import {ClickOutsideModule} from 'ng-click-outside';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ClickOutsideModule
  ],
  exports: [
    NgbModule,
    CardToggleDirective,
    HttpClientModule,
    CardComponent,
    ModalBasicComponent,
    ModalAnimationComponent,
    ClickOutsideModule
  ],
  declarations: [
    CardToggleDirective,
    CardComponent,
    ModalBasicComponent,
    ModalAnimationComponent
  ],
 
})
export class SharedModule { }
