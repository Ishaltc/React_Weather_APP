import "./forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { TbHandClick } from "react-icons/tb";

const WEEK_DAYS = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

export default function Forecast({ data }) {
  const datas = data.data.forecast;
  const [count, setCount] = useState(4);
  const dispatch = useDispatch();

  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  const calculateCount = (e) => {
    e.preventDefault();
    setCount(e.target.value);
  };
  dispatch({ type: "countData", payload: count });

  return (
    <>
      <label className="title">Daily</label>
      <form className="form">
        How many days:
        <input
          type="number"
          min="1"
          max="12"
          className="countCalculate"
          onChange={calculateCount}
        />
      </form>
      <Accordion allowZeroExpanded>
        {datas.forecastday.slice(0, count).map((item, i) => (
          <AccordionItem key={i}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={item.day.condition.icon}
                  />

                  <label className="day">{item.date}</label>
                  <label className="press">
                    <TbHandClick className="click" />
                  </label>
                  <label className="description">
                    {item.day.condition.text}
                  </label>
                  <label className="sunrise">
                    sunrise:{item.astro.sunrise}
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Sunset</label>
                  <label className="moonrise">:{item.astro.sunset}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Moonset</label>
                  <label className="moonrise">:{item.astro.moonset}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>moonrise</label>
                  <label className="moonrise">:{item.astro.moonrise}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Moon Phase</label>
                  <label className="moonrise">:{item.astro.moon_phase}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Moon illumination</label>
                  <label className="moonrise">
                    :{item.astro.moon_illumination}%
                  </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
