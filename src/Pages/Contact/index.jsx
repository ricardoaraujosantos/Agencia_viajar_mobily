
import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputForm from "../../Componets/inputForm";
import { useForm } from 'react-hook-form'

const Contact = () => {

    const { control, handleSubmit } = useForm();

    const navigation = useNavigation();

    function info(data) {
        console.log(data)
    }

    function openHome() {
        navigation.navigate('Hospedagens')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.descricao}>Fale conosco</Text>

            <label style={styles.label}>Nome</label>
            <InputForm style={styles.input}
                name='nome'
                control={control}
            />

            <label style={styles.label}>Cidade</label>
            <InputForm
                name='cidade'
                control={control}
                placeholder='Digite a cidade'
            />

            <label style={styles.label}>Email</label>
            <InputForm
                name='email'
                control={control}
                placeholder='Digite seu email'
            />

            <label style={styles.label}>Assunto</label>
            <InputForm
                name='assunto'
                control={control}
                placeholder='Digite o assunto'
            />

            <label style={styles.label}>Mensagem</label>
            <InputForm
                name='mensagem'
                control={control}
                placeholder='Escreva sua mensagem aqui!'
            />
            <View style={styles.containerBtn}>
                <Button title="enviar" onPress={handleSubmit(info)} />
                <Button title="Voltar para o inicio" onPress={openHome} />
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

export default Contact;