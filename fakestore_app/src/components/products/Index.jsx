import React, { useContext } from "react";
import { GlobalContext } from "../../provider/Index";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import "./style.css";

const Products = ({ selectedProduct }) => {
  const globalStore = useContext(GlobalContext);
  const addToCartHandler = globalStore.addToCartHandler;
  const handleChange = globalStore.handleCartChange;
  const searchResult = globalStore.searchResult;
  const cartItems = globalStore.cart;

  const products = selectedProduct ? selectedProduct :searchResult.length > 0 ? searchResult : globalStore.productData;

  const renderProductCard = products.map((product) => {
    const present = cartItems.find((x) => x.id === product.id)?.amount;
    return (
      <section className="product--card" key={product.id}>
        <div className="product--card__display">
          <img className="card--image" src={product.image} alt="" />
        </div>
        <div className="product--card__info">
          <span className="card--title" title={product.title}>
            {product.title}
          </span>
          <div>
            <span className="card--rating">
              {product.rating.rate} <FaStar />
            </span>
            <span>&nbsp;({product.rating.count})</span>
          </div>
          <span className="card--price">&#8377; {product.price}</span>
          {present > 0 ? (
            <div className="cart_card-qtyDisplay">
              <button className="btn" onClick={() => handleChange(product.id, -1)}>
                &#8722;
              </button>
              <span>{cartItems.find((x) => x.id === product.id)?.amount}</span>
              <button
                className="btn"
                onClick={() =>
                   handleChange(product.id, 1)
                }
              >
                &#43;
              </button>
            </div>
          ) : (
            <button
              className="add-to-cart"
              onClick={() => addToCartHandler(product)}
            >
              <FaShoppingCart />&nbsp;Add to cart
            </button>
          )}
        </div>
      </section>
    );
  });

  return <div className="card--container">{renderProductCard}</div>;
};

export default Products;
