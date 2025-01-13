import Layout from "@/components/common/Layout.js";
import { PAGES_IT } from "../constants/PagesConst";
import Corsi from "@/components/pagesComponents/Corsi";

export default function VivaGliEventiPage() {
  return (
    <Layout
      title="Corsi di Cucina"
      metaDescription="I corsi di cucina di Viviana Varese"
      page={PAGES_IT.CORSI.name}
    >
      <Corsi />
    </Layout>
  );
}
