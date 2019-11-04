/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

import {
  // Header,
  // LearnMoreLinks,
  Colors,
  // DebugInstructions,
  // ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
// import Orientation from 'react-native-orientation';
// import {Svg, G, Line, Circle, Rect, Text} from 'react-native-svg';
// import {color, t} from 'react-native-tailwindcss';
import SideBar from './src/components/SideBar';
import Diagram from './src/components/Diagram';

// const App: () => React$Node = () => {
const Main = () => {
  // const initial = Orientation.getInitialOrientation();
  useEffect(() => {});
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      {global.HermesInternal == null ? null : (
        <View style={styles.engine}>
          <Text style={styles.footer}>Engine: Hermes</Text>
        </View>
      )}
      <SideBar />
      <ReactNativeZoomableView
        stye={styles.container}
        zoomEnabled={true}
        maxZoom={2}
        minZoom={0.5}
        initialZoom={1}
        zoomStep={0.25}>
        <Diagram />
      </ReactNativeZoomableView>
      {/*
      <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <Text>can i get this?</Text>
              <Text>Jack of all trades</Text>
            </View>

            <View style={styles.body}>
              <LearnMoreLinks />
            </View>

          </ScrollView>
        </SafeAreaView>
      */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 20,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Main;
