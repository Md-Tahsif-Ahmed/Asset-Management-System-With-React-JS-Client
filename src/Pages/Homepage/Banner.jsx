 
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import '../Homepage/CSS/Banner.css'; // Import the CSS file
import a from '../../assets/leoptop.jpg';
import b from '../../assets/ac.webp';

const Banner = () => {
  return (
    <div className="carousel w-full mb-10">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={a} className="w-full h-[400px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle bg-red-500 border-0">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-red-500 border-0">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src= {b} className="w-full h-[400px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle bg-red-500 border-0">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-red-500 border-0">❯</a>
    </div>
  </div> 
   
</div>
  );
};

export default Banner;
