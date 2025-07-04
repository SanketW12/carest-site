import React from "react";

function Founder() {
  return (
    <div className="flex flex-col min-h-[70vh] px-12 py-12  ">
      <div className="flex justify-center">
        {" "}
        <span className="block text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500  font-bold">
          Founder
        </span>
      </div>
      <div className="grid grid-cols-2 items-center h-full grow gap-20 ">
        <div className="mt-16 relative ">
          <span className=" block grow ml-[210px] h-48 w-[260px] rounded-lg relative top-0   col-span-1  text-5xl text-transparent  bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500  font-bold"></span>{" "}
          <img
            src="/anurag.png"
            alt="Carest Logo"
            className="h-80 -top-32 left-52 rounded-lg absolute w-auto"
          />
        </div>

        <div className="col-span-1 text-xl ">
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
