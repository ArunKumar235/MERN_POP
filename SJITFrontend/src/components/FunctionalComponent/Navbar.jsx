import "../CSS/Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);

  return (
    <header>
      <nav>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            About
          </Link>
        </li>
        <li>
          <Link to="/gallery" className="link">
            Gallery
          </Link>
        </li>

        <div
          className="dropdown"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <span className="link">Hooks</span>
          {dropdown && (
            <ol className="dropdown-list">
              <li>
                <Link to="/use-state" className="dropdown-link">
                  useState
                </Link>
              </li>
              <li>
                <Link to="/use-effect" className="dropdown-link">
                  useEffect
                </Link>
              </li>
              <li>
                <Link to="/use-effect-api" className="dropdown-link">
                  useEffectAPI
                </Link>
              </li>
              <li>
                <Link to="/use-ref" className="dropdown-link">
                  useRef
                </Link>
              </li>
              <li>
                <Link to="/use-memo" className="dropdown-link">
                  useMemo
                </Link>
              </li>
              <li>
                <Link to="/use-callback" className="dropdown-link">
                  useCallback
                </Link>
              </li>
              <li>
                <Link to="/use-memoize" className="dropdown-link">
                  useMemoize(custom)
                </Link>
              </li>
            </ol>
          )}
        </div>

        <li>
          <Link to="/hoc" className="link">
            HoC
          </Link>
        </li>

        <div
          className="dropdown"
          onMouseEnter={() => setDropdown1(true)}
          onMouseLeave={() => setDropdown1(false)}
        >
          <span className="link">Memoization</span>
          {dropdown1 && (
            <ol className="dropdown-list">
              <li>
                <Link to="/memo" className="dropdown-link">
                  Memo
                </Link>
              </li>
              <li>
                <Link to="/lazy" className="dropdown-link">
                  LazyComponent
                </Link>
              </li>
            </ol>
          )}
        </div>
        
        <li>
          <Link to="/res" className="link">
            ContextAPI
          </Link>
        </li>
        
        <li>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </li>

        <li>
          <Link to="/signup" className="link">
            Signup
          </Link>
        </li>
      </nav>
    </header>
  );
};

export default Navbar;
