import "./WeatherForecast.css"

function oneDayForecast({oneForecast}) {
return <div className="weather">
  <h2>{oneForecast.day}</h2>
  <img src={oneForecast.img} alt={oneForecast.imgAlt} />
  <p><span>conditions: </span>{oneForecast.conditions}</p>
  <p><span>time: </span>{oneForecast.time}</p>
</div>
}

export default oneDayForecast