import React, { useState, useEffect } from 'react';
import TableCell from './WebTableCell';
import { Logger } from '../../utils/Logger';

const TableRow = ({ flight, selectedOption }) => {
  const [previousFlight, setPreviousFlight] = useState(flight);
  const words = Object.values(flight);
  Logger.log('words', words);

  useEffect(() => {
    if (JSON.stringify(flight) !== JSON.stringify(previousFlight)) {
      setPreviousFlight(flight);
    }
  }, [flight, previousFlight]);

  return (
    <tr>
      <TableCell word={words} flight={flight} selectedOption={selectedOption} />
    </tr>
  );
};

export default TableRow;
