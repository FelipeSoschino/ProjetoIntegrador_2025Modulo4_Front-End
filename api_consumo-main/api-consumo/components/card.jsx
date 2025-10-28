import { View,Text } from 'react-native';
import { Image } from 'react-native'


export function Card(){

    return(
    <View>
        <View>
            <Image source={require('../assets/images/react-logo.png')}></Image><Text> Nome do Usuario </Text>
        </View>

    </View>
    );

};
