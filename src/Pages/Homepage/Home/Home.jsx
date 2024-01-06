import { Helmet } from "react-helmet-async";
import Footer from "../../Shared/Footer";
import About from "../About";
import Banner from "../Banner";
import Package from "../Package";

const Home = () => {
    return (
        <div className="">
           <Helmet>
                <title>AMS | Home</title>
            </Helmet>
            <Banner></Banner>
            <About></About>
            <Package></Package>
      
         
        </div>
    );
};

export default Home;