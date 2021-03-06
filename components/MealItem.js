import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform, ImageBackground} from "react-native";
import DefaultText from "./DefaultText";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const MealItem = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.mealItem}>
            <TouchableCmp onPress={props.onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow,...styles.mealHeader}}>
                        <ImageBackground
                            source={{
                                uri: props.image
                            }}
                            style={styles.bgImage}
                        >
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <DefaultText style={{color: Colors.accentColor}}><Ionicons name="ios-hourglass" size={15} color={Colors.accentColor} /> {props.duration}m</DefaultText>
                        <DefaultText style={{color: Colors.accentColor}}><Ionicons name="ios-checkmark-circle-outline" size={15} color={Colors.accentColor} /> {props.complexity.toUpperCase()}</DefaultText>
                        <DefaultText style={{color: Colors.accentColor}}><Ionicons name="ios-cash" size={15} color={Colors.accentColor} /> {props.affordability.toUpperCase()}</DefaultText>
                    </View>
                </View>
            </TouchableCmp>
        </View>
    )
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10,
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    titleContainer: {
        paddingVertical: 5,
        paddingHorizontal: 12,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        height: '15%',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});

export default MealItem