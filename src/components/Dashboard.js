import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Mascot from '../assets/mascot.svg';
import Calendar from '../assets/calendar.svg';
import DashComOne from './DashComOne';
import DashComTwo from './DashComTwo';
import Upcoming from './Upcoming';

const Dashboard = () => {

    const dateTime = new Date().toDateString();
   
    let formatDate = dateTime.substring(0, 15);

    const [dashOne, setDashOne] = useState(<DashComOne />);
    const [dashTwo, setDashTwo] = useState(<DashComTwo />);
    const [upcoming, setUpcoming] = useState();

    useEffect(()=>{
        axios.get('https://api.spacexdata.com/v5/launches')
        .then((res)=>{
            let data = res.data;

            let success = [];
            let failure = [];

            let landingAttempts = data.filter((item) => item.cores[0].landing_attempt === true).length;
            let landingSuccess = data.filter((item)=> item.cores[0].landing_attempt === true && item.cores[0].landing_success === true).length;
            let landingFails = landingAttempts - landingSuccess; 
          

            success.push(data.filter((item) => item.success === true).length);
            failure.push(data.filter((item) => item.success === false).length);
            
            setDashOne(<DashComOne success={success} failure={failure}/>)
            setDashTwo(<DashComTwo success={landingSuccess} failure={landingFails}/>)

        });

        axios.get('https://api.spacexdata.com/v5/launches/next')
        .then((res)=>{
            let data = res.data;
            const patch = data.links.patch.small;
            const name = data.name;
            const date = data.date_utc;
            const newDate = date.substring(0, 19);
            const details = data.details;
            const flightNum = data.flight_number;
            const crew = data.crew.length;
            const booster = data.cores[0].flight;

            setUpcoming(<Upcoming patch={patch} name={name} date={newDate} details={details} val1={flightNum} val2={crew} val3={booster} dateCount={date} />)


        });




    }, []);


    return (
        <div className='dashLayout'>    
            <div className="leftMajor">
            <input className='search' placeholder='What are you looking for?'/>
                <div className='welcomeBanner'>
                    <div className='welcomeLeft'>
                        <div className='dateTime'>
                        <img src={Calendar}/>{formatDate}
                        </div>
                        <h1>Welcome Back User</h1>
                        <p>The OpenSpace platform has all your Space X related data! We have condensed all the information you are looking for in once elegant react project! </p>
                    </div>

                    <div className='welcomeRight'>
                        <img src={Mascot}/>
                    </div>
                </div>

                {dashOne}
                {dashTwo}

            </div>
            <div className='rightMajor'>
               {upcoming}
            </div>
        
        </div>
    );
};

export default Dashboard;