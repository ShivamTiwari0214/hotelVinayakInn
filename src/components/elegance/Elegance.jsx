import React from "react";

const Elegance = () => {
  return (
    <div className="bg-black pb-5 px-8 mt-5 sm:h-[500px] sm:py-10 md:h-[750px]  ">
      <div className="font-poppins p-4 text-[5vw] md:text-[45px]  text-center text-white">
      See the <span className="text-[#E07100]">Elegance</span></div>
      <div>
        <iframe
        className="w-full  rounded-3xl border  h-48 sm:h-80 md:h-[550px]"
          
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
