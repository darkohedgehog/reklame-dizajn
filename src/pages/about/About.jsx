import Header from "../../components/Header";
import HeaderImage from "../../assets/Lo-la2.jpg";
import StoryImage from "../../assets/NorProo_Norway.jpg";
import VisionImage from "../../assets/Lo-la2.jpg";
import MissionImage from "../../assets/Slova_medijapan5.jpg";
import "./about.css";



const About = () => {
  return (
    <>
    <Header title="O nama" image={HeaderImage}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, cum, magni error doloremque veniam distinctio repellendus tempora beatae at hic deleniti tenetur necessitatibus, explicabo assumenda voluptatum incidunt. Officiis, sit quaerat!
    </Header>

    <section className="about_story">
      <div className="container about_story-container">
        <div className="about_section-image">
          <img src={StoryImage} alt="O nama" />
        </div>
        <div className="about_section-content">
          <h1>Naša priča</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, maxime voluptates numquam ducimus nam at sequi inventore libero atque placeat?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, adipisci iure rem voluptate qui corporis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quos.
          </p>
        </div>
      </div>
    </section>

    <section className="about_vision">
      <div className="container about_vision-container">
       
        <div className="about_section-content">
          <h1>Naša vizija</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, maxime voluptates numquam ducimus nam at sequi inventore libero atque placeat?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, adipisci iure rem voluptate qui corporis?
          </p>          
        </div>
        <div className="about_section-image">
          <img src={VisionImage} alt="Vision" />
        </div>
      </div>
    </section>

    <section className="about_mission">
      <div className="container about_mission-container">
        <div className="about_section-image">
          <img src={MissionImage} alt="Naša misija" />
        </div>
        <div className="about_section-content">
          <h1>Naša misija</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, maxime voluptates numquam ducimus nam at sequi inventore libero atque placeat?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, adipisci iure rem voluptate qui corporis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quos.
          </p>
        </div>
      </div>
    </section>

    </>
  )
}

export default About;