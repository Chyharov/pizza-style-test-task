import { Link } from 'react-router-dom';
import s from './Home.module.scss'
import Button from 'components/Button/Button';


const Home = () => {
  
  return (
    <div className={'container ' + s.home__container}>
      <h1 className={s.home}>Welcome to PizzaStyle </h1>
      <Button text="Enjoy Pizza" ><Link to="/"></Link></Button>
    </div>
  );
};

export default Home;