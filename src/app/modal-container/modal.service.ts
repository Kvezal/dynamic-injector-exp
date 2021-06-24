import {
  ChangeDetectorRef,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Injector,
  StaticProvider,
  Type,
  ViewContainerRef
} from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

interface IInputs {
  [key: string]: any,
}

interface IOpenModal {
  injector: Injector,
  services: Type<any>[],
  inputs: {
    modal?: IInputs,
    component?: IInputs,
  }
}

@Injectable()
export class ModalService {
  private modalContainer!: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
  }

  public setModalContainer(modalContainer: ViewContainerRef): void {
    this.modalContainer = modalContainer;
  }

  public openModal(config: IOpenModal): ComponentRef<any> {
    const newInjector = this.getComponentInjector(config);
    const modalFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
    const modal = this.modalContainer.createComponent(modalFactory, 0, newInjector);
    if (config.inputs.modal) {
      this.setModalOptions(modal, config.inputs.modal);
    }
    return modal;
  }

  private getComponentInjector(config: IOpenModal): Injector {
    const {injector, services} = config;
    const injectorContent = services.reduce((result: {providers: StaticProvider[]}, service) => {
      const injectedService = injector.get(service);
      if (injectedService) {
        result.providers.push({
          provide: service,
          useValue: injectedService,
        })
      }
      return result;
    }, {providers: []});
    return Injector.create(injectorContent);
  }

  public setModalOptions(modalRef: ComponentRef<any>, modalInputs: IInputs): void {
    Object.entries(modalInputs).forEach(([key, value]: [string, any]) => {
      modalRef.instance[key] = value;
    });
    modalRef.instance.changeDetectorRef.markForCheck();
  }
}
