import { Directive } from '@angular/core';

// libs
import { BaseComponent } from '@diligent-nx-knowledge-share/xplat/core';
import { AppService } from '@diligent-nx-knowledge-share/xplat/nativescript/core';

@Directive()
export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
