import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@diligent-nx-knowledge-share/xplat/web/features';

@Component({
  selector: 'diligent-nx-knowledge-share-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
