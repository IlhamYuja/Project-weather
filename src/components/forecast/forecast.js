import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import './forecast.css'
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const Forecast = ({data}) =>  {

    // get days
    const dayInWeek = new Date().getDay()
    const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInWeek))

    return (
        //accordion
    <div>
        <label className="title">Daily</label>
       <Accordion allowZeroExpanded>
            {data.list.slice(0, 5).map((item, index) =>(
                <AccordionItem key={index}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className='daily-item'>
                                <img alt='weather' className='icon-small' src={`icons/${item.weather[0].icon}.png`} />
                                <label className='day'>{forecastDays[index]}</label>
                                <label className='description'>{item.weather[0].description}</label>
                                <label className='min-max-temp'>{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max  )}°C</label>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className='daily-details'>
                        <div className='daily-details-item'>
                                <label className='daily-item-name'>Feels Like</label>
                                <label className='daily-item-value'>{Math.round(item.main.feels_like)}°C</label>
                            </div>
                            <div className='daily-details-item'>
                                <label className='daily-item-name'>Pressure</label>
                                <label className='daily-item-value'>{item.main.pressure} hPa</label>
                            </div>
                            <div className='daily-details-item'>
                                <label className='daily-item-name'>Humidity</label>
                                <label className='daily-item-value'>{item.main.humidity} %</label>
                            </div>
                            <div className='daily-details-item'>
                                <label className='daily-item-name'>Clouds</label>
                                <label className='daily-item-value'>{item.clouds.all} %</label>
                            </div>
                            <div className='daily-details-item'>
                                <label className='daily-item-name'>Wind Speed</label>
                                <label className='daily-item-value'>{Math.round(item.wind.speed)} Km/h</label>
                            </div>
                            <div className='daily-details-item'>
                                <label className='daily-item-name'>Sea Level</label>
                                <label className='daily-item-value'>{item.main.sea_level} m</label>
                            </div>
                            <div className='daily-details-item'>
                                <label className='daily-item-name'>Grand Level</label>
                                <label className='daily-item-value'>{item.main.grnd_level} m</label>
                            </div>
                        </div>
                    </AccordionItemPanel>

                </AccordionItem>
                
            ))}
            
       </Accordion>
    </div>
    )
}
export default Forecast; 