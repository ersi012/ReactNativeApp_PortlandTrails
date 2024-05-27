import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, Button, Alert, TouchableOpacity} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native'; 
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


// const Stack = createNativeStackNavigator();


// const MonumentSquareScreen = () => {
//   return (
//     <View style={styles.site1}>
//       {/* Monument Square Screen content */}
//     </View>
//   );
// };

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={styles.site1}>
//       <Image
//         style={styles.site1img}
//         source={{
//           height: 100,
//           width: 200,
//           uri:
//             'https://en.wikipedia.org/wiki/First_Parish_Church_%28Brunswick,_Maine%29#/media/File:First_Parish_Church,_Brunswick_ME.JPG',
//         }}
//       />
//       <Button
//         title="Monument Square"
//         color="#311C87"
//         onPress={() => navigation.navigate('MonumentSquare')}
//       />
//     </View>
//   );
// };




export default function App() {
    return (
      
      <SafeAreaView style = {styles.container}>    
{/* 
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MonumentSquare" component={MonumentSquareScreen} />
     
      </Stack.Navigator> */}
        <View style={{ width: 1000, height: 60, backgroundColor: '#F2C6DE'}}>          
          <Text style={styles.statusBar }>AppName & Logo </Text> 
        </View>

        <ScrollView style = {styles.scrollView}>
          <Image 
            style={styles.introImg} 
            source={{ height: 250, uri: 'https://usm.maine.edu/special-collections/wp-content/uploads/sites/412/2022/07/Southern-Maine-Gay-Pride-Celebration.jpg'}}/>

          <View style={styles.navBar}>
            <Text style={styles.navBarText}> Home </Text> 
          </View>

          <Text style={styles.welcomeHeading}> Welcome </Text>
          <Text style={styles.welcomeParagraph}>
            
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
  
          </Text>

          <View style={styles.navBar}>
            <Text style={styles.navBarText}> Sites </Text> 
          </View>

          <View style={styles.site1}> 
            <Image 
              style={styles.site1img} 
              source={{height: 100, width: 200, uri: 'https://en.wikipedia.org/wiki/First_Parish_Church_%28Brunswick,_Maine%29#/media/File:First_Parish_Church,_Brunswick_ME.JPG'}}/>
            <Button
              title="First Parish Church"
              color= '#311C87'
              onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>

          <View style={styles.site1}> 
            <Image 
              style={styles.site1img} 
              source={{height: 100, width: 200, uri: 'https://en.wikipedia.org/wiki/First_Parish_Church_%28Brunswick,_Maine%29#/media/File:First_Parish_Church,_Brunswick_ME.JPG'}}/>
            
              <Button
                title="Monument Square"
                color= '#311C87'
                onPress={() => Alert.alert('Simple Button pressed')}
              />
            
          </View>

          <View style={styles.site1}> 
            <Image 
              style={styles.site1img} 
              source={{height: 100, width: 200, uri: 'https://en.wikipedia.org/wiki/First_Parish_Church_%28Brunswick,_Maine%29#/media/File:First_Parish_Church,_Brunswick_ME.JPG'}}/>
            <Button
              title="Equality Community Center"
              color= '#311C87'
              onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>

          <View style={styles.navBar}>
            <Text style={styles.navBarText}> About </Text> 
          </View>

          <Text style={styles.welcomeParagraph}>
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 

            {"\n"}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
   
          </Text>

          <View style={styles.navBar}>
            <Text style={styles.navBarText}> Donate </Text> 
          </View>

          <Text style={styles.welcomeParagraph}>
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          </Text>
          

        </ScrollView>
      </SafeAreaView> 
    );
  }


const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: StatusBar.currentHeight
  
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  statusBar: {
    marginTop: 15,
    marginLeft: 10,
    color: '#311C87',
    fontSize: 23,
    alignItems: 'center',
    justifyContent: 'center',
    // fontFamily: 'lucida grande',
   },
  navBar: {
    width: 1000,
    height: 45,
    backgroundColor: '#F2C6DE'
  },
  navBarText: {
    flex: 1,
    color: '#311C87',
    justifyContent: 'center',
    fontSize: 20,
    paddingTop: 10,
    paddingLeft: 10,
   
  },
  welcomeHeading: {
    paddingTop: 10,
    textAlign: 'center',
    color: '#311C87', 
    fontSize: 30, 
  },
  welcomeParagraph: {
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: 'Lato Regular',
    // alignContent: 'center',
    marginTop: 20,
    paddingBottom: 20,
    // paddingLeft: 10,
    // fontSize: 20,
  },
  site1:{
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    width: 300,
    height: 200,
    backgroundColor: '#F2C6DE'
  },


});
