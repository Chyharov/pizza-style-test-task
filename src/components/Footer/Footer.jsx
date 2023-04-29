import s from './Footer.module.scss'



function Footer() {

  return (
    <footer className={s.footer}>
      <div className={'container ' + s.footer__container}>
        <h2>Footer</h2>
      </div>
    </footer>
    
  );
}

export default Footer;