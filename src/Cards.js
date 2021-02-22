import './App.css';
import Card1 from './components/Card1.js';
import Card2 from './components/Card2.js';
import Card3 from './components/Card3.js';
function Cards(){
    return(
        <div className="main-div">
            <div className="card-note">
                <h1 className="note">
                    CLICK THE CARD TO FLIP
                </h1>
            </div>
            <div className="all_card">
            <Card1 />
            <Card2 />
            <Card3 />
            </div>
            <div className="picture">
                <img className="pic1" src="seventeen_logo.png"/>
                <img className="pic2" src="seventeen_logo.png"/>
                <img className="pic3" src="seventeen_logo.png"/>
                <img className="pic4" src="seventeen_logo.png"/>
                <img className="pic5" src="seventeen_logo.png"/>
                <img className="pic6" src="seventeen_logo.png"/>
            </div>
        </div>
    );
}
export default Cards;