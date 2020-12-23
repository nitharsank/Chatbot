import * as React from 'react';
import { Text,Button,StyleSheet,ImageBackground } from 'react-native';

function WelcomeScreen({navigation}) {
  const handlePress= () => navigation.navigate('Chat');
  return (
          <ImageBackground 
              style={styles.background} 
              source={require("../assets/cuterobot.jpg")}
          >
              <Text style={styles.title}>FoodFinder </Text>
              
              <Button title="Click here to continue" onPress={handlePress}  style={styles.ContinueButton}/>
          </ImageBackground>        
  );
}
const styles= StyleSheet.create({
  background: {
      flex: 1,
      justifyContent:"flex-end"
  },
  title:{
      position: "absolute",
      top:70,
      color:"dodgerblue",
      fontWeight:"bold",
      fontSize: 40,
      alignSelf: "center"
  },
  ContinueButton:{
      backgroundColor:"dodgerblue",    
  }
})
export default WelcomeScreen;