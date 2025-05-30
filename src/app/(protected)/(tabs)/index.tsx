import { dummyPosts } from '@/dummyDate';
import {  FlatList, Text, View } from "react-native";
import PostListItem from '@/components/PostListitem';
import { Link } from 'expo-router';



export default function HomeScreen() {
  return (
    <FlatList 
    data={dummyPosts} renderItem={({item}) => <PostListItem post={item}/>} 
    ListHeaderComponent={() => (
      
      <Link
        href='/new'
        className='p-4 text-3xl text-center text-blue-500'
      >
        new post
      </Link>
      
      
    )}
    />  
  );
}

