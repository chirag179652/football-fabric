import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name } from './app.json';
import SearchBarComp from './src/components/SearchBar/SearchBar';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <SearchBarComp />
        </View>
        <View style={styles.content}>
          <Text>This is content</Text>
        </View>
      </SafeAreaView>

      <StatusBar
        style={{
          barStyle: 'light-content',
        }}
      />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyConent: 'center',
    flexDirection: 'column',
    // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  heading: {
    fontSize: 30,
    justifyContent: 'center',
    marginLeft: 20,
  },
  header: {
    width: '100%',
    padding: 10,
    backgroundColor: 'rgb(200,200,200)',
  },
  content: {
    width: '100%',
    backgroundColor: 'blue',
    height: '100%',
  },
});

AppRegistry.registerComponent(name, () => App);
