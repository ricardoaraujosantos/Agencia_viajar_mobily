import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { useState, useEffect } from "react";
import api from "../../Api/api";
import TicketCard from "../../Componets/TicketCard";
import Footer from "../../Componets/Footer";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5'

const Ticket = () => {

    const [passagem, setPassagem] = useState([])

    useEffect(() => {
        const loadTicket = async () => {
            const resposta = await api.get("/api/Passagem");
            const data = resposta.data;
            console.log(data)
            setPassagem(data);
        };
        loadTicket();
    }, []);

    const navigation = useNavigation();

    function openHosting() {
        navigation.navigate('Hospedagens')
    }

    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <Icon style={styles.icon} name='arrow-right' size={30} color='#2a7e15' />
                <Button title="Buscar Hospedagens" onPress={openHosting} />
            </View>
            <Text style={styles.descricao}>As melhores passagens estão aqui!</Text>
            <FlatList data={passagem}
                keyExtractor={passagem.passagemId}
                renderItem={({ item }) => <TicketCard data={item} />}
            >
            </FlatList>
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d0d3d4',
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
});

export default Ticket;