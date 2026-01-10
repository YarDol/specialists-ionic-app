import { IonRange } from "@ionic/react";
import { useState } from "react";
import "../styles/PriceRange.css";

export const PriceRange = () => {
  const [priceRange, setPriceRange] = useState<{
    lower: number;
    upper: number;
  }>({
    lower: 300,
    upper: 5000,
  });

  const handleRangeChange = (e: CustomEvent) => {
    const value = e.detail.value as { lower: number; upper: number };
    setPriceRange(value);
  };

  return (
    <div className="price-range-container">
      <div className="price-range-title">Price per session</div>
      <div className="price-range-display">
        {priceRange.lower}₴ – {priceRange.upper}₴
      </div>
      <IonRange
        dualKnobs
        value={priceRange}
        min={300}
        max={5000}
        step={100}
        onIonInput={handleRangeChange}
        className="price-range-slider"
      />
    </div>
  );
};
