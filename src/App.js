import React from 'react';
import {useSpring, animated, config} from 'react-spring';
import './App.css';
function App(){

    const member1_anim = useSpring(
        {
            from: {
                transform: 'translate3d(0,40px,0)',
                radians: 0,
            },
            to: {
                transform: 'translate3d(0,0,0)',
                radians: 5,
            },
            config: config.gentle,
            reset: true,
        }
    );

    return(
        <div className="main-div">
            <animated.div className="member1" style={member1_anim}>
            </animated.div>
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
export default App;