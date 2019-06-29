import React from "react";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import { View } from "react-native";
import styles from "./Style";

export const initializeGame = setState => {
  setState({
    gameState: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    currentPlayer: 1,
    currentIcon: "close",
    scoreX: 0,
    scoreO: 0
  });
};

export const getWinner = gameState => {
  const NUM_TILES = 3;
  let allOver = 0;
  let arr = gameState;
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

export const onTilePress = (currentPlayer, gameState, row, col, callback) => {
  //Don't allow tile to change...
  let value = gameState[row][col];
  if (value !== 0) {
    return;
  }

  //Set de correct tile...
  let arr = gameState.slice();
  arr[row][col] = currentPlayer;
  //  this.setState({gameState:arr});

  //Switch to other tile player...
  let nextPlayer = currentPlayer == 1 ? -1 : 1;
  //  this.setState({currentPlayer : nextPlayer});
  callback({ gameState: arr, currentPlayer: nextPlayer });
};

export const renderIcon = (gameState, row, col) => {
  const value = gameState[row][col];
  switch (value) {
    case 1:
      return <Icon name="close" style={styles.tileX} />;
    case -1:
      return <Icon name="circle-outline" style={styles.tileO} />;
    default:
      return <View />;
  }
};
