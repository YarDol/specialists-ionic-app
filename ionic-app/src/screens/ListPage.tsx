import { IonContent, IonPage } from "@ionic/react";
import { Header } from "../features/header/ui/Header";

export const ListPage = () => {
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
                d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 10H9V7H7V10ZM15 10H17V7H15V10ZM7 14H9V11H7V14ZM15 14H17V11H15V14ZM7 18H9V15H7V18ZM15 18H17V15H15V18Z"
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
