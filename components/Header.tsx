import React from "react";
import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";

interface HeaderProps {
	userName: string;
	avatarSource?: string;
	onNotificationPress?: () => void;
}

export default function Header({
	userName,
	avatarSource,
	onNotificationPress,
}: HeaderProps) {
	return (
		<View
			className="flex-row justify-between items-center px-6 pt-4 pb-4"
			style={{ backgroundColor: "#F8F8F8" }}
		>
			<StatusBar barStyle="dark-content" />

			<View className="flex-row items-center">
				<Image
					source={
						avatarSource ? { uri: avatarSource } : require("@/assets/icon.png")
					}
					className="w-8 h-8 rounded-full mr-3"
				/>
				<Text
					className="text-lg"
					style={{ fontWeight: "400", fontSize: 18, color: "#000000" }}
				>
					Hello, {userName}!
				</Text>
			</View>

			<TouchableOpacity
				onPress={onNotificationPress}
				className="w-8 h-8 justify-center items-center"
			>
				<Feather name="bell" size={20} color="#999999" />
			</TouchableOpacity>
		</View>
	);
}
