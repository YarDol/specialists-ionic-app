import { SpecialistCard } from "./SpecialistCard";

export const SpecialistsList = () => {
  return (
    <div className="specialists-list">
      <div className="specialists-list-item">
        <div className="specialists-list-item-content">
          <div className="specialists-list-item-content-title">
            <SpecialistCard />
          </div>
        </div>
      </div>
    </div>
  );
};
