import { useSelector } from "react-redux";
import Layout from "@/components/common/Layout.js";
import VivaIlBistrot from "../components/pages/VivaIlBistrot";
import { PAGES_IT } from "../constants/PagesConst";

export default function BistrotPage() {
  return (
    <Layout
      title="Viva il Bistrot a Noto"
      metaDescription="Viva il Bistrot a Noto, in Sicilia"
      page={PAGES_IT.BISTROT.name}
    >
      <VivaIlBistrot />
    </Layout>
  );
}
