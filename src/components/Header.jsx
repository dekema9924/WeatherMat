import logo from "../assets/clear 1.png"
import SearchIcon from '@mui/icons-material/Search';
import React from "react";
import { useEffect } from "react";
import SideBar from './SideBar'
import Dashboard from "./Dashboard";



const Header = ()=>{

    const[isCountry, setCountry] = React.useState("London");
    const[isclicked, setclick] = React.useState()
    const[isCurrentWeather, setCurrentWeather] = React.useState({});
    const[isLoading, setLoading] = React.useState(true);
    const[isTime,setTime] = React.useState();
    const[isDate, setDate] = React.useState()



    //get Input
    const HandleInput =(event)=>{
        setCountry(event.target.value);
     
    } 

    //handle click
    const HandleClick = ()=>{
        setclick(prevState => !prevState)
        console.log(isCountry)
    }

    useEffect(()=>{
        getWeather();
        
    },[isclicked])
    


    async function getWeather(){
        const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${isCountry}&days=5`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '648f851e60msha4fb2d06e576b16p172595jsndf296a87739c',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setLoading(false)
            setCurrentWeather(result)
            var event = new Date(result.location.localtime);
            event = event.toLocaleTimeString('en-US')
            setTime(event)
            const d = new Date(result.location.localtime);
            let sliceddate = d.toString().slice(0,15)
            setDate(sliceddate);
            


        } catch (error) {
            console.error(error);
            if(error){
                alert("invalid location. please enter a valid location");
                window.location.reload();

            }
        }
    }




    
    return(
        <>
             <header>
                <div className="logo">
                    <img className="rotate_animation" src={logo} style={{width: "90px"}} alt="" />
                </div>
                <div className="search">
                    <input onChange={HandleInput} type="text" name="" id="" placeholder="Search city..." />
                    <button className="search_btn" onClick={HandleClick}><SearchIcon/></button>
                </div>
            </header>

            {
                !isLoading ? 
                <>
                    <SideBar
                        temp_f={isCurrentWeather.current.temp_f}
                        feelslike={isCurrentWeather.current.feelslike_f}
                        humidity={isCurrentWeather.current.humidity}
                        wind={isCurrentWeather.current.wind_mph}
                        condition={isCurrentWeather.current.condition.text}
                        time={isTime}
                        img={isCurrentWeather.current.condition.icon}
                        time_degreeone={isCurrentWeather.forecast.forecastday[0].hour[1].temp_f}
                        time_degreetwo={isCurrentWeather.forecast.forecastday[0].hour[2].temp_f}
                        time_degreethree={isCurrentWeather.forecast.forecastday[0].hour[3].temp_f}
                        time_degreefour={isCurrentWeather.forecast.forecastday[0].hour[4].temp_f}
                        condition_one={isCurrentWeather.forecast.forecastday[0].hour[1].condition.text}
                        condition_two={isCurrentWeather.forecast.forecastday[0].hour[2].condition.text}
                        condition_three={isCurrentWeather.forecast.forecastday[0].hour[3].condition.text}
                        condition_four={isCurrentWeather.forecast.forecastday[0].hour[4].condition.text}
                        timeone={isCurrentWeather.forecast.forecastday[0].hour[1].time}
                        timetwo={isCurrentWeather.forecast.forecastday[0].hour[2].time}
                        timethree={isCurrentWeather.forecast.forecastday[0].hour[3].time}
                        timefour={isCurrentWeather.forecast.forecastday[0].hour[4].time}

                    />  
                    <Dashboard
                       temp={isCurrentWeather.current.temp_f}
                        country={isCurrentWeather.location.region}
                        humidity={isCurrentWeather.current.humidity}
                        wind={isCurrentWeather.current.wind_mph}
                        condition={isCurrentWeather.current.condition.text}
                        date={isDate}
                        dateone={isCurrentWeather.forecast.forecastday[0].date}
                        datetwo={isCurrentWeather.forecast.forecastday[1].date}
                        datethree={isCurrentWeather.forecast.forecastday[2].date}
                        degreeone={isCurrentWeather.forecast.forecastday[0].day.avgtemp_f}
                        degreetwo={isCurrentWeather.forecast.forecastday[1].day.avgtemp_f}
                        degreethree={isCurrentWeather.forecast.forecastday[2].day.avgtemp_f}
                        conditionone={isCurrentWeather.forecast.forecastday[0].day.condition.text}
                        conditiontwo={isCurrentWeather.forecast.forecastday[1].day.condition.text}
                        conditionthree={isCurrentWeather.forecast.forecastday[2].day.condition.text}
                        />
                </> : "...Loading"
            }
        </>
     
    )

}


export default Header;