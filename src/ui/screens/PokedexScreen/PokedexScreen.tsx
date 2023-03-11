import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootTabParamList } from "../../navigation";
import { usePokedexViewModel } from "../../viewModels";

type PokedexScreenProps = NativeStackScreenProps<RootTabParamList, "Pokedex">;

export type PokedexScreenParamList = {
  Pokemon: undefined;
};

export function PokedexScreen({ navigation }: PokedexScreenProps) {
  usePokedexViewModel();
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button
        title="Go Pokemon"
        onPress={() => navigation.navigate("Pokemon")}
      />
    </SafeAreaView>
  );
}
