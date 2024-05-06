import React from "react";
import Header from "../header/page";
import Footer from "../footer/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareParking,
  faDiamondTurnRight,
  faTriangleExclamation,
  faCameraRetro,
  faRing,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Mairie = () => {
  return (
    <main class="mx-4 w-screen min-h-lvh h-full flex-col items-center justify-center ">
      <Header />
      <div class="my-10 pb-4 mx-auto flex-col justify-center items-center bg-white  md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl rounded-3xl ">
        <div class="py-4 flex-col justify-center items-center text-center ">
          <h1>Rendez-vous à la mairie</h1>
          <div class="text-xl uppercase italic">8 juin 2024</div>
        </div>
        <div class="flex flex-wrap justify-evenly items-center m-7">
          <div class="max-w-lg">
            <img
              class="rounded-md"
              alt="mairie"
              src="/images/mairie-clamart.png"
            ></img>
          </div>
          <div class="flex-col ">
            <p class="max-w-lg sm:text-xl mt-7">
              Pour ceux qui le souhaitent, nous vous donnons rendez-vous dès 11h
              à la mairie de Clamart.
            </p>
            <p class="max-w-lg sm:text-xl mt-7">
              La cérémonie civile débutera à 11h30.
            </p>
            <p class="max-w-lg sm:text-xl mt-7">
              Restez avec nous à la sortie de la mairie pour quelques photos de
              groupe !
            </p>
            <p class="max-w-lg sm:text-xl mt-7">
              Ensuite, c'est quartier libre jusqu'à 16h!
            </p>
          </div>
        </div>
        <div class="mb-10 flex-col justify-center items-center">
          <h2 class="flex mx-auto justify-center items-center mb-5">
            <FontAwesomeIcon
              icon={faDiamondTurnRight}
              size="xl"
              style={{ marginRight: "0.5rem", color: "#6395B7" }}
            />
            <div>Où se retrouver ? </div>
          </h2>
          <div class="flex justify-center items-center ">
            <div class="flex-col justify-center items-center ">
              <div class=" mb-4">RDV à 11h sur le parvis de la mairie</div>
              <div class="flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  size="lg"
                  style={{ marginRight: "0.5rem" }}
                />
                <a
                  href="https://maps.app.goo.gl/DPeVXwJdNN3zt4mV8"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-xs underline"
                >
                  Place Maurice Gunsbourg | 92140 Clamart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-10 flex-col justify-center items-center">
          <h2 class="flex mx-auto justify-center items-center mb-5">
            <FontAwesomeIcon
              icon={faSquareParking}
              size="xl"
              style={{ marginRight: "0.5rem", color: "#6395B7" }}
            />
            <div>Où vous garer ? </div>
          </h2>
          <div class="flex flex-wrap justify-evenly items-center">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1MO75xVnXIUk7gmsuZzmhI8E5ojoHz8g&ehbc=2E312F&noprof=1"
              width="auto"
              height="320"
            ></iframe>
            <div class="flex-col m-5">
              <div class="m-4 flex ">
                <FontAwesomeIcon
                  icon={faSquareParking}
                  size="lg"
                  style={{ marginRight: "0.5rem", color: "#FBC02D" }}
                />
                <div class="flex-col w-full ">
                  <div>Parking Desprez</div>
                  <a
                    href="https://maps.app.goo.gl/bCaVKFN7iA4PHdbd8"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mt-2 text-xs underline"
                  >
                    27 Rue Paul Vaillant Couturier | 92140 Clamart
                  </a>
                </div>
              </div>
              <div class="m-4 flex justify-start items-start">
                <FontAwesomeIcon
                  icon={faSquareParking}
                  size="lg"
                  style={{ marginRight: "0.5rem", color: "#9C27B0" }}
                />
                <div class=" flex-col w-full">
                  <div>Parking Municipal Pierre et Marie CURIE</div>
                  <a
                    href="https://maps.app.goo.gl/BoL7qRGwbuFPtFDaA"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mt-2 text-xs underline"
                  >
                    5 Rue Pierre et Marie Curie | 92140 Clamart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Mairie;
