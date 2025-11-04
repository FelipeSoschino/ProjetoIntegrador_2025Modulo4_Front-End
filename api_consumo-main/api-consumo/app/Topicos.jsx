import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";

export default function Topicos() {
  // 🔹 Dados fictícios (mock)
  const [topicos, setTopicos] = useState([
    {
      id: 1,
      titulo: "React Native Brasil",
      descricao: "Comunidade para desenvolvedores mobile em React Native.",
      criador: "João Silva",
      imagem: require("../assets/images/react-logo.png"),
    },
    {
      id: 2,
      titulo: "Dev Front-End",
      descricao: "Dicas, tutoriais e novidades do mundo front-end.",
      criador: "Maria Souza",
      imagem: require("../assets/images/icon.png"),
    },
    {
      id: 3,
      titulo: "Design e UX",
      descricao: "Tópicos sobre design de interfaces e experiência do usuário.",
      criador: "Carlos Mendes",
      imagem: require("../assets/images/react-logo.png"),
    },
    {
      id: 4,
      titulo: "Back-End Lovers",
      descricao: "Comunidade para discutir APIs, bancos de dados e servidores.",
      criador: "Ana Oliveira",
      imagem: require("../assets/images/icon.png"),
    },
  ]);

  // 🔹 Renderização de cada card
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => console.log(`Clicou em ${item.titulo}`)} // Apenas estrutura
    >
      <Image source={item.imagem} style={styles.imagem} />
      <View style={styles.cardTexto}>
        <Text style={styles.tituloTopico}>{item.titulo}</Text>
        <Text style={styles.descricao}>{item.descricao}</Text>
        <Text style={styles.criador}>👤 {item.criador}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
   
      {/* 🔹 Lista de tópicos */}
      <FlatList
        data={topicos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />
         {/* 🔹 Barra fixa */}
      <View style={styles.barraFixa}>
        <Link style={styles.menuLink} href={{ pathname: "/Home" }}>
          🏠 Home
        </Link>
        <Link style={styles.menuLink} href={{ pathname: "/Topicos" }}>
          📚 Tópicos
        </Link>
        <Link style={styles.menuLink} href={{ pathname: "/Perfil" }}>
          👤 Perfil
        </Link>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },

  // 🔹 Barra de menu fixa no topo
  barraFixa: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    elevation: 5,
    zIndex: 10,
  },

  menuLink: {
    fontSize: 16,
    fontWeight: "600",
    color: "#007AFF",
  },

  // 🔹 Lista de cards
  lista: {
    padding: 20,
    paddingTop: 80, // espaço para a barra fixa
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 15,
    elevation: 3,
    padding: 10,
    alignItems: "center",
  },

  imagem: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },

  cardTexto: {
    flex: 1,
  },

  tituloTopico: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  descricao: {
    color: "#555",
    marginBottom: 5,
  },

  criador: {
    color: "#007AFF",
    fontWeight: "500",
  },
});
