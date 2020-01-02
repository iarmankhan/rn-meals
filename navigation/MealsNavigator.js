import React from "react";
import {Platform, Text} from "react-native";
import {Ionicons} from "@expo/vector-icons";

import { createAppContainer } from 'react-navigation';
import {createStackNavigator, StackViewTransitionConfigs} from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import {createBottomTabNavigator} from "react-navigation-tabs";
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import Colors from "../constants/Colors";

// Custom options for stack navigator
const stackCustomOption = color => {
    return {
        mode: 'card',
        transitionConfig: () => StackViewTransitionConfigs.SlideFromRightIOS,
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? color : '',
            },
            headerBackTitleStyle: {
                fontFamily: 'open-sans'
            },
            headerTitleStyle: {
                fontFamily: 'open-sans-bold'
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : color
        }
    }
};

// Stack navigators - Start
const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals:CategoryMealsScreen,
    MealDetail: MealDetailScreen,
}, stackCustomOption(Colors.primaryColor));

const FavoritesNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,

}, stackCustomOption(Colors.accentColor));

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen,
}, stackCustomOption(Colors.primaryColor));

// -- Stack Navigators End


// Tab Navigator
const tabScreen = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans' }}>Meals</Text> : 'Meals',
            tabBarIcon: tabInfo => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: {
        screen: FavoritesNavigator,
        navigationOptions: {
            tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans' }}>Favorites!</Text> : 'Favorites!',
            tabBarIcon: tabInfo => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.accentColor
        }
    }
};

const MealsFavTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreen, {
        shifting: true,
    })
    : createBottomTabNavigator(tabScreen, {
    tabBarOptions: {
        labelStyle: {
            fontFamily: 'open-sans'
        },
        activeTintColor: Colors.accentColor
    }
});

// Drawer navigator
const MainNavigator = createDrawerNavigator({
    MealsFav: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Favorite Meals!',
            drawerIcon: <Ionicons name="ios-star-outline" size={24} color={Colors.accentColor} />
        }
    },
    Filters: {
        screen: FiltersNavigator,
        navigationOptions: {
            drawerLabel: 'Filter Meals!',
            drawerIcon: <Ionicons name="ios-cog" size={24} color={Colors.accentColor} />
        }
    }
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold',
            marginLeft: 0
        }
    }
});

export default createAppContainer(MainNavigator)