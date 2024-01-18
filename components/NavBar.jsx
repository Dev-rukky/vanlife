import { Link } from "react-router-dom";

function NavBar() {
    return (
        <header>
        <Link className='logo' to="/">#VANLIFE</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
    )
}

export default NavBar