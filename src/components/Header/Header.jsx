import { Link } from 'react-router-dom';
import s from './Header.module.scss'

function Header() {
  return (
    <div className='container'>
      <nav>
        <ul className={s.navList}>
          <li className={s.navList__item}><Link to="/pizza">Pizza</Link></li>
          <li className={s.navList__item}><Link to="/Cart">Cart</Link></li>
        </ul>
      </nav>
    </div>
    
  );
}

export default Header;