import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

import {CATEGORIES} from "../data/dummy-data";

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return (
        <View style={styles.screen}>
            <Text>{selectedCategory.title}</Text>
            <Button title="Meal Details" onPress={() => {
                props.navigation.navigate({
                    routeName: 'MealDetail'
                })
            }} />
        </View>
    )
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CategoryMealsScreen