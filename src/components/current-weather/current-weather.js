import './current-weather.css'

const CurrentWeather = () => {
    return (
        <div className='weather'>
            <div className='top'>
                <div>
                <p className='city'>indo</p>
                <p className='weather-description'>sunny</p>
                </div>
                <img alt='weather' className='weather-icon' src='icons/01d.png' />
            </div>
            <div className='bottom'>
                <p className='temperature'>18°C</p>
                <div className='details'>
                    <div className='parameter-row'>
                        <span className='parameter-label top'>details</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels like</span>
                        <span className='parameter-value'>16°C</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>2 m/s</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>humidity</span>
                        <span className='parameter-value'>15%</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>presure</span>
                        <span className='parameter-value'>15 hps</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CurrentWeather