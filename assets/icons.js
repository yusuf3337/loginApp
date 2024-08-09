import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const icons = {
  Tab1: ({ color }) => (
    <MaterialCommunityIcons name="home" color={color} size={26} />
  ),
  Tab2: ({ color }) => (
    <MaterialCommunityIcons name="alert-circle" color={color} size={26} />
  ),
  Tab3: ({ color }) => (
    <MaterialCommunityIcons name="star" color={color} size={26} />
  ),
  Tab4: ({ color }) => (
    <MaterialCommunityIcons name="account-circle" color={color} size={26} />
  ),
  Tab5: ({ color }) => (
    <MaterialCommunityIcons name="plus-box" color={color} size={26} />
  ),

  // Diğer ikonlarınızı burada tanımlayabilirsiniz
};
