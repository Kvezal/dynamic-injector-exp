import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input
} from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  @Input()
  public name: string = '';

  public title = this.homeService.title;

  constructor(
    public changeDetectorRef: ChangeDetectorRef,
    private homeService: HomeService
  ) { }

}
