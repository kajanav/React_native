import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'

       
const colors = ['BLACK', 'WHITE', 'GREY', 'YELLOW', 'BLUE', 'PURPLE', 'GREEN', 'RED', 'PINK', 'ORANGE', 'GOLD', 'SILVER'];


const filters = () => {
    const [selectedColor, setSelectedColor] = useState(null);

    const toggleColorSelection = (color) => {
      setSelectedColor(selectedColor === color ? null : color);
    };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
         <TouchableOpacity>
             <Text style={styles.cancelText}>Cancel</Text> 
         </TouchableOpacity>
         <Text style={styles.title}>Filter</Text>
         <TouchableOpacity>
             <Text style={styles.clearText}>Clear All</Text> 
         </TouchableOpacity>
      </View>
       
       <View style={styles.filterItem}>
        <Text style={styles.lable}>Category</Text>
        <View style={styles.badge}>
            <Text style={styles.badgeText}>2</Text>
          </View>
       </View>

       <View style={styles.filterItem}>
        <Text style={styles.lable}>Price Range</Text>
        <AntDesign name="down" size={20} color="#8F9098" marginLeft=" 6" />
       </View>
        
<View style={styles.itemContiner}>
<View style={styles.itemFilter}>
        <Text style={styles.lable}>Color</Text>
        <View style={styles.badge}>
            <Text style={styles.badgeText}>1</Text>
          </View>
       </View>
       <FlatList 
        data={colors}
        keyExtractor={(item) => item}
        numColumns={4}
        contentContainerStyle={styles.colorContainer}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={[styles.colorButton, selectedColor === item && styles.selectedColorButton]}
            onPress={() => toggleColorSelection(item)}
          >
            <Text style={[styles.colorText, selectedColor === item && styles.selectedColorText]}>{item}</Text>
          </TouchableOpacity>
        )}
      />
</View>
       


       <View style={styles.filterItem}>
        <Text style={styles.lable}>Size</Text>
        <AntDesign name="down" size={20} color="#8F9098" marginLeft=" 6" />
       </View>

       <View style={styles.filterItem}>
        <Text style={styles.lable}>Customer Review</Text>
        <AntDesign name="down" size={20} color="#8F9098" marginLeft=" 6" />
       </View>

       <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default filters

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: 'Poppins-Black',
        padding:20
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 30
    },
    cancelText:{
        color: '#006FFD',
        fontSize: 16,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 16,
    },
    clearText:{
        color: '#006FFD',
        fontSize: 16,
    },
    filterItem:{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor:'#D4D6DD',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        justifyContent: 'space-between',
    },
    itemFilter:{
        flexDirection: 'row',
        alignItems: 'center',      
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        justifyContent: 'space-between',
    },
    itemContiner:{
        borderBottomWidth: 1,
        borderBottomColor:'#D4D6DD',
    },
    
    lable:{
        fontSize: 14,
        color: '#1F2024',
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
    applyButton:{
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    applyText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    colorContainer:{
        paddingVertical: 10, 
        paddingHorizontal: 15,
        gap:10,
        
        
       
    },
    colorButton:{
        paddingVertical: 8, 
        paddingHorizontal: 15, 
        borderRadius: 20,
        backgroundColor: '#EAF2FF',
        margin:2
       
    },
    colorText:{
        color: '#006FFD',  
        fontWeight: 'bold',
    },
    selectedColorButton:{
        backgroundColor: '#007BFF',
    },
    selectedColorText:{
        color: '#fff',
    },
    
})