import { IonContent, IonPage, useIonToast } from "@ionic/react";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/store";
import { loadSpecialists, clearError } from "../store/slices/specialists.slice";
import { Header } from "../features/header/ui/Header";
import { Filters } from "../features/filters/ui/Filters";
import { SpecialistsList } from "../features/specialists/ui/SpecialistsList";

export const SpecialistsPage = () => {
  const dispatch = useAppDispatch();
  const [presentToast] = useIonToast();
  const hasLoadedRef = useRef(false);

  const { items, loading, error } = useSelector(
    (state: RootState) => state.specialists
  );

  useEffect(() => {
    if (items.length === 0 && !loading && !error && !hasLoadedRef.current) {
      hasLoadedRef.current = true;
      dispatch(loadSpecialists({ append: false }));
    }
  }, [dispatch, items.length, loading, error]);

  useEffect(() => {
    if (error) {
      presentToast({
        message: error,
        duration: 3000,
        position: "top",
        color: "danger",
        buttons: [
          {
            text: "Retry",
            handler: () => {
              dispatch(clearError());
              hasLoadedRef.current = false;
            },
          },
        ],
      });
    }
  }, [error, presentToast, dispatch]);

  return (
    <IonPage>
      <Header />
      <div className="filters-wrapper">
        <Filters />
      </div>
      <IonContent>
        <SpecialistsList />
      </IonContent>
    </IonPage>
  );
};
