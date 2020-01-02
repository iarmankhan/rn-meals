import React from 'react'
import {ScrollView, View, Text, StyleSheet, Image, Dimensions} from 'react-native'
import {HeaderButtons, Item} from "react-navigation-header-buttons";

import {MEALS} from "../data/dummy-data";

import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import Colors from "../constants/Colors";
import {Ionicons} from "@expo/vector-icons";

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
};

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <ScrollView>
            <Image
                source={{
                    uri: selectedMeal.imageUrl
                }}
                style={styles.image}
            />
            <View style={styles.details}>
                <DefaultText style={{color: Colors.accentColor}}><Ionicons name="ios-hourglass" size={15} color={Colors.accentColor} /> {selectedMeal.duration}m</DefaultText>
                <DefaultText style={{color: Colors.accentColor}}><Ionicons name="ios-checkmark-circle-outline" size={15} color={Colors.accentColor} /> {selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText style={{color: Colors.accentColor}}><Ionicons name="ios-cash" size={15} color={Colors.accentColor} /> {selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}
        </ScrollView>
    )
};

MealDetailScreen.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return {
        headerTitle: selectedMeal.title,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="Favorite"
                    iconName='ios-star'
                    onPress={() => {}}
                />
            </HeaderButtons>
        )
    }
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: Dimensions.get('window').height / 4.5
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        textAlign: 'center',
        fontSize: 22
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});

export default MealDetailScreen