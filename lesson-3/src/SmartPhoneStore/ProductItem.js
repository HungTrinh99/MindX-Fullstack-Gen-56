import React from "react";

const ProductItem = (props) => {
  const { product, onPhoneSelect, onAddToCart } = props;
  const { name, img, id } = product;

  return (
    <div className="card p-3" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="product img" />
      <div className="card-body">
        <p className="card-text fw-bold">{name}</p>
        <div className="d-flex align-items-center justify-content-between">
          <button
            href="#"
            className="btn btn-primary"
            onClick={() => onPhoneSelect(id)}
          >
            Xem chi tiết
          </button>
          <button className="btn btn-danger" onClick={() => onAddToCart(id)}>
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
