import Header from "../../components/Header";
import HeaderImage from "../../assets/-high-resolution-logo-color-on-transparent-background.png";
import Card from "../../UI/Card";
import {ourService} from "../../data";
import "./services.css";


const Services = () => {
  return (
   <>
   <Header title="Naše usluge" image={HeaderImage}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, quis odit. Optio reprehenderit pariatur deserunt.
   </Header>
    <section className="services">
      <div className="container services_container">
        {
          ourService.map(({id, name, desc, features}) => {
            return <Card key={id} className="service">
              <h3>{name}</h3>
              <small>{desc}</small>
              <h4>Features</h4>
              {
               features.map(({feature, available}, index) => {
                return <p key={index} className={!available ? `disabled` : ``}>{feature}</p>
               })
              }
            </Card>
          })
        }
      </div>
    </section>
   </>
  )
}

export default Services;