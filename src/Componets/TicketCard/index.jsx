import { View, Text, StyleSheet, Button } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5'

const TicketCard = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                <Icon name='plane' size={28} color='#babad8' />
                {" " + props.data.empresa}
            </Text>
            <Text style={styles.title}>
                <Icon name='plane-departure' size={28} color='#babad8' />
                {" " + props.data.embarque}
            </Text>
            <Text style={styles.title}>
                <Icon name='plane-arrival' size={28} color='#babad8' />
                {" " + props.data.desembarque}
            </Text>
            <Text style={styles.title}>

                <Icon name='money-bill' size={28} color='#28c5a6' />
                {" R$ " + props.data.valor_passagem.toFixed(2)}
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
    }
});

export default TicketCard;