import Layout from "@/components/common/Layout.js";
import { PAGES_IT } from "../constants/PagesConst";
import { useEffect } from "react";
import Shop from "@/components/pagesComponents/Shop";

export default function ShopPage() {
  useEffect(() => {
    if (typeof window !== undefined) {
      window.location = "https://ac80e3.myshopify.com/";
    }
  }, []);

  return (
    <Layout
      title="Shop"
      metaDescription="Lo shop di Viviana Varese"
      page={PAGES_IT.SHOP_VIVA.name}
    >
      <Shop />
    </Layout>
  );
}
