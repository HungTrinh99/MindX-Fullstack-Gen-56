import React from "react";

const ProductItem = (props) => {
  const { lang, item } = props;
  const { title, price, desc } = item;
  return (
    <div className="product-item">
      <div>
        <span>{lang === "en" ? "Product name" : "Tên sản phẩm"}:</span>{" "}
        <span> {title}</span>
      </div>
      <div>
        <span>{lang === "en" ? "Description" : "Mô tả"}:</span>{" "}
        <span> {desc}</span>
      </div>
      <div>
        <span>{lang === "en" ? "Price" : "Giá cả"}:</span> <span> {price}</span>
      </div>
      <button>{lang === "en" ? "Add to cart" : "Thêm vào giỏ hàng"}</button>
    </div>
  );
};

export default ProductItem;
