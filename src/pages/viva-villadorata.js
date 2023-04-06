import Layout from "@/components/common/Layout.js";
import VivaVilladorata from "../components/pagesComponents/VivaVilladorata";
import { PAGES_IT } from "../constants/PagesConst";

export default function VilladorataPage() {
  return (
    <Layout
      title="Viva Villadorata"
      metaDescription="Viva Villadorata a Noto, in Sicilia"
      page={PAGES_IT.VILLADORATA.name}
    >
      <VivaVilladorata />
    </Layout>
  );
}
