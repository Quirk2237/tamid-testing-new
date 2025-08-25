import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Text } from "@/components/ui/text";

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
		<View className="flex-row justify-between items-center">
			<View className="flex-row items-center gap-3">
				<View className="w-10 h-10 rounded-full bg-violet-200 overflow-hidden">
					{avatarSource ? (
						<Image
							source={{ uri: avatarSource }}
							className="w-10 h-10"
							resizeMode="cover"
						/>
					) : (
						<View className="w-10 h-10 bg-violet-200" />
					)}
				</View>
				<Text className="text-sm font-semibold text-base-black">
					Hello, {userName}!
				</Text>
			</View>

			<TouchableOpacity
				onPress={onNotificationPress}
				className="w-6 h-6 justify-center items-center"
			>
				<Feather name="bell" size={18} color="#808080" />
			</TouchableOpacity>
		</View>
	);
}
