import { View, Text, Linking, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';


const Footer = () => {

    const navigation = useNavigation();

    function openContact() {
        navigation.navigate('Contato')
    }

    return (
        <View style={styles.container}>

            <Text style={styles.descricao}>Siga nossas redes sociais</Text>
            <View style={styles.redes}>
                <Icon name='facebook'
                    size={36}
                    color='#fff'
                    onPress={
                        () => Linking.openURL('https://pt-br.facebook.com/')
                    }
                >
                </Icon>
                <Icon name='instagram'
                    size={36}
                    color='#fff'
                    onPress={
                        () => Linking.openURL('https://www.instagram.com/')
                    }
                >
                </Icon>
                <Icon name='twitter'
                    size={36}
                    color='#fff'
                    onPress={
                        () => Linking.openURL('https://twitter.com/')
                    }
                >
                </Icon>
            </View>
            <View style={styles.contact}>
                <Icon style={styles.icon} name='arrow-right' size={30} color='#fff' />
                <Button title="Entre em contato" onPress={openContact} color='#8f8f8c' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6f42c1',
        height: 140,
        justifyContent: 'center'
    },
    redes: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    descricao: {
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 10,
        color: '#fff'
    },
    contact: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
        marginRight: 20
    },
    icon: {
        marginRight: 8,
    },

});

export default Footer;