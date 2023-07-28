import { Link } from "react-router-dom";
import Logo from "../assets/dizajn-studio-low-resolution-logo-color-on-transparent-background.png";
import {FaFacebookF} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import {ImMobile} from "react-icons/im";
import {MdOutlineMail} from "react-icons/md";

const Footer = () => {
  return (
    <footer>
        <div className="container footer_container">
            <article>
                <Link to="/" className="logo">
                    <img src={Logo} alt="Footer" />
                </Link>
                <p>
                Vaš uspeh je naš prioritet - bez obzira na veličinu projekta, pružićemo vam personalizovane i pristupačne svetleće reklame i banere koji će vas izdvojiti iz konkurencije i učiniti da sijate na tržištu.
                </p>
               
                <div className="footer_socials">
                    <a href="https://www.facebook.com/szfr.dizajn" target="_blank" rel="noreferrer noopener"><FaFacebookF/></a>
                    <a href="https://www.instagram.com/ninoslavjanackovic/" target="_blank" rel="noreferrer noopener"><AiFillInstagram/></a>       
                    <small ><ImMobile/> +381641706370</small>
                <small><MdOutlineMail/> nino05dizajn@gmail.com</small>            
                </div>
            </article>
            <article>
                <h4>Linkovi</h4>
                <Link to="/about">O nama</Link>
                <Link to="/services">Usluge</Link>
                <Link to="/gallery">Naši radovi</Link>
                <Link to="/contact">Kontakt</Link>
            </article>
            <article>
                <h4>Ostanimo u kontaktu</h4>
                <Link to="/contact">Kontakt</Link>
            </article>
            <article>
                <h4>Pravila privatnosti</h4>
                <Link to="/terms">Pravila privatnosti i upotreba "kolačića"</Link>
                
            </article>                      
        </div>
        <div className="footer_copyright">
            <small>2023 Dizajn Studio &copy; Sva prava zadržana</small>
            <article>
                <a href="https://darkohedgehog.github.io/Darko_Zivic-Web_Developer" target="blank">Developed by HEDGEHOG</a>
            </article>
           
        </div>
    </footer>
  )
}

export default Footer;