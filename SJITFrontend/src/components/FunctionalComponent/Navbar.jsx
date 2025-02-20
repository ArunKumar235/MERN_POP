import '../CSS/Navbar.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <header>
            <nav>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/gallery'>Gallery</Link></li>
                <div 
                    className='dropdown' 
                    onMouseEnter={() => setDropdown(true)} 
                    onMouseLeave={() => setDropdown(false)}
                >
                    <span>Hooks</span>
                    {dropdown && (
                        <ol className='dropdown-list'>
                            <li className='dropdown-link'><Link to='/use-state'>useState</Link></li>
                            <li className='dropdown-link'><Link to='/use-effect'>useEffect</Link></li>
                            <li className='dropdown-link'><Link to='/use-effect-api'>useEffectAPI</Link></li>
                        </ol>
                    )}
                </div>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/signup'>Signup</Link></li>
            </nav>
        </header>
    )
}

export default Navbar;