import Slider from "@/components/Slider/Slider";
import data from "@/data/homePage.json";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: data.metaData.title,
  description: data.metaData.description,
  metadataBase: new URL("https://www.finky.com/"),
  alternates: {
    canonical: "https://www.finky.com/",
  },
  openGraph: {
    title: data.metaData.title,
    description: data.metaData.description,
    locale: "fr_FR",
    type: "website",
    url: "https://www.finky.com/",
  },
};

function page() {
  return (
    <div>
      <Slider data={data.slider}/>
    </div>
  )
}

export default page