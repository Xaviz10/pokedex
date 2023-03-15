import { StyleSheet } from "react-native";
// import { Platform } from 'react-native';
// marginBottom: Platform.OS === "android" ? 80 : 60,

export const stylesFlatList = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 20,
  },
});
