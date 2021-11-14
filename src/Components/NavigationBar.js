
import { React, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

import './NavigationBar.css';

function NavigationBar( props ) {

    // set initial state
    if ( props.dynamic ) {
        var initialState = "not-scrolled";
    }
    else {
        var initialState = "scrolled";
    }

    console.log(initialState);

    const [navBarState, changeNavBarState] = useState({initialState});
    
    window.addEventListener("scroll", () => {
        if ( props.dynamic ) {
            const offset = window.pageYOffset;
    
            if ( offset > 80 ) {
                changeNavBarState('scrolled');
            }
            
            if ( offset < 40 ) {
                changeNavBarState('not-scrolled');
            }
        }
    });

    return (
        <div id="navigation-bar" className={navBarState}>
            <div className="content">
                <Link to="/" className="brand-container">
                    <text className="brand">
                        Brand
                    </text>
                    <text className="outline">
                        Coffee
                    </text>
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
            <div className="background">
            </div>
        </div>
    );
}

export default NavigationBar;