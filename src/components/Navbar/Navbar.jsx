import { NavLink } from "react-router";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar-custom navbar navbar-expand-lg shadow-sm ">
      <div className="container">
        {/* Brand */}
        <NavLink className="navbar-brand-custom" to="/">
        
          <i className="bi bi-play-circle"></i>
          <span className="fs-3">MovieApp</span>
        </NavLink>

        {/* Toggle Button */}
       <button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav-custom ms-auto">
            {/* Home */}
            <li className="nav-item-custom">
              <NavLink className="nav-link-custom" to="/">
                <i className="bi bi-house-door"></i>
                <span>Home</span>
              </NavLink>
            </li>

            {/* Trending Dropdown */}
            <li className="nav-item-custom dropdown-custom">
              <a
                className="nav-link-custom dropdown-toggle-custom"
                href="/"
                id="trendingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-fire"></i>
                <span>Trending</span>
              </a>
              <ul
                className="dropdown-menu-custom"
                aria-labelledby="trendingDropdown"
              >
                <li>
                  <NavLink className="dropdown-item-custom" to="/">
                    <i className="bi bi-film"></i>
                    <span>Movies</span>
                  </NavLink>
                </li>
                <li>
                  <a className="dropdown-item-custom" href="/series">
                    <i className="bi bi-tv"></i>
                    <span>Series</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item-custom" href="/actors">
                    <i className="bi bi-person-circle"></i>
                    <span>Actors</span>
                  </a>
                </li>
              </ul>
            </li>

            {/* Signup */}
            <li className="nav-item-custom">
              <NavLink className="nav-link-custom nav-signup" to="/Signup">
                <i className="bi bi-person-plus"></i>
                <span>Signup</span>
              </NavLink>
            </li>

            {/* Login */}
            <li className="nav-item-custom">
              <NavLink className="nav-link-custom nav-login" to="/Login">
                <i className="bi bi-box-arrow-in-right"></i>
                <span>Login</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
