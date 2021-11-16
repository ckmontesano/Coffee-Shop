
import './StoreLocationNode.css';

import phoneIcon from '../Images/phone-icon.png';
import clockIcon from '../Images/clock-icon.png';

function StoreLocationNode(props) {

    // note: this node allows for a photo prop
    //       however I am not currently using it.

    var callLink = 'tel:' + props.phone;

    return (
        <div className="node">
            <text class="address">{props.address}</text>
            <text class="location">{props.location}</text>
            <div class="photo">
                <img src={props.photo} />
            </div>
            <div class="inline-info">
                <img src={phoneIcon} />
                <a href={callLink}>
                    <text class="phone">{props.phone}</text>
                </a>
            </div>
            <div class="inline-info">
                <img src={clockIcon} />
                <text class="hours">{props.open} - {props.close}</text>
            </div>
            
            
        </div>
    );
}

export default StoreLocationNode;