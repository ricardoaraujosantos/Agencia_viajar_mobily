import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './src/Componets/Navbar';

import Routes from './src/Routes';

export default function App() {

  return (
    <View style={styles.container}>
      <View>
        <NavBar/>
      </View>
      <Routes />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdc3c7',
  },
});
