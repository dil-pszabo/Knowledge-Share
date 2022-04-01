import { IEnvironment } from '@diligent-nx-knowledge-share/xplat/core';
import { deepMerge } from '@diligent-nx-knowledge-share/xplat/utils';
import { environmentBase } from './environment.base';

export const environmentProd = deepMerge(environmentBase, <IEnvironment>{
  production: true,
  // customizations here...
});
