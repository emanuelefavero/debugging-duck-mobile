/**
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useRef} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  //   Image,
  Easing,
  //   StatusBar,
} from 'react-native';

// DUCK PHRASES
const phrases = [
  'Hello friend, whatchu struggling with?',
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
  'Still here! With you, again...',
];

const App: () => Node = () => {
  // ----- FEATURES -----
  // Set randomPhrase every time the app is open
  const [randomPhrase, setRandomPhrase] = useState(
    phrases[Math.floor(Math.random() * phrases.length)],
  );

  useEffect(() => {
    setRandomPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
  }, []);

  // Get X, Y coordinates of where the user touched the screen
  //   Necessary for the duck eyes to follow the user's finger
  const [touchLocationX, setTouchLocationX] = useState(0);
  const [touchLocationY, setTouchLocationY] = useState(0);

  function setCoordinatesFromTouch(e) {
    setTouchLocationX(Math.floor(e.nativeEvent.locationX));
    setTouchLocationY(Math.floor(e.nativeEvent.locationY));
  }

  // ----- ANIMATIONS ------
  //   -- ROTATE ANIMATION
  const rotateValueHolder = useRef(new Animated.Value(0)).current;

  //   START
  const startRotate = () => {
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 1000,
      //   easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  //   STOP
  const stopRotate = () => {
    rotateValueHolder.setValue(0);

    Animated.timing(rotateValueHolder, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).stop();
  };

  //   VALUE
  const rotateValue = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  //   CALL
  useEffect(() => {
    startRotate();

    setTimeout(() => {
      stopRotate();
    }, 1001);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   -- JUMP ANIMATION
  const jumpValueHolder = useRef(new Animated.Value(0)).current;

  //   START
  const startJump = () => {
    Animated.timing(jumpValueHolder, {
      toValue: 1,
      duration: 140,
      easing: Easing.bounce,
      useNativeDriver: false,
    }).start();
  };

  //   REVERSE
  const reverseJump = () => {
    Animated.timing(jumpValueHolder, {
      toValue: 0,
      duration: 200,
      easing: Easing.bounce,
      useNativeDriver: false,
    }).start();
  };

  //   STOP
  const stopJump = () => {
    jumpValueHolder.setValue(0);

    Animated.timing(jumpValueHolder, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).stop();
  };

  //   VALUE
  const jumpValue = jumpValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -24],
  });

  //   CALL
  useEffect(() => {
    // startJump();

    setTimeout(() => {
      startJump();
    }, 1300);

    setTimeout(() => {
      reverseJump();
    }, 1400);

    setTimeout(() => {
      stopJump();
    }, 1600);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   -- FADE ANIMATION
  const fadeValueHolder = useRef(new Animated.Value(0)).current;

  //   START
  const startFade = () => {
    Animated.timing(fadeValueHolder, {
      toValue: 1,
      duration: 1000,
      //   easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  //   REVERSE
  const reverseFade = () => {
    Animated.timing(fadeValueHolder, {
      toValue: 0,
      duration: 1000,
      //   easing: Easing.bounce,
      useNativeDriver: false,
    }).start();
  };

  //   STOP
  //   const stopFade = () => {
  //     Animated.timing(fadeValueHolder, {
  //       toValue: 0,
  //       duration: 1000,
  //       //   easing: Easing.linear,
  //       useNativeDriver: false,
  //     }).stop();
  //   };

  //   VALUE
  const fadeValue = fadeValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  //   CALL
  useEffect(() => {
    // startFade();
    reverseFade();

    setTimeout(() => {
      startFade();
    }, 1600);
    setTimeout(() => {
      reverseFade();
    }, 3500);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   ------ APP RENDER -----
  return (
    <SafeAreaView
      onTouchStart={e => {
        setCoordinatesFromTouch(e);
      }}
      style={styles.body}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Debugging Duck</Text>
        <Animated.Text style={[styles.duckPhrase, {opacity: fadeValue}]}>
          {randomPhrase}
        </Animated.Text>
      </View>
      <View style={styles.imageContainer}>
        <Animated.Image
          source={require('./assets/rubber-duck-body.png')}
          style={[
            styles.image,
            {
              //   -- ANIMATIONS DYNAMIC DATA
              transform: [{rotate: rotateValue}, {translateY: jumpValue}],
              //   bottom: jumpValue,
            },
          ]}
        />
        <Animated.Image
          source={require('./assets/rubber-duck-eyes.png')}
          style={[
            styles.image,
            {
              transform: [{rotate: rotateValue}, {translateY: jumpValue}],
              bottom: jumpValue,
            },
            // Move the duck eyes to the location of the touch
            {left: touchLocationX / 50, top: touchLocationY / 50},
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

// STYLES
let deviceWidth = Dimensions.get('window').width; //full width
let deviceHeight = Dimensions.get('window').height; //full height

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
  },
});

export default App;
