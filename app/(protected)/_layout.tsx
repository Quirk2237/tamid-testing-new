import { Stack } from "expo-router";
import { SafeAreaView } from "@/components/safe-area-view";

export default function ProtectedLayout() {
	return (
		<SafeAreaView className="flex-1 bg-white dark:bg-gray-900">
			<Stack
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="(tabs)" />
				<Stack.Screen name="modal" options={{ presentation: "modal" }} />
			</Stack>
		</SafeAreaView>
	);
}
