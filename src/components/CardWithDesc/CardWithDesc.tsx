import React from "react";

function CardWithDesc(props: {
  data: {
    img?: string;
    titleImg?: string;
    subTitle?: string;
    desc?: string;
  }[];
  basisdiv?: string;
  maxwWidth?: string;
  backgroundStyle?: string;
}) {
  return (
    <div
      style={{
        ...(props.backgroundStyle && {
          backgroundImage: `url('/assets/icons/double-circle-left.webp')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
        }),
      }}
    >
      <div
        className={`w-defaultwidth m-auto flex flex-wrap md:justify-evenly justify-center py-10    ${props?.maxwWidth}`}
      >
        {props.data.map((item, index) => (
          <div
            className={`hover:bg-gradient-to-t m-auto  sm:mb-8 from-[#6E7AA8] to-[#F3F6FD] hover:text-white  ${props?.basisdiv}`}
            key={index}
          >
            <div className="relative">
              <img
                className="w-full"
                src={`/assets/${item.img}.webp`}
                alt={item.titleImg}
                title={item.titleImg}
              />
              <div className="absolute inset-0 hover:bg-gradient-to-t from-[#21397b94] to-[#f3f6fd59]"></div>
            </div>
            <div className="shadow-lg p-8">
              <p className="font-bold">{item.subTitle}</p>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardWithDesc;
