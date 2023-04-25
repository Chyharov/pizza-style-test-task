import s from './Cart.module.scss';
import { Link } from 'react-router-dom';

function Cart({ cartItems, removeFromCart }) {
  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  if (cartItems.length === 0) {
    return (
      <div className={'container ' + s.cart__container}>
        <h1>Please, choose pizza <Link to='/pizza'><button type='button' className={s.cart__hereBtn}>here</button></Link></h1>
      </div>
    );
  }

  return (
    <div className='container'>
      <ul className={s.pizzaList}>
        {cartItems.map((item, index) => (
          <li key={index} className={s.pizzaListItem}>
            <img width="280px" height="280px" className={s.pizzaListItem__image} src={item.image} alt={item.title} loading="lazy"/>
            <div className={s.pizzaListItem__container}>
              <p className={s.pizzaListItem__title}>{item.title}</p>
              <p className={s.pizzaListItem__description}>{item.description}</p>
                <div className={s.pizzaListItem__priceContainer}>
                  <p className={s.pizzaListItem__price}>${item.price}</p>
                  <button type='button' className={s.pizzaListItem__btn} onClick={() => handleRemoveFromCart(item)}>Remove from cart</button>
                </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;