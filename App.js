import React from 'react';
import { View, StatusBar, StyleSheet, SafeAreaView, Platform } from 'react-native';
// import nommé depuis CardList.js
import { CardList } from './components/CardList.js';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#f6f7fb"
      />
      <View style={styles.screen}>
        <CardList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f7fb',
  },
  screen: {
    flex: 1,
    backgroundColor: '#f6f7fb',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
});