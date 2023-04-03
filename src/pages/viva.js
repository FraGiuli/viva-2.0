import Layout from "@/components/common/Layout.js";
import Viva from "../components/pages/Viva";
import { PAGES_IT } from "../constants/PagesConst";

export default function VilladorataPage() {
  return (
    <Layout
      title="VIVA Viviana Varese"
      metaDescription="VIVA Viviana Varese, Milano"
      page={PAGES_IT.VIVA.name}
    >
      <Viva />
    </Layout>
  );
}
