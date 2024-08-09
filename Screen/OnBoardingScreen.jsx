import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  ImageBackground,
  Image 
} from 'react-native';

// Görselleri import etme
const backgroundImageUrl = 'https://png.pngtree.com/thumb_back/fw800/background/20230523/pngtree-man-is-preparing-bread-in-a-bakery-image_2687757.jpg'; 


const OnBoardingScreen = ({ navigation }) => { 

  const handleLogin = () => {
    console.log('Giriş yapılıyor...');
    navigation.navigate('Login'); 
  };

  const handleSignup = () => {
    console.log('Kayıt ekranına yönlendiriliyor...');
    navigation.navigate('Register'); 
  };

  return (
    <ImageBackground source={{ uri: backgroundImageUrl }} style={styles.background} blurRadius={5}> 
      <View style={styles.container}>
        <Image source={{uri: 'https://www.zarla.com/images/zarla-mis-frn-1x1-2400x2400-20211206-cy6rjpy8xr9rm8cd9v49.png?crop=1:1,smart&width=250&dpr=2'}}
            style={{height:200, width:200}}
        />
        <View style={styles.card}>
          <Text style={styles.title}>Bakery and Coffee</Text>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Giriş Yap</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',

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
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', 
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

export default OnBoardingScreen;