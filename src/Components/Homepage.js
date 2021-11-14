
import NavigationBar from "./NavigationBar";
import Splash from './Splash';

function Homepage() {

    return (
        <div>
            <NavigationBar dynamic={true}/>
            <Splash/>
            <h1>Hello, World!</h1>
        </div>
    );
}

export default Homepage;