import React from "react";
import "./CardBgCircle.scss";

function CardBgCircle(props: {
  data: {
    img?: string;
    titleImg?: string;
    title?: string;
    listItems?: {
      subTitle?: string;
      desc?: string;
    }[];
  };
}) {
  return (
    <div
      className=" flex flex-wrap  text-white circle w-full"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(10, 28, 74, 0.9), rgba(112, 125, 171, 1), rgba(168, 192, 247, 0.6)), url('/assets/icons/two-circle.webp')`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "calc(115%  ) center",
      }}
    >
      <div className="2xl:basis-3/12 lg:basis-4/12 basis-full lg:-translate-x-20 lg:translate-y-20 circle-image1 lg:py-0 py-5">
        <img
          className="m-auto lg:ms-auto"
          src={`/assets/${props.data.img}.webp`}
          alt={props.data.titleImg}
          title={props.data.titleImg}
        />
      </div>
      <div className="my-auto 2xl:basis-9/12 lg:basis-8/12 basis-full  px-10 ">
        <h3 className="pb-5">{props.data.title}</h3>
        {props.data.listItems?.map((item, index) => (
          <div className="pb-4 pl-6 " key={index}>
            <ul>
              <li className="list-disc pl-2">
                <p className="font-bold">{item.subTitle}</p>
              </li>
            </ul>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardBgCircle;
