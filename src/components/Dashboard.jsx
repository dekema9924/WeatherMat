import LocationOnIcon from '@mui/icons-material/LocationOn';
import AirIcon from '@mui/icons-material/Air';
import WaterIcon from '@mui/icons-material/Water';
import Forecast from './Forecast';
const Dashboard = ({country,date,temp,condition, wind,humidity, degreeone,degreetwo, degreethree, conditionone, conditiontwo, conditionthree, dateone, datetwo,datethree})=>{
    return(
     <div className="dashboard_container">
        <div className="dashboard_header">
            <div className="location">
                <LocationOnIcon/>
                <p>{country}</p>
            </div>
            <p className="date">{date}</p>
        </div>
             <main>
                <div className="degree">
                    <h1 className='temp'>{temp}°</h1>
                    <p>{condition}</p>
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
            </main>

            <div className="forcast_props">
                <Forecast
                    date = {dateone}
                    degree = {degreeone}
                    condition = {conditionone}
                />
                <Forecast
                    date = {datetwo}
                    degree = {degreetwo}
                    condition = {conditiontwo}
                />
                 <Forecast
                    date = {datethree}
                    degree = {degreethree}
                    condition = {conditionthree}
                />
                  
            </div>

     
    
     
     </div>

    )
}

export default Dashboard;