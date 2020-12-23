import React from 'react';
import { View,Text,StyleSheet} from 'react-native';


function ChatScreen({ navigation }) {
    return (
      <View style={StyleSheet.Chat}>
           
      </View>
    );
  }

const styles=StyleSheet.create(
  {
    Chat:{
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    }
})

export default ChatScreen;