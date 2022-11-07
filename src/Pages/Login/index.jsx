import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputForm from "../../Componets/inputForm";
import { useForm } from 'react-hook-form';
import { useState } from "react";

const Login = () => {

    //const [login, setLogin] = useState(false);

    const { control, handleSubmit } = useForm();

    const navigation = useNavigation();

    //Pendendte Desenvolver Autentificação
    const authenticateUser = async (userData) => {
       console.log(userData)
        navigation.navigate('Hospedagens')
    }

    function openCadastro() {
        navigation.navigate('Cadastro')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.descricao}>Entre ou faça seu cadastro</Text>

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

            <View style={styles.containerBtn}>
                <Button title="Entrar" onPress={handleSubmit(authenticateUser)} />
                <Button title="Fazer Cadastro" onPress={openCadastro} />
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

export default Login;