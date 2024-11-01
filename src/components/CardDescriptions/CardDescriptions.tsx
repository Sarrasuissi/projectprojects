import React from "react";

function CardDescriptions(props: {
  data: {
    title?: string;
    listItems?: { subTitle?: string; desc?: string }[];
  };
}) {
  return (
    <div className="shadow-2xl p-14  ">
      <h3 className="pb-5 ">{props.data.title}</h3>
      {props.data.listItems?.map((item, index) => (
        <div className="pl-6 py-3" key={index}>
          <ul>
            <li className="list-disc font-bold text-purple pl-2">
              <p className="pb-2">{item.subTitle}</p>
            </li>
          </ul>

          <p className="">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default CardDescriptions;
