import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="nav-container container-fluid">
        <Link to="/">
          <h4>MovieFlix</h4>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
