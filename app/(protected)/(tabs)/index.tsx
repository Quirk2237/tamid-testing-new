import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

import Header from "@/components/Header";
import KindnessCard from "@/components/KindnessCard";
import CircularProgress from "@/components/CircularProgress";
import AmountSelector from "@/components/AmountSelector";
import StatsCard from "@/components/StatsCard";
import AboutUsBar from "@/components/AboutUsBar";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

export default function Home() {
	const [selectedAmount, setSelectedAmount] = useState<number | "other">(25);

	return (
		<View className="flex-1 bg-base-50">
			<StatusBar barStyle="dark-content" />

			{/* Top Section with white background */}
			<View className="bg-base-white rounded-b-3xl pb-6">
				<View className="px-4">
					{/* Header */}
					<Header userName="Adam" />

					{/* Kindness Card */}
					<View className="mt-4 mb-4">
						<KindnessCard />
					</View>

					{/* Chart Section */}
					<View className="items-center mt-6 mb-6">
						<CircularProgress currentAmount={71} goalAmount={100} />
					</View>

					{/* Amount Selector */}
					<View className="mb-4">
						<AmountSelector
							selectedAmount={selectedAmount}
							onAmountSelect={setSelectedAmount}
						/>
					</View>

					{/* Donate Button */}
					<Button className="w-full h-12 bg-base-black rounded-full">
						<Text className="text-base-white font-semibold">Donate</Text>
					</Button>
				</View>
			</View>

			{/* Stats Section */}
			<ScrollView
				className="flex-1 px-4"
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingTop: 32, paddingBottom: 20 }}
			>
				<View className="gap-2 mb-8">
					{/* Streak Days */}
					<StatsCard
						icon="trending-up"
						iconColor="#adb769"
						iconBgColor="#adb769"
						title="Streak days"
						subtitle="Donated in a row"
						value="7 days"
					/>

					{/* Total Donations */}
					<StatsCard
						icon="dollar-sign"
						iconColor="#cab0ee"
						iconBgColor="#cab0ee"
						title="Your total donations"
						subtitle="You have contributed"
						value="$1,265"
					/>

					{/* Achievements */}
					<StatsCard
						icon="award"
						iconColor="#e6b379"
						iconBgColor="#e6b379"
						title="Achievements"
						subtitle="Your personal progress"
						value={
							<View className="flex-row">
								<Text className="text-lg font-semibold text-base-black">6</Text>
								<Text className="text-lg font-semibold text-neutral-800">
									/24
								</Text>
							</View>
						}
					/>

					{/* Impact Button */}
					<TouchableOpacity className="flex-row items-center justify-between border border-neutral-600 rounded-full px-4 py-3 h-12">
						<Text className="text-sm font-semibold text-base-black">
							What impact did I make?
						</Text>
						<Feather name="arrow-up-right" size={20} color="#808080" />
					</TouchableOpacity>
				</View>

				{/* About Us */}
				<AboutUsBar />
			</ScrollView>
		</View>
	);
}
