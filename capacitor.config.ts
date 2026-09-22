import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "ir.bushehr.bargh.hamyar",
  appName: "همیار برق بوشهر",
  webDir: "dist",
  backgroundColor: "#0b1a33ff",
  android: {
    allowMixedContent: false,
    captureInput: true,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1800,
      launchAutoHide: true,
      backgroundColor: "#0b1a33ff",
      androidSplashResourceName: "splash",
      showSpinner: true,
      spinnerColor: "#f0b820",
    },
    StatusBar: {
      style: "DARK",
      backgroundColor: "#0b1a33",
      overlay: false,
    },
  },
};

export default config;
