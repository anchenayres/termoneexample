import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import RocketMascot from '../assets/rocketmascot.svg';
import Calendar from '../assets/calendar.svg';
import RocketOne from './RocketOne';
import RocketTwo from './RocketTwo';



const Compare = () => {

    const popRocket1 = useRef();
    const popRocket2 = useRef();

    useEffect(()=>{
        axios.get('https://api.spacexdata.com/v4/rockets')
        .then((res)=>{
            let data = res.data;

            let rocketOne = data.map((item)=> item.name);

            console.log(rocketOne);

        });
    },[]);


    const dateTime = new Date().toDateString();
   
    let formatDate = dateTime.substring(0, 15);


    return (
        <div className='dashLayout'>    
        <div className="leftMajor">
        <input className='search' placeholder='What are you looking for?'/>
            <div className='welcomeBanner'>
                <div className='welcomeLeft'>
                    <div className='dateTime'>
                    <img src={Calendar}/>{formatDate}
                    </div>
                    <h1>Who says Size doesn't Matter!</h1>
                    <p>Space X has come a long way since Falcon One, with close to full reusability with the falcon 9, and now poised to launch the largest and most powerful rocket ever built!   </p>
                </div>

                <div className='welcomeRight'>
                    <img src={RocketMascot}/>
                </div>
            </div>
        </div>
        <div className='rightMajor'>
        <div className='upcoming'>
                    <div className='upcoming_title'>
                        <h3>Rocket Comparison</h3>
                    </div>
                    <div className="rockets_card">
                        <div className='rocket_left_card'>
                            <h2>SELECT ROCKET ONE</h2>
                           <select ref={popRocket1}>
                                {selectOne}
                           </select>
                        </div>
                        <div className='rocket_right_card'>
                        <h2>SELECT ROCKET TWO</h2>
                        <select>
                              {selectTwo}
                           </select>
                        </div> 
                    </div>
                </div>
        </div>
        <div className='rocketContainer'>
            <div className='rocketOne'>
                <RocketOne/>
            </div>
            <div className='rocketTwo'>
               <RocketTwo/>
            </div>
        </div>
    
    </div>
    );
};

export default Compare;