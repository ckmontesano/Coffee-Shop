
import NavigationBar from "./NavigationBar";
import './Locations.css';

function Locations() {

    return (
        <div>
            <NavigationBar dynamic={false}/>
            <div className="offset-for-navbar">
                <h1>~ Locations ~</h1>
            </div>
            
        </div>
    );
}

export default Locations;