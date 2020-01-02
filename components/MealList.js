import React from "react";
import {useSelector} from "react-redux";
import {FlatList, View, StyleSheet} from "react-native";
import MealItem from "./MealItem";

const MealList = props => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

    const renderMealItem = itemData => {
        const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id);
        return (
            <MealItem
                image={itemData.item.imageUrl}
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onSelectMeal={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail',
                        params: {
                            mealId: itemData.item.id,
                            title: itemData.item.title,
                            isFav: isFavorite,
                        }
                    });
                }}
            />
        )
    };

    return (
        <View style={styles.list}>
            <FlatList data={props.listData} renderItem={renderMealItem} style={{width: '100%'}}  />
        </View>
    )
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
});

export default MealList