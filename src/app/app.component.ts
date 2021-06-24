import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import { ModalService } from './modal-container/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'modal';

  constructor(private modalService: ModalService) {
  }

  ngOnInit() {
  }
}
