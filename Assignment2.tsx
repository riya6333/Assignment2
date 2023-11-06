import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
function Assignment2() {
  return (
        <View style = {styles.container}>

                <View style = {styles.container1}>
                <View style ={styles.row11}></View>
                <View style ={styles.row12}></View>
                <View style ={styles.row13}></View>
                <View style ={styles.row14}></View>
                </View>

                <View style = {styles.container2}>
                <View style ={styles.row21}></View>
                <View style ={styles.row22}></View>
                </View>

                <View style = {styles.container3}>
                <View style ={styles.row31}></View>
                <View style ={styles.row32}></View>
                </View>

                <View style = {styles.container4}>
                <View style ={styles.row41}></View>
                </View>

                <View style = {styles.container5}>
                <View style ={styles.row51}></View>
                </View>

                <View style = {styles.container6}>
                <View style ={styles.row61}></View>
                </View>

        </View>
  )
}


const styles = StyleSheet.create({

        container: {
                flex:1 ,
                backgroundColor:"yellow",
                padding:3,
                gap:3
        },

        container1 :{
                flex:0.1,
                flexDirection:"row",
                justifyContent:"space-between",
        },
        row11:{
            width:'24.4%',
            backgroundColor:"red",
            borderRadius:10
        },
        row12:{
            width:'24.4%',
            backgroundColor:"red",
            borderRadius:10
        },
        row13:{
            width:'24.4%',
            backgroundColor:"red",
            borderRadius:10
        },
        row14:{
            width:'24.4%',
            backgroundColor:"red",
            borderRadius:10
        },

        container2 :{
            flex:0.1,
            flexDirection:"row",
            justifyContent:"space-between"
        },
        row21:{
            width:'49%',
            backgroundColor:"red",
            borderRadius:10
        
        },
        row22:{
            width:'24%',
            backgroundColor:"red",
            borderRadius:10
        },
            container3:{
            flex:0.1,
            flexDirection:"row",
            justifyContent:"flex-end",
            columnGap:3
       
        },
            row31:{
            width:'49%',
            backgroundColor:"red",
            borderRadius:10
        },
        row32:{
            width:'24.4%',
            backgroundColor:"red",
            borderRadius:10
    
        },
        container4 :{
            flex:0.4,
            flexDirection:"row",
        },
        row41:{
            width:'100%',
            backgroundColor:"red",
            borderRadius:10
        },
        container5 :{
            flex:0.3,
            flexDirection:"row",
        },
        row51:{
            width:'100%',
            backgroundColor:"red",
            borderRadius:10
        },
        container6 :{
            flex:0.2,
            flexDirection:"row",
            },
        row61:{
            width:'100%',
            backgroundColor:"red",
            borderRadius:10
        },
  

})
export default Assignment2;