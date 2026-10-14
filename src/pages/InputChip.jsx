import React, { useState } from "react";

const InputChip = () => {
  const [chips, setChips] = useState([
    { id: 1, label: "JavaScript" },
    { id: 2, label: "React.js" },
    { id: 3, label: "TypeScript" },
  ]);
  const [chipInput, setChipInput] = useState("");

  const handleChipInput = (e) => {
    if (chipInput.trim().length < 1) return;
    if (e.key === "Enter") {
      const newChip = {
        id: Date.now().toString(),
        label: chipInput.trim(),
      };

      const updatedChips = [...chips, newChip];

      setChips(updatedChips);
      setChipInput("");
    }
  };

  const handleChipRemove = (id) => {
    const updatedChips = chips.filter((chip) => chip.id !== id)
    setChips(updatedChips)
  }
  
  return (
    <div className="input-chip">
      <h1 className="text-center w-full flex ">Input Chip</h1>
      <hr />

      <div className="input-chip-container">
        <input
          type="text"
          placeholder="Enter a tag"
          value={chipInput}
          onChange={(e) => setChipInput(e.target.value)}
          onKeyDown={(e) => handleChipInput(e)}
          className="input-chip-input"
        />

        <div className="input-chip-tags">
          {chips.map((chip) => {
            return (
              <div key={chip.id} className="input-chip-tag">
                <span className="input-chip-tag-label">{chip.label}</span>
                <span className="input-chip-tag-remove" onClick={() => handleChipRemove(chip.id)}>x</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InputChip;
