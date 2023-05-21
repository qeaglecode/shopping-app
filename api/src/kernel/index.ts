import { join } from 'path';

export * from './infras';

export function getConfig(configName = 'app') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return require(join(__dirname, '..', 'config', configName)).default;
}
