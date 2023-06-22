import Head from "next/head";
import { Router } from "next/router";
import NProgress from "nprogress";
import { CacheProvider } from "@emotion/react";
import "react-perfect-scrollbar/dist/css/styles.css";
import "../../styles/globals.css";
import themeConfig from "../configs/themeConfig";
import UserLayout from "../layouts/UserLayout";
import ThemeComponent from "../@core/theme/ThemeComponent";
import WindowWrapper from "../@core/components/window-wrapper";
import { createEmotionCache } from "../@core/utils/create-emotion-cache";
import { SettingsConsumer, SettingsProvider } from "../@core/context/settingsContext";

const clientSideEmotionCache = createEmotionCache();

if (themeConfig.routingLoader) {
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeError", () => {
    NProgress.done();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
}

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const contentHeightFixed = Component.contentHeightFixed ?? false;

  const getLayout =
    Component.getLayout ??
    ((page) => (
      <UserLayout contentHeightFixed={contentHeightFixed}>{page}</UserLayout>
    ));
  const setConfig = Component.setConfig ?? undefined;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title></title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <SettingsProvider {...(setConfig ? { pageSettings: setConfig() } : {})}>
        <SettingsConsumer>
          {({ settings }) => {
            return (
              <ThemeComponent settings={settings}>
                <WindowWrapper>
                  {getLayout(<Component {...pageProps} />)}
                </WindowWrapper>
              </ThemeComponent>
            );
          }}
        </SettingsConsumer>
      </SettingsProvider>
    </CacheProvider>
  );
};

export default App;
