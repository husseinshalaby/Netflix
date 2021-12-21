import React, {useContext} from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import {animateScroll as Scroll} from 'react-scroll';
import {sectionOne, sectionTwo, sectionThree, sectionFour, copyRightSection} from './Data';
import LocaleContext from "../../LocaleContext";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {

  const { locale } = useContext(LocaleContext)
  const toggleHome = () => {
    Scroll.scrollToTop();
  }
  return (
    <footer className='FooterContainer'>
      <div className ='FooterWrap'>
        <div className='FooterLinksContainer'>
          <div className = 'FooterLinksWrapper'>
            <div className ='FooterLinkItems'>
              <h1 className = 'FooterLinkTitle'>{sectionOne[locale]['name']}</h1>
                < Link className = 'FooterLink' to ='/'>{sectionOne[locale]['firstLink']}</ Link>
                < Link className = 'FooterLink' to ='/'>{sectionOne[locale]['secondLink']}</ Link>
                < Link className = 'FooterLink' to ='/'>{sectionOne[locale]['thirdLink']}</ Link>
                < Link className = 'FooterLink' to ='/'>{sectionOne[locale]['fourthLink']}</ Link>
                < Link className = 'FooterLink' to ='/'>{sectionOne[locale]['fifthLink']}</ Link>   
            </div>
            <div className ='FooterLinkItems'>
              <h1 className = 'FooterLinkTitle'>{sectionTwo[locale]['name']}</h1>
                < Link className = 'FooterLink' to ='/'>{sectionTwo[locale]['firstLink']}</ Link>
                < Link className = 'FooterLink' to ='/'>{sectionTwo[locale]['secondLink']}</ Link>
                < Link className = 'FooterLink' to ='/'>{sectionTwo[locale]['thirdLink']}</ Link>
                < Link className = 'FooterLink' to ='/'>{sectionTwo[locale]['fourthLink']}</ Link>
            </div>
          </div>
          <div className = 'FooterLinksWrapper'>
            <div className ='FooterLinkItems'>
              <h1 className = 'FooterLinkTitle'>{sectionThree[locale]['name']}</h1>
                < Link className = 'FooterLink' to ='/'>{sectionThree[locale]['firstLink']}</ Link>
                < Link className = 'FooterLink' to ='/'>{sectionThree[locale]['secondLink']}</ Link>
                < Link className = 'FooterLink' to ='/'>{sectionThree[locale]['thirdLink']}</ Link>
                < Link className = 'FooterLink' to ='/'>{sectionThree[locale]['fourthLink']}</ Link>
            </div>
            <div className ='FooterLinkItems'>
              <h1 className = 'FooterLinkTitle'>{sectionFour[locale]['name']}</h1>
                < Link className = 'FooterLink' to ='/'>{sectionFour[locale]['firstLink']}</ Link>
                < Link className = 'FooterLink' to ='/'>{sectionFour[locale]['secondLink']}</ Link>
                < Link className = 'FooterLink' to ='/'>{sectionFour[locale]['thirdLink']}</ Link>
                < Link className = 'FooterLink' to ='/'>{sectionFour[locale]['fourthLink']}</ Link>
            </div>
          </div>
        </div>
        <section className ='SocialMedia'>
          <div className ='SocialMediaWrap'>
            <Link className ='SocialLogo' to='/' onClick ={toggleHome}>Netflix</Link>
            <small className ='WebsiteRights'>Netflix &copy; {new Date().getFullYear()} {copyRightSection[locale]}</small>
            <div className = 'SocialIcons'>
              <a className = 'SocialIconLink'
                href ='/'
                target='_blank'
                aria-label='Facebook'
              >
              <FaFacebook />
              </a>
              <a className = 'SocialIconLink'
                href ='/'
                target='_blank'
                aria-label='Instagram'
              >
              <FaInstagram />
              </a>
              <a className = 'SocialIconLink'
                href ='/'
                target='_blank'
                aria-label='Youtube'
              >
              <FaYoutube />
              </a>
              <a className = 'SocialIconLink'
                href ='/'
                target='_blank'
                aria-label='Twitter'
              >
              <FaTwitter />
              </a>
              <a className = 'SocialIconLink'
                href ='/'
                target='_blank'
                aria-label='Linkedin'
              >
              <FaLinkedin />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer
