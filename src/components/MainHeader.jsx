import { Link } from "react-router-dom";
import Image from "../assets/-high-resolution-logo-color-on-transparent-background.png";

const MainHeader = () => {
  return (
    <header className="main_header">
      <div className="container main_header-container">
        <div className="main_header-left">
          <h4>Istaknite svoje poslovanje</h4>
          <h1>VAŠE REKLAME U SAVRŠENOM SVETLU</h1>
          <p>Pustite vaše ideje da zasijaju. Kvalitetna izrada, inovativni dizajn i magična svetlost koja će izdvojiti vašu kompaniju</p>
        <Link to="/gallery" className="btn lg">Naši radovi</Link>
        </div>
        <div className="main_header-right">
          <div className="main_header-circle"></div>
          <div className="main_header-image">
            <img src={Image} alt="HeaderImage" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader;