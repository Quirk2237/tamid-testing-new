import React from "react";
import { View } from "react-native";
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
	size = 280,
	strokeWidth = 12,
}: CircularProgressProps) {
	const radius = (size - strokeWidth) / 2;
	const progress = Math.min(currentAmount / goalAmount, 1);
	const dashCount = 32;
	const dashWidth = 3.2;
	const dashHeight = strokeWidth;
	const gapAngle = Math.PI / (dashCount * 2);
	const dashAngle = gapAngle * 0.8;

	const renderDashes = () => {
		const dashes = [];

		for (let i = 0; i < dashCount; i++) {
			const angle = (Math.PI * i) / (dashCount - 1);
			const x = size / 2 + radius * Math.cos(angle + Math.PI);
			const y = size / 2 + radius * Math.sin(angle + Math.PI);
			const rotation = (angle * 180) / Math.PI - 90;

			const isActive = i / (dashCount - 1) <= progress;
			const color = isActive ? "#98a350" : "#f1f1f1";

			dashes.push(
				<View
					key={i}
					style={{
						position: "absolute",
						width: dashWidth,
						height: dashHeight,
						backgroundColor: color,
						borderRadius: dashWidth / 2,
						left: x - dashWidth / 2,
						top: y - dashHeight / 2,
						transform: [{ rotate: `${rotation}deg` }],
						...(isActive && {
							shadowColor: "#98a350",
							shadowOffset: { width: 0, height: 1 },
							shadowOpacity: 0.3,
							shadowRadius: 2,
							elevation: 3,
						}),
					}}
				/>,
			);
		}

		return dashes;
	};

	return (
		<View
			className="items-center justify-center"
			style={{ width: size, height: size / 2 + 50 }}
		>
			<View style={{ width: size, height: size, position: "relative", top: 60 }}>
				{/* Thin inner tracing arc */}
				<View
					style={{
						position: "absolute",
						width: (radius - strokeWidth - 6) * 2,
						height: radius - strokeWidth - 6,
						borderTopLeftRadius: radius - strokeWidth - 6,
						borderTopRightRadius: radius - strokeWidth - 6,
						borderWidth: 1,
						borderColor: "#f1f1f1",
						borderBottomWidth: 0,
						left: size / 2 - (radius - strokeWidth - 6),
						top: size / 2 - (radius - strokeWidth - 6),
						overflow: "hidden",
					}}
				/>
				{renderDashes()}
			</View>
			{/* Mask for bottom part */}
			<View 
				style={{
					position: "absolute",
					bottom: 0,
					left: 0,
					right: 0,
					height: 0,
					backgroundColor: "white",
				}}
			/>
			<View className="absolute items-center" style={{ top: size / 2 - 80 }}>
				<Text className="text-[42px] font-bold text-[#110f0b] leading-tight mt-5">
					${currentAmount}
				</Text>
				<Text className="text-base font-semibold text-[#808080]">
					of ${goalAmount}
				</Text>
			</View>
		</View>
	);
}
