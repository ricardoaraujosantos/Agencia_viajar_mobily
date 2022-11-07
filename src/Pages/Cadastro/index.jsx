import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputForm from "../../Componets/inputForm";
import { useForm } from 'react-hook-form';
import api from "../../Api/api";

const Cadastro = () => {

    const { control, handleSubmit } = useForm();

    const navigation = useNavigation();

    const registrationUser = async (userData) => {
        await api.post('/api/Usuario', userData)
        navigation.navigate('Login')
    }

    function openLogin() {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.descricao}>Cadastro de Usuario</Text>

            <label style={styles.label}>Nome</label>
            <InputForm style={styles.input}
                name='Nome'
                control={control}
            />

            <label style={styles.label}>Email</label>
            <InputForm
                name='Email'
                control={control}
                placeholder='Digite a cidade'
            />

            <label style={styles.label}>Senha</label>
            <InputForm
                name='Senha'
                control={control}
                placeholder='Digite seu email'
            />

            <label style={styles.label}>Endereço</label>
            <InputForm
                name='Endereco'
                control={control}
                placeholder='Digite o assunto'
            />

            <View style={styles.containerBtn}>
                <Button title="Cadastrar" onPress={handleSubmit(registrationUser)} />
                <Button title="Entrar" onPress={openLogin} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#bdc3c7',
        alignItems: 'center',
    },

    descricao: {
        marginTop: 16,
        fontSize: 26,
        fontWeight: 'bold'
    },
    containerBtn: {
        backgroundColor:'#bdc3c7',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
    ,
    label: {
        fontSize: 20,
        width: '90%',
        textAlign: 'left'
    }
});

export default Cadastro;