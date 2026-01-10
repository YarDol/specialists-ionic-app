import "../styles/GenderSelector.css";

type Gender = "male" | "female";

interface GenderSelectorProps {
  value: Gender | undefined;
  onChange: (value: Gender | undefined) => void;
}

export const GenderSelector = ({ value, onChange }: GenderSelectorProps) => {
  return (
    <div className="gender-selector-container">
      <div className="gender-selector-title">Gender</div>
      <div className="gender-selector-options">
        <button
          className={`gender-option ${value === "male" ? "selected" : ""}`}
          onClick={() => onChange(value === "male" ? undefined : "male")}
        >
          <span className="gender-emoji">👨</span>
          <span className="gender-label">Man</span>
        </button>
        <button
          className={`gender-option ${value === "female" ? "selected" : ""}`}
          onClick={() => onChange(value === "female" ? undefined : "female")}
        >
          <span className="gender-emoji">👩</span>
          <span className="gender-label">Woman</span>
        </button>
      </div>
    </div>
  );
};
