import React from "react";
import Product from "../components/Product";
const ProductContainer = () => {
  const products = [
    {
      imgUrl: "images/p6.jpg",
      title: "T-Shirt 1",
      size: "M",
      price: 2000000,
    },
    {
      imgUrl: "images/p6.jpg",
      title: "T-Shirt 2",
      size: "XL",
      price: 3000000,
    },
    {
      imgUrl: "images/p6.jpg",
      title: "T-Shirt 3",
      size: "XXL",
      price: 1000000,
    },
    {
      imgUrl: "images/p6.jpg",
      title: "T-Shirt 4",
      size: "S",
      price: 1500000,
    },
  ];

  const productRender = products.map((product, index) => {
    return <Product product={product} key={index} />;
  });

  return (
    <section class="newProducts">
      <h1>News Products</h1>
      <div class="newProducts__container">{productRender}</div>
    </section>
  );
};
export default ProductContainer;


/*
  - Component: class, function
  - JSX: Javscript XML
  - Props
*/
