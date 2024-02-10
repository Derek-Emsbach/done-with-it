import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text } from "react-native";

export default function App() {
	const handlePress = () => console.log("Text Pressed");
	return (
		<SafeAreaView style={styles.container}>
			<Text onPress={handlePress}>Done With It App</Text>
			<StatusBar style="auto" />
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
