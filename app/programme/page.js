import React from "react";
import Header from "../header/page";
import Footer from "../footer/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareParking,
  faDiamondTurnRight,
  faTriangleExclamation,
  faLandmarkFlag,
  faCreditCard,
  faLocationDot,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

const Programme = () => {
  return (
    <main class="mx-4 w-screen min-h-lvh h-full flex-col items-center justify-center bg-white/95">
      <Header />
      <div class="m-2 flex-col justify-center items-center text-center">
        <div class="py-4 flex-col justify-center items-center text-center">
          <h1>Au Château Bourguignon</h1>
          <div class="text-xl uppercase"> 8 et 9 juin 2024</div>
        </div>
        <div class="flex flex-wrap justify-evenly items-center m-7">
          <div class="max-w-lg">
            <img
              class="rounded-md"
              alt="château Bourguignon"
              src="/images/chateau.png"
            ></img>
          </div>
          <p class="sm:text-xl mt-7">
            Rendez-vous dès 16h au Château de Bourguignon !
          </p>
        </div>
        <div class="mb-10 flex-col justify-center items-center">
          <h2 class="flex lg:justify-center items-center mb-5 mx-7">
            <FontAwesomeIcon
              icon={faCalendarDays}
              size="xl"
              style={{ marginRight: "0.5rem", color: "#6395B7" }}
            />
            <div>Programme du 8 juin </div>
          </h2>
          <div class="flex-col justify-center items-center">
            <div class="flex justify-center items-center flex-1 my-4">
              <div class="mr-2 text-right">16h</div>
              <div class="text-left">Rafraîchissements</div>
            </div>
            <div class="flex justify-center items-center flex-1 my-4 ">
              <div class="mr-2 text-right">17h</div>
              <div class="text-left">Cérémonie laïque</div>
            </div>
            <div class="flex justify-center items-center flex-1 my-4">
              <div class="mr-2 text-right">19h</div>
              <div class="text-left">Cocktail & photos</div>
            </div>
            <div class="flex justify-center items-center flex-1 my-4">
              <div class="mr-2 text-right">20h</div>
              <div class="text-left">Dîner</div>
            </div>
            <div class="flex justify-center items-center flex-1 my-4">
              <div class="mr-2 text-right">23h</div>
              <div class="text-left">Piste de danse</div>
            </div>
          </div>
        </div>
        <div class="mb-10 flex-col justify-center items-center">
          <h2 class="flex lg:justify-center items-center mb-5 mx-7">
            <FontAwesomeIcon
              icon={faDiamondTurnRight}
              size="xl"
              style={{ marginRight: "0.5rem", color: "#6395B7" }}
            />
            <div>Se rendre au château ? </div>
          </h2>
          <div class="flex justify-evenly items-center flex-wrap m-2 ">
            
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2641.9231056146164!2d3.016526476741369!3d48.53470532343041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ef4f73e74c2799%3A0x597c05e7f262b26f!2sChateau%20de%20Bourguignon!5e0!3m2!1sfr!2sfr!4v1714476598602!5m2!1sfr!2sfr"
                width="auto"
                height="320"
              ></iframe>
    
            <div class="flex-col justify-center items-center m-4 ">
              <div class="flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  size="lg"
                />
                                  <a
                    href="https://maps.app.goo.gl/hePWfj2MQLpW8fxx8"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="m-3 underline"
                  >
                  Château de Bourguignon | 77370 Fontains
                  </a>
              </div>

              <div class="text-xs">Parking gratuit sur place</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Programme;
