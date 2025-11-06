import React from "react";

function Translator() {
  return (
    <div className="translator">
      <img src="https://cdn-icons-png.flaticon.com/512/254/254024.png" alt="Translate" style={{ width: "20px", marginRight: "8px" }} />
      <select>
        <option value="en">English</option>
        <option value="rw">Kinyarwanda</option>
      </select>
    </div>
  );
}

export default Translator;
