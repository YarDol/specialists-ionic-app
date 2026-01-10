import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import "../styles/Header.css";

export const Header = () => {
  const total = useSelector((state: RootState) => state.specialists.total);

  return (
    <IonHeader className="custom-header">
      <IonToolbar className="custom-toolbar">
        <IonTitle className="custom-title">
          <div className="header-content">
            <div className="header-title">
              Build healthy relationships with your partner
            </div>
            <div className="header-subtitle">
              {total} providers are currently available
            </div>
          </div>
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};
