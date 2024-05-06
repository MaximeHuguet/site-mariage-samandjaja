import React from "react";
import Header from "../header/page";
import Footer from "../footer/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const Brunch = () => {
  return (
    <main class="mx-4 w-screen min-h-lvh h-full flex-col items-center justify-center ">
      <Header />
      <div class="my-10 pb-4 mx-auto flex-col justify-center items-center bg-white  md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl rounded-3xl ">
        <div class="py-4 flex-col justify-center items-center text-center">
          <h1>Brunch</h1>
          <div class="text-xl uppercase italic">9 juin 2024</div>
        </div>
        <div class="flex flex-wrap justify-evenly items-center m-7">
          <div class="max-w-lg">
            <img
              class="rounded-md"
              alt="brunch"
              src="/images/brunch-2.jpg"
            ></img>
          </div>
          <div class="flex-col justify-center items-center mt-5 sm:text-xl text-center">
            <div class="flex-col justify-center items-center">
              <div>RDV à partir de 10h </div>
              <div class=" text-base sm:text-xl uppercase">
                château de Bourguignon
              </div>
            </div>

            <div class="m-5 border-t border-dot border-[#6395b7] mx-20"></div>
            <div class="text-base sm:text-xl">Brunch </div>

            <div class="text-base sm:text-xl">Pétanque et Rosé </div>
          </div>
        </div>
        <div class="my-7 flex-col justify-center items-center">
        <h2 class="flex mx-auto justify-center items-center mb-5">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              size="xl"
              style={{ marginRight: "0.5rem", color: "#6395B7" }}
            />
            <div>Bon à savoir </div>
          </h2>
          <div class="flex-col  mt-7 mx-10">
            <div class=" my-4">Fin du brunch à 16h</div>
            <div class=" my-4">
              La finale de Roland-Garros ne sera pas retransmise sur place
            </div>
            <div class=" my-4">
              Pensez dès à présent à vos procurations, car dimanche 9 juin ce
              sont les élections européennes!
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Brunch;
