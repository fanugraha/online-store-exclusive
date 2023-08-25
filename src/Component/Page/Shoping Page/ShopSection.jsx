import React, { useEffect, useState } from "react";
import axios from "axios";
import CardProduct from "../../Atom/Card/Product Card/ProductCard";
import "./ShopSectionstyle.css";
import CountdownTimer from "./CountDown";

const ShopSection = () => {
  // State untuk menyimpan data product
  const [getProduct, setProduct] = useState([]);

  // Get Api Product
  const getApiProduct = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log("Berhasil", res);
        setProduct(res?.data);
      })
      .catch((err) => {
        console.log("Gagal", err);
      });
  };

  // Mounting
  useEffect(() => {
    getApiProduct();
  }, []);

  // Mengambil 4 elemen pertama dari array getProduct
  const limitedProducts = getProduct.slice(0, 4);

  return (
    <div className="container ShopingSection">
      <div className="Label">
        <div className="Title">Flash Sale</div>
        <CountdownTimer />
      </div>
      <div className="WrapperProduct">
        <div className="ProductList">
          {/* Looping Product */}
          {limitedProducts.map((item) => (
            // Menangmpil componet Card, diberikan properti item dengan nilai item untuk di lempat ke child
            <CardProduct key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopSection;
