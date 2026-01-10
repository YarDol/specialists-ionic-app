import {
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonRouterOutlet,
} from "@ionic/react";
import { Route } from "react-router-dom";
import { SpecialistsPage } from "../screens/SpecialistsPage";
import { ChatPage } from "../screens/ChatPage";
import { ProfilePage } from "../screens/ProfilePage";
import { ListPage } from "../screens/ListPage";
import { FiltersPage } from "../screens/FiltersPage";
import "./styles/TabNavigator.css";

export const TabNavigator = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/">
          <SpecialistsPage />
        </Route>
        <Route exact path="/list">
          <ListPage />
        </Route>
        <Route exact path="/chat">
          <ChatPage />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
        <Route exact path="/filters">
          <FiltersPage />
        </Route>
      </IonRouterOutlet>
      <IonTabBar
        slot="bottom"
        className="custom-tab-bar"
        style={{
          paddingBottom: "env(safe-area-inset-bottom, 16px)",
          paddingLeft: "env(safe-area-inset-left, 0px)",
          paddingRight: "env(safe-area-inset-right, 0px)",
        }}
      >
        <IonTabButton className="custom-tab-button" tab="schedule" href="/">
          <IonIcon src="/assets/Calendar.svg" />
          <IonLabel>Schedule</IonLabel>
        </IonTabButton>
        <IonTabButton className="custom-tab-button" tab="list" href="/list">
          <IonIcon src="/assets/Chat.svg" />
          <IonLabel>List</IonLabel>
        </IonTabButton>
        <IonTabButton className="custom-tab-button" tab="chat" href="/chat">
          <IonIcon src="/assets/List.svg" />
          <IonLabel>Chat</IonLabel>
        </IonTabButton>
        <IonTabButton
          className="custom-tab-button"
          tab="profile"
          href="/profile"
        >
          <IonIcon src="/assets/User.svg" />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};
