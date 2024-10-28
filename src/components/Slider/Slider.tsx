"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Slider.scss";
function Slider(props: {
  data: {
    img: string;
    titleImg: string;
    title?: string;
    desc?: string[];
  }[];
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 9000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === props.data.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? props.data.length - 1 : prevSlide - 1
    );
  };

  return (
    <div>
      <div
        className="flex h-[90vh] w-full bg-cover"
        style={{
          backgroundImage: `url('/assets/${props.data[currentSlide].img}.webp'), linear-gradient(rgba(10, 28, 74, 0.63), rgba(10, 28, 74, 0.63))`,
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="flex w-full place-items-center">
          {props.data.length > 1 && (
            <div
              onClick={prevSlide}
              className="icon-container me-auto w-full basis-3/12 translate-x-[-30%] cursor-pointer text-3xl font-bold text-white transition-all group-hover:translate-x-0"
            >
              <FontAwesomeIcon
                className="box-content max-w-8 ps-8"
                icon={faCircleChevronLeft}
              />
            </div>
          )}
          <div className="m-auto mt-auto w-defaultwidth text-white pb-20">
            <p className="max-w-mediumwidth text-[50px] leading-snug font-serif">
              {props.data[currentSlide].title}
            </p>
            {props.data[currentSlide].desc && (
              <p className="pt-8 max-w-mediumwidth text-base font-roboto">
                {props.data[currentSlide].desc.map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </p>
            )}
            <Link href="/rechercher">Rechercher</Link>
          </div>
          {props.data.length > 1 && (
            <div
              onClick={nextSlide}
              className="icon-container flex basis-3/12 translate-x-[30%] cursor-pointer text-3xl font-bold text-white transition-all group-hover:translate-x-0"
            >
              <div className="ms-auto">
                <FontAwesomeIcon
                  className="max-w-8 pe-8"
                  icon={faCircleChevronRight}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Slider;
