import React from "react";
import Header from "../header/page";
import Footer from "../footer/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

function NosTemoins() {
  return (
    <main class="mx-4 w-screen min-h-lvh h-full flex-col items-center justify-center ">
      <Header />
      <div class="my-10 pb-4 mx-auto flex-col justify-center items-center bg-white min-h-screen md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl rounded-3xl ">
        <div class="py-4 flex-col justify-center items-center text-center">
          <h1>Nos Témoins</h1>
          <FontAwesomeIcon
            icon={faPeopleGroup}
            size="2xl"
            style={{ margin: "auto" }}
          />
        </div>
        <div class="flex-col justify-center items-center m-6 lg:mx-32">
          <div class="flex-col justify-center items-center">
            <p class=" text-xl mb-16">
              Vous aurez le plaisir de les rencontrer le jour J ! Si vous
              souhaitez les contacter avant, voici leurs numéros :
            </p>
            <ul class="list-disc px-8 text-xl">
              <li class="mb-4">
                Caroline :{" "}
                <a
                  href="tel:+33651942333"
                  class="underline text-base text-[#6395B7]"
                >
                  06 51 94 23 33
                </a>
              </li>
              <li class="mb-4">
                Emilie :{" "}
                <a
                  href="tel:+33622126287"
                  class="underline text-base text-[#6395B7]"
                >
                  06 22 12 62 87
                </a>
              </li>
              <li class="mb-4">
                Alexandre :{" "}
                <a
                  href="tel:+33615071235"
                  class="underline text-base text-[#6395B7]"
                >
                  06 15 07 12 35
                </a>
              </li>
              <li class="mb-4">
                Marco :{" "}
                <a
                  href="tel:+330646383231"
                  class="underline text-base text-[#6395B7]"
                >
                  06 46 38 32 31
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default NosTemoins;
