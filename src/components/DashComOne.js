import 'chart.js/auto';
import axios from 'axios';
import React, { useDebugValue, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';


const DashComOne = (props) => { 

    let total = props.success + props.failure;
    let percentage = (props.success / total) * 1000;
    let final = Math.round(percentage * 100) / 100;

    let analysis = '';

    if(final > 80){
        analysis = "An almost perfect launch success ratio! Looks like they are doing something right!  "
   } else if(final > 65){
        analysis = "It hasn't been a smooth ride so far, must be growing pains! Lets hope for a more successful future!"
   } else if(final < 60){
       analysis = "Oh Gosh... its not looking good...";
   } 

    const chartData = {
        labels: "",
        datasets: [
          {
            label: 'Success/Fails',
            data: [props.success, props.failure],
            backgroundColor: [
              '#4566d4',
              '#ffffff',
            ],
            borderColor: [
              '#4566d4',
              '#ffffff',
            ],
            borderWidth: 1,
          },
        ],
      };




    return (
        <div className='dashComOne'>
            <h2>TOTAL SPACE X LAUNCES</h2>
            <div className='chart-area'>
                <Doughnut data={chartData} />
            </div>
            <div className='right-side'>
                <h1>{final}%</h1>
                <p>Success Rate</p>
                <div className='ratioCon'>
                    <div className='leftNum'>
                        <h3>{props.failure}</h3>
                        <p>Failed</p>
                    </div>
                    <div className='rightNum'>
                        <h3>{props.success}</h3>
                        <p>Success</p>
                    </div>
                </div>
                <div className='analysisLogic'>
                    <p>{analysis}</p>
                </div>
            </div>
            
        </div>
    );
};

export default DashComOne;