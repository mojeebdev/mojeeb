import EditorialPortfolio from "@/components/EditorialPortfolio";
import JsonLd from "@/components/JsonLd";
import { homePageJsonLd } from "@/lib/jsonLd";

export default function Home() {
  return (
    <>
      <JsonLd data={homePageJsonLd} />
      <EditorialPortfolio />
    </>
  );
}
