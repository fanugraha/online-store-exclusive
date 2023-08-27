import Carousel from "react-bootstrap/Carousel";
import "./BannerSectionstyle.css";

const BannerSection = () => {
  return (
    <div className="container BannerPromo">
      <Carousel>
        <Carousel.Item>
          <img src="src\assets\Image\promo1.png" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="src\assets\Image\promo2.png" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="src\assets\Image\promo1.png" alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BannerSection;
