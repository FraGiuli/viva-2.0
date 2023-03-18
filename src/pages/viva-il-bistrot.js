import { useSelector } from "react-redux";
import Layout from "@/components/common/Layout.js";
import VivaIlBistrot from "../components/pages/VivaIlBistrot";
import { PAGES } from "../constants/PagesConst";

export default function Home() {
  return (
    <Layout
      title="Viva il Bistrot a Noto"
      metaDescription="Viva il Bistrot a Noto, in Sicilia"
      page={PAGES.BISTROT.name}
    >
      <VivaIlBistrot />
    </Layout>
  );
}
