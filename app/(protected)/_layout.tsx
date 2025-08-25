import { Stack } from "expo-router";
import { View } from "react-native";
import Header from "@/components/Header";

export default function ProtectedLayout() {
	return (
		<View className="flex-1 bg-white dark:bg-gray-900">
			<Header
				userName="Adam"
				onNotificationPress={() => console.log("Notification pressed")}
			/>
			<Stack
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="(tabs)" />
				<Stack.Screen name="modal" options={{ presentation: "modal" }} />
			</Stack>
		</View>
	);
}
