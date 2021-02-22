import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function Card2()
{
//3d cards animation
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

//card flip animation
const [flipped, set1] = useState(false)
const { transform, opacity } = useSpring({
opacity: flipped ? 1 : 0,
transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
config: { mass: 5, tension: 500, friction: 80 }
});

return(
    <animated.div className="card1"  
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            onClick = {() =>  set1(state => !state)}
            style={{ transform: props.xys.interpolate(trans) }}>
            <animated.div className="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
                <div className="card1-back">
                    <h1 className="text-card1">
                        1
                    </h1>
                    <h1 className="text-card1">
                        2
                    </h1>
                    <h1 className="text-card1">
                        3
                    </h1>
                    <h1 className="text-card1">
                        4
                    </h1>
                </div>
            </animated.div>
            <animated.div className="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`) }}>

            </animated.div>
</animated.div>
);
}

export default Card2;