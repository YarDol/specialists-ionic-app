import "../styles/SpecialistCardSkeleton.css";

export const SpecialistCardSkeleton = () => {
  return (
    <div className="specialist-card-skeleton">
      <div className="skeleton-content">
        <div className="skeleton-header">
          <div className="skeleton-avatar" />

          <div className="skeleton-info">
            <div className="skeleton-name-row">
              <div className="skeleton-name" />
              <div className="skeleton-flag" />
            </div>

            <div className="skeleton-badge" />

            <div className="skeleton-pricing-row">
              <div className="skeleton-pricing">
                <div className="skeleton-price" />
                <div className="skeleton-duration" />
              </div>

              <div className="skeleton-rating">
                <div className="skeleton-rating-value" />
                <div className="skeleton-reviews" />
              </div>
            </div>
          </div>
        </div>

        <div className="skeleton-description">
          <div className="skeleton-line" />
          <div className="skeleton-line short" />
        </div>

        <div className="skeleton-stats">
          <div className="skeleton-stat" />
          <div className="skeleton-stat" />
        </div>

        <div className="skeleton-slots">
          <div className="skeleton-slot" />
          <div className="skeleton-slot" />
        </div>
      </div>
    </div>
  );
};
