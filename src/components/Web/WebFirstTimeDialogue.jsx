import React, { useState, useEffect } from "react";

const FirstTimeDialogue = () => {
  const [dialogueShown, setDialogueShown] = useState(false);

  useEffect(() => {
    const isDialogueShown = localStorage.getItem("firstTimeDialogueShown");
    if (isDialogueShown) {
      setDialogueShown(true);
    }
  }, []);

  const handleClose = () => {
    const isDialogueShown = localStorage.getItem("firstTimeDialogueShown");
    if (!isDialogueShown) {
      localStorage.setItem("firstTimeDialogueShown", "true");
      setDialogueShown(true);
    }
  };

  return (
    <div id="dialougeBox">
      {!dialogueShown && <></>}

      {!dialogueShown && (
        <button
          className="closeButton"
          onClick={handleClose}
          style={{ color: "black", padding: "0.6rem", margin: "0.6rem" }}
        >
          Close
        </button>
      )}
    </div>
  );
};

export default FirstTimeDialogue;
