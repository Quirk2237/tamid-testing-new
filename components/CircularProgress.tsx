import React from "react";
import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { Text } from "@/components/ui/text";

interface CircularProgressProps {
	currentAmount: number;
	goalAmount: number;
	size?: number;
	strokeWidth?: number;
}

export default function CircularProgress({
	currentAmount,
	goalAmount,
	size = 184,
	strokeWidth = 8,
}: CircularProgressProps) {
	const radius = (size - strokeWidth) / 2;
	const circumference = radius * 2 * Math.PI;
	const progress = Math.min(currentAmount / goalAmount, 1);
	const strokeDashoffset = circumference - progress * circumference;

	return (
		<View className="items-center justify-center" style={{ width: size, height: size / 2 + 20 }}>
			<View className="absolute" style={{ width: size, height: size }}>
				<Svg width={size} height={size} style={{ transform: [{ rotate: "-90deg" }] }}>
					{/* Background arc */}
					<Circle
						cx={size / 2}
						cy={size / 2}
						r={radius}
						stroke="#f1f1f1"
						strokeWidth={strokeWidth}
						fill="none"
						strokeDasharray={`${circumference / 2} ${circumference}`}
						strokeLinecap="round"
					/>
					{/* Progress arc */}
					<Circle
						cx={size / 2}
						cy={size / 2}
						r={radius}
						stroke="#adb769"
						strokeWidth={strokeWidth}
						fill="none"
						strokeDasharray={`${circumference / 2} ${circumference}`}
						strokeDashoffset={strokeDashoffset}
						strokeLinecap="round"
					/>
				</Svg>
			</View>
			<View className="items-center">
				<Text className="text-4xl font-bold text-base-black">${currentAmount}</Text>
				<Text className="text-base font-semibold text-neutral-800">of ${goalAmount}</Text>
			</View>
		</View>
	);
}