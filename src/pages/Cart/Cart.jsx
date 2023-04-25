import s from './Cart.module.scss'

function Cart({ cartItems, removeFromCart }) {
  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  return (
    <div>
      <h1 className={s.cart}>Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => handleRemoveFromCart(item)}>Remove from cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;