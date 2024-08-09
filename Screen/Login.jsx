import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  ImageBackground,
  TextInput,
  Alert 
} from 'react-native';
import GoBackButton from '../component/gobackButton';

const backgroundImageUrl = 'https://png.pngtree.com/thumb_back/fw800/background/20230523/pngtree-man-is-preparing-bread-in-a-bakery-image_2687757.jpg'; 

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('11s');
  const [password, setPassword] = useState('12s');

  const handleLogin = () => {

    if (email === '11s' && password === '12s') {

      navigation.navigate('Home');
    } else {
      // Giriş başarısız ise hata mesajı gösterin
      Alert.alert('Hatalı Giriş', 'Lütfen email ve şifrenizi kontrol edin.');
    }
  };

  return (
    <ImageBackground source={{ uri: backgroundImageUrl }} style={styles.background} blurRadius={5}>
      <View style={styles.container}>
      <GoBackButton/>
        <View style={styles.card}>
          <Text style={styles.title}>Giriş Yap</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address" 
            autoCapitalize="none" 
          />
          <TextInput
            style={styles.input}
            placeholder="Şifre"
            onChangeText={setPassword}
            value={password}
            secureTextEntry 
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Giriş</Text>
          </TouchableOpacity>


        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
    width:"95%"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#F28C28',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;