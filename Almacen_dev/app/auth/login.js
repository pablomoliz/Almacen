import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function AboutScreen() {
  return (
    <View>
      <Text>Acerca de</Text>
      <Link href="/" className="text-blue-400 text-xl">
        Ir a Inicio
      </Link>
    </View>
  );
}
