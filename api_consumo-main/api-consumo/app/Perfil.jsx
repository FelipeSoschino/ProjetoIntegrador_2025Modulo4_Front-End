import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  TextInput,
} from "react-native";
import { Link } from "expo-router";

export default function Perfil() {
  const [abaAtiva, setAbaAtiva] = useState("publicacoes");
  const [modalOptionsVisible, setModalOptionsVisible] = useState(null); 
  const [editingPostId, setEditingPostId] = useState(null);
  const [editedText, setEditedText] = useState("");

  const [postsFelipe, setPostsFelipe] = useState([
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
  ]);

  const amigos = ["Mariana Costa", "Ricardo Lopes", "Thiago Martins", "Lívia Torres"];

  // ✅ EXCLUIR PUBLICAÇÃO
  const excluirPost = (id) => {
    Alert.alert("Excluir publicação", "Tem certeza que deseja excluir?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Excluir",
        style: "destructive",
        onPress: () => {
          setPostsFelipe(postsFelipe.filter((p) => p.id !== id));
          setModalOptionsVisible(null);
        },
      },
    ]);
  };

  // ✅ INICIAR EDIÇÃO
  const iniciarEdicao = (post) => {
    setEditingPostId(post.id);
    setEditedText(post.descricao);
    setModalOptionsVisible(null);
  };

  // ✅ SALVAR ALTERAÇÃO
  const salvarEdicao = () => {
    setPostsFelipe(
      postsFelipe.map((p) =>
        p.id === editingPostId ? { ...p, descricao: editedText } : p
      )
    );
    setEditingPostId(null);
  };

  // ✅ CANCELAR EDIÇÃO
  const cancelarEdicao = () => {
    setEditingPostId(null);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* 🔹 CARD IDENTIDADE */}
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

          {/* ✅ BOTÃO EDITAR PERFIL */}
          <TouchableOpacity
            style={styles.btnEditarPerfil}
            onPress={() => Alert.alert("Editar Perfil", "Aqui abrirá a tela de edição")}
          >
            <Text style={styles.btnEditarTexto}>Editar</Text>
          </TouchableOpacity>
        </View>

        {/* 🔹 MENU */}
        <View style={styles.menuSecundario}>
          <TouchableOpacity
            style={[styles.botaoAba, abaAtiva === "topicos" && styles.botaoAtivo]}
            onPress={() => setAbaAtiva("topicos")}
          >
            <Text style={[styles.textoBotao, abaAtiva === "topicos" && styles.textoAtivo]}>🧩 Tópicos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.botaoAba, abaAtiva === "publicacoes" && styles.botaoAtivo]}
            onPress={() => setAbaAtiva("publicacoes")}
          >
            <Text style={[styles.textoBotao, abaAtiva === "publicacoes" && styles.textoAtivo]}>📝 Publicações</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.botaoAba, abaAtiva === "amigos" && styles.botaoAtivo]}
            onPress={() => setAbaAtiva("amigos")}
          >
            <Text style={[styles.textoBotao, abaAtiva === "amigos" && styles.textoAtivo]}>👥 Amigos</Text>
          </TouchableOpacity>
        </View>

        {/* 🔹 PUBLICAÇÕES */}
        {abaAtiva === "publicacoes" && (
          <View style={styles.listaSecao}>
            {postsFelipe.map((post) => (
              <View key={post.id} style={styles.cardPost}>
                <Image source={post.imagem} style={styles.imagemPost} />

                <View style={styles.headerPost}>
                  <Text style={styles.tituloPost}>{post.titulo}</Text>

                  {/* ✅ MENU OPÇÕES */}
                  <TouchableOpacity onPress={() => setModalOptionsVisible(post.id)}>
                    <Text style={styles.opcoes}>⋮</Text>
                  </TouchableOpacity>
                </View>

                {/* ✅ SE ESTIVER EDITANDO */}
                {editingPostId === post.id ? (
                  <View style={styles.areaEdicao}>
                    <TextInput
                      style={styles.textInput}
                      multiline
                      value={editedText}
                      onChangeText={setEditedText}
                    />

                    <View style={styles.areaBotoesEdicao}>
                      <TouchableOpacity style={styles.btnSalvar} onPress={salvarEdicao}>
                        <Text style={styles.txtSalvar}>Salvar</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.btnCancelar} onPress={cancelarEdicao}>
                        <Text style={styles.txtCancelar}>Cancelar</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ) : (
                  <Text style={styles.descricaoPost}>{post.descricao}</Text>
                )}

                {/* ✅ MODAL OPÇÕES */}
                {modalOptionsVisible === post.id && (
                  <Modal transparent animationType="fade">
                    <TouchableOpacity
                      style={styles.modalOverlay}
                      onPress={() => setModalOptionsVisible(null)}
                    >
                      <View style={styles.modalCaixa}>
                        <TouchableOpacity style={styles.btnModal} onPress={() => iniciarEdicao(post)}>
                          <Text style={styles.textoModal}>✏️ Editar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnModal} onPress={() => excluirPost(post.id)}>
                          <Text style={styles.textoModalExcluir}>🗑 Excluir</Text>
                        </TouchableOpacity>
                      </View>
                    </TouchableOpacity>
                  </Modal>
                )}
              </View>
            ))}
          </View>
        )}

        {/* 🔹 AMIGOS */}
        {abaAtiva === "amigos" && (
          <View style={styles.listaSecao}>
            {amigos.map((nome, index) => (
              <View key={index} style={styles.cardAmigo}>
                <Image source={require("../assets/images/icon.png")} style={styles.avatarAmigo} />
                <Text style={styles.nomeAmigo}>{nome}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      {/* 🔹 BARRA FIXA */}
      <View style={styles.barraFixa}>
        <Link style={styles.menuLink} href={{ pathname: "/Home" }}>🏠 Home</Link>
        <Link style={styles.menuLink} href={{ pathname: "/Topicos" }}>📚 Tópicos</Link>
        <Link style={[styles.menuLink, styles.menuAtivo]} href={{ pathname: "/Perfil" }}>👤 Perfil</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f2f2f2" },

  scrollContent: { padding: 20, paddingTop: 80 },

  cardIdentidade: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    position: "relative",
  },

  btnEditarPerfil: {
    backgroundColor: "#007AFF",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 6,
    position: "absolute",
    top: 10,
    right: 10,
  },

  btnEditarTexto: { color: "#fff", fontWeight: "600" },

  avatar: { width: 90, height: 90, borderRadius: 45, marginRight: 15 },
  infoUsuario: { flex: 1 },

  nome: { fontSize: 22, fontWeight: "bold", marginBottom: 4 },
  idade: { fontSize: 16, color: "#666" },
  instrumentos: { fontSize: 15, marginVertical: 5, color: "#444" },
  bio: { fontSize: 14, color: "#555", lineHeight: 20 },

  menuSecundario: { flexDirection: "row", justifyContent: "space-around", marginVertical: 20 },

  botaoAba: { paddingVertical: 8, paddingHorizontal: 15, borderRadius: 8, backgroundColor: "#ddd" },
  botaoAtivo: { backgroundColor: "#007AFF" },
  textoBotao: { fontSize: 15, fontWeight: "600", color: "#333" },
  textoAtivo: { color: "#fff" },

  listaSecao: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    elevation: 2,
    marginBottom: 20,
  },

  cardPost: {
    marginBottom: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    elevation: 2,
    paddingBottom: 10,
  },

  imagemPost: { width: "100%", height: 180, borderTopLeftRadius: 10, borderTopRightRadius: 10 },

  headerPost: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 8,
  },

  tituloPost: { fontWeight: "bold", fontSize: 17 },
  descricaoPost: { paddingHorizontal: 10, color: "#555", marginTop: 5 },

  opcoes: { fontSize: 25, color: "#444", padding: 5 },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalCaixa: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    width: 200,
  },

  btnModal: { paddingVertical: 10 },
  textoModal: { fontSize: 16 },
  textoModalExcluir: { fontSize: 16, color: "red", fontWeight: "bold" },

  areaEdicao: { padding: 10 },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    backgroundColor: "#fff",
  },

  areaBotoesEdicao: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },

  btnSalvar: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },

  txtSalvar: { color: "white", fontWeight: "bold" },

  btnCancelar: {
    backgroundColor: "#ddd",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },

  txtCancelar: { color: "#333" },

  cardAmigo: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },

  avatarAmigo: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  nomeAmigo: { fontSize: 16, color: "#333", fontWeight: "600" },

  barraFixa: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: 12,
    elevation: 4,
  },

  menuLink: { fontSize: 16, fontWeight: "600", color: "#007AFF" },
  menuAtivo: { textDecorationLine: "underline" },
});
