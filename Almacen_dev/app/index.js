import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View>
      <Text>Página principal</Text>
      <Link href="/about">Ir a Acerca de</Link>
    </View>
  );
}
