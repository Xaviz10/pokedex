import { Text, View } from "react-native";

interface GreetingsProps {
  name: string;
}

export function Greetings({ name }: GreetingsProps) {
  return (
    <View>
      <Text>Hola {name}</Text>
    </View>
  );
}
