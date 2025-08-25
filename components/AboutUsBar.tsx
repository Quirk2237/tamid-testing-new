import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "@/components/ui/text";
import Logo from "@/assets/Logo.svg";

interface AboutUsBarProps {
	onPress?: () => void;
}

export default function AboutUsBar({ onPress }: AboutUsBarProps) {
	return (
		<TouchableOpacity
			onPress={onPress}
			className="flex-row items-center justify-between bg-base-white rounded-full px-4 py-3 h-12"
			activeOpacity={0.7}
		>
			<View className="flex-row items-center gap-2">
				<Logo width={98} height={20} />
			</View>
			<Text className="text-sm font-semibold text-neutral-800">About Us</Text>
		</TouchableOpacity>
	);
}
