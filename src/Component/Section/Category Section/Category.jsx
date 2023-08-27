import axios from "axios";
import { useEffect, useState } from "react";
import pakaianpria from "../../../assets/Icon/category-pakaianpria.png";
import pakaianwanita from "../../../assets/Icon/category-pakaianwanita.png";
import pakaiananak from "../../../assets/Icon/category-pakaiananak.png";
import aksesoris from "../../../assets/Icon/category-aksesoris.png";
import "./Categorystyle.css";

const Icon = [
  { img: pakaianpria },
  { img: pakaianwanita },
  { img: pakaiananak },
  { img: aksesoris },
];

const Category = () => {
  const [getCategory, setCategory] = useState([]);

  //   Get Api Product
  const getApiCategory = () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategory(response?.data);
      })
      .catch((error) => {
        // console.log("Gagal", error);
      });
  };

  useEffect(() => {
    getApiCategory();
  }, []);

  return (
    <div className="container">
      <div className="Label">
        <div className="TitleCategory">Browse By Category</div>
      </div>
      <div className="WrapperCategory">
        {getCategory.map((category, index) => (
          <button className="Category" key={index}>
            <img src={Icon[index].img} alt="" />
            <p>{category}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
