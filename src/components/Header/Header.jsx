import { Link } from 'react-router-dom';
import s from './Header.module.scss'
import Logo from '../Logo/Logo'
import { BsCartFill } from "react-icons/bs";

function Header() {
  return (
    <div className={'container ' + s.header__container}>
      <nav>
        <ul className={s.navList}>
          <li className={s.navList__item}><Link to="/"><Logo/></Link></li>
          <li className={s.navList__item}><Link to="/Cart"><BsCartFill className={s.cartLogo}/></Link></li>
        </ul>
      </nav>
    </div>
    
  );
}

export default Header;