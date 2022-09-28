// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth, Auth as AuthType } from "firebase/auth";
import { firebaseConfig } from "./constants/firebase-config"; // eslint-disable-line require-path-exists/exists
import * as Notifications from "./elements/notifications";

// Initialize Firebase
export let app: FirebaseApp | undefined;
export let Auth: AuthType | undefined;

try {
  app = initializeApp(firebaseConfig);
  Auth = getAuth(app);
} catch (e) {
  app = undefined;
  Auth = undefined;
  console.error("Authentication failed to initialize", e);
  const error = e as Error;
  Notifications.addBanner(
    "Authentication failed to initialize" +
      (window.location.hostname === "localhost" ? ": " + error.message : ""),
    0,
    undefined,
    false
  );
  // $("body").text(
  //   "Failed to initialize Firebase. Are you sure you have the correct config in the firebase-config.ts file?"
  // );
}
