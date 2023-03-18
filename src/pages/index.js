import Layout from "@/components/common/Layout.js";
import Home from "../components/pages/Home.js";
import { PAGES } from "../constants/PagesConst";

export default function Index() {
  return (
    <Layout title="Home" metaDescription="La Home" page={PAGES.HOME.name}>
      <Home />
    </Layout>
  );
}
