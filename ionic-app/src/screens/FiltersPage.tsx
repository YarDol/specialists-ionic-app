import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonFooter,
  useIonToast,
} from "@ionic/react";
import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/store";
import {
  setFilters,
  resetFilters,
  loadFilteredCount,
  loadSpecialists,
  clearError,
  DEFAULT_FILTERS,
} from "../store/slices/specialists.slice";
import { Filters } from "../interfaces/specialists/filters.interface";
import { PriceRange } from "../features/filters/ui/PriceRange";
import { GenderSelector } from "../features/filters/ui/GenderSelector";
import { AgeRange } from "../features/filters/ui/AgeRange";
import { FilterButtons } from "../features/filters/ui/FilterButtons";
import "../features/filters/styles/FiltersPage.css";

export const FiltersPage = () => {
  const dispatch = useAppDispatch();
  const [presentToast] = useIonToast();
  const { filters, filteredCount, countLoading, error } = useSelector(
    (state: RootState) => state.specialists
  );

  const [localFilters, setLocalFilters] = useState<Filters>(filters);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(loadFilteredCount(localFilters));
    }, 300);

    return () => clearTimeout(timer);
  }, [localFilters, dispatch]);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  useEffect(() => {
    if (error) {
      presentToast({
        message: error,
        duration: 3000,
        position: "top",
        color: "danger",
      });
      dispatch(clearError());
    }
  }, [error, presentToast, dispatch]);

  const handlePriceChange = useCallback(
    (value: { lower: number; upper: number }) => {
      setLocalFilters((prev) => ({
        ...prev,
        priceMin: value.lower,
        priceMax: value.upper,
      }));
    },
    []
  );

  const handleAgeChange = useCallback(
    (value: { lower: number; upper: number }) => {
      setLocalFilters((prev) => ({
        ...prev,
        ageMin: value.lower,
        ageMax: value.upper,
      }));
    },
    []
  );

  const handleGenderChange = useCallback(
    (value: "male" | "female" | undefined) => {
      setLocalFilters((prev) => ({
        ...prev,
        gender: value,
      }));
    },
    []
  );

  const handleClear = () => {
    dispatch(resetFilters());
    dispatch(loadSpecialists({ append: false }));
  };

  const handleApply = () => {
    dispatch(setFilters(localFilters));
    dispatch(loadSpecialists({ filters: localFilters, append: false }));
  };

  return (
    <IonPage>
      <IonHeader className="filters-page-header">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" text="" />
          </IonButtons>
          <IonTitle>Filters</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="filters-page-content">
          <PriceRange
            value={{
              lower: localFilters.priceMin ?? DEFAULT_FILTERS.priceMin!,
              upper: localFilters.priceMax ?? DEFAULT_FILTERS.priceMax!,
            }}
            onChange={handlePriceChange}
          />

          <div className="filters-page-divider" />

          <GenderSelector
            value={localFilters.gender ?? DEFAULT_FILTERS.gender}
            onChange={handleGenderChange}
          />

          <div className="filters-page-divider" />

          <AgeRange
            value={{
              lower: localFilters.ageMin ?? DEFAULT_FILTERS.ageMin!,
              upper: localFilters.ageMax ?? DEFAULT_FILTERS.ageMax!,
            }}
            onChange={handleAgeChange}
          />
        </div>
      </IonContent>
      <IonFooter className="filters-page-footer">
        <FilterButtons
          resultCount={filteredCount}
          loading={countLoading}
          onClear={handleClear}
          onApply={handleApply}
        />
      </IonFooter>
    </IonPage>
  );
};
