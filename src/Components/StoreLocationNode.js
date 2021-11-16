
import './StoreLocationNode.css';

import phoneIcon from '../Images/phone-icon.png';
import clockIcon from '../Images/clock-icon.png';

function StoreLocationNode(props) {

    // note: this node allows for a photo prop
    //       however I am not currently using it.

    const callLink = 'tel:' + props.phone;

    const idName = 'node' + props.id;

    var hours = "24 Hours";

    // reset hours if not 24 hours
    if ( props.open != "" ) {
        hours = props.open + "-" + props.close;
    }

    console.log(hours);

    return (
        <div className="node" id={idName}>
            <div className="photo">
                <img src={props.photo} draggable="false" />
            </div>
            <hr />
            <text className="address">{props.address}</text>
            <text className="location">{props.location}</text>
            <div className="inline-info">
                <img src={phoneIcon}  draggable="false" />
                <a href={callLink}>
                    <text className="phone">{props.phone}</text>
                </a>
            </div>
            <div className="inline-info">
                <img src={clockIcon} draggable="false" />
                <text className="hours">{hours}</text>
            </div>
            
            
        </div>
    );
}

export default StoreLocationNode;