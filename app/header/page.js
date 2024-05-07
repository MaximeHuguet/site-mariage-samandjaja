"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMugHot,
  faGift,
  faEnvelope,
  faCalendarDays,
  faBars,
  faLandmarkFlag,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full px-8 py-4 mx-auto bg-[#FFFBFA] shadow-xl md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl rounded-3xl">
      <div className="flex items-center justify-between">
        <Link className="font-bold text-3xl" href="/">
          <img
            src="images/logo-site.png"
            alt="Sam et Jaja"
            class="w-40 min-w-36"
          />
        </Link>
        <div className="hidden lg:flex xl:text-base lg:text-xs items-center text-center ">
          <Link className="m-2 flex items-center" href="/mairie">
            <FontAwesomeIcon
              icon={faLandmarkFlag}
              width="30"
              style={{ marginRight: "0.1rem", color: "#6395B7" }}
            />
            <span>Mairie</span>
          </Link>
          <Link className="m-2 flex items-center" href="/programme">
            <FontAwesomeIcon
              icon={faCalendarDays}
              width="30"
              style={{ marginRight: "0.1rem", color: "#6395B7" }}
            />
            <span>Au château</span>
          </Link>
          <Link className="m-2 flex items-center" href="/brunch">
            <FontAwesomeIcon
              icon={faMugHot}
              width="30"
              style={{ marginRight: "0.1rem", color: "#6395B7" }}
            />
            <span>Brunch</span>
          </Link>

          <Link className="m-2 flex items-center" href="/liste">
            <FontAwesomeIcon
              icon={faGift}
              width="30"
              style={{ marginRight: "0.1rem", color: "#6395B7" }}
            />
            <span>Liste de Mariage</span>
          </Link>
          <Link className="m-2 flex items-center" href="/nos-temoins">
            <FontAwesomeIcon
              icon={faPeopleGroup}
              width="30"
              style={{ marginRight: "0.1rem", color: "#6395B7" }}
            />
            <span>Nos Témoins</span>
          </Link>
          <a
            className="m-2 flex items-center"
            href="mailto:samjaja75014@gmail.com"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              width="30"
              style={{ marginRight: "0.1rem", color: "#6395B7" }}
            />
            <span>Contactez-nous</span>
          </a>
        </div>
        <div className="lg:hidden flex">
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            style={{
              marginLeft: "0.5rem",
              color: "#6395B7",
              cursor: "pointer",
            }}
            onClick={toggleMenu}
          />
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="flex flex-col uppercase text-lg">
            <Link className="p-5 m-2" href="/mairie">
              Mairie
            </Link>
            <Link className="p-5 m-2" href="/programme">
              Au château
            </Link>
            <Link className="p-5 m-2" href="/brunch">
              Brunch
            </Link>
            <Link className="p-5 m-2" href="/liste">
              Liste de mariage
            </Link>
            <Link className="p-5 m-2" href="/nos-temoins">
              Nos Témoins
            </Link>
            <a className="p-5 m-2" href="mailto:samjaja75014@gmail.com">
              Contactez-nous
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
