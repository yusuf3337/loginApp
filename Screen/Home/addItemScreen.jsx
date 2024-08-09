import React, { useState } from 'react';
import { View, Text, StyleSheet,SafeAreaView, Alert } from 'react-native';
import { Input, Button, Picker, Divider } from 'react-native-elements';
import { useTheme } from 'react-native-paper';

const AddItemScreen = () => {
  const [selectedProduct, setSelectedProduct] = useState('Ekmek');
  const [amount, setAmount] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [customProducts, setCustomProducts] = useState(['Ekmek', 'Su', 'Ekmek', 'Süt', 'Yumurta', 'Peynir', 'Meyve', 'Et', 'Tavuk', 'Sebze', 'Diğer']);
  const [customProductInput, setCustomProductInput] = useState('');

  const { colors } = useTheme();

  const handleAddTransaction = () => {
    if (!amount) {
      Alert.alert('Hata', 'Lütfen miktar girin.');
      return;
    }

    const transactionType = isExpense ? 'Harcama' : 'Gelir';
    const formattedAmount = parseFloat(amount).toFixed(2);

    Alert.alert(
      'İşlem Başarılı',
      `Ürün: ${selectedProduct}\nMiktar: ${formattedAmount} TL\nTür: ${transactionType}`
    );
  };

  const handleAddCustomProduct = () => {
    if (customProductInput) {
      setCustomProducts([...customProducts, customProductInput]);
      setCustomProductInput('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Yeni İşlem Ekle</Text>

    {/* <Picker.Item 
       selectedValue={selectedProduct}
       onValueChange={(itemValue) => setSelectedProduct(itemValue)}
       style={styles.picker}
     >
      {customProducts.map((product) => (
        <Picker.Item key={product} label={product} value={product} /> 
      ))}
    </Picker.Item> */}
      <Input
        placeholder="Yeni Ürün Ekle"
        onChangeText={setCustomProductInput} 
        value={customProductInput}
        containerStyle={styles.customProductInput}
      />
      <Button title="Ekle" onPress={handleAddCustomProduct} buttonStyle={styles.addButton} />

      <Input
        placeholder="Miktar girin"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        containerStyle={styles.input}
      />

      <View style={styles.radioGroup}>
        <Button
          title="Harcama"
          onPress={() => setIsExpense(true)}
          buttonStyle={isExpense ? styles.selectedButton : styles.unselectedButton}
          titleStyle={isExpense ? styles.selectedButtonText : styles.unselectedButtonText}
        />
        <Button
          title="Gelir"
          onPress={() => setIsExpense(false)}
          buttonStyle={!isExpense ? styles.selectedButton : styles.unselectedButton}
          titleStyle={!isExpense ? styles.selectedButtonText : styles.unselectedButtonText}
        />
      </View>

      <Button title="Ekle" onPress={handleAddTransaction} buttonStyle={styles.submitButton} />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#ffffff',
  },
  picker: { // Picker stilini react-native-paper için ayarlayın
    height: 50, 
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#333', // Örnek arka plan rengi
    color: '#ffffff', // Örnek metin rengi
  },
  customProductInput: {
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#007bff',
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  selectedButton: {
    backgroundColor: '#007bff',
  },
  unselectedButton: {
    backgroundColor: '#666',
  },
  selectedButtonText: {
    color: '#ffffff',
  },
  unselectedButtonText: {
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#007bff',
  },
});

export default AddItemScreen;