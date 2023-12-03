import Layout from "@/components/common/Layout.js";
import Shop from "../components/pagesComponents/Shop";
import { PAGES_IT } from "../constants/PagesConst";

export default function VilladorataPage() {
  return (
    <Layout
      title="Shop"
      metaDescription="Lo shop di Viviava Varese"
      page={PAGES_IT.SHOP_VIVA.name}
    >
      <Shop />
    </Layout>
  );
}
