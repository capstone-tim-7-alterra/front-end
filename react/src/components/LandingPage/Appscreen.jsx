import React from "react";
import hp1 from "../../assets/hp1.png";
import hp2 from "../../assets/hp2.png";
import hp3 from "../../assets/hp3.png";
import hp4 from "../../assets/hp4.png";
import hp5 from "../../assets/hp5.png";
import awan1 from "../../assets/awan1.png";
export default function Appscreen() {
  return (
    <section className="container flex justify-between items-start mx-auto mt-44 text-left">
      <div>
        <h1 className="text-4xl font-bold text-primary-0 text-left">
          Apps Screens -{" "}
          <span className="text-4xl font-bold text-base-150 text-left">
            &nbsp;Kreasi Nusantara
          </span>
        </h1>
        <p className="mt-10 mb-5 font-light text-base-160 text-2xl text-left">
          Experience the Richness of Indonesian<br></br> Culture at Your
          Fingertips.
        </p>
      </div>
      <button className="bg-base-150 hover:bg-base-150 text-white font-normal px-4 h-[40px] !pt-0 rounded-xl">
        Download Now →
      </button>
      <div className="relative w-full bg-base-170">
        <img src={hp1} className="absolute w-[30%] translate-x-[-90%] translate-y-[80%]"/>
        <img src={hp2} className="absolute w-[30%] translate-x-[-49%] translate-y-[30%] -rotate-12"/>
        </div>
    </section>
  );
}
