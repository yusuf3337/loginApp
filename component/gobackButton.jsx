import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function GoBackButton() {
  const navigation = useNavigation(); 

  const handleGoBack = () => {
    navigation.goBack();
    console.log('Geri butonuna basıldı!');
  };

  return (
    <View style={{ position: 'absolute', top: 50, left: 5, padding: 20 }}>
      <TouchableOpacity onPress={handleGoBack}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Geri</Text>
      </TouchableOpacity>
    </View>
  );
}