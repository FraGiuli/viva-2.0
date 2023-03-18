import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, title, metaDescription, page }) {
  const metaTitle = `Viva Viviana Varese - ${title}`;
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
        {children}
        {/* <Footer /> */}
      </main>
    </>
  );
}
