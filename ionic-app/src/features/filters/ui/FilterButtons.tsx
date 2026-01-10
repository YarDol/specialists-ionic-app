import { useHistory } from "react-router-dom";
import "../styles/FilterButtons.css";

interface FilterButtonsProps {
  resultCount: number;
  loading?: boolean;
  onClear: () => void;
  onApply: () => void;
}

export const FilterButtons = ({
  resultCount,
  onClear,
  onApply,
}: FilterButtonsProps) => {
  const history = useHistory();

  const handleClear = () => {
    onClear();
  };

  const handleApply = () => {
    onApply();
    history.push("/");
  };

  return (
    <div className="filter-buttons-container">
      <button className="filter-clear-button" onClick={handleClear}>
        Clear all
      </button>
      <button className="filter-apply-button" onClick={handleApply}>
        {`Show (${resultCount.toLocaleString()})`}
      </button>
    </div>
  );
};
