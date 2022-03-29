import React, { useContext } from "react";
import LangCtx from "../../context/language";

const ProductItem = (props) => {
  const { item } = props;
  const { title, price, desc } = item;

  const langCtx = useContext(LangCtx);

  return (
    <div className="product-item">
      <div>
        <span>{langCtx.lang === "en" ? "Product name" : "Tên sản phẩm"}:</span>{" "}
        <span> {title}</span>
      </div>
      <div>
        <span>{langCtx.lang === "en" ? "Description" : "Mô tả"}:</span>{" "}
        <span> {desc}</span>
      </div>
      <div>
        <span>{langCtx.lang === "en" ? "Price" : "Giá cả"}:</span>{" "}
        <span> {price}</span>
      </div>
      <button>
        {langCtx.lang === "en" ? "Add to cart" : "Thêm vào giỏ hàng"}
      </button>
    </div>
  );
};

export default ProductItem;
