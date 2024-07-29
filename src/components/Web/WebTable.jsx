import React, { useState, useEffect } from 'react';
import TableHead from './WebTableHead';
import TableBody from './WebTableBody';
import FirstTimeDialogue from './WebFirstTimeDialogue';

const Table = ({ selectedOption }) => {
  const [showFirstTimeDialogue, setShowFirstTimeDialogue] = useState(false);

  useEffect(() => {
    // Check if the dialogue has been shown before
    const firstTimeDialogueShown = localStorage.getItem(
      'firstTimeDialogueShown'
    );

    if (!firstTimeDialogueShown) {
      setShowFirstTimeDialogue(true);
    }
  }, []);

  const handleCloseFirstTimeDialogue = () => {
    localStorage.setItem('firstTimeDialogueShown', 'true');
    setShowFirstTimeDialogue(false);
  };

  return (
    <div>
      {showFirstTimeDialogue && (
        <FirstTimeDialogue handleClose={handleCloseFirstTimeDialogue} />
      )}
      <table>
        <TableHead selectedOption={selectedOption} />
        <TableBody selectedOption={selectedOption} />
      </table>
    </div>
  );
};

export default Table;
