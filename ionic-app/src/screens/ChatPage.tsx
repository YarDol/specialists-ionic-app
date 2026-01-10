import { IonContent, IonPage } from "@ionic/react";
import { Header } from "../features/header/ui/Header";

export const ChatPage = () => {
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
                d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16ZM7 9H17V11H7V9ZM7 12H15V14H7V12Z"
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
