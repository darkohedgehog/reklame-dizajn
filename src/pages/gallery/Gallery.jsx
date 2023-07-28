import Header from "../../components/Header";
import HeaderImage from "../../assets/-high-resolution-logo-color-on-transparent-background.png";
import "./gallery.css";

const Gallery = () => {
  const galleryLength = 10;
  const images = []
       
  for(let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../assets/gallery${i}.jpg`))
  }


  return (
    <>
    <Header title="Naši radovi" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. In, labore eaque. Incidunt quasi tempore fugiat.
    </Header>
    <section className="gallery">
      <div className="container gallery_container">
        {
          images.map((image, index) => {
            return <article key={index}>
              <img src={image} alt={`Gallery_Image ${index + 1}`} />
            </article>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Gallery;