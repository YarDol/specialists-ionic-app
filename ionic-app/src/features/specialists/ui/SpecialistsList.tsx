import { useSelector } from "react-redux";
import {
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { refreshOutline } from "ionicons/icons";
import { RootState, useAppDispatch } from "../../../store/store";
import {
  loadSpecialists,
  nextPage,
  clearError,
} from "../../../store/slices/specialists.slice";
import { SpecialistCard } from "./SpecialistCard";
import { SpecialistCardSkeleton } from "./SpecialistCardSkeleton";
import "../styles/SpecialistsList.css";

export const SpecialistsList = () => {
  const dispatch = useAppDispatch();
  const { items, loading, total, error } = useSelector(
    (state: RootState) => state.specialists
  );

  const hasMore = items.length < total;

  const handleInfinite = async (event: CustomEvent<void>) => {
    if (hasMore && !error) {
      dispatch(nextPage());
      await dispatch(loadSpecialists({ append: true }));
    }
    (event.target as HTMLIonInfiniteScrollElement).complete();
  };

  const handleRetry = () => {
    dispatch(clearError());
    dispatch(loadSpecialists({ append: false }));
  };

  if (loading && items.length === 0) {
    return (
      <div className="specialists-list">
        {[...Array(3)].map((_, index) => (
          <SpecialistCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error && items.length === 0) {
    return (
      <div className="specialists-list-error">
        <div>Failed to load specialists</div>
        <IonButton onClick={handleRetry} fill="outline" color="danger">
          <IonIcon icon={refreshOutline} slot="start" />
          Retry
        </IonButton>
      </div>
    );
  }

  if (!loading && !error && items.length === 0) {
    return (
      <div className="specialists-list-empty">
        <p>No specialists found</p>
      </div>
    );
  }

  return (
    <>
      <div className="specialists-list">
        {items.map((specialist) => (
          <SpecialistCard key={specialist.id} specialist={specialist} />
        ))}
      </div>

      <IonInfiniteScroll
        onIonInfinite={handleInfinite}
        threshold="100px"
        disabled={!hasMore || !!error}
      >
        <IonInfiniteScrollContent
          loadingSpinner="crescent"
          loadingText="Loading more specialists..."
        />
      </IonInfiniteScroll>
    </>
  );
};
