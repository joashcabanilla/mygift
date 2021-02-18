import React,{ useState } from 'react';
import './App.css';
import {useSprings, animated, interpolate} from 'react-spring';
import { useGesture } from 'react-use-gesture';

function card(){
    return(
        <div className="main-div">
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

export default card;