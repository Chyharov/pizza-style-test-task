import { Link } from 'react-router-dom';
import { BsPlus, BsDash, BsTrash } from 'react-icons/bs';
import s from './Cart.module.scss';

function Cart({ cartItems, handleRemoveFromCart, handleAddToCart, getCartItemQuantity, totalPrice, handleClearCart, removeCartItem }) {
  
  if (cartItems.length === 0) {
    return (
      <div className={`container ${s.cart__container}`}>
        <h1>Please choose pizza <Link to="/"><button type="button" className={s.cart__hereBtn}>here</button></Link></h1>
      </div>
    );
  }

  return (
    <div className="container">
      <ul className={s.pizzaList}>
        {cartItems.map((item, index) => {
          const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
          if (itemIndex !== index) {
            return null;
          }

          return (
            <li key={index} className={s.pizzaListItem}>
              <img
                width="100px"
                height="100px"
                className={s.pizzaListItem__image}
                src={item.image}
                alt={item.title}
                loading="lazy"
              />
              <div className={s.pizzaListItem__container}>
                <p className={s.pizzaListItem__title}>{item.title}</p>
                <p className={s.pizzaListItem__description}>{item.description}</p>
                <div className={s.pizzaListItem__priceContainer}>
                <p className={s.pizzaListItem__price}>{item.price * getCartItemQuantity(item)} UAH</p>
                <div>
                  <button type="button" className={s.pizzaListItem__cartButtonTrash} onClick={() => removeCartItem(item)}>
                    <BsTrash className={s.pizzaListItem__cartButtonSvg}/>
                  </button>
                
                    
                  <div className={s.pizzaListItem__cartControls}>
                    <button type="button" className={s.pizzaListItem__cartButton} onClick={() => handleRemoveFromCart(item)}>
                      <BsDash className={s.pizzaListItem__cartButtonSvg}/>
                    </button>
                    <span className={s.pizzaListItem__cartQuantity}>{getCartItemQuantity(item)}</span>
                    <button type="button" className={s.pizzaListItem__cartButton} onClick={() => handleAddToCart(item)}>
                      <BsPlus className={s.pizzaListItem__cartButtonSvg}/>
                    </button>
                  </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className={s.totalContainer}>
        <p className={s.totalPrice}>Total: {totalPrice} UAH</p>
        <button type="button" className={s.orderButton} onClick={handleClearCart}>
          Make an order
        </button>
      </div>
    </div>
  );
}

export default Cart;