 
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import '../Homepage/CSS/Banner.css'; // Import the CSS file
import a from '../../assets/leoptop.jpg';
import b from '../../assets/ac.webp';

const Banner = () => {
  return (
    <div className="">
        <Carousel showThumbs={true} className="carousel-container">
        <div className="relative">
            <img src={a} alt="Image A" className="carousel-image" />
            <button className="absolute bottom-10 lg:left-96  right-36 btn btn-outline">
            Join as HR/Admin
            </button>
        </div>
        <div className="carousel-container">
            <img src={b} alt="Image B" className="carousel-image" />
            <button className="absolute bottom-10 lg:left-96  right-36 btn btn-outline">
            Join as Employee
            </button>
        </div>
        </Carousel>
    </div>
  );
};

export default Banner;
