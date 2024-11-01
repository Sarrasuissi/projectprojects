import Link from 'next/link';
import React from 'react'

function SliderSimple(props: {
  data: {
    img?: string;
    titleImg?:string;
    title?: string;
    desc?: string;
  };
}) {
  return (
    <div
      className="relative flex h-screen bg-cover ps-4 lg:ps-32"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 28, 74, 0.63), rgba(10, 28, 74, 0.63)), url(/assets/slider/${props.data.img}.webp)`,
      }}
    >
      <div className="grid h-full text-white 2xl:basis-1/2">
        <div className="mb-0 mt-auto">
          <Link href={"/"}>
            <img
              src="/assets/icons/logo-menu.webp"
              alt="logo"
              className="pb-16"
            />
          </Link>
          <div className="text-xl font-medium md:text-4xl">
            {props.data.title}
          </div>
          <p className="py-10 pb-72  ">{props.data.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default SliderSimple
