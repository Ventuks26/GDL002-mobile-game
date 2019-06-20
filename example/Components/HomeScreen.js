import React, { Component } from "react";
import { View, StyleSheet,  ImageBackground } from "react-native";
import { Button } from 'react-native-elements';
class Home extends Component {
  static navigationOptions = {
    title: "Home",
  };
  render() {
    return (
      <ImageBackground
        source={require("../img/fondoHome.jpg")}
        style={styles.container}
      >
        <View style={{ paddingTop: 500}}>
          <Button
            large
            icon={{name: "play-arrow", color: "#E5C919", width: 90,
            height: 40}}
            color="#5079C8"
            
            
            onPress={() => this.props.navigation.navigate("Game")}
          />
        </View>
      </ImageBackground>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
  
});
