import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import { icons } from '../assets/icons';
import TabBar from './Tabbar';
import { useNavigation } from "@react-navigation/native";
import addItemScreen from '../Screen/Home/addItemScreen'

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tab.Screen
          name="Tab1"
          component={HomeNavigator}
          options={{
            tabBarLabel: 'Anasayfa',
            tabBarIcon: icons.Tab1,
          }}
        />

<Tab.Screen
          name="Tab5"
          component={addItemScreen} 
          options={{
            tabBarLabel: 'Ekle',
            tabBarIcon: icons.Tab2,
          }}
        />

        <Tab.Screen
          name="Tab2"
          component={HomeNavigator} 
          options={{
            tabBarLabel: 'Profil',
            tabBarIcon: icons.Tab2,
          }}
        />


      </Tab.Navigator>
    </View>
  );
}

const EmptyComponent = () => {
  return null;
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 12,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BottomTabNavigator;