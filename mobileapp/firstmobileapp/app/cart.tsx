import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';

const cartItems = [
  { id: '1', name: 'Amazing T-shirt', color: 'Black', size: 'M', price: 12, quantity: 1 },
  { id: '2', name: 'Fabulous Pants', color: 'Blue', size: '42', price: 15, quantity: 1 },
  { id: '3', name: 'Spectacular Dress', color: 'Gold', size: 'L', price: 20, quantity: 1 },
  { id: '4', name: 'Stunning Jacket', color: 'Blue', size: 'M', price: 18, quantity: 1 },
  { id: '5', name: 'Wonderful Shoes', color: 'Green', size: '39', price: 18, quantity: 1 },
];

const CartScreen = () => {
  const [cart, setCart] = useState(cartItems);

  
  


  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
     <View style={styles.headerContiner}>
      <AntDesign name="left" size={20} color="#006FFD" marginLeft=" 6" />
        <Text style={styles.header}>Your bag</Text>
      </View>

      
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.imagePlaceholder}>
              <AntDesign name="picture" size={40} color="#B4DBFF" />
            </View>
            <View style={styles.details}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDetails}>{item.color} / {item.size}</Text>

              <View style={styles.totalContainer}>
              <View style={styles.quantityContainer}>
                <TouchableOpacity  style={styles.quantityButton}>
                  <AntDesign name="minus" size={10} color="#006FFD" />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity style={styles.quantityButton}>
                  <AntDesign name="plus" size={10} color="#006FFD" />
                </TouchableOpacity>
              </View>
              
              <Text style={styles.price}>€ {item.price.toFixed(2)}</Text>
              
              </View>
        
            </View>
           
          </View>
        )}
      />

      
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalAmount}>€ {totalPrice.toFixed(2)}</Text>
      </View>

      
      <TouchableOpacity style={styles.checkoutButton}>
      <Link href="/filters" style={styles.checkoutText}>
      Checkout
      </Link>
       
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  headerContiner:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15,
 
  },
  header: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
   
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor:'#D4D6DD',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  imagePlaceholder: {
    width: 90,
    height: 100,
    backgroundColor: '#EAF2FF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDetails: {
    fontSize: 14,
    color: '#888',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantityButton: {
    backgroundColor: '#EAF2FF',
    padding: 5,
    borderRadius: 50,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2024',
  },
  
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingVertical: 10,
    
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2024',
  },
  checkoutButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
