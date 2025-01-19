import React from "react";

const EmbededMap = () => {
  return (
    <iframe
      className="w-full h-60 rounded-lg border border-[#9C9C9C]"
      src="https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d3601.6063035219!2d81.8789012!3d25.4848184!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d25.4852155!2d81.8816049!4m5!1s0x399ab500491d8971%3A0x7c6a379f36ae4285!2sVinayak%20Inn%2C%20325%2C%20Kailash%20Puri%2C%20Govindpur%2C%20Teliarganj%2C%20Prayagraj%2C%20Uttar%20Pradesh%20211004!3m2!1d25.4847181!2d81.8788438!5e0!3m2!1sen!2sin!4v1737291501612!5m2!1sen!2sin"
    
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default EmbededMap;
