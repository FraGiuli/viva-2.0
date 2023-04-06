import Layout from "@/components/common/Layout.js";
import VivaGliEventi from "../components/pagesComponents/VivaGliEventi";
import { PAGES_IT } from "../constants/PagesConst";

export default function VivaGliEventiPage() {
  return (
    <Layout
      title="Viva gli Eventi"
      metaDescription="Gli Eventi di Viviana Varese"
      page={PAGES_IT.EVENTI.name}
    >
      <VivaGliEventi />
    </Layout>
  );
}
