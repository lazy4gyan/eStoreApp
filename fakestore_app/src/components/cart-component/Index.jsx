import { useContext } from "react";
import { GlobalContext } from "../../provider/Index";
import "./style.css";

export default function Cart() {

  const globalStore = useContext(GlobalContext);
  const handleDelete = globalStore.handleCartItemDelete;
  const handleChange = globalStore.handleCartChange;
  const cartItems = globalStore.cart;
  const windowDimensions = globalStore.windowDimensions;

  const totalPrice = cartItems.reduce(
    (total, product) => total + product.amount * product.price,
    0
  );

  const renderCart = cartItems.map((product, index) => {
    const productLimitExceeds = () =>
      cartItems.find((x) => x.id === product.id)?.amount >= product.quantity
        ? true
        : false;
    return (
      <section className="cart_card-container" key={index}>
        <img className="cart_card-image" src={product.image} alt="product" />
        <div className="cart_card-info">
          <span className="cart_card-name">{product.name}</span>
          <span className="cart_card-price"> &#x20B9; {product.price}</span>
        </div>
        <div className="cart_card-quantity">
          <span className="cart_card-label">Quantity</span>
          <div className="cart_card-quantity_container">
            <button className="plus_btn" onClick={() => handleChange(product.id, -1)}>
              &#8722;
            </button>
            <span class="cart_qty">{product.amount}</span>
            <button className="minus_btn" onClick={() => productLimitExceeds() ? alert("limit reached") : handleChange(product.id, 1)}>
              &#43;
            </button>
          </div>
        </div>
        <button className="delete_btn" onClick={() => handleDelete(product.id)}>
          Delete
        </button>
      </section>
    );
  });

  return (
    <article className="cart_container">
      {renderCart.length > 0 ? (
        <>
          {renderCart}
          <div style={{display:"flex",flexDirection:"column"}}>
            <span style={{fontSize:"20px",fontWeight:"500", marginBottom:"2rem"}}>Total : &#8377; {totalPrice}</span>
          </div>
        </>
      ) : (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"60vh"}}>
          Your cart is empty !
        </div>
      )}
    </article>
  );
}