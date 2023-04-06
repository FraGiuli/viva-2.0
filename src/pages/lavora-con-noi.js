import { useSelector } from "react-redux";
import Layout from "@/components/common/Layout.js";
import WorkWith from "../components/pagesComponents/WorkWith";
import { PAGES_IT } from "../constants/PagesConst";

export default function WorkWithPage() {
  return (
    <Layout
      title="Lavora con noi"
      metaDescription="Lavora con noi"
      page={PAGES_IT.WORK_WITH.name}
    >
      <WorkWith />
    </Layout>
  );
}
