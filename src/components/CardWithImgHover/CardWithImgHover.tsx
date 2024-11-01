import React from 'react'
import "./CardWithImgHover.scss";
function CardWithImgHover(props: {
    data:{
        img?: string;
        title?: string;
        desc?:string;
    }[]
}) {
  return (
    <div>
      <div className="">
        {props.data.map((item, index) => (
          <div className="" key={index}>
            <div className="" style={{
                backgroundImage:`url(/assets/images/${item.img}.webp)`
            }}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardWithImgHover
