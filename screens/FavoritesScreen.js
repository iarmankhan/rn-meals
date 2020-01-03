import React from 'react'
import {useSelector} from "react-redux";
import MealList from "../components/MealList";
import { HeaderButtons, Item} from "react-navigation-header-buttons";

import CustomHeaderButton from '../components/HeaderButton'
import DefaultText from "../components/DefaultText";
import {View, StyleSheet} from "react-native";

const FavoritesScreen = props => {
    const favMeals = useSelector(state => state.meals.favoriteMeals);

    if(favMeals.length === 0 || !favMeals) {
        return (
            <View style={styles.content}>
                <DefaultText>No favorite meals found. Start adding some!</DefaultText>
            </View>
        )
    }

    return <MealList listData={favMeals} navigation={props.navigation} />
};

FavoritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Favorites!',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Menu" iconName="ios-menu" onPress={() => {
                    navData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
        )
    }
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavoritesScreen