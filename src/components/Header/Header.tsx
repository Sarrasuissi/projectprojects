"use client";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface LevelThreeItem {
  itemLevelThree: string;
  url: string;
}

interface LevelTwoItem {
  itemLevelTwo: string;
  url: string;
  listTwo?: LevelThreeItem[];
}

interface LevelOneItem {
  itemLevelOne: string;
  url: string;
  listOne?: LevelTwoItem[];
}

interface HeaderProps {
  data: {
    LevelOne: LevelOneItem[];
    LevelTwo: LevelOneItem[];
  };
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  const [listOne, setListOne] = useState<boolean[]>(
    Array(data.LevelOne.length).fill(false)
  );
  const [icon, setIcon] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY > 0;
      setScrolled(scrollPosition);
      setShowLogo(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to toggle dropdown visibility
  const toggleDropdown = (index: number) => {
    setListOne((prevState) => {
      const newState = Array(data.LevelOne.length).fill(false);
      newState[index] = !prevState[index]; // Toggle the specific index
      return newState;
    });
  };

  return (
    <div className="mt-[-60px] relative w-full">
      <div className="xl:pb-2 ">
        <div
          className={`${
            scrolled ? "bg-darkBlue " : ""
          } transition-colors xl:mb-[-200px] lg:mb-[-100px] flex py-4 shadow-down w-full relative`}
        >
          <div className="px-4 shadow-custom ">
            {showLogo && (
              <Link href="/">
                <img
                  title="Logo"
                  alt="Logo"
                  src="/assets/icons/logo-menu.webp"
                  className="max-w-14 max-h-20 ms-10 py-2"
                />
              </Link>
            )}
          </div>

          <div className="w-defaultwidth pt-5 max-w-mediumwidth ms-auto lg:flex justify-evenly hidden">
            {data.LevelOne.map((item, index) => (
              // <div
              //   key={item.itemLevelOne}
              //   onMouseEnter={() => {
              //     const newState = Array(data.LevelOne.length).fill(false);
              //     newState[index] = true;
              //     setListOne(newState);
              //   }}
              //   className={`text-darkBlue cursor-pointer relative ${
              //     !item.listOne ? "hover:text-lightBlue" : ""
              //   }`}
              // >

              <div
                key={item.itemLevelOne}
                className={`text-darkBlue cursor-pointer relative ${
                  !item.listOne ? "hover:text-lightBlue" : ""
                }`}
              >
                <p
                  className="text-base text-white flex items-center"
                  onClick={() => toggleDropdown(index)}
                >
                  <Link href={item.url}>{item.itemLevelOne}</Link>

                  {item.listOne && item.listOne.length > 0 && (
                    <span className="ml-2 cursor-pointer text-gray-600 hover:text-gray-800">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  )}
                </p>

                {listOne[index] && item.listOne && (
                  <ul
                    onMouseLeave={() => {
                      const newState = [...listOne];
                      newState[index] = false;
                      setListOne(newState);
                    }}
                    className={`absolute min-w-60 pb-5 border-t-4 mt-6 m-auto z-50 border-lightBlue shadow-custom py-2 bg-darkBlue text-white  ${
                      item.itemLevelOne === "Nos Expertises" ? "flex" : ""
                    }`}
                  >
                    {item.listOne.map((e, i) => (
                      <li key={i}>
                        {e.itemLevelTwo && (
                          <div className="">
                            <div
                              className={`w-full hover:bg-gray-50 cursor-pointer  ${
                                !e.listTwo ? "hover:text-lightBlue  " : ""
                              }`}
                            >
                              <p
                                className={`${
                                  e.listTwo ? "font-bold" : ""
                                } text-base py-1`}
                              >
                                <Link href={e.url}>{e.itemLevelTwo}</Link>
                              </p>
                              {e.listTwo && (
                                <ul className="min-w-60">
                                  {e.listTwo.map((subItem, subIndex) => (
                                    <li
                                      key={subIndex}
                                      className="hover:text-lightBlue"
                                    >
                                      <div className="font-light py-1 ">
                                        <Link href={subItem.url}>
                                          {subItem.itemLevelThree}
                                        </Link>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="flex lg:hidden w-full">
            <div className="me-0 ms-auto flex">
              <FontAwesomeIcon
                onClick={() => setIcon((prev) => !prev)}
                className="m-auto text-white font-bold w-28 text-2xl cursor-pointer"
                icon={faBars}
                aria-label="Toggle menu"
              />
            </div>
          </div>

          {icon && (
            <div className="bg-white mt-20 absolute right-10 w-fit block lg:hidden overflow-y-scroll max-h-[500px] px-6 p-4">
              {data.LevelOne.map((item, index) => (
                <div
                  key={item.itemLevelOne}
                  onMouseEnter={() => {
                    const newState = Array(data.LevelOne.length).fill(false);
                    newState[index] = true;
                    setListOne(newState);
                  }}
                  className={`text-darkBlue m-auto cursor-pointer ${
                    !item.listOne ? "hover:text-lightBlue" : ""
                  }`}
                >
                  <p className="font-bold py-2 text-base">
                    <Link href={item.url}>{item.itemLevelOne}</Link>
                  </p>
                  {listOne[index] && item.listOne && (
                    <ul
                      onMouseLeave={() => {
                        const newState = [...listOne];
                        newState[index] = false;
                        setListOne(newState);
                      }}
                      className="min-w-48 border-t-4 border-b-4 px-2 my-1 shadow-custom mt-6 m-auto z-50 border-lightBlue py-2 bg-white text-darkBlue"
                    >
                      {item.listOne.map((e, i) => (
                        <li key={i}>
                          {e.itemLevelTwo && (
                            <div>
                              <div
                                className={`w-full px-2 hover:bg-gray-50 cursor-pointer ${
                                  !e.listTwo ? "hover:text-lightBlue" : ""
                                }`}
                              >
                                <p
                                  className={`${
                                    e.listTwo ? "font-bold" : ""
                                  } text-base py-1`}
                                >
                                  <Link href={e.url}>{e.itemLevelTwo}</Link>
                                </p>
                                {e.listTwo && (
                                  <ul className="min-w-60">
                                    {e.listTwo.map((subItem, subIndex) => (
                                      <li
                                        key={subIndex}
                                        className="hover:text-lightBlue"
                                      >
                                        <div className="font-light  py-1">
                                          <Link href={subItem.url}>
                                            {subItem.itemLevelThree}
                                          </Link>
                                        </div>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 2ème menu */}
      <div className="translate-y-10 xl:pt-2 lg:pt-7 px-20 ">
        <div className="md:ms-auto md:me-0 lg:mb-[-60px] mb-[-50px] md:w-fit lg:flex hidden p-2 relative">
          <div className="flex px-4 py-2 ">
            {data.LevelTwo.map((item) => (
              <div
                key={item.itemLevelOne}
                className="text-white xl:ms-28 ms-10 cursor-pointer font-bold"
              >
                <Link href={item.url} className="hover:text-lightBlue">
                  {item.itemLevelOne}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
