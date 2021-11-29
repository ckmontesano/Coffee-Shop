
import { Link } from 'react-router-dom';
import { useState } from 'react';

import './NavigationBar.css';

function NavigationBar() {

    const [navBarState, changeNavBarState] = useState("collapsed");

    function toggleNavBar() {
        if ( navBarState == "collapsed") {
            changeNavBarState("expanded");
        } else {
            changeNavBarState("collapsed");
        }
    }

    return (
        <div id="navigation-bar" className={navBarState}>
            <Link onClick={toggleNavBar} to="/" className="brand-name">
                <text className="brand">Brand</text>
                <text>Coffee</text>
            </Link>
            <div onClick={toggleNavBar} id="expand-collapse-button" className={navBarState}>
                {/* this button expands or collapses the navigation bar (only shown on mobile) */}
                <text>x</text>
            </div>
            <ul className="links">
                <li>
                    <Link onClick={toggleNavBar} to="/menu">
                        Menu
                        <hr/>
                    </Link>
                </li>
                <li>
                    <Link onClick={toggleNavBar} to="/locations">
                        Locations
                        <hr/>
                    </Link>
                </li>
                <li>
                    <Link onClick={toggleNavBar} to="/our-story">
                        Our Story
                        <hr/>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavigationBar;