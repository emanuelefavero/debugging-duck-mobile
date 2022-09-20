/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  //   StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
} from 'react-native';

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={[styles.sectionDescription, styles.mainText]}>
          Hello Duck
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: 'rgb(6, 22, 38)',
  },
  mainText: {
    color: 'rgb(131, 139, 151)',
    fontSize: 24,
    fontWeight: 'bold',
  },
  fullScreen: {
    flex: 1,
    width: 100,
    height: 100,
  },
  SafeAreaView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(6, 22, 38)',
  },
  scrollView: {
    marginHorizontal: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default App;
