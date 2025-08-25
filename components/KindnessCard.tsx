import React from "react";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Text } from "@/components/ui/text";

interface KindnessCardProps {
	message?: string;
	goalAmount?: string;
}

export default function KindnessCard({
	message = "Your kindness is working",
	goalAmount = "$29 to goal",
}: KindnessCardProps) {
	return (
		<View className="flex-row items-center justify-between px-4 py-2 rounded-full bg-olive-200">
			<View className="flex-row items-center flex-1 gap-2">
				<View className="w-6 h-6 items-center justify-center">
					<Feather name="award" size={16} color="#adb769" />
				</View>
				<Text className="flex-1 text-sm font-normal text-base-black">
					{message}
				</Text>
			</View>
			<Text className="text-sm font-semibold text-base-black">
				{goalAmount}
			</Text>
		</View>
	);
}
