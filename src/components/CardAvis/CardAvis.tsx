import React from "react";

function CardAvis(props: {
  data: {
    icons?: string;
    titleIcons?: string;
    name?: string;
    desc?: string;
  }[];
}) {
  return (
    <div className="flex w-defaultwidth flex-wrap m-auto max-w-mwidth1 py-20 justify-evenly ">
      {props.data.map((item, index) => (
        <div
          key={index}
          className=" group  shadow-2xl p-20 hover:bg-[#6E7AA8] hover:scale-110  rounded-xl lg:basis-[32%] "
        >
          <div className="flex justify-center pb-10   ">
            <img src={`/assets/${item.icons}.webp`} alt={item.titleIcons} />
            <img src={`/assets/${item.icons}.webp`} alt={item.titleIcons} />
            <img src={`/assets/${item.icons}.webp`} alt={item.titleIcons} />
            <img src={`/assets/${item.icons}.webp`} alt={item.titleIcons} />
            <img src={`/assets/${item.icons}.webp`} alt={item.titleIcons} />
          </div>
          <div className="text-center">
            <h3 className=" text-purple group-hover:text-white pb-4">
              {item.name}
            </h3>
            <p className="group-hover:text-white">{item.desc} </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardAvis;
