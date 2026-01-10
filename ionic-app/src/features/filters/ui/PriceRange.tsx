import { IonRange } from "@ionic/react";
import "../styles/PriceRange.css";

interface PriceRangeProps {
  value: { lower: number; upper: number };
  onChange: (value: { lower: number; upper: number }) => void;
}

export const PriceRange = ({ value, onChange }: PriceRangeProps) => {
  const handleRangeChange = (e: CustomEvent) => {
    const newValue = e.detail.value as { lower: number; upper: number };
    onChange(newValue);
  };

  return (
    <div className="price-range-container">
      <div className="price-range-title">Price per session</div>
      <div className="price-range-display">
        {value.lower}₴ – {value.upper}₴
      </div>
      <IonRange
        dualKnobs
        value={value}
        min={300}
        max={5000}
        step={100}
        onIonInput={handleRangeChange}
        className="price-range-slider"
      />
    </div>
  );
};
