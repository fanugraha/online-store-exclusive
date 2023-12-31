import React, { useEffect, useState } from "react";
import axios from "axios";
import FlashsaleCard from "../../Atom/Card/Flash Sale Card/FlashsaleCard";
import "./FlashSaleSectionstyle.css";
import CountdownTimer from "./CountDown";

const FlashSaleSectiion = () => {
  // State untuk menyimpan data product
  const [getProduct, setProduct] = useState([]);

  // Get Api Product
  const getApiProduct = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProduct(res?.data);
      })
      .catch((err) => {
        // console.log("Gagal", err);
      });
  };

  // Mounting
  useEffect(() => {
    getApiProduct();
  }, []);

  // Mengambil 4 elemen pertama dari array getProduct
  const limitedProducts = getProduct.slice(0, 8);

  return (
    <div className="container ShopingSection">
      <div className="Label">
        <div className="TitleFlashSale">Flash Sale</div>
        <div className="TextTimer">Berakhir dalam</div>
        <CountdownTimer />
      </div>
      <div className="WrapperProduct">
        <div className="ProductList">
          {/* Looping Product */}
          {limitedProducts.map((item) => (
            // Menangmpil componet Card, diberikan properti item dengan nilai item untuk di lempat ke child
            <FlashsaleCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSaleSectiion;
