import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./Components/HomeScreen";
import Game from "./Components/Game";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppStackNavigation = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  Game: {
    screen: Game
  }
});

const AppContainer = createAppContainer(AppStackNavigation);
