import React from "react";

const Footer = () => {
  return (
    <div className="px-6 bg-black text-white text-center py-6 flex flex-col items-center justify-center mt-4 ">
      <h3 className="font-poppins font-bold text-2xl">Vinayak Inn</h3>

      <div className="flex justify-between w-full gap-2 mt-4 flex-col">
        <span className="font-poppins">Home</span>
        <span className="font-poppins">Explore</span>
     <a target="#blank" href='https://www.google.com/maps/place/Vinayak+Inn/@25.4848184,81.8789012,17z/data=!4m14!1m7!3m6!1s0x399ab500491d8971:0x7c6a379f36ae4285!2sVinayak+Inn!8m2!3d25.4847201!4d81.8788426!16s%2Fg%2F11wxgqt4k1!3m5!1s0x399ab500491d8971:0x7c6a379f36ae4285!8m2!3d25.4847201!4d81.8788426!16s%2Fg%2F11wxgqt4k1?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D'>   <span className="font-poppins">Get Location</span> </a>
      </div>

      <div className="mt-6">
        <span className="font-poppins" >Ankit Kumar Singh  |</span> <span onClick={() => (window.location.href = "tel:+918182876012")}> +91-8182876012   </span>
        <span className="font-poppins">ankit8182876012@gmail.com</span>
      </div>
    </div>
  );
};

export default Footer;
