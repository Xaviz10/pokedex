import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { httpService } from "./src/data/http";
import { NavigationTab } from "./src/ui/navigation";
import { API_URL } from "@env";

export default function App() {
  const { setBaseConfig } = httpService();
  setBaseConfig(API_URL);
  return (
    <NavigationContainer>
      <NavigationTab />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  app: {
    fontFamily: "lucida grande",
  },
});
