import React, { createContext, useState, useEffect } from "react";
import themeConfig from "../../configs/themeConfig";

interface Settings {
  themeColor: string;
  mode: string;
  skin: string;
  footer: string;
  layout: string;
  lastLayout: string;
  direction: string;
  navHidden: boolean;
  appBarBlur: boolean;
  navCollapsed: boolean;
  contentWidth: string;
  toastPosition: string;
  verticalNavToggleType: string;
  appBar: string;
}

const initialSettings: Settings = {
  themeColor: "primary",
  mode: themeConfig.mode,
  skin: themeConfig.skin,
  footer: themeConfig.footer,
  layout: themeConfig.layout,
  lastLayout: themeConfig.layout,
  direction: themeConfig.direction,
  navHidden: themeConfig.navHidden,
  appBarBlur: themeConfig.appBarBlur,
  navCollapsed: themeConfig.navCollapsed,
  contentWidth: themeConfig.contentWidth,
  toastPosition: themeConfig.toastPosition,
  verticalNavToggleType: themeConfig.verticalNavToggleType,
  appBar:
    themeConfig.layout === "horizontal" && themeConfig.appBar === "hidden"
      ? "fixed"
      : themeConfig.appBar,
};

const storeSettings = (settings: Partial<Settings>) => {
  const initSettings = Object.assign({}, settings);
  delete initSettings.appBar;
  delete initSettings.footer;
  delete initSettings.layout;
  delete initSettings.navHidden;
  delete initSettings.lastLayout;
  delete initSettings.toastPosition;
  window.localStorage.setItem("settings", JSON.stringify(initSettings));
};

interface SettingsContextType {
  saveSettings: (updatedSettings: Partial<Settings>) => void;
  settings: Settings;
}

export const SettingsContext = createContext<SettingsContextType>({
  saveSettings: () => {},
  settings: initialSettings,
});

interface SettingsProviderProps {
  children: React.ReactNode;
  pageSettings?: Partial<Settings>;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({
  children,
  pageSettings,
}) => {
  const [settings, setSettings] = useState<Settings>({ ...initialSettings });

  useEffect(() => {
    if (pageSettings) {
      setSettings({ ...settings, ...pageSettings });
    }
  }, [pageSettings]);

  useEffect(() => {
    if (settings.layout === "horizontal" && settings.mode === "semi-dark") {
      saveSettings({ ...settings, mode: "light" });
    }
    if (settings.layout === "horizontal" && settings.appBar === "hidden") {
      saveSettings({ ...settings, appBar: "fixed" });
    }
  }, [settings.layout]);

  const saveSettings = (updatedSettings: Partial<Settings>) => {
    storeSettings(updatedSettings);
    setSettings(updatedSettings as Settings);
  };

  return (
    <SettingsContext.Provider value={{ settings, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;
