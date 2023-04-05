import Layout from "@/components/common/Layout.js";
import VivianaVarese from "../components/pages/VivianaVarese";
import { PAGES_IT } from "../constants/PagesConst";

export default function VivianaVaresePage() {
  return (
    <Layout
      title="Viviava Varese"
      metaDescription="Chef Viviana Varese"
      page={PAGES_IT.VIVIANA_VARESE.name}
    >
      <VivianaVarese />
    </Layout>
  );
}
