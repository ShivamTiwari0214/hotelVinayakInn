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
      <Navbar />
      <HeroSection />
      <HotelDetails />
      <DiscoverSpace />
      <Elegance />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
