import axios from "axios";
import { useEffect, useState } from "react";
import elektronik from "../../../assets/Icon/category-elektronik.png";
import jawerely from "../../../assets/Icon/category-jawerely.png";
import men from "../../../assets/Icon/category-men.png";
import woman from "../../../assets/Icon/category-woman.png";
import "./Categorystyle.css";

const Icon = [
  { img: elektronik },
  { img: jawerely },
  { img: men },
  { img: woman },
];

const Category = () => {
  const [getCategory, setCategory] = useState([]);

  //   Get Api Product
  const getApiCategory = () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategory(response?.data);
        console.log("Berhasil", response);
      })
      .catch((error) => {
        console.log("Gagal", error);
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
