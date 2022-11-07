
import { StyleSheet, View, Text } from 'react-native'
import { Tooltip } from 'react-native-elements';

const NavBar = () => {

    return (
        <View style={styles.container}>
            <View style={styles.rowlogo}>
                <Tooltip popover={<Text>Para onde vamos hoje?</Text>}>
                    <Text style={styles.logo}>
                        Agencia Viajar
                    </Text>
                </Tooltip>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 160,
        backgroundColor: '#955df0',
        alignItems: 'center',
        justifyContent: 'space-around'

    },
    rowlogo: {
        marginLeft: 20,
        alignItems: 'flex-start',
    },

    logo: {
        textAlign: 'left',
        fontSize: 36,
        fontWeight: 'bolder',
        color: '#fff',
    },

});

export default NavBar;