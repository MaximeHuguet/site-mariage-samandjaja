import Link from "next/link";
import Header from "./header/page";


export default function Home() {
  return (
    <main class="w-screen  min-h-lvh  flex-col items-center justify-center ">
      <Header />
      <div class="min-h-lvh bg-cover bg-center bg-no-repeat bg-[url('/images/photo-sf.jpg')] flex items-end justify-center text-center">
        <div class="bg-white/90 w-fit h-min text-5xl p-7 mb-14 rounded-md">08-06-24 </div>
      </div>
    </main>
  );
}
