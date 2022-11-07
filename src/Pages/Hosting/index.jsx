import { useState, useEffect } from "react";
import api from "../../Api/api";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import HostingCard from "../../Componets/HostingCard";
import Footer from "../../Componets/Footer";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5'

const Hosting = () => {

    const [hospedagem, setHospedagem] = useState([])

    useEffect(() => {

        const loadHosting = async () => {
            const resposta = await api.get("/api/Hospedagem");
            const data = resposta.data;
            console.log(data)
            setHospedagem(data);
        };

        loadHosting();
    }, []);

    const navigation = useNavigation();

    function openTicket() {
        navigation.navigate('Passagens')
    }

    function openPromo() {
        navigation.navigate('Promo')
    }

    function openLogin() {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <View style={styles.user}>
                <Icon style={styles.icon} name='arrow-right' size={30} color='#b92b2b' />
                <Icon onPress={openLogin}  name='user-circle' size={50} color='#b92b2b' />
            </View>

            <View style={styles.search}>
                <Icon style={styles.icon} name='arrow-right' size={30} color='#2a7e15' />
                <Button title="Pacotes promocionais" onPress={openPromo} />
            </View>

            <View style={styles.search}>
                <Icon style={styles.icon} name='arrow-right' size={30} color='#2a7e15' />
                <Button title="Buscar Passagens" onPress={openTicket} />
            </View>

            <Text style={styles.descricao}>As melhores hospedagens estão aqui!</Text>

            <FlatList data={hospedagem}
                keyExtractor={hospedagem.hospedagemId}
                renderItem={({ item }) => <HostingCard data={item} />}

            >

            </FlatList>
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d0d3d4'
    },
    descricao: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 22,
        fontWeight: 'bold'
    },
    search: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
        marginRight: 20
    },
    icon: {
        marginRight: 8,
    },
    user:{
        flexDirection:'row',
        justifyContent:'flex-start',
        marginLeft:18,
        alignItems:'center'
    }

});

export default Hosting;