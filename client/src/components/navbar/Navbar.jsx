import "./navbar.css";
import { Link,useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate=useNavigate();
  const handleSignin = async (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Reservation</span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
            <button onClick={handleSignin} className="navButton">Register</button>
            <button onClick={handleSignin} className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;