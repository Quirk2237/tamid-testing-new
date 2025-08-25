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
		<View
			className="flex-row items-center justify-between px-4 py-4 rounded-full"
			style={{ backgroundColor: "#eff1e1" }}
		>
			<View className="flex-row items-center flex-1">
				<View className="w-6 h-6 mr-2 items-center justify-center">
					<Feather name="award" size={16} color="#adb769" />
				</View>
				<Text
					className="flex-1 text-sm"
					style={{
						color: "#110f0b",
						fontFamily: "Plus Jakarta Sans",
						fontWeight: "400",
					}}
				>
					{message}
				</Text>
			</View>
			<Text
				className="text-sm text-right"
				style={{
					color: "#110f0b",
					fontFamily: "Plus Jakarta Sans",
					fontWeight: "600",
				}}
			>
				{goalAmount}
			</Text>
		</View>
	);
}
