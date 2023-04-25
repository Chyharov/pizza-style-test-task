import s from './Pizza.module.scss'
import { BsCartFill } from "react-icons/bs";
import { products } from '../../services/Products';


function Pizza({ addToCart }) {
  
  const handleAddToCart = (pizza) => {
    addToCart(pizza);
  };

  return (
    <div className='container'>
      <ul className={s.pizzaList}>
        {products.map((pizza) => (
          <li className={s.pizzaListItem} key={pizza.id}>
            <img width="280px" height="280px" className={s.pizzaListItem__image} src={pizza.image} alt={pizza.title} loading="lazy"/>
            <div className={s.pizzaListItem__container}>
                <p className={s.pizzaListItem__title}>{pizza.title}</p>
                <p className={s.pizzaListItem__description}>{pizza.description}</p>
                    <div className={s.pizzaListItem__priceContainer}>
                        <p className={s.pizzaListItem__price}>${pizza.price}</p>
                        <button type='button' className={s.pizzaListItem__btn} onClick={() => handleAddToCart(pizza)}><BsCartFill/> Add to cart</button>
                    </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pizza;