import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

import { HeaderBaseComponent } from '@diligent-nx-knowledge-share/xplat/features';

@Component({
  moduleId: module.id,
  selector: 'diligent-nx-knowledge-share-header',
  templateUrl: 'header.component.html',
})
export class HeaderComponent extends HeaderBaseComponent {
  constructor(private router: RouterExtensions) {
    super();
  }
}
