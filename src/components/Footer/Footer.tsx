import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-purple">
      <div
        className=""
        style={{
          backgroundImage: ` url('/assets/home/bg-footer.webp')`,
          backgroundSize: "cover",
        }}
      >
        <div className=" mt-28">
          <div className="h-full w-full p-10 pb-6 text-black lg:p-14 lg:pb-6 xl:p-16 xl:pb-6 2xl:p-20 2xl:pb-6 ">
            <div className="items-center gap-6 md:flex md:gap-20 lg:flex-row lg:items-start lg:gap-4">
              <div className="m-auto pb-5 lg:basis-1/4 ">
                <img
                  src="/assets/icons/logo-footer.webp"
                  alt="eneatec logo"
                  width={203}
                  height={89}
                  className=""
                ></img>
                <p className="max-w-[300px] text-black ">suivez - nous</p>
                <div className="flex max-w-[200px] gap-6 py-5">
                  <div className="">
                    <Link href="/" className="h-7/12 w-7/12 ">
                      <img
                        src="/assets/icons/facebook.webp"
                        alt="facebook logo"
                      />
                    </Link>
                  </div>
                  <div className="">
                    <Link href="/" className="h-7/12 w-7/12">
                      <img
                        src="/assets/icons/twitter.webp"
                        alt="twitter logo"
                      />
                    </Link>
                  </div>
                  <div className="">
                    <Link href="/" className="h-7/12 w-7/12">
                      <img
                        src="/assets/icons/linkedin.webp"
                        alt="linkedin logo"
                      />
                    </Link>
                  </div>
                  <div className="">
                    <Link href="/" className="h-7/12 w-7/12">
                      <img
                        src="/assets/icons/instagram.webp"
                        alt="instagram logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div className=" grid w-defaultwidth m-auto grid-cols-12  pt-4  gap-6">
                <div className="col-span-1 mx-auto">
                  <div className="mb-4 max-w-[200px] pt-2 ">
                    <div className="py-1 hover:text-purple pb-4">
                      <Link href="/">Acceuil </Link>
                    </div>
                    <div className="py-1 hover:text-purple pb-4">
                      <Link href="/">A propos de nous</Link>
                    </div>
                    <div className="py-1 hover:text-purple pb-4">
                      <Link href="/">Nos Offres Sectorielles</Link>
                    </div>
                    <div className="py-1 hover:text-purple">
                      <Link href="/">Nos Clients</Link>
                    </div>
                  </div>
                </div>

                <div className=" lg:border-r-4  border-purple h-32"></div>
                <div className=" col-span-2  mx-auto">
                  <div className="mb-4 max-w-[200px] pt-2 text-base">
                    <div className="py-1 hover:text-purple">
                      <Link href="/">Carrières</Link>
                    </div>
                    <div className="py-1 hover:text-purple">
                      <Link href="/">Actualités</Link>
                    </div>
                    <div className="py-1 hover:text-purple">
                      <Link href="/">Contact</Link>
                    </div>
                  </div>
                </div>
                <div className=" lg:border-r-4  border-purple h-32"></div>
                <div className=" ms-auto col-span-3">
                  <span className="text-2xl font-semibold text-red">
                    Nos expertises
                  </span>
                  <span className="text-2xl font-semibold text-purple"></span>
                  <div className="mb-4 max-w-[200px] pt-2 text-base">
                    <div className="py-1 hover:text-purple">
                      <Link href="/">Stratégie & Organisation</Link>
                    </div>
                    <div className="py-1 hover:text-purple">
                      <Link href="/">Finance & Comptabilité</Link>
                    </div>
                    <div className="py-1 hover:text-purple">
                      <Link href="/">Juridique</Link>
                    </div>
                    <div className="py-1 hover:text-purple">
                      <Link href="/">Systèmes de Gestion (SG)</Link>
                    </div>
                    <div className="py-1 hover:text-purple">
                      <Link href="/">
                        Responsabilité Sociétale des Entreprises (RSE)
                      </Link>
                    </div>
                  </div>
                </div>

                <div className=" lg:border-r-4  border-purple h-32"></div>
                <div className=" mx-auto col-span-3">
                  <span className="text-2xl font-semibold text-red">
                    Nos missions
                  </span>
                  <span className="text-2xl font-semibold text-red"></span>
                  <div className="mb-4 max-w-[200px] pt-2 text-base">
                    <div className="hover:text-purple">
                      <Link href="/">Accompagnement Stratégique</Link>
                    </div>
                    <div className="py-1 hover:text-purple">
                      <Link href="/">Optimisation des Ressources</Link>
                    </div>
                    <div className="py-1 hover:text-purple">
                      <Link href="/">Soutien Opérationnel</Link>
                    </div>
                    <div className="py-1 hover:text-purple">
                      <Link href="/">Audit & Conformité</Link>
                    </div>
                    <div className="py-1 hover:text-purple">
                      <Link href="/">Innovation & Transformation Digitale</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="m-auto flex w-widthmenu flex-col bg-purple">
        <div className="h-[0.1px] w-full rounded-lg bg-lightGray opacity-10"></div>
        <div className="flex justify-between gap-5 py-5 text-white lg:flex-row">
          <Link className="hover:text-red" href={"/"}>
            copyright 2024
          </Link>
          <Link className="hover:text-red" href={"/"}>
            Delivery. 2023
          </Link>
          <Link className="hover:text-red" href={"/"}>
            All rights reserved
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;



