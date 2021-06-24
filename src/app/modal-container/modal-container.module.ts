import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalService } from './modal.service';
import { ModalContainerDirective } from './modal-container.directive';


@NgModule({
  declarations: [ModalContainerDirective],
  imports: [
    CommonModule
  ],
  exports: [ModalContainerDirective],
  providers: [ModalService],
})
export class ModalContainerModule { }
