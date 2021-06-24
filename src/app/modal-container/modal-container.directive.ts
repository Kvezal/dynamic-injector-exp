import {
  Directive,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import { ModalService } from './modal.service';

@Directive({
  selector: '[appModalContainer]',

})
export class ModalContainerDirective implements OnInit {
  constructor(
    private modalService: ModalService,
    private viewContainerRef: ViewContainerRef,
  ) { }

  ngOnInit() {
    this.modalService.setModalContainer(this.viewContainerRef);
  }
}
