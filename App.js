import React from 'react';
import {StatusBar} from 'expo-status-bar';
import List from './components/List';
import {SafeAreaView} from 'react-native';
import GlobalStyles from './utils/GlobalStyles';

const App = () => {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <List />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default App;
