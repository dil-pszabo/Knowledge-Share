import { environmentBase } from './environment.base';
import { IEnvironment } from '@diligent-nx-knowledge-share/xplat/core';
import { environmentProd } from '@diligent-nx-knowledge-share/xplat/environments';

export const environment: IEnvironment = environmentBase(environmentProd, {
  // app level customizations here...
});
