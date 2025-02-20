import "../CSS/Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <header>
      <nav>
        <li>
          <Link to="/" className="link">Home</Link>
        </li>
        <li>
          <Link to="/about" className="link">About</Link>
        </li>
        <li>
          <Link to="/gallery" className="link">Gallery</Link>
        </li>

        <div
          className="dropdown"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <span className="link">Hooks</span>
          {dropdown && (
            <ol className="dropdown-list">
              <li >
                <Link to="/use-state" className="dropdown-link">useState</Link>
              </li>
              <li >
                <Link to="/use-effect" className="dropdown-link">useEffect</Link>
              </li>
              <li >
                <Link to="/use-effect-api" className="dropdown-link">useEffectAPI</Link>
              </li>
              <li >
                <Link to="/use-ref" className="dropdown-link">useRef</Link>
              </li>
              <li >
                <Link to="/use-memo" className="dropdown-link">useMemo</Link>
              </li>
            </ol>
          )}
        </div>

        <li>
          <Link to="/contact" className="link">Contact</Link>
        </li>
        <li>
          <Link to="/signup" className="link">Signup</Link>
        </li>
      </nav>
    </header>
  );
};

export default Navbar;
