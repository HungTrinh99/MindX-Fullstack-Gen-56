import React, { Component } from "react";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
const productData = [
  {
    id: 1,
    name: "Samsung Galaxy A10",
    price: "40906000",
    img: "images/samsung-note.jpg",
    info: {
      screen: "AMOLED Full HD 9.0",
      os: "Android 9.0",
      frontCamera: "20MP",
      backCamera: "Chính 48MB, phụ 30MP",
    },
    ram: "4 GB",
    rom: "64 GB",
  },
  {
    id: 2,
    name: "IPhone12",
    price: "200306000",
    img: "images/iphone.jpg",
    info: {
      screen: "Full HD 12.0",
      os: "IOS 14",
      frontCamera: "20MP",
      backCamera: "Chính 100MB, phụ 30MP",
    },
    ram: "16 GB",
    rom: "32 GB",
  },
  {
    id: 3,
    name: "Xiaomi Note 10",
    price: "10005000",
    img: "images/xioami.jpg",
    info: {
      screen: "OLED 10.0",
      os: "Android 8.0",
      frontCamera: "69MP",
      backCamera: "Chính 96MB, phụ 30MP",
    },
    ram: "10 GB",
    rom: "64 GB",
  },
];

const findProductItemInList = (id, products) => {
  const selectedProduct = products.find((product) => product.id === id);
  return selectedProduct;
};
class SmartPhoneStore extends Component {
  state = {
    products: productData,
    selectedPhone: null,
    cart: [],
  };

  onPhoneSelect = (id) => {
    // 1. Tìm kiếm id này là sản phẩm nào trong list
    // 2. SetState cho selected phone
    const { products } = this.state;
    const selectedPhone = findProductItemInList(id, products);
    this.setState({
      selectedPhone: selectedPhone,
    });
  };

  onAddToCart = (id) => {
    const { cart } = this.state;
    const cloneCart = [...cart];
    const selectedPhone = findProductItemInList(id, this.state.products);

    // Thêm currentProduct => cart
    // 1. Nếu đã tồn tại sản phẩm trong cart => cập nhật amount
    // 2. Nếu chưa tồn tại => thêm vào và cập nhật amount =1

    const idxInCart = this.state.cart.findIndex(
      (cartItem) => cartItem.id === id
    );

    if (idxInCart !== -1) {
      cloneCart[idxInCart].amount += 1;
      this.setState({
        cart: cloneCart,
      });
    } else {
      selectedPhone.amount = 1;
      this.setState({
        cart: [...cart, selectedPhone],
      });
    }
  };

  onChangeAmount = (id, value) => {
    const { cart } = this.state;

    const idxItemInCart = this.state.cart.findIndex(
      (cartItem) => cartItem.id === id
    );

    cart[idxItemInCart]["amount"] += value;
    this.setState({
      cart: cart,
    });
  };

  onDelteCartItem = (id) => {};
  render() {
    const { products, selectedPhone, cart } = this.state;
    const cartSize = cart.length;

    return (
      <div className="container">
        <h1 className="text-center">Thế giới di động</h1>
        <div className="d-flex justify-content-end">
          <span
            className="text-danger"
            style={{
              cursor: "pointer",
            }}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Giỏ hàng ({cartSize})
          </span>
        </div>
        <ProductList
          products={products}
          title="Danh Sách sản phẩm"
          onPhoneSelect={this.onPhoneSelect}
          onAddToCart={this.onAddToCart}
        />
        <ProductDetail selectedPhone={selectedPhone} />
        <Cart cart={cart} onChangeAmount={this.onChangeAmount} />
      </div>
    );
  }
}

export default SmartPhoneStore;

/*
  ------------------------
  -----COMPONENT TREE-----
  ------------------------
  SmartPhoneStore
      Gio hang - button (so luong)
      ProductList
          ProductItem
          ProductItem
          ProductItem
          ProductItem
          ....
      ProductDetail
      Cart
*/

// Set State: cơ chế merging
// useState: replacing
// SEO = Search Engine Optimization
// State structure, split component
// Data binding, event handling, conditional rendering
// CRUD - Create, Read, Update ,DELETE

// Remove duplicate element in list
// [1,2,4,5,6], k=10
