/**
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {
  //   StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  StatusBar,
  View,
  Dimensions,
} from 'react-native';

const phrases = [
  'Hello friend, watchu struggling with?',
  'Whats the matter now?',
  'Are you ok?',
  "Wait a second…no I'm here.",
  'Go on! I have all day!',
  'Are you sure you thought of everything?',
  'Fine. Tell me everything.',
  "Hey, it's been a while, right?",
  'What are you building?',
  'What you broke this time?',
  'Are you really talking to a rubber duck?',
  'Hey, my favorite friend!',
  'How you doing?',
  'You good?',
  "How's your day so far?",
  'I like you…sometimes.',
  'Soo...this awesome thing your working on?',
  'Again?!',
  'Things will be fixed, eventually',
  'Hey, I was thinking of you! Broke something?',
  'Am I the only one who loves javascript?',
  "I'm listening...always 😱",
  'Sill here! With you, again...',
];

const App: () => Node = () => {
  const [randomPhrase, setRandomPhrase] = useState(
    phrases[Math.floor(Math.random() * phrases.length)],
  );

  // Set randomPhrase every time the app is open
  useEffect(() => {
    setRandomPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
  }, []);

  // Get X, Y coordinates of where the user touched the screen
  const [touchLocationX, setTouchLocationX] = useState(0);
  const [touchLocationY, setTouchLocationY] = useState(0);

  function setCoordinatesFromTouch(e) {
    setTouchLocationX(Math.floor(e.nativeEvent.locationX));
    setTouchLocationY(Math.floor(e.nativeEvent.locationY));
  }

  return (
    <SafeAreaView
      onTouchStart={e => {
        setCoordinatesFromTouch(e);
      }}
      style={styles.body}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Debugging Duck</Text>
        <Text style={styles.duckPhrase}>{randomPhrase}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/rubber-duck-body.png')}
          //   TODO: rotate duck using react native Animated library
          style={[styles.image, {transform: [{rotate: `${0}deg`}]}]}
        />
        <Image
          source={require('./assets/rubber-duck-eyes.png')}
          style={[
            styles.image,
            // Move the duck eyes to the location of the touch
            {left: touchLocationX / 50, top: touchLocationY / 50},
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

let deviceWidth = Dimensions.get('window').width; //full width
let deviceHeight = Dimensions.get('window').height; //full height

// Styles
const backgroundColor = 'rgb(6, 22, 38)';
const color = 'rgb(215, 222, 233)';
const headerColor = 'rgb(45, 63, 82)';

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: backgroundColor,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    top: 0,
    left: 0,
    width: deviceWidth,
    marginBottom: 50,
    marginTop: 50,
  },
  header: {
    textAlign: 'center',
    fontFamily: 'Nunito',
    fontSize: 24,
    fontWeight: '700',
    color: headerColor,

    marginBottom: 10,
  },
  duckPhrase: {
    color: color,
    width: deviceWidth,
    maxWidth: deviceWidth - 100,
    fontFamily: 'Nunito',
    fontSize: 29,
    fontWeight: '500',
    fontStyle: 'italic',
    // textAlign: 'center',

    // TODO: animation: fade 5s ease-in
  },
  imageContainer: {
    position: 'relative',
    width: 250,
    height: 250,
    marginBottom: 50,
  },
  image: {
    position: 'absolute',
    width: 250,
    height: 250,

    // TODO: animation: rotate 1.4s 1 ease, jump 0.3s 1 ease 1.4s;
  },
});

export default App;
