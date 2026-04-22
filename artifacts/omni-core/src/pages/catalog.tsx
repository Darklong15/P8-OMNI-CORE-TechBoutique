import { Layout } from "@/components/Layout";
import { Catalog } from "@/components/Catalog";
import { Locations } from "@/components/Locations";

export default function CatalogPage() {
  return (
    <Layout>
      <Catalog />
      <Locations />
    </Layout>
  );
}
