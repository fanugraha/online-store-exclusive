import "./HeroSectionstyle.css";
import NavigationBar from "../../Layout/Navbar/NavigationBar";

const bestList = ["Free Register", "Great Service", "Easy Payment"];

const HeroSection = () => {
  return (
    <div className="HeroContent">
      <NavigationBar />
      <div className="container contentContentWrapper">
        <div className="LeftContent">
          <ul className="kelebihan">
            {bestList.map((li, index) => (
              <li key={index}>
                <img src="src/assets/Image/checklist.png" alt="" />
                <p>{li}</p>
              </li>
            ))}
          </ul>
          <div className="heroHeadline">
            <h1 className="titelHero">
              Getting the best and latest style has never
            </h1>
            <h1 className="titleHeroBold"> been easier!</h1>
            <p className="paragrafHero">
              <span>FashionForAll </span>is a platform that helps to make
              fashion accessible to all. It brings fashion to your doorstep!
            </p>
          </div>
          <button className="heroBtn">Shop collections</button>
        </div>
        <div className="RightContent">
          <img src="src\assets\Image\Hero-picture.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
