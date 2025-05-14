import { AntDesign, Entypo, EvilIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Icon } from 'react-native-vector-icons/Icon';

export default function Index() {
  function setShowPassword(arg0: boolean): void {
    throw new Error('Function not implemented.');
  }

  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      {/* Section 1 */}
      <View style={styles.myImage}>
        <AntDesign name="picture" size={48} color="#B4DBFF" />
      </View>

      <View style={styles.formCantainer}>
        <Text style={styles.text}>Welcome!</Text>

        <TextInput
        style={styles.emailInput}
        placeholder="Email Address"
        keyboardType="email-address"
        />

   
      <View>
       <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        />
      </View>  
     
    <View>
    <Link href="/#" style={styles.button}>
       Forgot password? 
      </Link>
    </View>
     
    <TouchableOpacity style={styles.loginButton}>
    <Link href="/search" style={styles.loginText}>
    Login
      </Link>
       
    </TouchableOpacity>
    <TouchableOpacity style={styles.registerContainer}>
 
      <Text style={styles.registertext}>Not a member? {' '}
      <Link href="/signup" style={styles.registerbutton}>
       Register now 
      </Link>
      </Text>
      </TouchableOpacity>

      <View style={styles.line} />

      <View style={styles.locationContainer}>
      <Text style={styles.orText}>Or continue with</Text>
      </View>
      </View>
      <View style={styles.socialContainer}>
        
        <TouchableOpacity style={styles.googleButton}>
            <AntDesign name="google" size={14} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.appleButton}>
            <Entypo name="app-store" size={14} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.facebookButton}>
            <EvilIcons name="sc-facebook" size={14} color="white" />
          </TouchableOpacity>
        </View>
         
    
      
    </View>
    
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'Poppins-Black',
    
  },
  formCantainer:{
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },

  },
  text: {
    color: 'black', 
    fontSize: 24,
    fontFamily: 'Poppins-Black',
    fontWeight:'900',
    padding: 10,
   
  },
  emailInput:{
    height: 50,
    borderColor: '#cccc',
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 15,
    fontSize: 16,
   
  },
  button: {
    fontSize: 12,
    color: '#006FFD',
    fontWeight:'600',
    padding: 10
  },
  myImage: {
    height: 312,
    width: 375, 
    backgroundColor: '#EAF2FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton:{
    backgroundColor: '#006FFD',
    width: '100%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
   
  },
  loginText:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }, 
  input: {
    height: 50,
    borderColor: '#cccc',
    borderWidth: 2,
    borderRadius: 8,
    
    paddingHorizontal: 15,
    fontSize: 16,
   
    
  },
  registertext: {
    margin: 10, 
    fontSize: 12,
    color: '#71727A',
   
  },
  registerbutton:{
    fontSize: 12,
    color: '#006FFD',
    fontWeight: 'bold',
   
  },
  registerContainer:{
    alignItems: 'center',
  },
  line:{
    width: '100%',
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  locationContainer:{
    alignItems: 'center',
  },
  orText:{
    color: '#71727A',
    fontSize: 12,
    
  },
  
  socialContainer:{
    flex: 1,
    flexDirection: 'row',
    width: '100%',  
    paddingBottom:20,
    justifyContent: 'center',
    gap: 10,
    
  },
  googleButton:{
    backgroundColor: '#ED3241',
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    
 

  },
  appleButton:{
    backgroundColor: '#1F2024',
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  facebookButton:{
    backgroundColor: '#006FFD',
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    
  }
});
