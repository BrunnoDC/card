import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';


const Filme = ({ filme, onRemove }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: filme.imagem }} style={styles.image} />
      <View style={{ padding: 10 }}>
        <Text style={styles.text}>{filme.nome}</Text>
        <Text style={styles.text2}>{filme.genero}</Text>
        <TouchableOpacity onPress={onRemove}>
        <AntDesign style={styles.delete} name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "stretch",
    boxShadow: 0 0 20 #1db954,
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff",
  },
  text2: {
    fontSize: 16,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",

    color: "#fff",
  },
  delete: {
    fontSize: 16, 
  },
});

export default Filme;
