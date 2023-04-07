import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Head from "next/head";
import Header from "./Header";
import HeaderTemp from "./HeaderTemp";
import Footer from "./Footer";
import { setLanguage } from "../../redux/language";

export default function Layout({ children, title, metaDescription, page }) {
  const metaTitle = `Viva Viviana Varese - ${title}`;

  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (typeof window !== undefined) {
      const actualLang = window.localStorage.getItem("lang");
      if (actualLang) {
        dispatch(setLanguage(actualLang));
      } else {
        window.localStorage.setItem("lang", selectedLanguage);
      }
    }
  }, [dispatch, selectedLanguage]);
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header page={page} />
        {/* <HeaderTemp page={page} /> */}
        {children}
        <Footer />
      </main>
    </>
  );
}
