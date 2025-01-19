import location from "../ui/icons/location.svg";
import rooms from "../ui/icons/totalRooms.svg";
import contact from "../ui/icons/phone.svg";
import buttonPhone from "../ui/icons/buttonPhone.svg";

const HotelDetails = () => {
  return (
    <div className="px-6 ">
    <div className="flex sm:min-h-[500px] sm:py-14 flex-col gap-5  justify-between mt-5 bg-[#EBEBEB]/[75%] py-6 px-4 rounded-xl w-full ">
      <div className="flex flex-col gap-2">
        <div className="flex align-middle gap-2">
          <img src={location} alt="icon" className="h-5" />
          <span className="font-poppins text-[#3B3B3B]">Location</span>
        </div>
        <h1>
          <div className="font-poppins bg-white p-2 rounded-lg">
            Gangeshwar Nath Mandir Salori, Govindpur, Prayagraj, 211004
          </div>
        </h1>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex align-middle gap-2">
          <img src={rooms} alt="icon" className="h-5" />
          <span className="font-poppins text-[#3B3B3B]">Available Rooms</span>
        </div>
        <h1>
          <div className="font-poppins bg-white p-2 rounded-lg">25 Rooms</div>
        </h1>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex align-middle gap-2">
          <img src={contact} alt="icon" className="h-5" />
          <span className="font-poppins text-[#3B3B3B]">Contact</span>
        </div>
        <h1>
          <div className="font-poppins bg-white p-2 rounded-lg">
            +91-8182876012
          </div>
        </h1>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => (window.location.href = "tel:+918182876012")}
          className="bg-[#E07100] w-[85%] text-white px-4 py-2 rounded-3xl font-poppins"
        >
          <span className="flex justify-center items-center gap-3">
            <img src={buttonPhone} className="h-4" alt="" />
            Call Us
          </span>
        </button>
      </div>
    </div></div>
  );
};

export default HotelDetails;
