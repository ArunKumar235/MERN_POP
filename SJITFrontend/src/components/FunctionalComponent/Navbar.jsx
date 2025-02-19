import '../CSS/Navbar.css'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/gallery'>Gallery</Link></li>
                <span>Hooks</span>
                <ol>
                    <li><Link to='/use-state'>useState</Link></li>
                    <li><Link to='/use-effect'>useEffect</Link></li>
                    <li><Link to='/use-context'>useContext</Link></li>
                </ol>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/signup'>Signup</Link></li>
            </nav>
        </header>
    )
}

export default Navbar;