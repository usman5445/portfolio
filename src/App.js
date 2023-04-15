import "@splidejs/react-splide/css";
import "./index.css";
import Dock from "./Components/Dock";
import PagesCarousel from "./Components/PagesCarousel";
import BgBlobs from "./Components/BgBlobs";
function App() {
  return (
    <div className="app  relative  flex h-screen w-screen items-center justify-center font-Poppins">
      <PagesCarousel />
      <BgBlobs />
    </div>
  );
}

export default App;
