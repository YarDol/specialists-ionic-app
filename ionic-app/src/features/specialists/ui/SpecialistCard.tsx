import { IonIcon } from "@ionic/react";
import { star, heartOutline } from "ionicons/icons";
import { Specialist } from "../../../interfaces/specialists/specialist.interface";
import "../styles/SpecialistCard.css";

interface SpecialistCardProps {
  specialist: Specialist;
}

export const SpecialistCard = ({ specialist }: SpecialistCardProps) => {
  const {
    experience,
    clients,
    sessions,
    countryFlag,
    isVerified,
    badge,
    availableSlots,
  } = specialist;

  const formatPrice = (price: number) => {
    return `${price}₴`;
  };

  const formatDescription = (text: string, maxLength: number = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  return (
    <div className="specialist-card">
      <div className="specialist-card-content">
        <div className="specialist-card-header">
          <img
            src={specialist.avatar}
            alt={specialist.name}
            className="specialist-card-avatar"
          />

          <div className="specialist-card-info">
            <div className="specialist-card-name-row">
              <div className="specialist-card-name-row-info">
                <div className="specialist-card-name">{specialist.name}</div>
                <span className="specialist-card-flag">{countryFlag}</span>
                {isVerified && (
                  <IonIcon
                    src="/assets/Verified.svg"
                    className="specialist-card-verified"
                  />
                )}
              </div>

              <button className="specialist-card-favorite">
                <IonIcon icon={heartOutline} />
              </button>
            </div>

            <div className="specialist-card-badge">
              <span className="specialist-card-badge-icon">🏆</span>
              <span className="specialist-card-badge-text">{badge}</span>
            </div>

            <div className="specialist-card-pricing-row">
              <div className="specialist-card-pricing">
                <div className="specialist-card-price">
                  {formatPrice(specialist.price)}
                </div>
                <div className="specialist-card-duration">
                  {specialist.duration} min
                </div>
              </div>

              <div className="specialist-card-rating">
                <span className="specialist-card-rating-value">
                  <IonIcon icon={star} className="specialist-card-star" />
                  {specialist.rating}
                </span>
                <span className="specialist-card-reviews">
                  {specialist.reviewsCount.toLocaleString()} reviews
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="specialist-card-description">
          {formatDescription(specialist.description)}
        </p>

        <div className="specialist-card-stats">
          <div className="specialist-card-stat">
            <IonIcon
              src="/assets/Enterprise.svg"
              className="specialist-card-stat-icon"
            />
            <span>{experience} years of experience</span>
          </div>
          <div className="specialist-card-stat">
            <IonIcon
              src="/assets/Person.svg"
              className="specialist-card-stat-icon"
            />
            <span>
              {clients} clients • {sessions} sessions
            </span>
          </div>
        </div>

        <div className="specialist-card-slots">
          {availableSlots.map((slot, index) => (
            <button key={index} className="specialist-card-slot">
              {slot.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
