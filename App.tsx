/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
//  * @format
 */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   Image 
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';





// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });


// inline-------------------------
// import { View, Text } from 'react-native'
// import React from 'react'

// export default function App() {
//   return (
//     <View style={{backgroundColor:"teal",flex:1,flexDirection:"column",
//     justifyContent:"space-between"}}>

//     <View style={{flex:1,flexDirection:"column",
//         justifyContent:"space-between",alignItems:"center"}}>
//         <View style={{backgroundColor:"pink",
//         height:100,width:100}}/>
//     </View>


//     <View style = {{flexDirection:"row",
//         justifyContent:"space-between",flex:1}}>
//         <View style={{backgroundColor:"pink",
//         height:100,width:100}}/>
//         <View style={{backgroundColor:"pink",
//         height:100,width:100}}/>

//     </View>

//    <View style={{flexDirection:"row",
//     justifyContent:"space-between",flex:1}}>
//         <View style={{backgroundColor:"pink",
//         height:100,width:100}}/>
//         <View style={{backgroundColor:"pink",
//         height:100,width:100}}/>
//        <View style={{backgroundColor:"pink",
//         height:100,width:100}}/>

//     </View>

   

// <View style={{flexDirection:"row",
//     justifyContent:"flex-end",gap:50,flex:1}}>
//         <View style={{backgroundColor:"pink",
//         height:100,width:100}}/>
//         <View style={{backgroundColor:"pink",
//         height:100,width:100}}/>
       

//     </View>

//     <View style={{flexDirection:"row",gap:62}}>
//         <View style={{backgroundColor:"pink",
//         height:100,width:100}}/>
//         <View style={{backgroundColor:"pink",
//         height:100,width:100}}/>
       

//     </View>

//     </View>
//   )
// }



// internal-----------------------------------
// import { View, Text, StyleSheet } from 'react-native'
// import React from 'react'
// import { styles } from './styles'
// export default function App() {
//   return (
//         <View style = {styles.container}>

//                 <View style = {styles.container1}>
//                 <View style ={styles.row1}></View>
//                 </View>

//                 <View style = {styles.container2}>
//                 <View style ={styles.row1}></View>
//                 <View style ={styles.row1}></View>
//                 </View>

//                 <View style = {styles.container3}>
//                 <View style ={styles.row1}></View>
//                 <View style ={styles.row1}></View>
//                 <View style ={styles.row1}></View>
//                 </View>

//                 <View style = {styles.container4}>
//                 <View style ={styles.row1}></View>
//                 <View style ={styles.row1}></View>
//                 </View>

//                 <View style = {styles.container5}>
//                 <View style ={styles.row1}></View>
//                 <View style ={styles.row1}></View>
//                 </View>


        
//     </View>
//   )
// }


// const styles = StyleSheet.create({
//         container: {
//                 backgroundColor:"teal",
//                 flex:1 ,
//                 justifyContent:"space-between"
//         },
//         container1 :{
//                 flexDirection:"row",
//                 justifyContent:"center"
               
//         },
//         row1 : {
//                 height:100,
//                 width:100,
//                 backgroundColor:"pink",
                
//         },
//         container2 : {
//                 flexDirection:"row",
//                 justifyContent:"space-between"
//         },
//         container3 : {
//                 flexDirection:"row",
//                 justifyContent:"space-between"
//         },
//         container4 : {
//                 flexDirection:"row",
//                 justifyContent:"flex-end",
//                 gap:50
//         },
//         container5 : {
//                 flexDirection:"row",
//                 gap:65
//         },

// })


// images----------
// import { View, Text, StyleSheet, Image } from 'react-native'
// import React from 'react'
// import { styles } from './styles'

// export default function App() {
//   return (
//         <View style = {styles.container}>
//                 <View style = {styles.container1}>
//                 <View style ={styles.row1}>
//                 <Image source={require('./images/nature.jpeg')}
//                 style={{height:100, width:100}}/>
//                 </View>
//                 </View>

//                 <View style = {styles.container2}>
//                 <View style ={styles.row1}>
//                 <Image source={require('./images/nature.jpeg')}
//                 style={{height:100, width:100}}/>
//                 </View>
//                 <View style ={styles.row1}>
//                 <Image source={require('./images/nature.jpeg')}
//                 style={{height:100, width:100}}/>
//                 </View>

//                 </View>

//                 <View style = {styles.container3}>
//                 <View style ={styles.row1}></View>
//                 <View style ={styles.row1}>
//                 <Image source={require('./images/nature2.jpeg')}
//                 style={{height:100, width:100}}/>
//                 </View>
//                 <View style ={styles.row1}></View>
//                 </View>

//                 <View style = {styles.container4}>
//                 <View style ={styles.row1}></View>
//                 <View style ={styles.row1}></View>
//                 </View>

//                 <View style = {styles.container5}>
//                 <View style ={styles.row1}></View>
//                 <View style ={styles.row1}>
//                   <Image
//                   source={{uri: 'data:image/jpeg;base64,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'}}
//                   style={{width: 100, height: 100}}
// />
//                 </View>
//                 </View>   
//     </View>
//     );
//     }


// Assignment 1
// import { View, Text, TextInput } from 'react-native'
// import React from 'react'
// import { styles } from './styles'
// export default function App() {
//   return (
//     <View style = {styles.mainContainer}>

//       <View>
//   <Text style={{fontFamily:"Poppins",
//   color:"#001965",
//   textAlign:"center",
//   fontWeight:700,

  
// }}>
//   BIOHACKERS</Text>
//       </View>

// <View style={styles.loginContainer}>
// <View style={styles.login}>
//   <Text>Login</Text>
// <View style={styles.loginAccount}>
// <Text>Login your account</Text>
// </View>
// </View>
// <View style={styles.subLogin}>
//   <View style={styles.email}>
// <TextInput style={styles.email} placeholder='Enter your email'></TextInput>
//   </View>
//   <View style={styles.password}>
// <TextInput style={styles.password} placeholder='Password'></TextInput>
//   </View>
//   <View style={styles.forget}>
// <Text>Forget password ?</Text>
//   </View>
// </View>
// </View>

// <View style={styles.footer}>

// </View>

//     </View>
//   )
// }



