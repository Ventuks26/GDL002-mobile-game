import React, { Component } from "react";
import { View, Alert } from "react-native";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";

class Functions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameState: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      currentPlayer: 1,
      currentIcon: "close",
      scoreX: 0,
      scoreO: 0
    };
  }

  ComponentDidMount() {
    this.initializeGame();
  }

  initializeGame = () => {
    this.setState({
      gameState: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      currentPlayer: 1
    });
  };

  //Return 1 if player 1 won, -1 if player 2 won, or a 0 if no one has won
  getWinner = gameState => {
    const NUM_TILES = 3;
    let allOver = 0;
    let arr = this.state.gameState;
    let sum;

    //Check rows...
    for (let i = 0; i < NUM_TILES; i++) {
      sum = arr[i][0] + arr[i][1] + arr[i][2];
      if (sum == 3) {
        return [1, 1];
      } else if (sum == -3) {
        return [-1, 1];
      }
    }

    //Check columns...
    for (let i = 0; i < NUM_TILES; i++) {
      sum = arr[0][i] + arr[1][i] + arr[2][i];
      if (sum == 3) {
        return [1, 0];
      } else if (sum == -3) {
        return [-1, 0];
      }
    }

    //Check diagonals...
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

    //Check nobody won...
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
    //Don't allow tile to change...
    let value = this.state.gameState[row][col];
    if (value !== 0) {
      return;
    }

    //Grab current player...
    let currentPlayer = this.state.currentPlayer;

    //Set de correct tile...
    let arr = this.state.gameState.slice();
    arr[row][col] = currentPlayer;
    this.setState({ gameState: arr });

    //Switch to other tile player...
    let nextPlayer = currentPlayer == 1 ? -1 : 1;
    this.setState({ currentPlayer: nextPlayer });
    let nextIcon = currentIcon == "close" ? "circle-outline" : "close";
    this.setState({ currentIcon: nextIcon });

    //Check for winners...
    let winner = this.getWinner();
    if (winner[0] == 1) {
      switch (winner[1]) {
        case 0:
          {
            //Jugada Vertical
            Alert.alert("🏆 Jugador de equis es el ganador 🏆");
            this.initializeGame();
          }
          break;
        case 1:
          {
            //Jugada Horizontal
            Alert.alert("🏆 Jugador de equis es el ganador 🏆");
            this.initializeGame();
          }
          break;
        case 2:
          {
            //Jugada Diagonal izquierda
            Alert.alert("🏆 Jugador  de equis es el ganador 🏆");
            this.initializeGame();
          }
          break;
        case 3:
          {
            //Jugada Diagonal derecha
            Alert.alert("🏆 Jugador  de equis es el ganador 🏆");
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
    const value = this.state.gameState[row][col];
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
    return;
  }
}

export default Functions;
