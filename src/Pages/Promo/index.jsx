import { View, StyleSheet, FlatList, Text, Button } from "react-native";
import PacotesInternacionais from "../../Constants";
import PackageCard from "../../Componets/PackageCard";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const Promo = () => {

    const navigation = useNavigation();

    function openHome() {
        navigation.navigate('Hospedagens')
    }

    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <Icon style={styles.icon} name='arrow-right' size={30} color='#2a7e15' />
                <Button title="Voltar para o inicio" onPress={openHome} />
            </View>
            <Text style={styles.descricao}>Pacotes com 30% de desconto</Text>
            <FlatList data={PacotesInternacionais}
                keyExtractor={PacotesInternacionais.id}
                renderItem={({ item }) => <PackageCard data={item} />}

            >
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bdc3c7',
    },
    descricao: {
        fontSize: 26,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
        marginTop: 10,
    },
    search: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
        marginRight: 20,
    },
    icon: {
        marginRight: 8,
    },
});

export default Promo;