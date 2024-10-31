import React from "react";

function CardImg(props: {
  data: {
    title?: string;
    img?: string;
    titleImg?: string;
    listItem?: { subTitle?: string; desc?: string }[];
  };
  reverse?: boolean;
  marginauto?: string;
}) {
  return (
    <div
      className={`w-defaultwidth bg-gray ${
        props.marginauto
      } h-full w-full bg-cover flex  ${
        props?.reverse ? "flex-row-reverse" : ""
      } flex-wrap`}
    >
      <div className=" lg:basis-7/12 basis-full flex flex-col lg:py-0 py-5 justify-center xl:ps-20 ps-10">
        <h3 className="pb-8">{props.data.title}</h3>
        {props.data.listItem?.map((item, index) => (
          <div className="pl-6 pb-4 " key={index}>
            <ul>
              <li className="list-disc pl-2 font-bold text-purple">
                <p>{item.subTitle}</p>
              </li>
            </ul>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="lg:basis-5/12  basis-full  h-full ">
        <div className="relative  ">
          <img
            className="w-full h-full "
            src={`/assets/${props.data.img}.webp`}
            alt={props.data.titleImg}
            title={props.data.titleImg}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#21397b99] via-[#93abe3aa] to-[#ffffff1a]"></div>
        </div>
      </div>
    </div>
  );
}

export default CardImg;
