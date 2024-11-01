import React from "react";
import data from "@/data/qui-sommes-nous.json";
import { Metadata } from "next";
import SliderSimple from "@/components/SliderSimple/SliderSimple";
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
  return <div>
    <SliderSimple data={data.slider} /> </div>;
}

export default page;
