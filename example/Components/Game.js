import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  Button,
  ImageBackground
} from "react-native";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";


class Game extends Component {
  static navigationOptions = {
    title: "Game",
  };
  constructor(props) {
    super(props);
    this.state = {
      gameState: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      currentPlayer: 1,
      currentIcon: "close"
    };
  }
  componentDidMount() {
    this.initializeGame();
  }
  initializeGame = () => {
    this.setState({
      gameState: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      currentPlayer: 1
    });
  };
  getWinner = () => {
    const NUM_TILES = 3;
    let allOver = 0;

    let arr = this.state.gameState;
    let sum;
    for (let i = 0; i < NUM_TILES; i++) {
      sum = arr[i][0] + arr[i][1] + arr[i][2];
      if (sum == 3) {
        return [1, 1];
      } else if (sum == -3) {
        return [-1, 1];
      }
    }

    for (let i = 0; i < NUM_TILES; i++) {
      sum = arr[0][i] + arr[1][i] + arr[2][i];
      if (sum == 3) {
        return [1, 0];
      } else if (sum == -3) {
        return [-1, 0];
      }
    }

    sum = arr[0][0] + arr[1][1] + arr[2][2];
    if (sum == 3) {
      return [1, 2];
    } else if (sum == -3) {
      return [-1, 2];
    }

    sum = arr[2][0] + arr[1][1] + arr[0][2];
    if (sum == 3) {
      return [1, 3];
    } else if (sum == -3) {
      return [-1, 3];
    }

    for (let i = 0; i < NUM_TILES; i++) {
      for (let j = 0; j < NUM_TILES; j++) {
        if (arr[i][j] == 1 || arr[i][j] == -1) {
          allOver += 1;
          if (allOver == 9) {
            return [2, 4];
          }
        }
      }
    }

    return 0;
  };
  onTilePress = (row, col) => {
    let value = this.state.gameState[row][col];
    if (value != 0) {
      return;
    }

    let currentPlayer = this.state.currentPlayer;
    let currentIcon = this.state.currentIcon;
    let arr = this.state.gameState.slice();
    arr[row][col] = currentPlayer;
    this.setState({ gameState: arr });

    let nextPlayer = currentPlayer == 1 ? -1 : 1;
    this.setState({ currentPlayer: nextPlayer });
    let nexIcon = currentIcon == "close" ? "circle-outline" : "close";
    this.setState({ currentIcon: nexIcon });

    let winner = this.getWinner();
    if (winner[0] == 1) {
      switch (winner[1]) {
        case 0:
          {
            //Jugada Vertical
            Alert.alert("🏆 Jugador de cruz es el ganador 🏆");
            this.initializeGame();
          }
          break;
        case 1:
          {
            //Jugada Horizontal
            Alert.alert("🏆 Jugador de cruz es el ganador 🏆");
            this.initializeGame();
          }
          break;
        case 2:
          {
            //Jugada Diagonal izquierda
            Alert.alert("🏆 Jugador  de cruz es el ganador 🏆");
            this.initializeGame();
          }
          break;
        case 3:
          {
            //Jugada Diagonal derecha
            Alert.alert("🏆 Jugador  de cruz es el ganador 🏆");
            this.initializeGame();
          }
          break;
      }
    } else if (winner[0] == -1) {
      switch (winner[1]) {
        case 0:
          {
            // Jugada Vertical
            Alert.alert("🏆 Jugador  de círculo es el ganador 🏆");
            this.initializeGame();
          }
          break;
        case 1:
          {
            //Jugada Horizontal
            Alert.alert("🏆 Jugador de círculo es el ganador 🏆");
            this.initializeGame();
          }
          break;
        case 2:
          {
            //Jugada Diagonal izq
            Alert.alert(" 🏆 Jugador de círculo es el ganador 🏆");
            this.initializeGame();
          }
          break;
        case 3:
          {
            //Jugada Diagonal de derecha
            Alert.alert("🏆 Jugador de círculo es el ganador 🏆 ");
            this.initializeGame();
          }
          break;
      }
    } else if (winner[0] == 2) {
      if (winner[1] == 4) {
        Alert.alert("☠️ ¡¡¡Nadie ganó!!! ☠️");
        this.initializeGame();
      }
    }
  };

  onNewGamePress = () => {
    this.initializeGame();
  };
  renderIcon = (row, col) => {
    let value = this.state.gameState[row][col];
    switch (value) {
      case 1:
        return <Icon name="close" style={styles.tileX} />;
      case -1:
        return <Icon name="circle-outline" style={styles.tileO} />;
      default:
        return <View />;
    }
  };

  render() {
    return (
      <ImageBackground
      source={require("../img/fondoGame.jpg")}
      style={styles.container}
    >
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => this.onTilePress(0, 0)}
            style={[styles.tile, { borderLeftWidth: 0, borderTopWidth: 0 }]}
          >
            {this.renderIcon(0, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onTilePress(0, 1)}
            style={[styles.tile, { borderTopWidth: 0 }]}
          >
            {this.renderIcon(0, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onTilePress(0, 2)}
            style={[styles.tile, { borderRightWidth: 0, borderTopWidth: 0 }]}
          >
            {this.renderIcon(0, 2)}
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => this.onTilePress(1, 0)}
            style={[styles.tile, { borderLeftWidth: 0 }]}
          >
            {this.renderIcon(1, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onTilePress(1, 1)}
            style={[styles.tile, {}]}
          >
            {this.renderIcon(1, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onTilePress(1, 2)}
            style={[styles.tile, { borderRightWidth: 0 }]}
          >
            {this.renderIcon(1, 2)}
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => this.onTilePress(2, 0)}
            style={[styles.tile, { borderLeftWidth: 0, borderBottomWidth: 0 }]}
          >
            {this.renderIcon(2, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onTilePress(2, 1)}
            style={[styles.tile, { borderBottomWidth: 0 }]}
          >
            {this.renderIcon(2, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onTilePress(2, 2)}
            style={[styles.tile, { borderRightWidth: 0, borderBottomWidth: 0 }]}
          >
            {this.renderIcon(2, 2)}
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 50 }} />
        <Button title="Nuevo Juego" color="#E5C919" onPress={this.onNewGamePress} />
      </View>
      
      </ImageBackground>
    );
  }
}
export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: "center",
    justifyContent: "center"
  },
  tile: {
    
    borderColor: "#BBB0AF",
    borderWidth: 10,
    width: 100,
    height: 100
  },
  tileX: {
    color: "#E5C919",
    fontSize: 60
  },
  tileO: {
    color: "#5079C8",
    fontSize: 60
  }
});
