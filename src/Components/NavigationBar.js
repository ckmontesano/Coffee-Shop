
import { Link } from 'react-router-dom';

import './NavigationBar.css';

function NavigationBar() {

    return (
        <div id="navigation-bar">
            <Link to="/" className="brand-name">
                <text className="brand">Brand</text>
                <text>Coffee</text>
            </Link>
            <ul className="links">
                <li>
                    <Link to="/menu">
                        Menu
                        <hr/>
                    </Link>
                </li>
                <li>
                    <Link to="/locations">
                        Locations
                        <hr/>
                    </Link>
                </li>
                <li>
                    <Link to="/our-story">
                        Our Story
                        <hr/>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavigationBar;