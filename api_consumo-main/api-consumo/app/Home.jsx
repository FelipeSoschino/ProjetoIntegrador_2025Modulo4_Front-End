import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  const posts = [
    {
      id: 1,
      nome: "Mariana Costa",
      imagemPerfil: require("../assets/images/react-logo.png"),
      imagemPost: require("../assets/images/icon.png"),
      titulo: "Nova composição 🎶",
      descricao:
        "Acabei de terminar uma nova música instrumental. Misturei um pouco de blues com jazz e o resultado ficou incrível!",
      tempo: "15 min atrás",
    },
    {
      id: 2,
      nome: "Ricardo Lopes",
      imagemPerfil: require("../assets/images/icon.png"),
      imagemPost: require("../assets/images/react-logo.png"),
      titulo: "Gravando no estúdio 🎧",
      descricao:
        "Hoje foi dia de gravação! Usei um set de pedais novo e consegui um som super limpo na guitarra.",
      tempo: "1h atrás",
    },
    {
      id: 3,
      nome: "Camila Andrade",
      imagemPerfil: require("../assets/images/react-logo.png"),
      imagemPost: require("../assets/images/icon.png"),
      titulo: "Primeiro show da banda!",
      descricao:
        "Ontem foi nosso primeiro show juntos! A energia foi surreal. Obrigada a todos que foram apoiar 💙",
      tempo: "3h atrás",
    },
    {
      id: 4,
      nome: "Thiago Martins",
      imagemPerfil: require("../assets/images/icon.png"),
      imagemPost: require("../assets/images/react-logo.png"),
      titulo: "Nova bateria montada 🥁",
      descricao:
        "Troquei todas as peles da bateria e o som ficou poderoso! Agora é só ensaiar pra valer.",
      tempo: "5h atrás",
    },
    {
      id: 5,
      nome: "Lívia Torres",
      imagemPerfil: require("../assets/images/react-logo.png"),
      imagemPost: require("../assets/images/icon.png"),
      titulo: "Cover de piano 🎹",
      descricao:
        "Gravei um cover de uma trilha do Studio Ghibli. Piano é pura emoção, né? ✨",
      tempo: "Ontem",
    },
  ];

  return (
    <View style={styles.container}>
      {/* 🔹 Barra fixa */}

      {/* 🔹 Feed */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {posts.map((post) => (
          <TouchableOpacity key={post.id} style={styles.card} activeOpacity={0.9}>
            {/* Cabeçalho */}
            <View style={styles.cardHeader}>
              <Image source={post.imagemPerfil} style={styles.avatar} />
              <View>
                <Text style={styles.nomeUsuario}>{post.nome}</Text>
                <Text style={styles.dataPublicacao}>{post.tempo}</Text>
              </View>
            </View>

            {/* Imagem principal */}
            <Image source={post.imagemPost} style={styles.imagemPrincipal} />

            {/* Corpo */}
            <View style={styles.cardBody}>
              <Text style={styles.tituloPost}>{post.titulo}</Text>
              <Text style={styles.descricaoPost}>{post.descricao}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
            <View style={styles.barraFixa}>
        <Link style={[styles.menuLink, styles.menuAtivo]} href={{ pathname: "/Home" }}>
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
  // 🔹 Container principal
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },

  // 🔹 Barra fixa
  barraFixa: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    zIndex: 10,
  },

  menuLink: {
    fontSize: 16,
    fontWeight: "600",
    color: "#007AFF",
  },

  menuAtivo: {
    textDecorationLine: "underline",
  },

  // 🔹 Área rolável
  scrollContent: {
    padding: 20,
    paddingTop: 80,
  },

  // 🔹 Card
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    overflow: "hidden",
  },

  // 🔹 Cabeçalho do card
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 30,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  nomeUsuario: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },

  dataPublicacao: {
    fontSize: 13,
    color: "#999",
  },

  // 🔹 Imagem principal
  imagemPrincipal: {
    width: "100%",
    height: 220,
    backgroundColor: "#ddd",
  },

  // 🔹 Corpo do post
  cardBody: {
    padding: 15,
  },

  tituloPost: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#222",
  },

  descricaoPost: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
  },
});
