import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Text } from "@/components/ui/text";

interface StatsCardProps {
	icon: keyof typeof Feather.glyphMap;
	iconColor: string;
	iconBgColor: string;
	title: string;
	subtitle: string;
	value: string | React.ReactNode;
	onPress?: () => void;
}

export default function StatsCard({
	icon,
	iconColor,
	iconBgColor,
	title,
	subtitle,
	value,
	onPress,
}: StatsCardProps) {
	const Container = onPress ? TouchableOpacity : View;

	return (
		<Container
			onPress={onPress}
			className="flex-row items-center bg-base-white rounded-full px-4 py-4 h-[75px]"
		>
			<View
				className="w-10 h-10 rounded-full items-center justify-center mr-4"
				style={{ backgroundColor: iconBgColor }}
			>
				<Feather name={icon} size={20} color="white" />
			</View>
			<View className="flex-1 flex-row items-center justify-between">
				<View className="flex-1">
					<Text className="text-sm font-semibold text-base-black">{title}</Text>
					<Text className="text-xs font-normal text-neutral-800">
						{subtitle}
					</Text>
				</View>
				{typeof value === "string" ? (
					<Text className="text-lg font-semibold text-base-black">{value}</Text>
				) : (
					value
				)}
			</View>
		</Container>
	);
}
