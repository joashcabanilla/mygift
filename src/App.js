import React from 'react';
import {useSpring, animated} from 'react-spring';
import './App.css';
import {BrowserRouter as Router,Switch, Route,Link} from 'react-router-dom';
import Card from './card.js';

function App(){
    const members = ["member1","member2","member3","member4","member5","member6","member7","member8","member9","member10","member11","member12","member13"];
    const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;

    const { radians } = useSpring({
        to: async next => {
          while (1) await next({ radians: 2 * Math.PI})
        },
        from: { radians: 0 },
        config: { duration: 3500 },
        reset: true,
});

const home = () => {
    return(<div className="main-div">
            <div className="letter_pictures">            
            <animated.div className={members[0]} style={{transform: radians.interpolate(interp(1))}}>
                <div className="H">
                    <p className="h">
                        H
                    </p>
                </div>
            </animated.div>
            <animated.div className={members[1]} style={{transform: radians.interpolate(interp(2))}}>
            <div className="A">
                    <p className="a">
                        A
                    </p>
                </div>
            </animated.div>
            <animated.div className={members[2]} style={{transform: radians.interpolate(interp(1))}}>
            <div className="P">
                    <p className="p">
                        P
                    </p>
                </div>
            </animated.div>
            <animated.div className={members[3]} style={{transform: radians.interpolate(interp(2))}}>
            <div className="P2">
                    <p className="p2">
                        P
                    </p>
                </div>
            </animated.div>
            <animated.div className={members[4]} style={{transform: radians.interpolate(interp(1))}}>
            <div className="Y">
                    <p className="y">
                        Y
                    </p>
                </div>
            </animated.div>
            <animated.div className={members[5]} style={{transform: radians.interpolate(interp(2))}}>
            <div className="B">
                    <p className="b">
                        B
                    </p>
                </div>
            </animated.div>
            <animated.div className={members[6]} style={{transform: radians.interpolate(interp(1))}}>
            <div className="I">
                    <p className="i">
                        I
                    </p>
                </div>
            </animated.div>
            <animated.div className={members[7]} style={{transform: radians.interpolate(interp(2))}}>
            <div className="R">
                    <p className="r">
                        R
                    </p>
                </div>
            </animated.div>
            <animated.div className={members[8]} style={{transform: radians.interpolate(interp(1))}}>
            <div className="T">
                    <p className="t">
                        T
                    </p>
                </div>
            </animated.div>
            <animated.div className={members[9]} style={{transform: radians.interpolate(interp(2))}}>
            <div className="H2">
                    <p className="h2">
                        H
                    </p>
                </div>
            </animated.div>
            <animated.div className={members[10]} style={{transform: radians.interpolate(interp(1))}}>
            <div className="D">
                    <p className="d">
                        D
                    </p>
                </div>
            </animated.div>
            <animated.div className={members[11]} style={{transform: radians.interpolate(interp(2))}}>
            <div className="A2">
                    <p className="a2">
                        A
                    </p>
                </div>
            </animated.div>
            <animated.div className={members[12]} style={{transform: radians.interpolate(interp(1))}}>
            <div className="Y2">
                    <p className="y2">
                        Y
                    </p>
                </div>
            </animated.div>
            </div>
            <div className="name">
                <p className="name1">Maria</p>
                <p className="name2">Luisa</p>
                <p className="name3">Papilirin</p>
            </div>
            <Link className="open-button" to ="/cards">
                CLICK TO OPEN GIFT
            </Link>
            <div className="picture">
                <img className="pic1" src="seventeen_logo.png"/>
                <img className="pic2" src="seventeen_logo.png"/>
                <img className="pic3" src="seventeen_logo.png"/>
                <img className="pic4" src="seventeen_logo.png"/>
                <img className="pic5" src="seventeen_logo.png"/>
                <img className="pic6" src="seventeen_logo.png"/>
            </div>
        </div>);}
    return(
        <Router>
        <Switch>
        <Route path="/" exact component={home}>
            
        </Route>
        <Route  path="/cards" component ={Card}/>
        </Switch>
        </Router>
    );
}   
export default App;
