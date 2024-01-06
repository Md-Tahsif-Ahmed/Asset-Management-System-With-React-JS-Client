import { Helmet } from "react-helmet-async";
import Footer from "../../Shared/Footer";
import About from "../About";
import Banner from "../Banner";
import Package from "../Package";

const Home = () => {
    return (
        <div className="">
          <Helmet>
            <Banner></Banner>
            <About></About>
            <Package></Package>
          </Helmet>
         
        </div>
    );
};

export default Home;