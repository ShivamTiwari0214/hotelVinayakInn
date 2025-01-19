import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HotelDetails from "./components/hotelDetail/HotelDetails";
import DiscoverSpace from "./components/discoverSpace/DiscoverSpace";
import Elegance from "./components/elegance/Elegance";
import Map from "./components/map/Map";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-full w-full bg-[#E2E0DF] pt-5">
      <div className="sm:px-10 md:px-27">
      <Navbar />

      </div>
      <div className="sm:px-10 md:px-27"> <HeroSection /></div>
     
      <div className="sm:px-10 md:px-27"> <HotelDetails /></div>
     
      <div className="sm:px-10 md:px-27"><DiscoverSpace /></div>
      
      <div className="sm:px-10 md:px-27"><Elegance /></div>
      
      <div className="sm:px-10 md:px-27"><Map /></div>
      
      <div className="sm:px-10 md:px-27"><Footer /></div>
      
    </div>
  );
}

export default App;
