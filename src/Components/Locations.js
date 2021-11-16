
import StoreLocationNode from './StoreLocationNode.js';

import location1 from '../Images/Locations/coffee-shop-1.jpg';
import location2 from '../Images/Locations/coffee-shop-2.jpg';
import location3 from '../Images/Locations/coffee-shop-3.jpg';

function Locations() {

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
            "9am",
            "5pm"
        ],
        [
            "Flagstaff, AZ",
            "12 Coconino Ln",
            "(555) 555-5555",
            "9am",
            "5pm"
        ]
    ]

    return (
        <div>
            <div className="offset-for-navbar">
                <h1>~ Locations ~</h1>
                <div>
                    <StoreLocationNode
                        location={locations[0][0]}
                        address={locations[0][1]}
                        phone={locations[0][2]}
                        open={locations[0][3]}
                        close={locations[0][4]}
                        photo={location1}
                    />
                    <StoreLocationNode
                        location={locations[1][0]}
                        address={locations[1][1]}
                        phone={locations[1][2]}
                        open={locations[1][3]}
                        close={locations[1][4]}
                        photo={location2}
                    />
                    <StoreLocationNode
                        location={locations[2][0]}
                        address={locations[2][1]}
                        phone={locations[2][2]}
                        open={locations[2][3]}
                        close={locations[2][4]}
                        photo={location3}
                    />
                </div>
            </div>
        </div>
    );
}

export default Locations;