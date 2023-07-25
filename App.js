import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name } from './app.json';
import { KitsScreen } from './src/features/screens/kits.screen';

import { styled } from 'styled-components/native';

const Container = styled(SafeAreaView)`
  flex: 1;
  justify-conent: center;
  flex-direction: column;
`;

export default function App() {
  return (
    <PaperProvider>
      <Container>
        <KitsScreen />
        <StatusBar
          style={{
            barStyle: 'light-content',
          }}
        />
      </Container>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(name, () => App);
