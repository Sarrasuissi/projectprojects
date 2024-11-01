import React from "react";

function CardBgImg(props: {
  data: {
    title?: string;
    listItem?: { subTitle?: string; subSubTitle?: string; desc?: string }[];
  };
}) {
  return (
    <div className="lg:w-full w-defaultwidth m-auto text-white">
      <div
        className="mb-20 py-44"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(10, 28, 74, 0.9), rgba(12, 32, 81, 0.5), rgba(19, 26, 46, 0.4)), url('/assets/home/engagement.webp')`,
          backgroundSize: "cover",
        }}
      >
        <div className="w-defaultwidth m-auto max-w-mwidth1">
          <h2 className=" text-white text-3xl pb-10">{props.data.title}</h2>
          <div>
            {props.data.listItem?.map((item, index) => (
              <div key={index}>
                <h3 className="pb-6 ">{item.subTitle}</h3>
                <ul>
                  {item.subSubTitle && (
                    <li className="pb-4 pl-2 list-disc font-bold">
                      {item.subSubTitle}
                    </li>
                  )}
                </ul>
                <p className="max-w-[800px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBgImg;
