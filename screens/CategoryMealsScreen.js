import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const CategoryMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>CategoryMealsScreen</Text>
            <Button title="Meal Details" onPress={() => {
                props.navigation.navigate({
                    routeName: 'MealDetail'
                })
            }} />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CategoryMealsScreen