import React from 'react'
import "./Contact.css";
import Header from "./../Header/Header.jsx"
import Footer from "./../Footer/Footer.jsx"
import contactVector from "./../../assets/contact_anime.png";
import gitHub from "./../../assets/gh.png";
import instaGram from "./../../assets/in.png";
import linkedIn from "./../../assets/li.png";
import medium from "./../../assets/me.png";
import twitter from "./../../assets/x.png";

function Contact() {
  return (
    <div className='section-container'>
      <Header
        heading="Get in touch."
        subHeading="If you have any inquiries or wish to collaborate, feel free to reach out via email:">
      </Header>

      <div className='contact-info'>
        <div className="email-wrapper">
          <a href="mailto:christianchibuike14@gmail.com" className="email-link">
            christianchibuike14@gmail.com
          </a>
        </div>
      </div>

      <div className='social-icons-container'>
        <a href="https://github.com/C3Techie"
          className='social-icon'
          target="_blank" rel="noreferrer">
          <img src={gitHub} alt='github' loading="lazy"/>
        </a>
        <a href="https://www.linkedin.com/in/christian-chibuike/"
          className='social-icon'
          target="_blank" rel="noreferrer">
          <img src={linkedIn} alt='linkedin' loading="lazy"/>
        </a>
        <a href="https://x.com/C3Techie"
          className='social-icon'
          target="_blank" rel="noreferrer">
          <img src={twitter} alt='twitter' loading="lazy"/>
        </a>
        <a href="https://christian-chibuike.medium.com/"
          className='social-icon'
          target="_blank" rel="noreferrer">
          <img src={medium} alt='medium' loading="lazy"/>
        </a>
        <a href="https://www.instagram.com/c3techie/"
          className='social-icon'
          target="_blank" rel="noreferrer">
          <img src={instaGram} alt='instagram' loading="lazy"/>
        </a>
      </div>
      <Footer
        phrase="Read more "
        link="about me."
        toAddress="/about">
      </Footer>
      <div className='vector-frame'>
        <img src={contactVector}
          alt="contact"
          loading="lazy"
          className='about-vector'
        />
      </div>
    </div>
  )
}

export default Contact