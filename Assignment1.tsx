import { View, Text, StyleSheet, TextInput, Pressable,Alert,Image,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
// import { styles } from './styles'
import {on} from 'events';
 

export default function Assignment1() {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [showPassword, setShowPassword]=useState(false);

    const clickLogin = () => {
        Alert.alert(`Email: ${email} \n Passord: ${password}`);
    };
        const togglePassword= () =>{
            setShowPassword(!showPassword)
        }
    
    

    
  return (
    
    
    <View style={styles.mainContainer}>
       

          <View style={styles.header}>
              <View>
                  <Text style={{
                      fontFamily: 'Poppins',
                      fontSize: 30,
                      textAlign: "center",
                      color: '#001965'
                  }}>
                      BIOHACKER
                  </Text>
                  
              </View>
          </View>

          <View style={styles.loginContainer}>

             
                  <View style={styles.subLoginContainer1}>
                      <Text style={{
                          fontFamily: 'Poppins',
                          fontSize: 40,
                          textAlign: "center",
                          color: '#001965'
                      }}>
                          Login
                      </Text>
                 
                      <Text style={{
                          fontFamily: 'Poppins',
                          fontSize: 14,
                          textAlign: "center",
                          color: '#001965'
                      }}>
                          Login to your Acoount
                      </Text>
                  </View>
                  

              <View style={styles.subLoginContainer2}>
                       
                        <TextInput style={styles.enterMail}
                        placeholder="Enter your mail"
                        value={email}
                        onChangeText={text => setEmail(text)}>
                        </TextInput>
                       
                        <TextInput style={styles.enterPassword}
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={text => setPassword(text)}
                        placeholder='Password'>
                        </TextInput>
                        
                        <TouchableOpacity onPress={togglePassword}>
                        <Image source={require('./images/visibility_off.png')}style={styles.img}></Image>
                        </TouchableOpacity>
                    
            
                <Text style={{
                      fontFamily: 'Poppins',
                      fontSize: 14,
                      textAlign: "right",
                      color: 'black'
                  }}>Forget Password?</Text>
        
          </View>
            
      </View>
      
              <View style={styles.footer}>
                
                    <Pressable onPress={clickLogin}style={styles.btn}>
                        <Text style={{
                            color:"white", 
                            fontSize:20,
                            }}>
                                 Login
                        </Text>
                    </Pressable>
            

                  <View style={styles.signup}>

                    <View>
                    <Text style ={{
                        fontSize:13,
                        color:"#001965",
                        fontFamily:"Poppins", 
                        textAlign:"center"
                        }}>
                    If you don't have an account        
                
                    <Text style ={{
                        fontSize:12,
                        color:"#4FA8D8",
                        fontFamily:"Poppins", 
                 
                        }}>
                       Sign up
                       </Text>
                    </Text>
                    </View>
                        
                    
                  </View>
                 
              </View>


          </View>




  )
}

const styles = StyleSheet.create({
mainContainer:{
    flex:1,
    padding:20
},
header:{
    flex:0.3,
    backgroundColor:"teal",
    justifyContent:"center"
},

loginContainer:{
    flex:0.5,
    backgroundColor:"pink", 
    
    
},
subLoginContainer1:{
backgroundColor:"white",
flex:0.2,

},
subLoginContainer2:{
    flex:0.3,
    backgroundColor:"red",
    borderRadius:30,
  
    gap:5,
    justifyContent:"center",
    alignItems:"flex-end"
    
    },
    
enterMail:{
width:'100%',
borderRadius:30,
backgroundColor:"#F5F5F5",

},
enterPassword:{
width:'100%',
borderRadius:30,
backgroundColor:"#F5F5F5"
},
img:{

},
footer:{

    flex:0.3,
    backgroundColor:"yellow",

},

btn:{
    
    width:'100%',
    backgroundColor:"#4FA8D8",
    borderRadius:20,
    height:'20%',
    justifyContent:"center",
    alignItems:"center",
    marginBottom:40
},
signup:{

},

})