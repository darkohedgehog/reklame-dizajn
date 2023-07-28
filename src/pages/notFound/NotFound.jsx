import { Link } from "react-router-dom";
import "./notFound.css";

const NotFound = () => {
  return (
    <section>
      <div className="container notfound_container">
        <h2>Page Not Found</h2>
        <Link to="/" className="btn">Početna strana</Link>
      </div>
    </section>
  )
}

export default NotFound;