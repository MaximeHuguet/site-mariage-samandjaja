import React from "react";
import Header from "../header/page";
import Footer from "../footer/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faHeart } from "@fortawesome/free-solid-svg-icons";

const Liste = () => {
  return (
    <main class="mx-4 w-screen min-h-lvh h-full flex-col items-center justify-center ">
      <Header />
      <div class="my-10 pb-4 mx-auto flex-col justify-center items-center bg-white  md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl rounded-3xl ">
        <div class="py-4 flex-col justify-center items-center text-center">
          <h1>Liste de mariage</h1>
        </div>
        <div class="flex-col justify-center items-center m-6 lg:mx-32">
          <div class="flex-col justify-center items-center">
            <p class=" sm:text-xl">
              Vous vous en doutez : nous n'avons pas prévu la traditionnelle
              liste de mariage.
            </p>
            <p class="sm:text-xl">
              17 ans de vie commune, 2 enfants : nous sommes déjà bien équipés!
            </p>
            <p class="sm:text-xl mt-10">
              Alors pour ceux qui le souhaitent : nous avons créé{" "}
              <a
                href="https://tribee.fr/cagnotte/7RPZ6A6D4189WATNKY166YGM5Z/participation"
                class="text-[#6395b7] text-decoration-solid underline hover:text-[#3b6c8d]"
              >
                une cagnotte en ligne
              </a>{" "}
              pour un futur voyage de noces en famille !
            </p>
            <p class="sm:text-xl">
              5% de vos participations seront reversés à une association qui
              nous tient particulièrement à cœur : l'association "Ruban Rose"
              qui soutient la recherche sur le cancer du sein et qui réalise
              des actions de sensibilisation.
            </p>
          </div>
          <div class="flex justify-center">
            <a href="https://tribee.fr/cagnotte/7RPZ6A6D4189WATNKY166YGM5Z/participation">
              <button class="m-12 bg-[#6395b7] hover:bg-[#3b6c8d] text-white font-bold py-2 px-4 rounded">
                <span class="mr-2">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </span>
                Je participe en ligne
              </button>
            </a>
          </div>
          <p class="sm:text-xl">
            Pour ceux qui sont moins à l'aise avec les sites en ligne, une urne
            sera installée dans la salle de réception le jour du mariage.
          </p>
          <div class="sm:text-xl mt-10  text-center">
            <div class="sm:text-xl ">Un grand merci</div>
            <FontAwesomeIcon icon={faHeart} size="lg" />
            <div class="sm:text-xl">Louise, Joseph, Samantha & François</div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Liste;
