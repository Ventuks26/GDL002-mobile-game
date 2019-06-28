import React, { Component } from "react";
import styles from "./Style";
import { View, TouchableOpacity, Alert, Text } from "react-native";
import { renderIcon, onTilePress, getWinner } from "./Utils";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameState: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      currentPlayer: 1,
      scoreX: 0,
      scoreO: 0
    };
  }

  static navigationOptions = {
    title: "Game",
    header: null
  };

  initializeGame = () => {
    this.setState({
      gameState: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      currentPlayer: 1
    });
  };

  onTilePress(row, col) {
    const { currentPlayer, gameState } = this.state;
    onTilePress(currentPlayer, gameState, row, col, newState => {
      this.setState(newState, this.afterTurn);
    });
  }

  afterTurn() {
    //Check for winners...
    let winner = getWinner(this.state.gameState);
    if (winner[0] == 1) {
      switch (winner[1]) {
        case 0:
          {
            //Jugada Vertical
            Alert.alert("🏆 Jugador 'X' es el ganador 🏆");
            this.setState({ scoreX: this.state.scoreX + 1 });
            this.initializeGame();
          }
          break;
        case 1:
          {
            //Jugada Horizontal
            Alert.alert("🏆 Jugador 'X' es el ganador 🏆");
            this.setState({ scoreX: this.state.scoreX + 1 });
            this.initializeGame();
          }
          break;
        case 2:
          {
            //Jugada Diagonal izquierda
            Alert.alert("🏆 Jugador  'X' es el ganador 🏆");
            this.setState({ scoreX: this.state.scoreX + 1 });
            this.initializeGame();
          }
          break;
        case 3:
          {
            //Jugada Diagonal derecha
            Alert.alert("🏆 Jugador  'X' es el ganador 🏆");
            this.setState({ scoreX: this.state.scoreX + 1 });
            this.initializeGame();
          }
          break;
      }
    } else if (winner[0] == -1) {
      switch (winner[1]) {
        case 0:
          {
            // Jugada Vertical
            Alert.alert("🏆 Jugador  'O' es el ganador 🏆");
            this.setState({ scoreO: this.state.scoreO + 1 });
            this.initializeGame();
          }
          break;
        case 1:
          {
            //Jugada Horizontal
            Alert.alert("🏆 Jugador 'O' es el ganador 🏆");
            this.setState({ scoreO: this.state.scoreO + 1 });

            this.initializeGame();
          }
          break;
        case 2:
          {
            //Jugada Diagonal izq
            Alert.alert(" 🏆 Jugador 'O' es el ganador 🏆");
            this.setState({ scoreO: this.state.scoreO + 1 });

            this.initializeGame();
          }
          break;
        case 3:
          {
            //Jugada Diagonal de derecha
            Alert.alert("🏆 Jugador 'O' es el ganador 🏆 ");
            this.setState({ scoreO: this.state.scoreO + 1 });

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
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => this.onTilePress(0, 0)}
            style={[styles.tile, { borderLeftWidth: 0, borderTopWidth: 0 }]}
          >
            {renderIcon(this.state.gameState, 0, 0)}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.onTilePress(0, 1)}
            style={[styles.tile, { borderTopWidth: 0 }]}
          >
            {renderIcon(this.state.gameState, 0, 1)}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.onTilePress(0, 2)}
            style={[styles.tile, { borderTopWidth: 0, borderRightWidth: 0 }]}
          >
            {renderIcon(this.state.gameState, 0, 2)}
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => this.onTilePress(1, 0)}
            style={[styles.tile, { borderLeftWidth: 0 }]}
          >
            {renderIcon(this.state.gameState, 1, 0)}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.onTilePress(1, 1)}
            style={styles.tile}
          >
            {renderIcon(this.state.gameState, 1, 1)}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.onTilePress(1, 2)}
            style={[styles.tile, { borderRightWidth: 0 }]}
          >
            {renderIcon(this.state.gameState, 1, 2)}
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => this.onTilePress(2, 0)}
            style={[styles.tile, { borderLeftWidth: 0, borderBottomWidth: 0 }]}
          >
            {renderIcon(this.state.gameState, 2, 0)}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.onTilePress(2, 1)}
            style={[styles.tile, { borderBottomWidth: 0 }]}
          >
            {renderIcon(this.state.gameState, 2, 1)}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.onTilePress(2, 2)}
            style={[styles.tile, { borderBottomWidth: 0, borderRightWidth: 0 }]}
          >
            {renderIcon(this.state.gameState, 2, 2)}
          </TouchableOpacity>
        </View>
        <View style={[styles.score, { paddingTop: 150 }]}>
          <View style={styles.score}>
            <Text
              style={{ letterSpacing: 1, fontSize: 20, fontWeight: "bold" }}
            >
              Puntos de 'X': {this.state.scoreX}
            </Text>
            {/* <Text style={{  fontSize: 20, color: "#88D317", fontWeight: "bold" }}>{this.state.scoreX}</Text> */}
          </View>
          <View style={styles.score}>
            <Text
              style={{
                letterSpacing: 1,
                fontSize: 20,
                paddingTop: 20,
                fontWeight: "bold"
              }}
            >
              Puntos de 'O': {this.state.scoreO}
            </Text>
            {/* <Text style={{ fontSize: 20, color: "#6E3667", fontWeight: "bold" }}>{this.state.scoreO}</Text> */}
          </View>
        </View>
      </View>
    );
  }
}
export default Game;
