import {View, Text, TouchableOpacity, Image} from "react-native";
import React from "react";
import {COLORS, SIZES} from "../constants";

export default function IconTextButton({label, icon, containerStyle, onPress}) {
	return (
		<TouchableOpacity
			style={{
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "center",
				height: 50,
				borderRadius: SIZES.radius,
				borderBottomColor: COLORS.black2,
				backgroundColor: COLORS.white,
				...containerStyle,
			}}
			onPress={onPress}
		>
			<Image
				source={icon}
				resizeMode="contain"
				style={{
					width: 20,
					height: 20,
					tintColor: COLORS.secondary,
				}}
			/>
			<Text
				style={{
					marginLeft: SIZES.base,
					fontSize: 18,
					color: COLORS.secondary,
				}}
			>
				{label}
			</Text>
		</TouchableOpacity>
	);
}
