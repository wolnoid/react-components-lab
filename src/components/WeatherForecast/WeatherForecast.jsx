import './WeatherForecast.css'
import IconComponent from '../WeatherIcon/WeatherIcon.jsx'
import DataComponent from '../WeatherData/WeatherData.jsx'

const ForecastComponent = (props) => {
  return (
    <div className="weather">
        <h2>{props.day}</h2>
        <IconComponent 
            key={props.id}
            {...props}
        />
        <DataComponent
            key={props.id}
            {...props}
        />
    </div>
  );
};

export default ForecastComponent;