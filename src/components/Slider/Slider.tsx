"use client";
import Link from "next/link";
import { useState } from "react";

const images = ["slider3", "slider2", "slider1"];

function Slider() {
  const [image, setImage] = useState(0);
  return (
    <div
      className="relative flex h-screen bg-cover ps-4 lg:ps-32"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 28, 74, 0.63), rgba(10, 28, 74, 0.63)), url(/assets/slider/${images[image]}.webp)`,
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
            Finky : Entreprise de conseil en gestion et RH en Tunisie
          </div>
          <p className="py-10 pb-72  ">
            Finky est une entreprise de conseil en gestion et ressources
            humaines (RH) innovante en Tunisie. Située à Radès Meliane, dans le
            gouvernorat de Ben Arous, nous mettons notre expertise au service de
            nos clients à travers toute la Tunisie. En tant qu&lsquo;entreprise de
            gestion et conseil, notre objectif est d&lsquo;accompagner les entreprises
            dans leur développement stratégique et humain.
          </p>
        </div>
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center ps-8">
        <button
          onClick={() => {
            setImage(
              (prevIndex) => (prevIndex - 1 + images.length) % images.length
            );
          }}
        >
          <img
            className={`w-12 min-w-8 ${image === 0 ? "opacity-30" : ""}`}
            src="/assets/icons/left.webp"
            alt="Précédent"
          />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pe-8">
        <button
          onClick={() => {
            setImage((prevIndex) => (prevIndex + 1) % images.length);
          }}
        >
          <img
            className={`w-12 min-w-8 ${
              image === images.length - 1 ? "opacity-30" : ""
            }`}
            src="/assets/icons/right.webp"
            alt="Suivant"
          />
        </button>
      </div>
    </div>
  );
}
export default Slider;
