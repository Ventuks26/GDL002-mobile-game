import React, { Component } from 'react';
import {View, Text, StyleSheet} from "react-native";

class Home extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>Page Home</Text>
            </View>

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