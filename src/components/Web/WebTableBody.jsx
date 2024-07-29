import React, { useState, useEffect, useCallback } from "react";
import TableRow from "./WebTableRow";
import { Logger } from "../../utils/Logger";

const TableBody = ({ selectedOption }) => {
  const [flights, setFlights] = useState(null);

  const getFlights = useCallback(() => {
    let apiUrl = ""; // API endpoint variable

    if (selectedOption === "intl-arr") {
      apiUrl = "http://localhost:5000/international-arrival-api";
    } else if (selectedOption === "dom-arr") {
      apiUrl = "http://localhost:5000/domestic-arrival-api";
    } else if (selectedOption === "intl-dept") {
      apiUrl = "http://localhost:5000/international-departure-api";
    } else if (selectedOption === "dom-dept") {
      apiUrl = "http://localhost:5000/domestic-departure-api";
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((flights) => setFlights(Object.values(flights.data)))
      .catch((err) => console.log(err));
  }, [selectedOption]);

  useEffect(() => {
    getFlights();

    const interval = setInterval(() => {
      getFlights();
    }, 30000);

    return () => {
      clearInterval(interval);
    };
  }, [selectedOption, getFlights]);

  Logger.log("flights res", flights);

  return (
    <tbody>
      {flights?.map((flight, _index) => (
        <TableRow
          key={_index}
          flight={flight}
          selectedOption={selectedOption}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
