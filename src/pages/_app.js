// pages/_app.js
import "@/styles/globals.css";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import Script from "next/script"; // Importa il componente Script

export default function App({ Component, pageProps }) {
  const theme = createTheme({
    type: "light", // può essere "light" o "dark"
    theme: {
      colors: {
        primaryLight: "#ff73bc",
        primaryLightHover: "#df4a97",
        primaryLightActive: "#ff0286",
        primaryLightContrast: "$white",
        primary: "#ff0286",
        primaryBorder: "#ff0286",
        primaryBorderHover: "#df4a97",
        primarySolidHover: "#df4a97",
        primarySolidContrast: "$white",
        gradient:
          "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
        link: "#ff0286",
        // ... altri colori
      },
      space: {},
      fonts: {},
    },
  });

  return (
    <>
      {/* Configurazione di Iubenda */}
      <Script id="iubenda-config" strategy="beforeInteractive">
        {`
          var _iub = _iub || [];
          _iub.csConfiguration = {
            "siteId": 3620215,
            "cookiePolicyId": 38943154,
            "lang": "it"
          };
        `}
      </Script>

      {/* Script di autoblocco Iubenda */}
      <Script
        strategy="beforeInteractive"
        src="https://cs.iubenda.com/autoblocking/3620215.js"
      />

      {/* Script di supporto di Iubenda */}
      <Script
        strategy="beforeInteractive"
        src="https://cdn.iubenda.com/cs/gpp/stub.js"
      />

      {/* Script principale di Iubenda */}
      <Script
        strategy="beforeInteractive"
        src="https://cdn.iubenda.com/cs/iubenda_cs.js"
        charSet="UTF-8"
        async
      />

      {/* Provider e componenti della tua app */}
      <Provider store={store}>
        <NextUIProvider theme={theme}>
          <Component {...pageProps} />
        </NextUIProvider>
      </Provider>
    </>
  );
}
