import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, SafeAreaView } from "react-native";

export default function App() {
  console.log(require("./assets/icon.png"))
	return (
		<SafeAreaView style={styles.container}>
			<Text>Done With It App!</Text>
			{/* <Image source={require('./assets/icon.png')} /> */}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
