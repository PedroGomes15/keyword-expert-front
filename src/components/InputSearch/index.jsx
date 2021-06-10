import "./style.css";

import { useState } from "react";

export const InputSearch = ({ onSubmit }) => {
  const [input, setInput] = useState(""); // '' is the initial state value

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSubmit(input);
    }
  };

  const handleSubmitSearch = () => {
    onSubmit(input);
  };

  return (
    <div className="input-container">
      <input
        className="input-search"
        placeholder="Search for keyword"
        value={input}
        type="text"
        onKeyDown={handleKeyDown}
        onInput={(e) => setInput(e.target.value)}
      />
      <button className="input-submit" onClick={handleSubmitSearch} />
    </div>
  );
};
