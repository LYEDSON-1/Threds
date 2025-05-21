import { StatusBar } from 'expo-status-bar';
import {  Text, View } from "react-native";


export default function HomeScreen() {
  return (
    <View className='flex-1 p-4'>     
        <Text className='p-2 text-3xl font-bold text-white'>Feed</Text>
        
        <StatusBar style='auto'/>
    </View>
    
  );
}

