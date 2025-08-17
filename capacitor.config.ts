import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.59b6a874ffd84f88aa70cc92fed74252',
  appName: 'my-payment-guru',
  webDir: 'dist',
  server: {
    url: 'https://59b6a874-ffd8-4f88-aa70-cc92fed74252.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#262847',
      showSpinner: false
    }
  }
};

export default config;