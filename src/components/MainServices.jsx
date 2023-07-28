import {PiCrown} from "react-icons/pi";
import SectionHead from "./SectionHead";
import { services } from "../data";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import {AiFillCaretRight} from "react-icons/ai";


const MainServices = () => {
  return (
    <section className="services">
      <div className="container services_container">
           <SectionHead icon={<PiCrown/>} title="Naše usluge"/>
        <div className="services_wrapper">
             {
                services.map(({id, icon, title, info, path}) => {
                    return (
                        <Card className="services_service" key={id}>
                         <span>{icon}</span>
                         <h4>{title}</h4>
                         <small>{info}</small>
                         <Link to={path} className="btn sm">Više<AiFillCaretRight /></Link>
                        </Card>
                    )
                })
             }
         </div>
      </div>
    </section>
  )
}

export default MainServices;