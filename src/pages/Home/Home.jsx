import { Link } from 'react-router-dom';
import s from './Home.module.scss'


const Home = () => {
  
  return (
    <div className={'container ' + s.home__container}>
      <h1 className={s.home}>Welcome to PizzaStyle </h1>
      <button type='button' className={s.home__btn}><Link to="/">Enjoy Pizza</Link></button>
    </div>
  );
};

export default Home;