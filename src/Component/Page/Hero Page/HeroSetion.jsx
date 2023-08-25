import "./HeroSectionstyle.css";

const navList = [
  "Woman’s Fashion",
  "Men’s Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby’s & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

const HeroSection = () => {
  return (
    <div className="container containerhero">
      <div className="LeftContent">
        <ul>
          {navList.map((li, index) => (
            <li key={index}>
              <a href="#">{li}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="RightContent">
        <img src="src\assets\Image\Frame 560.png" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
