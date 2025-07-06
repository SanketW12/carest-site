import React from "react";

function Founder() {
  return (
    <div className="flex flex-col min-h-[70vh] md:px-12 md:py-12 p-4  ">
      <div className="flex justify-center">
        {" "}
        <span className="block text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500  font-bold">
          Founder
        </span>
      </div>
      <div className="grid grid-cols-2 mt-32 md:mt-0 items-center h-full grow gap-20 ">
        <div className="md:col-span-1 md:mt-0 sm:mt-40 sm:col-span-2 mt-16 relative ">
          <span className=" block grow ml-[70px] md:ml-[210px] h-20 md:h-48 w-[260px] rounded-lg relative top-0   col-span-1  text-5xl text-transparent  bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500  font-bold"></span>{" "}
          <img
            src="/anurag.png"
            alt="Carest Logo"
            className="md:h-80 md:-top-32 -top-28 left-32 md:left-52 rounded-lg absolute "
          />
        </div>

        <div className="md:col-span-1 col-span-2 text-xl ">
          <span className="font-semibold pr-2"> Anurag Warhekar</span>
          is the visionary founder of Carest, a healthcare startup born from a
          deep personal understanding of the needs of elderly patients and
          families living apart. Coming from a pharmacy background and years of
          on-ground experience, Anurag recognized a gap in the continuity of
          care for chronic patients — especially those suffering from conditions
          like blood pressure, diabetes, and thyroid issues. Driven by empathy
          and a mission to bring dignity to healthcare access, Anurag
          established Carest to deliver monthly medicines, provide home-based
          blood tests, ensure free hospital transport, arrange local doctor
          appointments, and offer a rapid response and nursing support — all
          under one roof.
        </div>
      </div>
    </div>
  );
}

export default Founder;
