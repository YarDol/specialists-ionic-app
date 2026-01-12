import axios from "axios";
import { Capacitor } from "@capacitor/core";

// Determine API base URL based on platform
const getBaseURL = () => {
  // For mobile apps (iOS/Android), use the computer's IP address
  // You can also use localhost if running on simulator
  if (Capacitor.isNativePlatform()) {
    // For iOS simulator, use localhost
    // For real device, replace with your computer's IP address
    // Example: return "http://192.168.1.100:3001";
    return "http://localhost:3001";
  }
  // For web, use localhost
  return "http://localhost:3001";
};

export const api = axios.create({
  baseURL: getBaseURL(),
});
