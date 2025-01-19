import React from "react";

const Elegance = () => {
  return (
    <div className="bg-black pb-5 px-8 mt-5">
      <div className="font-poppins p-4   text-center text-white">
      See the <span className="text-[#E07100]">Elegance</span></div>
      <div>
        <iframe
        className="w-full  rounded-3xl border  h-48"
          
          src="https://www.youtube.com/embed/gVVZb_KLgy4?si=Zhb7kss04p0vwrAx"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Elegance;
