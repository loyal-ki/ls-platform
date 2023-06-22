import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {CompositeScreenProps} from '@react-navigation/native';
import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text} from 'react-native-paper';
import {TabsParamList} from '../navigation/tabs-navigator';
import {HomeStackParamList} from '../navigation/home-navigator';

type Props = CompositeScreenProps<
  NativeStackScreenProps<HomeStackParamList>,
  MaterialBottomTabScreenProps<TabsParamList, 'HomeNavigator'>
>;

const HomeScreen = ({}: Props) => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>Home Screen</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
