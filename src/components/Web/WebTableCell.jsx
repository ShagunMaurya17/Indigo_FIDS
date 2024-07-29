import React from "react";

import TableLetter from "./WebTableLetter";

const TableCell = ({ word, flight, selectedOption }) => {
  if (selectedOption === "intl-arr" || selectedOption === "dom-arr") {
    const { arriving, ata, airlines, destination, flightNumber, status } =
      flight;

    return (
      <>
        <td>
          {arriving &&
            Array.from(arriving).map((letter, index) => (
              <TableLetter key={index} letter={letter} index={index} />
            ))}
        </td>
        <td>
          {ata &&
            Array.from(ata).map((letter, index) => (
              <TableLetter key={index} letter={letter} index={index} />
            ))}
        </td>
        <td>
          {airlines &&
            Array.from(airlines).map((letter, index) => (
              <TableLetter key={index} letter={letter} index={index} />
            ))}
        </td>
        <td>
          {destination &&
            Array.from(destination).map((letter, index) => (
              <TableLetter key={index} letter={letter} index={index} />
            ))}
        </td>
        <td>
          {flightNumber &&
            Array.from(flightNumber).map((letter, index) => (
              <TableLetter key={index} letter={letter} index={index} />
            ))}
        </td>
        <td>
          {status &&
            Array.from(status).map((letter, index) => (
              <TableLetter key={index} letter={letter} index={index} />
            ))}
        </td>
      </>
    );
  } else if (selectedOption === "intl-dept" || selectedOption === "dom-dept") {
    const { departing, airlines, destination, flightNumber, gate, status } =
      flight;

    return (
      <>
        <td>
          {departing &&
            Array.from(departing).map((letter, index) => (
              <TableLetter key={index} letter={letter} index={index} />
            ))}
        </td>
        <td>
          {airlines &&
            Array.from(airlines).map((letter, index) => (
              <TableLetter key={index} letter={letter} index={index} />
            ))}
        </td>
        <td>
          {destination &&
            Array.from(destination).map((letter, index) => (
              <TableLetter key={index} letter={letter} index={index} />
            ))}
        </td>
        <td>
          {flightNumber &&
            Array.from(flightNumber).map((letter, index) => (
              <TableLetter key={index} letter={letter} index={index} />
            ))}
        </td>
        <td>
          {gate &&
            Array.from(gate).map((letter, index) => (
              <TableLetter key={index} letter={letter} index={index} />
            ))}
        </td>
        <td>
          {status &&
            Array.from(status).map((letter, index) => (
              <TableLetter key={index} letter={letter} index={index} />
            ))}
        </td>
      </>
    );
  } else {
    return null; // Return null if selectedOption is neither "intl-arr" nor "dom-arr" nor "intl-dept" nor "dom-dept"
  }
};

export default TableCell;
