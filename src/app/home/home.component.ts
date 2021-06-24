import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  Injector,
  OnInit
} from '@angular/core';
import { ModalService } from '../modal-container/modal.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {

  constructor(
    private injector: Injector,
    private modalService: ModalService,
  ) { }

  ngOnInit(): void {
    const modalRef: ComponentRef<any> = this.modalService.openModal({
      injector: this.injector,
      services: [HomeService],
      inputs: {
        modal: {
          name: 'Kvezal',
        },
      },
    });

    setTimeout(() => {
      this.modalService.setModalOptions(modalRef, {
        name: 'Vova',
      });
    }, 3000);
  }

}
