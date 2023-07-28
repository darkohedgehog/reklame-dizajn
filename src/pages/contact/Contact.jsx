import Header from "../../components/Header";
import HeaderImage from "../../assets/-high-resolution-logo-color-on-transparent-background.png";
import "./contact.css";
import {MdEmail} from "react-icons/md";
import {BsMessenger} from "react-icons/bs";
import {IoLogoWhatsapp} from "react-icons/io";
import {SlLocationPin} from "react-icons/sl";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lgyua0q', 'template_ix1op9q', form.current, 'BydbX3l37aw-BuJCZ')
      
    e.target.reset ()
  };
  return (
   <>
   <Header title="Ostanimo u kontaktu" image={HeaderImage}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio praesentium beatae, corporis id quasi earum.
   </Header>

   <section className="contact">
      <div className="container contact_container">
        <h3>Kontaktirajte nas</h3>
      <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Vaše ime' required />
          <input type="email" name='email' placeholder='Vaš Email' required />
          <textarea name="message" rows="10" placeholder='Vaša poruka' required></textarea>
          <button type='submit' className='btn btn-primary'>Pošalji poruku</button>
          </form>      

      <div className="contact_wrapper">  
      <div className="contact_options">
        <article className='contact_option'>              
          <a href="mailto:nino05dizajn@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail className='contact_option-icon' /></a>
            <h4>Email</h4>
            <h5>nino05dizajn@gmail.com</h5>  
          </article>
          <article className='contact_option'>            
          <a href="https://m.me/szfr.dizajn" target="_blank" rel="noreferrer noopener"><BsMessenger className='contact_option-icon'/></a>
            <h4>Messenger</h4>
            <h5>Studio Dizajn</h5>
          </article>
          <article className='contact_option'>            
          <a href="https://wa.me/+381641706370" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp className='contact_option-icon'/></a>
            <h4>Mobilni</h4>
            <h5>+381 64 1706 370</h5>
          </article>
          <article className='contact_option'>            
          <SlLocationPin className='contact_option-icon'/>
            <h4>Adresa</h4>
            <h5>Glavaševa 3, 11420 Smederevska Palanka, Srbija</h5>
          </article>
          </div>
      </div>
        </div>
    
   </section>
   
   </>
  )
}

export default Contact;