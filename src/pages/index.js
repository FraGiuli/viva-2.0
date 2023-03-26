import Layout from "@/components/common/Layout.js";
import Home from "../components/pages/Home.js";
import { PAGES_IT } from "../constants/PagesConst";

export default function Index() {
  return (
    <Layout title="Home" metaDescription="La Home" page={PAGES_IT.HOME.name}>
      <Home />
    </Layout>
  );
}
