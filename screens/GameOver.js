import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is over ! </Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          /////  loading image from locally
          //   source={require("../assets/success.png")}

          /// loading image from web
          fadeDuration={300}
          source={{ uri: "https://unsplash.com/photos/By-tZImt0Ms" }}
          width="300"
          resizeMode="cover"
        />
      </View>

      <Text>Number of rounds : {props.guessRound} </Text>
      <Text>Number was :{props.userNumber}</Text>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    width: 300,
    height: 300,
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOver;
