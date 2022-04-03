import React, { useEffect, useState } from 'react';

const Upcoming = (props) => {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [days, setDays] = useState(0);
    

       useEffect(()=>{

        const interval = setInterval(() => {
            
        const deadline = props.dateCount;

        const total = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor( (total/1000) % 60 );
        const minutes = Math.floor( (total/1000/60) % 60 );
        const hours = Math.floor( (total/(1000*60*60)) % 24 );
        const days = Math.floor( total/(1000*60*60*24) );

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);

          }, 1000);

        return () => clearInterval(interval);

        
       }, []);

       
        

    return (
        <div className='upcoming'>
                    <div className='upcoming_title'>
                        <h3>Coming Up Next...</h3>
                    </div>
                    <div className="upcoming_card">
                        <div className='left_card'>
                            <div className='patch'>
                                <img src={props.patch}/>
                            </div>
                        </div>
                        <div className='right_card'>
                            <h3>{props.name}</h3>
                            <p className='card_date'>{props.date}</p>
                        </div>
                        <p className='card_desc'>{props.details}</p>
                        <div className='card_stats'>
                            <div className='flight_number'>
                                <h3>{props.val1}</h3>
                                <p>Flight Number</p>
                            </div>
                            <div className='num_crew'>
                                <h3>{props.val2}</h3>
                                <p>Crew On Board</p>
                            </div>
                            <div className='core_flights'>
                                <h3>{props.val3}</h3>
                                <p>Booster Flight</p>
                            </div>
                        </div>
                        <div className='count_down'>
                        <h1>{days}<span className='counter'> D </span>{hours}<span className='counter'> H</span> {minutes}<span className='counter'> M</span> {seconds}<span className='counter'> S</span></h1>
                        <p>Time Displayed for UTC (+2 Hours for SA)</p>
                        </div>
                    </div>
                </div>
    );
};

export default Upcoming;