const Forecast = (props)=>{
    return(
        <div className="forcast_container">
            <p style={{color:"gray"}}>{props.date}</p>
            <p>{props.degree}°</p>
            <p style={{fontSize:"14px"}}>{props.condition}</p>
        </div>
    )
}

export default Forecast;