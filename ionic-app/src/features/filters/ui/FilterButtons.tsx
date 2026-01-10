import { useHistory } from "react-router-dom";
import "../styles/FilterButtons.css";

interface FilterButtonsProps {
  resultCount?: number;
  onClear?: () => void;
  onApply?: () => void;
}

export const FilterButtons = ({
  resultCount = 2345,
  onClear,
  onApply,
}: FilterButtonsProps) => {
  const history = useHistory();

  const handleClear = () => {
    if (onClear) {
      onClear();
    }
  };

  const handleApply = () => {
    if (onApply) {
      onApply();
    }
    history.push("/");
  };

  return (
    <div className="filter-buttons-container">
      <button className="filter-clear-button" onClick={handleClear}>
        Clear all
      </button>
      <button className="filter-apply-button" onClick={handleApply}>
        Show ({resultCount})
      </button>
    </div>
  );
};
