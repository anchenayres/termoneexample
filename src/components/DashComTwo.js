import 'chart.js/auto';
import React from 'react';
import {Bar} from 'react-chartjs-2'

const DashComTwo = (props) => {

    let total = props.success + props.failure;
    let percentage = (props.success / total) * 100;
    let final = Math.round(percentage * 100) / 100;

    let analysis = '';

    

    if(final > 80){
        analysis = "Spaceflight reusability is a hard problem, but Space X seems to have nailed it!  "
   } else if(final > 65){
        analysis = "You cant make an omelette without breaking a... few eggs. Still an amazing effort!"
   } else if(final < 60){
       analysis = "Oh... okay... well... Thats not that great now is it... ";
   } 


    const chartData = {
        labels: ['Success','Fails'],
        datasets: [
          {
            label: '',
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

      const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
              display: false
            }
          },
        tooltips: {
            callbacks: {
               label: function(tooltipItem) {
                      return tooltipItem.yLabel;
               }
            }
        }
    }



    return (
        <div className='dashComTwo'>
            <h2>BOOSTER LANDINGS </h2>
            <div className='chart-area chart-area-2'>
                <Bar data={chartData} options={options} />
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

export default DashComTwo;