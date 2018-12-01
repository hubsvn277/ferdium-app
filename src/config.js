import electron from 'electron';
import path from 'path';

const app = process.type === 'renderer' ? electron.remote.app : electron.app;

export const CHECK_INTERVAL = 1000 * 3600; // How often should we perform checks
export const LOCAL_API = 'http://localhost:3000';
export const DEV_API = 'https://dev.franzinfra.com';
export const LIVE_API = 'https://api.franzinfra.com';
export const GA_ID = 'UA-74126766-10';

export const DEFAULT_APP_SETTINGS = {
  autoLaunchInBackground: false,
  runInBackground: true,
  enableSystemTray: true,
  minimizeToSystemTray: false,
  showDisabledServices: true,
  showMessageBadgeWhenMuted: true,
  enableSpellchecking: true,
  spellcheckerLanguage: 'en-us',
  darkMode: false,
  locale: '',
  fallbackLocale: 'en-US',
  beta: false,
  isAppMuted: false,
  enableGPUAcceleration: true,
  serviceLimit: 5,
};

export const DEFAULT_FEATURES_CONFIG = {
  isSpellcheckerPremiumFeature: false,
  needToWaitToProceed: false,
  needToWaitToProceedConfig: {
    delayOffset: 3600000,
    wait: 10000,
  },
  isServiceProxyEnabled: false,
  isServiceProxyPremiumFeature: true,
};

export const FRANZ_SERVICE_REQUEST = 'hhttp://bit.ly/franz-plugin-docs';
export const FRANZ_TRANSLATION = 'https://bit.ly/franz-translate';

export const FILE_SYSTEM_SETTINGS_TYPES = [
  'app',
  'proxy',
];

export const SETTINGS_PATH = path.join(app.getPath('userData'), 'config');

export const DICTIONARY_PATH = path.join(app.getPath('userData'), 'dicts');
