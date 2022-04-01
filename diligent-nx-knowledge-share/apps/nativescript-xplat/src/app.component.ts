import { Component } from '@angular/core';
import { AppService } from '@diligent-nx-knowledge-share/xplat/nativescript/core';
import { AppBaseComponent } from '@diligent-nx-knowledge-share/xplat/nativescript/features';

@Component({
  selector: 'diligent-nx-knowledge-share-root',
  template: `
    <GridLayout>
      <page-router-outlet></page-router-outlet>
    </GridLayout>
  `,
})
export class AppComponent extends AppBaseComponent {
  constructor(appService: AppService) {
    super(appService);
  }
}
