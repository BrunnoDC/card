import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const Filme = ({ filme, onRemove }) => {
    return (
    <View style={styles.container}>
        <Image source={{ uri: filme.imagem }} style={styles.image} />
        <View style={{ padding: 10 }}>
        <Text style={styles.text}>{filme.nome}</Text>
        <Text style={styles.text2}>{filme.genero}</Text>
        <TouchableOpacity onPress={onRemove}>
            <Text style={styles.delete}>Remover</Text>
        </TouchableOpacity>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
    marginBottom: 20,
    alignItems:"center",
    justifyContent:"center",
    },
    image: {
    width: "100%",
    height: 300,
    resizeMode: "stretch",
    boxShadow: '0px 0px 20px #1db954',
    
    },
    text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color:"#fff"

    },
    text2: {
    fontSize: 16,
    marginBottom: 5,
    paddingLeft:30,
    color:"#fff"

    },
    delete: {
    fontSize: 16,
    color: "red",
    paddingLeft:30,

    },
});

export default Filme;
