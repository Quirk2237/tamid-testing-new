import { View, ScrollView } from "react-native";

import { Text } from "@/components/ui/text";
import { H1, Muted } from "@/components/ui/typography";

export default function Feed() {
	return (
		<ScrollView className="flex-1 bg-background">
			<View className="p-4 gap-y-4">
				<H1 className="text-center">Feed</H1>
				<Muted className="text-center">
					Your personalized feed content will appear here.
				</Muted>

				<View className="mt-6 gap-y-4">
					{/* Sample feed items */}
					<View className="p-4 rounded-lg border border-border">
						<Text className="font-semibold mb-2">Welcome to your feed!</Text>
						<Muted>
							This is where you&apos;ll see updates and content from your
							network.
						</Muted>
					</View>

					<View className="p-4 rounded-lg border border-border">
						<Text className="font-semibold mb-2">Getting started</Text>
						<Muted>
							Connect with others to see their posts and activities in your
							feed.
						</Muted>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}
