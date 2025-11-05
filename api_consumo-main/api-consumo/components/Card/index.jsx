import { View,Text } from 'react-native';
import { Image } from 'react-native'


export function Card(id,imagem,descricao,nome,nomeUsuario,tempo,titulo){

    return(
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
           </TouchableOpacity>)

};
