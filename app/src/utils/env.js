import { Platform } from "react-native";

const liveHost = "";
const localHost = "http://b10b-185-93-84-251.ngrok.io";

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = true;
export const host = !isDevelopment || isAndroid ? liveHost : localHost;