import Layout from "@/components/common/Layout.js";
import IoSonoViva from "../components/pagesComponents/IoSonoViva";
import { PAGES_IT } from "../constants/PagesConst";

export default function IoSonoVivaPage() {
  return (
    <Layout
      title="IO SONO VIVA Dolci e Gelati"
      metaDescription="IO SONO VIVA Dolci e Gelati, Milano"
      page={PAGES_IT.GELATI.name}
    >
      <IoSonoViva />
    </Layout>
  );
}
