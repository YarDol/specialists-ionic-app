import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import { PriceRange } from "../features/filters/ui/PriceRange";
import { GenderSelector } from "../features/filters/ui/GenderSelector";
import { AgeRange } from "../features/filters/ui/AgeRange";
import { FilterButtons } from "../features/filters/ui/FilterButtons";
import "../features/filters/styles/FiltersPage.css";

export const FiltersPage = () => {
  return (
    <IonPage>
      <IonHeader className="filters-page-header">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Filters</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="filters-page-content">
          <PriceRange />

          <div className="filters-page-divider" />

          <GenderSelector />

          <div className="filters-page-divider" />

          <AgeRange />

          <FilterButtons />
        </div>
      </IonContent>
    </IonPage>
  );
};
