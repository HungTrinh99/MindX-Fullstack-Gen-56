import React, { Component } from "react";
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
class SmartPhoneStore extends Component {
  state = {
    products: productData,
    selectedPhone: null,
  };

  onPhoneSelect = (id) => {
    // 1. Tìm kiếm id này là sản phẩm nào trong list
    // 2. SetState cho selected phone
    const { products } = this.state;
    const selectedPhone = products.find((phone) => phone.id === id);
    this.setState({
      selectedPhone: selectedPhone,
    });
  };

  render() {
    const { products, selectedPhone } = this.state;

    return (
      <div className="container">
        <h1 className="text-center">Thế giới di động</h1>
        <ProductList
          products={products}
          title="Danh Sách sản phẩm"
          onPhoneSelect={this.onPhoneSelect}
        />
        <ProductDetail selectedPhone={selectedPhone} />
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
      ProductList
          ProductItem
          ProductItem
          ProductItem
          ProductItem
          ....
      ProductDetail
*/

// Set State: cơ chế merging
// useState: replacing
