// Class Component
import React from "react";
import Button from "./Button";
import "./Product.css";
import ProductImage from "./ProductImage";

const Product = (props) => {
  const { imgUrl, title, size, price } = props.product;
  return (
    <div className="newProducts__item">
      <div className="item__image">
        <div>
          <img src="images/p6.jpg" alt="p6" />
          <div className="item__image-child">
            <ProductImage imgUrl={imgUrl} />
          </div>
        </div>
      </div>
      <div className="item__content">
        <h3>{title}</h3>
        <p>
          <strong>{size}</strong>
        </p>
        <div className="item__text">
          <p>
            <del>{price}</del>
          </p>
          <p>
            <strong>$70.000</strong>
          </p>
        </div>
        {/* <button>Add To Cart</button> */}
        <Button title="Add to cart" />
      </div>
    </div>
  );
};

export default Product;
