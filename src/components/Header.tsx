import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ActivitySelectionScreenNavigationProp } from '../types/navigation';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const navigation = useNavigation<ActivitySelectionScreenNavigationProp>();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.headerText}>Home</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
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
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 20,
    height: 80,
  },
  headerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;