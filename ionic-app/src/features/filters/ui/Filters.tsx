import { IonIcon } from "@ionic/react";
import { swapVerticalOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import "../styles/Filters.css";

export const Filters = () => {
  const history = useHistory();

  const handleFiltersClick = () => {
    history.push("/filters");
  };

  return (
    <div className="filters-container">
      <button className="filter-button" onClick={handleFiltersClick}>
        <span className="icon-wrapper">
          <IonIcon src="/assets/Filter.svg" className="filter-icon" />
          <span className="badge">1</span>
        </span>
        <span className="filter-label">Filters</span>
      </button>

      <button className="filter-button">
        <span className="icon-wrapper">
          <IonIcon icon={swapVerticalOutline} className="filter-icon" />
        </span>
        <span className="filter-label">Sort</span>
      </button>

      <button className="filter-button">
        <span className="icon-wrapper">
          <IonIcon src="/assets/Heard.svg" className="filter-icon" />
          <span className="badge">3</span>
        </span>
        <span className="filter-label">Favorites</span>
      </button>
    </div>
  );
};
