
import { React, useState } from 'react';

import './NavigationBar.css';

function NavigationBar() {

    const [navBarState, changeNavBarState] = useState('not-scrolled');

    window.addEventListener("scroll", () => {
        const offset = window.pageYOffset;
        
        if ( offset > 80 ) {
            changeNavBarState('scrolled');
        }
        
        if ( offset < 40 ) {
            changeNavBarState('not-scrolled');
        }
    });

    return (
        <div id="navigation-bar" className={navBarState}>
            <div className="content">
                <div className="brand-container">
                    <text className="brand">
                        Brand
                    </text>
                    <text className="outline">
                        Coffee
                    </text>
                </div>
                <ul className="links">
                    <li>
                        <a>
                            Menu
                            <hr/>
                        </a>
                    </li>
                    <li>
                        <a>
                            Locations
                            <hr/>
                        </a>
                        
                    </li>
                    <li>
                        <a>
                            Our Story
                            <hr/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="background">
            </div>
        </div>
    );
}

export default NavigationBar;