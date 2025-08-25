import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "@/components/ui/text";

interface AmountSelectorProps {
	selectedAmount: number | "other";
	onAmountSelect: (amount: number | "other") => void;
	amounts?: number[];
}

export default function AmountSelector({
	selectedAmount,
	onAmountSelect,
	amounts = [10, 25, 50, 75],
}: AmountSelectorProps) {
	return (
		<View className="flex-row items-center justify-between bg-neutral-100 rounded-full px-4 py-1 h-14">
			{amounts.map((amount) => (
				<TouchableOpacity
					key={amount}
					onPress={() => onAmountSelect(amount)}
					className={`px-2 py-3 rounded-full w-12 items-center justify-center ${
						selectedAmount === amount ? "bg-base-white" : ""
					}`}
				>
					<Text
						className={`text-sm ${
							selectedAmount === amount ? "font-semibold text-base-black" : "font-normal text-neutral-800"
						}`}
					>
						${amount}
					</Text>
				</TouchableOpacity>
			))}
			<View className="w-px h-6 bg-neutral-600" />
			<TouchableOpacity
				onPress={() => onAmountSelect("other")}
				className={`px-4 py-3 rounded-lg ${
					selectedAmount === "other" ? "bg-base-white" : ""
				}`}
			>
				<Text
					className={`text-sm ${
						selectedAmount === "other" ? "font-semibold text-base-black" : "font-normal text-neutral-800"
					}`}
				>
					Other
				</Text>
			</TouchableOpacity>
		</View>
	);
}