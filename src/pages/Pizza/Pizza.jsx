import s from './Pizza.module.scss'
import { BsCartFill, BsPlus, BsDash } from "react-icons/bs";
import { products } from '../../services/Products';

function Pizza({ handleAddToCart, handleRemoveFromCart, getCartItemQuantity }) {
  
  return (
    <div className='container'>
      <ul className={s.pizzaList}>
        {products.map((pizza) => (
          <li className={s.pizzaListItem} key={pizza.id}>
            <img loading='lazy' width="280px" height="280px" className={s.pizzaListItem__image} src={pizza.image} alt={pizza.title} />
            <div className={s.pizzaListItem__container}>
                <p className={s.pizzaListItem__title}>{pizza.title}</p>
                <p className={s.pizzaListItem__description}>{pizza.description}</p>
                <div className={s.pizzaListItem__priceContainer}>
                  <p className={s.pizzaListItem__price}>{pizza.price} UAH</p>
                  {getCartItemQuantity(pizza) > 0 ? (
                    <div className={s.pizzaListItem__cartControls}>
                      <button type="button" className={s.pizzaListItem__cartButton} onClick={() => handleRemoveFromCart(pizza)}><BsDash className={s.pizzaListItem__cartButtonSvg}/></button>
                        <span className={s.pizzaListItem__cartQuantity}>{getCartItemQuantity(pizza)}</span>
                      <button type="button" className={s.pizzaListItem__cartButton} onClick={() => handleAddToCart(pizza)}><BsPlus className={s.pizzaListItem__cartButtonSvg}/></button>
                    </div>
                  ) : (
                    <button type="button" className={s.pizzaListItem__btn} onClick={() => handleAddToCart(pizza)}><BsCartFill/> Add to cart</button>
                  )}
                </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pizza;
