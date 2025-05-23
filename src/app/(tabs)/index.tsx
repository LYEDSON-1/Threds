import { dummyPosts } from '@/dummyDate';
import { StatusBar } from 'expo-status-bar';
import {  FlatList, Text, View } from "react-native";
import PostListItem from '@/components/PostListitem';


export default function HomeScreen() {
  return (
    <><FlatList 
    data={dummyPosts} renderItem={({item}) => <PostListItem post={item}/>} />
    <StatusBar style='auto' />
    </>   
  );
}

