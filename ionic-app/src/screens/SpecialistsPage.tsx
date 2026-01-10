import { IonContent, IonPage } from "@ionic/react";
import { useEffect } from "react";
import { useAppDispatch } from "../store/store";
import { loadSpecialists } from "../store/slices/specialists.slice";
import { Header } from "../features/header/ui/Header";
import { Filters } from "../features/filters/ui/Filters";
import { SpecialistsList } from "../features/specialists/ui/SpecialistsList";

export const SpecialistsPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadSpecialists());
  }, [dispatch]);

  return (
    <IonPage>
      <Header />
      <Filters />
      <IonContent>
        <div className="specialists-page-content">
          <SpecialistsList />
        </div>
      </IonContent>
    </IonPage>
  );
};
