const Cart = (props) => {
  const { cart, onChangeAmount } = props;
  const parseStringToCurrency = (value) => {
    return value.toLocaleString("vi", { style: "currency", currency: "VND" });
  };
  const cartBody = (
    <table className="table">
      <thead>
        <tr>
          <th>Mã SP</th>
          <th>Tên SP</th>
          <th>Hình ảnh</th>
          <th>Số lượng</th>
          <th>Đơn giá</th>
          <th>Thành tiền</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cart &&
          cart.map((cartItem) => {
            const { id, name, amount, price, img } = cartItem;
            const totalPrice = price * amount;
            const isDisabledMinusButton = amount === 1;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>
                  <img
                    src={img}
                    alt={name}
                    style={{
                      width: "32px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => onChangeAmount(id, -1)}
                    disabled={isDisabledMinusButton}
                  >
                    -
                  </button>
                  <span className="mx-1">{amount}</span>
                  <button
                    className="btn btn-primary"
                    onClick={() => onChangeAmount(id, 1)}
                  >
                    +
                  </button>
                </td>

                <td>{parseStringToCurrency(price)}</td>
                <td>{parseStringToCurrency(totalPrice)}</td>
                <td>
                  <i className="fa fa-trash text-danger delete-icon"></i>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Giỏ hàng
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            {cart.length === 0 ? (
              <p>Chưa có sản phẩm trong giỏ hàng</p>
            ) : (
              cartBody
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
