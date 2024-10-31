import CardAvis from "@/components/CardAvis/CardAvis";
import CardBgCircle from "@/components/CardBgCircle/CardBgCircle";
import CardBgImg from "@/components/CardBgImg/CardBgImg";
import CardCircle from "@/components/CardCircle/CardCircle";
import CardDescriptions from "@/components/CardDescriptions/CardDescriptions";
import CardFormWithImg from "@/components/CardFormWithImg/CardFormWithImg";
import CardImg from "@/components/CardImg/CardImg";
import CardWithDesc from "@/components/CardWithDesc/CardWithDesc";
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
      <Slider />
      <CardCircle data={data.cardCircle} />
      <CardBgImg data={data.cardBgImg} />
      <h3 className="w-defaultwidth m-auto max-w-mwidth1 text-darkBlue">
        {data.title2}
      </h3>
      <div className="">
        <CardWithDesc
          data={data.CardWithDesc}
          basisdiv="xl:basis-[30%] lg:basis-[48%] basis-full"
          maxwWidth="max-w-mwidth1"
        />
      </div>
      <div className=" py-10">
        <CardImg data={data.CardImg} />
      </div>
      <div className="  py-10">
        <CardImg data={data.CardImg2} reverse marginauto="ms-auto" />
      </div>
      <div>
        <CardBgCircle data={data.CardBgCircle} />
      </div>
      <div className="my-20">
        <CardWithDesc
          data={data.CardWithDesc2}
          basisdiv="lg:basis-[45%] basis-full"
          maxwWidth="max-w-mediumwidth"
        />
      </div>
      <div className="w-defaultwidth m-auto max-w-mwidth1 py-16 ">
        <CardDescriptions data={data.CardDescriptions} />
      </div>
      <div className="w-defaultwidth m-auto max-w-mwidth1 py-10">
        <h3 className=" text-darkBlue">{data.title7}</h3>
      </div>
      <CardWithDesc
        data={data.CardWithDesc}
        basisdiv="xl:basis-[30%] lg:basis-[48%] basis-full"
        maxwWidth="max-w-mwidth1"
      />
      <div className="w-defaultwidth m-auto max-w-mwidth1 py-10">
        <h2 className="text-lightBlue pb-4">{data.cardTitle.title}</h2>
        <p>{data.cardTitle.desc}</p>
      </div>
      <div className="">
        <CardBgImg data={data.cardBgImg2} />
      </div>
      <div>
        <CardAvis data={data.avis} />
      </div>
      <div className="w-defaultwidth m-auto max-w-mwidth1 py-10">
        <h2 className="text-lightBlue pb-4">{data.cardTitle2.title}</h2>
        <p>{data.cardTitle2.desc}</p>
      </div>
      <div>
        <CardFormWithImg />
      </div>
    </div>
  );
}

export default page;
