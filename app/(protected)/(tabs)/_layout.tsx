import React from "react";
import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { View } from "react-native";

export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: "#110f0b",
				tabBarInactiveTintColor: "#808080",
				tabBarLabelStyle: {
					fontSize: 14,
					marginTop: -4,
				},
				tabBarStyle: {
					paddingTop: 12,
					paddingBottom: 8,
					height: 82,
					borderTopLeftRadius: 16,
					borderTopRightRadius: 16,
					borderTopWidth: 0,
					shadowColor: "#c2c2c2",
					shadowOffset: {
						width: 0,
						height: -4,
					},
					shadowOpacity: 0.06,
					shadowRadius: 23,
					elevation: 10,
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color, focused }) => (
						<Feather name="home" size={20} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="feed"
				options={{
					title: "Feed",
					tabBarIcon: ({ color, focused }) => (
						<Feather name="grid" size={20} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="calendar"
				options={{
					title: "Calendar",
					tabBarIcon: ({ color, focused }) => (
						<Feather name="calendar" size={20} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
