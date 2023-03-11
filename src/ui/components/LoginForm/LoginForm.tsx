import { TextInput, Button, Text, View } from "react-native";

export function LoginForm() {
  return (
    <View>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Contraseña" secureTextEntry />
      <Button title="Login" onPress={() => console.log("Enviado")} />
    </View>
  );
}
