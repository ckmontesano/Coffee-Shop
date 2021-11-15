
import './Splash.css';
import SplashImage from '../Images/marketing-1.jpg';
import Arrow from '../Images/arrow.png';

function Splash() {

    function toNextSection() {
        const amount = window.outerHeight - 240;
        window.scrollBy({
            top: amount,
            left: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className="splash">
            <div className="content">
                <div className="underline-effect">
                    <h1>
                        Made to <br/>
                        <cursive>Order</cursive>
                    </h1>
                    <hr/>
                    <p>Have a special request? Our baristas can make it happen!</p>
                </div>
                <div onClick={toNextSection} className="next-section-button">
                    <img src={Arrow} ></img>
                </div>
                
            </div>
            <div className="image">
                <img src={SplashImage}/>
            </div>
            
        </div>
    );
}

export default Splash;