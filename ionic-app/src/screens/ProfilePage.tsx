import { IonContent, IonPage } from "@ionic/react";
import { Header } from "../features/header/ui/Header";

export const ProfilePage = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "60vh",
            padding: "32px 16px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              backgroundColor: "#f5f5f5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "24px",
            }}
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                fill="#757575"
              />
            </svg>
          </div>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "600",
              color: "#212121",
              margin: "0 0 8px 0",
            }}
          >
            Coming Soon
          </h2>
        </div>
      </IonContent>
    </IonPage>
  );
};
