import s from './Footer.module.scss'
import { BsFillTelephoneFill, BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { GoMail, GoLocation } from 'react-icons/go';

function Footer() {

  return (
    <footer className={s.footer}>
      <div className={'container ' + s.footer__container}>

        <ul className={s.footer__contactInfoList}>
          <li className={s.footer__contactInfoList_Item}><a className={s.footer__socailMediaList_ItemLink} href="https://goo.gl/maps/4AxEan24gGph7TED8" target="_blank" rel="noopener noreferrer"><GoLocation className={s.contactInfoList_ItemSVG}/>176, Antonovycha Street, Kyiv</a></li>
          <li className={s.footer__contactInfoList_Item}><a className={s.footer__socailMediaList_ItemLink} href="mailto:PizzaStyle@gmail.com"><GoMail className={s.contactInfoList_ItemSVG}/>PizzaStyle@gmail.com</a></li>
          <li className={s.footer__contactInfoList_Item}><a className={s.footer__socailMediaList_ItemLink} href="tel:+380631234567"><BsFillTelephoneFill className={s.contactInfoList_ItemSVG}/>+38 063 123 45 67</a></li>
        </ul>


        <ul className={s.footer__socailMediaList}>
          <li className={s.footer__socailMediaList_Item}><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer nofollow"><BsFacebook className={s.footer__socailMediaList_ItemSVG}/></a></li>
          <li className={s.footer__socailMediaList_Item}><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer nofollow"><BsInstagram className={s.footer__socailMediaList_ItemSVG}/></a></li>
          <li className={s.footer__socailMediaList_Item}><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer nofollow"><BsTwitter className={s.footer__socailMediaList_ItemSVG}/></a></li>
          <li className={s.footer__socailMediaList_Item}><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer nofollow"><BsLinkedin className={s.footer__socailMediaList_ItemSVG}/></a></li>
        </ul>
        
      </div>
    </footer>
    
  );
}

export default Footer;