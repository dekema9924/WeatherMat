import AirIcon from '@mui/icons-material/Air';
import WaterIcon from '@mui/icons-material/Water';
import Forecast from './Forecast';
import { green } from '@mui/material/colors';
import React from 'react';

const SideBar = ({
    temp_f, wind, humidity, condition, feelslike, time, img, 
    time_degreeone, time_degreetwo, time_degreethree,
     time_degreefour,condition_one, condition_two,condition_three, condition_four,
     timeone,timetwo,timethree,timefour
    })=>{

// isTime.split(0,11)
    return(
       <>
        <div className="sidebar_container">
            <h2 style={{marginTop: "20px"}}>WeatherMat</h2>
            <p>{time}</p>
            <section>
                <div className="degree">
                    <h1 className='temp'>{temp_f}°</h1>
                    <p className='feelslike'>feels like: {feelslike}° </p>
                    <p>{condition}</p>
                    <p><img src={img} alt="" /></p>

                </div>
                <div className="condition">
                   <div className="weather">
                        <AirIcon/>
                        <p>{wind}mph</p>
                   </div>
                   <div className="weather">
                        <WaterIcon/>
                        <p>{humidity}%</p>
                   </div>

                </div>
            </section>
            <div className="hourly_forcast">
                <h1>Hourly Forcast</h1>
                
                <div className="hour">
                    <Forecast
                        date = {timeone}
                        degree = {time_degreeone}
                        condition = {condition_one}
                    />
                    <Forecast
                        date = {timetwo}
                        degree = {time_degreetwo}
                        condition = {condition_two}
                    />
                    <Forecast
                        date = {timethree}
                        degree = {time_degreethree}
                        condition = {condition_three}
                    />
                    <Forecast
                        date = {timefour}
                        degree = {time_degreefour}
                        condition = {condition_four}
                    />
                </div>
            </div>
        </div>
       </>
    )
}

export default SideBar;