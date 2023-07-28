import MainHeader from "../../components/MainHeader";
import MainServices from "../../components/MainServices";
import Values from "../../components/Values";
import MainCarousel from "../../components/MainCarousel";
import "./home.css";

const Home = () => {
  return (
    <>
     <MainHeader />
     <MainServices />
     <Values />  
     <MainCarousel />  
    </>
  )
}

export default Home;