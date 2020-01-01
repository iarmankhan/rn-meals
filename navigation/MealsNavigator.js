import {createStackNavigator, StackViewTransitionConfigs} from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import {Platform} from "react-native";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories'
        }
    },
    CategoryMeals:CategoryMealsScreen,
    MealDetail: MealDetailScreen,

}, {
    mode: 'card',
    transitionConfig: () => StackViewTransitionConfigs.SlideFromRightIOS,
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
});

export default createAppContainer(MealsNavigator)