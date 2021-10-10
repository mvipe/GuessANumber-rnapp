import React from "react";
import { Text, Stylesheet } from "react-native";

const bodyText = (props) => {
  return <Text style={styles.bodyText}>{props.children}</Text>;
};

const styles = Stylesheet.create({
  bodyText: {
    fontFamily: "open-sans-bold",
  },
});

export default bodyText;
