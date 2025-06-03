import { ActivityIndicator, FlatList, Text } from "react-native";
import PostListItem from '@/components/PostListitem';
import { Link } from 'expo-router';
import { supabase } from '@/lib/supabase';
import { useQuery } from "@tanstack/react-query";

 const fetchPosts = async () => {
      const { data } = await supabase.from('posts').select('*, user:profiles(*)').throwOnError();
      

     return data;
    
    };

export default function HomeScreen() {

  const {data, isLoading, error} = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });
  
 
 if (isLoading){
  return <ActivityIndicator/>
 }
 
 if (error){
  return <Text className="text-red-500">{error.message}</Text>
 }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <PostListItem post={item} />}
      keyExtractor={(item) => item.id.toString()}
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

