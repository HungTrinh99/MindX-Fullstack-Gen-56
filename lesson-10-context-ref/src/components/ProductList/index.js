import React from "react";
import ProductItem from "../ProductItem";

const data = [
  {
    title: "IPhone 12",
    desc: "Best Iphone",
    price: 100,
  },
  {
    title: "Samsung",
    desc: "Best Iphone",
    price: 200,
  },
  {
    title: "Huwei",
    desc: "Best Iphone",
    price: 50,
  },
  {
    title: "B Phone",
    desc: "Best Iphone",
    price: 70,
  },
  {
    title: "HTC One",
    desc: "Best Iphone",
    price: 60,
  },
  {
    title: "HTC Two",
    desc: "Best Iphone",
    price: 60,
  },
];

const ProductList = (props) => {
  return (
    <div className="product-list-container">
      {data.map((item, index) => {
        return <ProductItem item={item} key={index} lang={props.lang} />;
      })}
    </div>
  );
};

export default ProductList;
