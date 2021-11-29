
import StoreLocationNode from './StoreLocationNode.js';

import location0 from '../Images/Locations/coffee-shop-0.jpg';
import location1 from '../Images/Locations/coffee-shop-1.jpg';
import location2 from '../Images/Locations/coffee-shop-2.jpg';
import location3 from '../Images/Locations/coffee-shop-3.jpg';
import location4 from '../Images/Locations/coffee-shop-4.jpg';

const locations = [
    [
        "Phoenix, AZ",
        "352 E Baldwin St",
        "(555) 555-5555",
        "9am",
        "5pm"
    ],
    [
        "Surprise, AZ",
        "52 Saint Row Dr",
        "(555) 555-5555",
        "",
        ""
    ],
    [
        "Flagstaff, AZ",
        "12 Coconino Ln",
        "(555) 555-5555",
        "8am",
        "3pm"
    ],
    [
        "Alberquerque, NM",
        "3828 Piermont Dr",
        "(555) 555-5555",
        "6am",
        "1pm"
    ],
    [
        "Santa Fe, NM",
        "824 W Trailside Ave",
        "(555) 555-5555",
        "7am",
        "2pm"
    ]
]

function Locations() {

    return (
        <div className="content-container">
            <div className="offset-for-navbar">
                <h1>~ Locations ~</h1>
                <h2>Come visit us, we'd love to see you!</h2>
                <div>
                    <StoreLocationNode
                        id={0}
                        location={locations[0][0]}
                        address={locations[0][1]}
                        phone={locations[0][2]}
                        open={locations[0][3]}
                        close={locations[0][4]}
                        photo={location0}
                    />
                    <StoreLocationNode
                        id={1}
                        location={locations[1][0]}
                        address={locations[1][1]}
                        phone={locations[1][2]}
                        open={locations[1][3]}
                        close={locations[1][4]}
                        photo={location1}
                    />
                    <StoreLocationNode
                        id={2}
                        location={locations[2][0]}
                        address={locations[2][1]}
                        phone={locations[2][2]}
                        open={locations[2][3]}
                        close={locations[2][4]}
                        photo={location2}
                    />
                    <StoreLocationNode
                        id={3}
                        location={locations[3][0]}
                        address={locations[3][1]}
                        phone={locations[3][2]}
                        open={locations[3][3]}
                        close={locations[3][4]}
                        photo={location3}
                    />
                    <StoreLocationNode
                        id={4}
                        location={locations[4][0]}
                        address={locations[4][1]}
                        phone={locations[4][2]}
                        open={locations[4][3]}
                        close={locations[4][4]}
                        photo={location4}
                    />
                </div>
            </div>
        </div>
    );
}

export default Locations;