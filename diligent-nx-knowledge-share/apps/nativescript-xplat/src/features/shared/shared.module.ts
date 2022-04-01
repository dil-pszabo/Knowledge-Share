import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@diligent-nx-knowledge-share/xplat/nativescript/features';

const MODULES = [UIModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class SharedModule {}
