import React, { useState, useEffect } from "react";
import Table from "./WebTable";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";

import "../../styles/Web.css";

const WebTableIndex = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [currTime, setCurrTime] = useState("");
  const [currDate, setCurrDate] = useState("");

  useEffect(() => {
    const updateTimeAndDate = () => {
      const time = new Date();
      setCurrTime(time.toLocaleTimeString());
      setCurrDate(
        time.toLocaleDateString(undefined, {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      );
    };

    // Update time and date every second
    const interval = setInterval(() => {
      updateTimeAndDate();
    }, 1000);

    // Cleanup interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  let headerText = "";
  let iconComponent = null;

  if (selectedOption === "intl-arr") {
    headerText = "INTERNATIONAL ARRIVAL / अन्तराष्ट्रिय आगमन";
    iconComponent = <FaPlaneArrival className="custom-icon" />;
  } else if (selectedOption === "dom-arr") {
    headerText = "DOMESTIC ARRIVAL / अन्तरिक आगमन";
    iconComponent = <FaPlaneArrival className="custom-icon" />;
  } else if (selectedOption === "intl-dept") {
    headerText = "INTERNATIONAL DEPARTURE / अन्तराष्ट्रिय प्रस्थान";
    iconComponent = <FaPlaneDeparture className="custom-icon" />;
  } else if (selectedOption === "dom-dept") {
    headerText = "DOMESTIC DEPARTURE / अन्तराष्ट्रिय प्रस्थान";
    iconComponent = <FaPlaneDeparture className="custom-icon" />;
  }

  return (
    <div className="departures">
      <header>
        <div className="header-option">
          <input
            type="radio"
            name="option"
            id="intl-arr-1"
            value="intl-arr"
            onChange={handleOptionChange}
          />
          <label htmlFor="intl-arr-1">International Arr</label>
          <input
            type="radio"
            name="option"
            id="dom-arr"
            value="dom-arr"
            onChange={handleOptionChange}
          />
          <label htmlFor="dom-arr">Domestic Arr</label>
          <input
            type="radio"
            name="option"
            id="intl-dept"
            value="intl-dept"
            onChange={handleOptionChange}
          />
          <label htmlFor="intl-dept">International Dept</label>
          <input
            type="radio"
            name="option"
            id="dom-dept"
            value="dom-dept"
            onChange={handleOptionChange}
          />
          <label htmlFor="dom-dept">Domestic Dept</label>
        </div>

        <div className="header-main">
          <div className="header-left">
            {iconComponent} {headerText}
          </div>
          <div className="header-right">
            <div className="header-left_top">{currTime}</div>
            <div className="header-bottom">{currDate}</div>
          </div>
        </div>
      </header>

      <Table selectedOption={selectedOption} />
    </div>
  );
};

export default WebTableIndex;
