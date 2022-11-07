import { View, Text, StyleSheet, Button } from "react-native"

import Icon from 'react-native-vector-icons/FontAwesome5'

const hostingCard = (props) => {

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                <Icon name='hotel' size={28} color='#2471A3' />
                {" " + props.data.empresa}
            </Text>

            <Text style={styles.title}>
                <Icon name='map' size={28} color='#C0392B' />
                {" " + props.data.endereco}
            </Text>

            <Text style={styles.title}>
                <Icon name='money-bill' size={28} color='#28c5a6' />
                {" R$ " + props.data.valor_diaria.toFixed(2)}
            </Text>

            <Text style={styles.btnReseva}>
                <Button title='Reservar' />
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

export default hostingCard;