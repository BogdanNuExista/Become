import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ActivitySelectionScreenNavigationProp } from '../types/navigation';

const Header = () => {
  const navigation = useNavigation<ActivitySelectionScreenNavigationProp>();
  const route = useRoute();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={[styles.headerText, route.name === 'Home' && styles.boldText]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ActivitySelection')}>
        <Text style={styles.headerText}>Activities</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6a0dad',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 30,
    paddingVertical: 20,
    height: 80,
  },
  headerText: {
    color: 'white',
    fontSize: 20, // Increased font size
    fontWeight: 'bold',
    marginRight: 20, // Add some space between the texts
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default Header;