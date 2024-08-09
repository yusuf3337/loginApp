import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, SafeAreaView, StatusBar, Modal, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';

const backgroundImageUrl = 'https://png.pngtree.com/thumb_back/fw800/background/20230523/pngtree-man-is-preparing-bread-in-a-bakery-image_2687757.jpg';

const HomeScreen = () => {
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const data = [
    { title: 'Satılan Ekmek', value: '120 Adet' },
    { title: 'Un Fiyatı', value: '5.99 TL/KG' },
    { title: 'Toplam Kazanç', value: '750 TL' },
    { title: 'Yeni Müşteriler', value: '15' },
  ];

  const recentTransactions = [
    { location: 'Silivri Parkköy Şube', items: '2 Ekmek', amount: '+ 55 TL' },
    { location: 'Silivri Kiptaş 2 Şubesi', items: 'Tatlı', amount: '+ 100 TL' },
    { location: 'Silivri Çingen Mahallesi', items: '2 Ekmek', amount: '+ 20 TL' },
    { location: 'Beylikdüzü Migros', items: 'Peynir, Süt', amount: '+ 75 TL' },
    { location: 'Bakırköy CarrefourSA', items: 'Meyve, Sebze', amount: '+ 80 TL' },
    { location: 'Esenyurt AVM', items: 'Kitap', amount: '+ 35 TL' },
    { location: 'Kadıköy Çarşı', items: 'Baharat', amount: '+ 25 TL' },
    { location: 'Beşiktaş Pazarı', items: 'Yumurta, Tereyağı', amount: '+ 40 TL' },
    { location: 'Üsküdar Sahili', items: 'Dondurma', amount: '+ 15 TL' },
    { location: 'Sultanahmet Camii Yakınları', items: 'Su, Atıştırmalık', amount: '+ 20 TL' },
    { location: 'Taksim Meydanı', items: 'Kahve', amount: '+ 10 TL' },
    { location: 'Galata Kulesi', items: 'Hatıra Eşyası', amount: '+ 50 TL' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.box}>
      <Text style={styles.boxTitle}>{item.title}</Text>
      <Text style={styles.boxValue}>{item.value}</Text>
    </View>
  );

  const renderTransaction = ({ item }) => (
    <TouchableOpacity onPress={() => {
      setSelectedTransaction(item);
      setIsModalVisible(true);
    }}>
      <View style={styles.transactionItem}>
        <View>
          <Text style={styles.transactionLocation}>{item.location}</Text>
          <Text style={{ color: "white" }}>{item.items}</Text>
        </View>
        <Text style={styles.transactionAmount}>{item.amount}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground source={{ uri: backgroundImageUrl }} style={styles.backgroundImage} blurRadius={5}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View>
          <View style={{ padding: 10 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 32 }}>
              Özet Bilgiler
            </Text>
          </View>

          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
          />

          <Divider horizontalInset={true} style={{ marginVertical: 20 }} />

          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 24, marginBottom: 10, padding:10 }}>
            Son Hareketler
          </Text>

          <View style={{ backgroundColor: "rgba(0,0,0,0.8)", borderRadius: 10, padding: 10, marginHorizontal:10, height:"40%" }}>
            <FlatList
              data={recentTransactions}
              renderItem={renderTransaction}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>

        {/* Modal */}
        <Modal visible={isModalVisible} animationType="fade" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>İşlem Detayı</Text>
              
              <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}} >
                <Text style={styles.modalText}>Konum : </Text>
              <Text style={styles.modalText}> {selectedTransaction?.location}</Text>
              </View>
             
              <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}} >
              <Text style={styles.modalText}>Ürünler: </Text>

              <Text style={styles.modalText}>{selectedTransaction?.items}</Text>
              </View>


              <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}} >
              <Text style={styles.modalText}>Tutar:</Text>
              <Text style={styles.modalText}>{selectedTransaction?.amount}</Text>
              </View>
              <TouchableOpacity onPress={() => setIsModalVisible(false)} style={styles.closeModalButton}>
                <Text style={styles.closeModalText}>Kapat</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </ImageBackground>
  );
};




const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    padding: 10,
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  box: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
  },
  boxTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  boxValue: {
    fontSize: 24,
  },
  divider: {
    marginVertical: 20,
  },
  recentTransactionsTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  recentTransactionsContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    padding: 10,
  },
  transactionItem: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,

    borderBottomColor: '#eee',
  },
  transactionLocation: {
    fontWeight: 'bold',
    color: 'white',
  },
  transactionItems: {
    color: 'white',
  },
  transactionAmount: {
    fontWeight: 'bold',
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width:"95%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 5,
  },
  closeModalButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  closeModalText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  
});

export default HomeScreen;
