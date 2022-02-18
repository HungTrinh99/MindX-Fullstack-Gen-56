import React from "react";

const ProductItem = (props) => {
  const { product, onPhoneSelect } = props;
  const { name, img, id } = product;

  const onPhoneSelectHandler = (phoneId) => {
    onPhoneSelect(phoneId);
  };

  return (
    <div className="card p-3" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="product img" />
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text fw-bold">{name}</p>
        <button
          href="#"
          className="btn btn-primary"
          onClick={() => onPhoneSelectHandler(id)}
        >
          Xem chi tiết
        </button>
      </div>
    </div>
  );
};
export default ProductItem;
