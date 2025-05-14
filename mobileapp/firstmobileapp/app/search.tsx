import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

const products = [
    { id: '1', name: 'Amazing Shoes', price: '€12.00' },
    { id: '2', name: 'Fabulous Shoes', price: '€15.00' },
    { id: '3', name: 'Fantastic Shoes', price: '€15.00' },
    { id: '4', name: 'Spectacular Shoes', price: '€12.00' },
    { id: '5', name: 'Stunning Shoes', price: '€12.00' },
    { id: '6', name: 'Wonderful Shoes', price: '€15.00' },
  ];

  const ProductCard = ({ item }: { item: { name: string; price: string } }) => (
    <View style={styles.card}>
      <View style={styles.imagePlaceholder}>
        <AntDesign name="picture" size={24} color="#B4DBFF" />
      </View>
      <View style={styles.productContiner}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      </View>
      
    </View>
  );
const search = () => {
  return (
    <View style ={styles.container}>
        <View style ={styles.searchContainer}>
        <AntDesign name="search1" size={15} style={styles.searchIcon} />
        <TextInput 
          placeholder="Search" 
          style={styles.searchInput} 
          placeholderTextColor="#7D7E83"
        />
        </View>

        <View style ={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <AntDesign name="swap" size={16} color="#C5C6CC" />
          <Text style={styles.filterText}>Sort</Text>
          <AntDesign name="down" size={16} color="#C5C6CC" marginLeft=" 6" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterButton}>
          <AntDesign name="filter" size={16} color="#C5C6CC" />
          <Text style={styles.filterText}>Filter</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>2</Text>
          </View>
        </TouchableOpacity>
        </View>

        
        <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard item={item} />}
        numColumns={2} 
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
        
    </View>
  )
}

export default search

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: 'Poppins-Black',
        padding:20
    },
    searchContainer:{
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: '#F8F9FE',
        height:44,
        borderWidth:1,
        borderColor:"#F8F9FE",
        borderRadius:50,
        paddingHorizontal: 15,
        width: '100%', 
       

    },
    searchInput:{
        flex: 1,
        color: '#2F3036',
        fontSize:14,
        
    },
    searchIcon:{
        marginRight: 8, 
        color:"#2F3036",
        padding:15,
        
    },
    filterContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        padding:10
       
    },
    filterButton:{
        flexDirection: 'row', 
        alignItems: 'center',
        borderColor:"#C5C6CC",
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderWidth:1,
    
    
    },
    filterText:{
        fontSize: 14,
        marginLeft: 6,
    },
    badge:{
        borderColor:"#006FFD", 
        borderRadius: 50,
        marginLeft: 5,
        paddingHorizontal: 6,
        paddingVertical: 2,
        backgroundColor:"#006FFD",
         
    },
    badgeText:{
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    card: {
        flex: 1,
        backgroundColor: '#F8FAFC',
        borderRadius: 8,
        margin: 6,
        alignItems: 'center',
        justifyContent: 'center',
      },
      imagePlaceholder: {
        width: 160,
        height: 120,
        backgroundColor: '#EAF2FF',
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      productContiner:{
        flex: 1,
        backgroundColor: '#F8FAFC',
      },
      productName: {
        fontSize: 14,
        marginTop: 5,
        textAlign: 'center',
      },
      productPrice: {
        fontSize: 14,
        color: '#1F2024',
        fontWeight: 'bold',
        marginTop: 5,
        paddingBottom:10
      },

    
})