import React, { Component } from "react";
import { View, StyleSheet, Button, ImageBackground } from "react-native";

class Home extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../img/fondoHome.jpg")}
        style={styles.container}
      >
        <View style={[styles.btn, { paddingTop: 500 }]}>
          <Button
            title="Play"
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
  },
  btn: {
    flex: 1
  }
});
