import { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Perfil() {
  const [abaAtiva, setAbaAtiva] = useState("bio");

  const postsFelipe = [
    {
      id: 1,
      titulo: "Novo cover 🎸",
      descricao: "Gravei um cover de John Mayer. Trabalhei na pegada e dinâmica da guitarra clean.",
      imagem: require("../assets/images/icon.png"),
    },
    {
      id: 2,
      titulo: "Compondo algo novo 🎶",
      descricao: "Tentei misturar elementos de pop e rock para criar uma música mais leve e melódica.",
      imagem: require("../assets/images/react-logo.png"),
    },
  ];

  return (
    <View style={styles.container}>
      {/* 🔹 Barra fixa */}
      <View style={styles.barraFixa}>
        <Link style={styles.menuLink} href={{ pathname: "/Home" }}>
          🏠 Home
        </Link>
        <Link style={styles.menuLink} href={{ pathname: "/Topicos" }}>
          📚 Tópicos
        </Link>
        <Link style={[styles.menuLink, styles.menuAtivo]} href={{ pathname: "/Perfil" }}>
          👤 Perfil
        </Link>
      </View>

      {/* 🔹 Conteúdo */}
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* 🔹 Identificação */}
        <View style={styles.cardIdentidade}>
          <Image source={require("../assets/images/react-logo.png")} style={styles.avatar} />
          <View style={styles.infoUsuario}>
            <Text style={styles.nome}>Felipe da Silva</Text>
            <Text style={styles.idade}>23 anos</Text>
            <Text style={styles.instrumentos}>🎵 Instrumentos: Guitarra, Violão, Bateria, Teclado</Text>
            <Text style={styles.bio}>
              Músico apaixonado por explorar novos sons e misturar estilos. Sempre em busca da próxima melodia.
            </Text>
          </View>
        </View>

        {/* 🔹 Botões de navegação entre seções */}
        <View style={styles.menuSecundario}>
          <TouchableOpacity
            style={[styles.botaoAba, abaAtiva === "topicos" && styles.botaoAtivo]}
            onPress={() => setAbaAtiva("topicos")}
          >
            <Text style={[styles.textoBotao, abaAtiva === "topicos" && styles.textoAtivo]}>
              🧩 Tópicos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.botaoAba, abaAtiva === "publicacoes" && styles.botaoAtivo]}
            onPress={() => setAbaAtiva("publicacoes")}
          >
            <Text style={[styles.textoBotao, abaAtiva === "publicacoes" && styles.textoAtivo]}>
              📝 Publicações
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.botaoAba, abaAtiva === "amigos" && styles.botaoAtivo]}
            onPress={() => setAbaAtiva("amigos")}
          >
            <Text style={[styles.textoBotao, abaAtiva === "amigos" && styles.textoAtivo]}>
              👥 Amigos
            </Text>
          </TouchableOpacity>
        </View>

        {/* 🔹 Conteúdo das abas */}
        {abaAtiva === "bio" && (
          <Text style={styles.textoSecao}>
            Bem-vindo ao seu perfil! Toque nas abas acima para explorar seus tópicos, publicações e amigos.
          </Text>
        )}

        {abaAtiva === "topicos" && (
          <View style={styles.listaSecao}>
            <Text style={styles.textoSecao}>Você participa de 3 tópicos:</Text>
            <View style={styles.itemTopico}>
              <Text style={styles.tituloTopico}>🎸 Técnicas de Guitarra</Text>
              <Text style={styles.descTopico}>Discussão sobre palhetadas, solos e timbres.</Text>
            </View>
            <View style={styles.itemTopico}>
              <Text style={styles.tituloTopico}>🥁 Ritmos e Grooves</Text>
              <Text style={styles.descTopico}>Aprendendo a manter o groove no tempo certo.</Text>
            </View>
            <View style={styles.itemTopico}>
              <Text style={styles.tituloTopico}>🎹 Harmonia Moderna</Text>
              <Text style={styles.descTopico}>Explorando acordes e progressões criativas.</Text>
            </View>
          </View>
        )}

        {abaAtiva === "publicacoes" && (
          <View style={styles.listaSecao}>
            {postsFelipe.map((post) => (
              <View key={post.id} style={styles.cardPost}>
                <Image source={post.imagem} style={styles.imagemPost} />
                <View style={styles.conteudoPost}>
                  <Text style={styles.tituloPost}>{post.titulo}</Text>
                  <Text style={styles.descricaoPost}>{post.descricao}</Text>
                </View>
              </View>
            ))}
          </View>
        )}

        {abaAtiva === "amigos" && (
          <View style={styles.listaSecao}>
            <Text style={styles.textoSecao}>Amigos adicionados:</Text>
            <Text style={styles.amigo}>🎵 Mariana Costa</Text>
            <Text style={styles.amigo}>🎧 Ricardo Lopes</Text>
            <Text style={styles.amigo}>🥁 Thiago Martins</Text>
            <Text style={styles.amigo}>🎹 Lívia Torres</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },

  barraFixa: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    elevation: 4,
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

  scrollContent: {
    padding: 20,
    paddingTop: 80,
  },

  // 🔹 Identificação
  cardIdentidade: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginRight: 15,
  },

  infoUsuario: {
    flex: 1,
  },

  nome: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
  },

  idade: {
    fontSize: 16,
    color: "#666",
  },

  instrumentos: {
    fontSize: 15,
    marginVertical: 5,
    color: "#444",
  },

  bio: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },

  // 🔹 Menu secundário
  menuSecundario: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },

  botaoAba: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: "#ddd",
  },

  botaoAtivo: {
    backgroundColor: "#007AFF",
  },

  textoBotao: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
  },

  textoAtivo: {
    color: "#fff",
  },

  // 🔹 Seções
  listaSecao: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    elevation: 2,
  },

  textoSecao: {
    fontSize: 16,
    marginBottom: 10,
    color: "#444",
  },

  itemTopico: {
    marginBottom: 10,
  },

  tituloTopico: {
    fontWeight: "bold",
    fontSize: 16,
  },

  descTopico: {
    color: "#666",
  },

  // 🔹 Postagens
  cardPost: {
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 2,
  },

  imagemPost: {
    width: "100%",
    height: 180,
  },

  conteudoPost: {
    padding: 10,
  },

  tituloPost: {
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 5,
  },

  descricaoPost: {
    color: "#555",
  },

  amigo: {
    fontSize: 16,
    marginBottom: 5,
  },
});
