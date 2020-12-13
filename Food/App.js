import {createAppContainer} from 'react-navigation';
import{createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreens from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Results: ResultsShowScreens
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Bussiness Search'
    }
  }
)

export default createAppContainer(navigator);