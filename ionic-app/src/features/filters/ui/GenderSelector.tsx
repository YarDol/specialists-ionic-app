import { useState } from "react";
import "../styles/GenderSelector.css";

type Gender = "man" | "woman";

export const GenderSelector = () => {
  const [selectedGender, setSelectedGender] = useState<Gender | null>("woman");

  return (
    <div className="gender-selector-container">
      <div className="gender-selector-title">Gender</div>
      <div className="gender-selector-options">
        <button
          className={`gender-option ${
            selectedGender === "man" ? "selected" : ""
          }`}
          onClick={() =>
            setSelectedGender(selectedGender === "man" ? null : "man")
          }
        >
          <span className="gender-emoji">👨</span>
          <span className="gender-label">Man</span>
        </button>
        <button
          className={`gender-option ${
            selectedGender === "woman" ? "selected" : ""
          }`}
          onClick={() =>
            setSelectedGender(selectedGender === "woman" ? null : "woman")
          }
        >
          <span className="gender-emoji">👩</span>
          <span className="gender-label">Woman</span>
        </button>
      </div>
    </div>
  );
};
