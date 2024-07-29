import React, { useState, useEffect } from "react";

const TableLetter = ({ letter, index }) => {
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    setFlip(false); // Reset flip state on prop change

    const timeout = setTimeout(() => {
      setFlip(true);
    }, 100 * index);

    return () => {
      clearTimeout(timeout); // Cleanup timeout on prop change or unmount
    };
  }, [letter, index]);

  return <div className={flip ? "flip" : ""}>{flip ? letter : null}</div>;
};

export default TableLetter;
