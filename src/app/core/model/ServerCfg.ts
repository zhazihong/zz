export class ServerCfg {
  mode: 'DEV' | 'TEST' | 'PRO' | 'SMOKETEST';
  appVersion: string;
  server: string;
}
