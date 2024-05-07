import Link from "next/link";
import Header from "./header/page";


export default function Home() {
  return (
    <main class="w-screen  min-h-lvh  flex-col items-center justify-center ">
      <Header />
      <div class="my-6 min-h-screen m-auto bg-cover bg-center bg-no-repeat bg-[url('/images/photo-sf.jpg')] flex items-end justify-center text-center md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl rounded-3xl">
        <div class="bg-[#FFFBFA] w-fit h-min text-5xl p-7 mb-14 rounded-md text-[#6395b7]">08-06-24 </div>
      </div>
    </main>
  );
}
