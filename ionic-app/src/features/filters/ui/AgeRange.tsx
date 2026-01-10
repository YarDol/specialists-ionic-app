import { IonRange } from "@ionic/react";
import { useState } from "react";
import "../styles/AgeRange.css";

export const AgeRange = () => {
  const [ageRange, setAgeRange] = useState<{ lower: number; upper: number }>({
    lower: 22,
    upper: 55,
  });

  const handleRangeChange = (e: CustomEvent) => {
    const value = e.detail.value as { lower: number; upper: number };
    setAgeRange(value);
  };

  return (
    <div className="age-range-container">
      <div className="age-range-title">Age</div>
      <div className="age-range-display">
        {ageRange.lower} – {ageRange.upper}+
      </div>
      <IonRange
        dualKnobs
        value={ageRange}
        min={18}
        max={65}
        step={1}
        onIonInput={handleRangeChange}
        className="age-range-slider"
      />
    </div>
  );
};
