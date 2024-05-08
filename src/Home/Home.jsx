import Footer from "../Shared/Footer/Footer";
import About from "./About";
import Carosel from "./Carosel";
import ServiceCard from "./ServiceCard";

const Home = () => {
    return (
        <div>
            <Carosel></Carosel>
            <h1 className="text-4xl font-bold text-center my-5">About Us</h1>
            <About></About>
          <ServiceCard></ServiceCard>

          <Footer></Footer>
        </div>
    );
};

export default Home;