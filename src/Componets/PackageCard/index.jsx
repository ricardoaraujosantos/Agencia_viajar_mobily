
import { View, Text, StyleSheet, Button } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5'


const PackageCard = (props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                <Icon name='suitcase' size={28} color='#3a3aa3' />
                {" Pacote de " + props.data.qtd_dias + " dias em " + props.data.nome}
            </Text>
            <Text style={styles.title}>
                <Icon name='smile' size={28} color='#d8c413' />
                {" " + props.data.descricao}
            </Text>
            <Text style={styles.titlestrick}>
                <Icon name='tag' size={28} color='#ff0909' />
                <strike>{" De R$ " + props.data.valor_dia * props.data.qtd_dias}</strike>

            </Text>
            <Text style={styles.titlemoney}>
                <Icon name='money-bill' size={28} color='#05b841' />
                {" Por R$ " + props.data.qtd_dias * props.data.valor_dia * (1 - props.data.desconto / 100)}
            </Text>
            <Text style={styles.btnReseva}>
                <Button title='Comprar' />
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#fefffe',
        borderWidth: 2,
        borderColor: '#918282',
        padding: 10,
        margin: 20,
    },
    title: {
        color: '#1b1a1a',
        fontSize: 20

    },
    btnReseva: {
        marginTop: 10,
    },
    titlestrick: {
        color: '#ff0909',
        fontSize: 18,
        fontWeight: 'bold'
    },
    titlemoney: {
        color: '#11963d',
        fontSize: 22,
        fontWeight: 'bold'
    },
    btnReseva: {
        marginTop: 10,
    }

});

export default PackageCard;