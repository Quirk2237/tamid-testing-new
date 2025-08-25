import { View } from "react-native";

import Header from "@/components/Header";
import KindnessCard from "@/components/KindnessCard";

export default function Home() {
	return (
		<View className="flex-1 bg-background">
			<Header userName="User" />
			<View className="px-4 pt-4">
				<KindnessCard />
			</View>
		</View>
	);
}
