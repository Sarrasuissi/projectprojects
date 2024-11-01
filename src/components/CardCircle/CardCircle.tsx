import React from "react";
import "./CardCircle.scss";

function CardCircle(props: {
  data: {
    img?: string;
    titleImg?: string;
    title?: string;
    descriptions?: {
      desc: string;
    }[];
  };
}) {
  return (
    <div className="cardCircle overflow-hidden">
      <div className="w-defaultwidth m-auto max-w-mwidth1 cardCircle-image1 pt-20 ">
        <div className="flex flex-wrap py-10 ">
          <div className="lg:basis-4/12 ">
            <img
              src={`/assets/${props.data.img}.webp`}
              alt={props.data.titleImg}
              title={props.data.titleImg}
            />
          </div>
          <div className="lg:basis-8/12 m-auto  cardCircle-image2">
            <div className="max-w-[850px] m-auto 2xl:ps-0 ps-10 mt-10 lg:mt-0">
              <h1 className="pb-4 text-darBlue">{props.data.title}</h1>
              {props.data.descriptions?.map((item, index) => (
                <div key={index}>
                  <p className="text-[#262626]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCircle;
