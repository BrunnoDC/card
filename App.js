import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import Filme from "./src/components/Filme";

const filmes = [
  {
    nome: "Gente grande",
    genero: "Comedia",
    imagem: "https://i0.wp.com/br.nacaodamusica.com/wp-content/uploads/2020/06/gente-grande.jpg",
  },
  {
    nome: "Homem Aranha",
    genero: "Aventura",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4tdH-JK1N7a76POK5-tXeLjRYMVa5YKk9btPDdM13pkl32-V5PINpOYQpAMWeUorxd6s&usqp=CAU",
  },
  {
    nome: "Pantera negra",
    genero: "Aventura",
    imagem:
      "https://lumiere-a.akamaihd.net/v1/images/unnamed_13_75a3ebb1.jpeg?region=0%2C0%2C356%2C512",
  },
  {
    nome: "Deus não está morto",
    genero: "Drama",
    imagem:
      "https://br.web.img2.acsta.net/pictures/14/07/09/16/27/398352.jpg",
  },
  {
    nome: "Anjos fora da lei",
    genero: "Comedia",
    imagem:
      "https://br.web.img3.acsta.net/pictures/14/07/01/21/25/007257.jpg",
  },
];



const ListaFilmes = () => {
  const [filmesList, setFilmesList] = useState(filmes);

  const handleRemove = (index) => {
    const newFilmesList = [...filmesList];
    newFilmesList.splice(index, 1);
    setFilmesList(newFilmesList);
  };

  return (
    <ScrollView style={styles.scroll}>
      {filmesList.map((filme, index) => (
        <Filme key={index} filme={filme} onRemove={() => handleRemove(index)} />
      ))}
    </ScrollView>
  );
};

export default function App() {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Filmes do brunnin</Text>
      <ListaFilmes />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1db954",
    textAlign: "center",
    backgroundColor: "#000",
    height: 60,
    paddingTop: 10,
  },
  scroll: {
    padding: 20,
    backgroundColor: "#212121",
  },
  content: {
    flex: 1,
  },
});
