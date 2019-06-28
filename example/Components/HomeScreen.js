import React, { Component } from "react";
import styles from "./Style";
import { View, Image, Text } from "react-native";
import { Button } from "react-native-elements";

class Home extends Component {
  static navigationOptions = {
    title: "Home",
    header: null
  };

  render() {
    return (
      <View style={styles.containerHome}>
        <View>
          <Image style={styles.logo} source={require("../img/gatoHome.png")} />
        </View>
        <View>
          <Text style={styles.text}>Tic Tac Toe</Text>
        </View>
        <View style={{ paddingTop: 150 }}>
          <Button
            large
            icon={{
              name: "play-arrow",
              color: "black",
              width: 90,
              height: 40
            }}
            onPress={() => this.props.navigation.navigate("Game")}
          />
        </View>
      </View>
    );
  }
}
export default Home;
