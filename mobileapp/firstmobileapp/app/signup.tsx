import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'
import CheckBox from '@react-native-community/checkbox'
import Checkbox from 'expo-checkbox'

const signup = () => {
  const [isChecked, setChecked] = useState(false);
  
  return (
    <View style={styles.container}>
      
      <View style={styles.formCantainer}>
        <View style={styles.textForm}>
        <Text style={styles.text}>Sign up</Text>
        <Text style={styles.textContainer}>Create an account to get started</Text>

        </View>
        
        <TouchableOpacity>
          <Text style={styles.nameText}>Name</Text>
        <TextInput
        style={styles.nameInput}
        placeholder="Name"
        keyboardType="email-address"
        />
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.nameText}>Email Address</Text>
        <TextInput
        style={styles.emailInput}
        placeholder="name@gmail.com"
        keyboardType="email-address"
        />
        </TouchableOpacity>
       

   
        <TouchableOpacity>
        <Text style={styles.nameText}>Password</Text>
       <TextInput
        style={styles.passwordInput}
        placeholder="Create a password"
        secureTextEntry
        />
        <TextInput
        style={styles.passwordInput}
        placeholder="Confirm password"
        secureTextEntry
        />
        </TouchableOpacity>
        
        
        <View style={styles.section}>

        <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? '#006FFD' : undefined}
      />

      <Text style={styles.linkText}>
        I've read and agree with the{' '}
        <Text style={styles.link} onPress={() => alert('Terms and Conditions')}>
          Terms and Conditions
        </Text>{' '}
        and the{' '}
        <Text style={styles.link} onPress={() => alert('Privacy Policy')}>
          Privacy Policy
        </Text>
      </Text>
    </View>
        
    <TouchableOpacity style={styles.signupButton}>
    <Link href="/cart" style={styles.signupText}>
    Confirm
      </Link>
       
    </TouchableOpacity>
    
      </View>
    </View>

  )
}

export default signup

const styles = StyleSheet.create({
  container:{
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
  textForm:{
   paddingBottom:5,
  },
  text:{
    color: 'black', 
    fontSize: 18,
    fontWeight:'900',
    padding:5,
  },
  textContainer:{
    color: '#71727A', 
    fontSize: 16,
    padding:5,
  },
  
  nameText:{
    fontSize: 14,
    fontWeight: 'bold',
    padding:5,
    paddingTop:10
  },
  nameInput:{
    height: 50,
    borderColor: '#cccc',
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 15,
    fontSize: 14,
  },
  input:{

  },
  emailInput:{
    height: 50,
    borderColor: '#cccc',
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 15,
    fontSize: 14,
  },
  passwordInput:{
    height: 50,
    borderColor: '#cccc',
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 15,
    fontSize: 14,
    
  },
  link:{
    color: '#007AFF',
    fontWeight: 'bold',
  },
  linkText:{
    color: '#71727A', 
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom:10,
  },
  checkbox: {
    margin: 8,
  },
  signupButton:{
    backgroundColor: '#006FFD',
    width: '100%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  signupText:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }

})