import { View, ScrollView } from "react-native";

import { Text } from "@/components/ui/text";
import { H1, Muted } from "@/components/ui/typography";

export default function Calendar() {
	const today = new Date();
	const currentMonth = today.toLocaleDateString("en-US", {
		month: "long",
		year: "numeric",
	});

	return (
		<ScrollView className="flex-1 bg-background">
			<View className="p-4 gap-y-4">
				<H1 className="text-center">Calendar</H1>
				<Muted className="text-center">
					Manage your schedule and events here.
				</Muted>

				<View className="mt-6 gap-y-4">
					<View className="p-4 rounded-lg border border-border">
						<Text className="font-semibold mb-2">{currentMonth}</Text>
						<Muted>Your calendar view for this month.</Muted>
					</View>

					<View className="p-4 rounded-lg border border-border">
						<Text className="font-semibold mb-2">Today&apos;s Events</Text>
						<Muted>No events scheduled for today.</Muted>
					</View>

					<View className="p-4 rounded-lg border border-border">
						<Text className="font-semibold mb-2">Upcoming</Text>
						<Muted>
							Your upcoming appointments and reminders will appear here.
						</Muted>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}
