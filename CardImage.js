import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const CardImage = ({ title, imageSource, description }) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 3,
    elevation: 3,
    marginBottom: 100,
  },
  image: {
    width: "100",
    height: 200,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 16,
  },
});

export default CardImage;
