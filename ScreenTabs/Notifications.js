import React, { PureComponent } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";

export default class Notifications extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Card Title</Text>
          <Image
            style={styles.cardImage}
            source={{
              uri: "https://miro.medium.com/max/700/0*uJW7ltZfT_DKTXWD",
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  cardText: {
    fontSize: 30,
  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 10,
    marginLeft: "2%",
    width: "96%",
    borderRadius: 10,
    shadowColor: "#fff",
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  cardImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
});
