
import './Splash.css';
import SplashImage from '../Images/marketing-1.jpg';

function Splash() {

    return (
        <div className="splash">
            <div className="content">
                <div className="underline-effect">
                    <h1>Made to <br/>Order</h1>
                    <hr/>
                    <p>Our baristas are happy to take your order exactly how you like!</p>
                </div>
                
            </div>
            <div className="image">
                <img src={SplashImage}/>
            </div>
            
        </div>
    );
}

export default Splash;