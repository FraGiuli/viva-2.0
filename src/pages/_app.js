import "@/styles/globals.css";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import store from "../redux/store";

export default function App({ Component, pageProps }) {
  const theme = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      colors: {
        // brand colors
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

        // ...  more colors
      },
      space: {},
      fonts: {},
    },
  });
  return (
    <Provider store={store}>
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </Provider>
  );
}
