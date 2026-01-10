import { IonRange } from "@ionic/react";
import "../styles/AgeRange.css";

interface AgeRangeProps {
  value: { lower: number; upper: number };
  onChange: (value: { lower: number; upper: number }) => void;
}

export const AgeRange = ({ value, onChange }: AgeRangeProps) => {
  const handleRangeChange = (e: CustomEvent) => {
    const newValue = e.detail.value as { lower: number; upper: number };
    onChange(newValue);
  };

  return (
    <div className="age-range-container">
      <div className="age-range-title">Age</div>
      <div className="age-range-display">
        {value.lower} – {value.upper}+
      </div>
      <IonRange
        dualKnobs
        value={value}
        min={18}
        max={65}
        step={1}
        onIonInput={handleRangeChange}
        className="age-range-slider"
      />
    </div>
  );
};
