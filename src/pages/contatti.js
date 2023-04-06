import Layout from "@/components/common/Layout.js";
import Contatti from "../components/pagesComponents/Contatti";
import { PAGES_IT } from "../constants/PagesConst";

export default function ContattiPage() {
  return (
    <Layout
      title="Contatti"
      metaDescription="I contatti i di Viviana Varese"
      page={PAGES_IT.CONTATTI.name}
    >
      <Contatti />
    </Layout>
  );
}
