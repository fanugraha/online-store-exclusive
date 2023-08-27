import ProductCard from "../../Atom/Card/Prodcut Card/ProductCard";
import "./Productstyle.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductsSection = () => {
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
  const products = getProduct.slice(8, 20);

  return (
    <div className="container product">
      <div className="Label">
        <div className="TitleFlashSale">Produk Kami</div>
      </div>
      <div className="WrapperProduct">
        <div className="ProductList">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
