import { Link, NavLink } from "react-router-dom";
import usercircle from "../assets/svg/usercircle.svg";

function NavBar() {
  return (
    <header>
      <Link className='logo' to="/">#VANLIFE</Link>
      <nav className="navbar-links">
        <NavLink to="/host" className={({isActive}) => isActive ? "active-link" : null}>Host</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? "active-link" : null}>About</NavLink>
        <NavLink to="/vans" className={({isActive}) => isActive ? "active-link" : null}>Vans</NavLink>
        <Link to="login" className="login-link"> <img src={usercircle} alt="" className="usercircle" /></Link>
      </nav>
    </header>
  )
}

export default NavBar