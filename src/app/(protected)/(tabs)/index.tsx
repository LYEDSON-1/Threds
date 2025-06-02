import { FlatList } from "react-native";
import PostListItem from '@/components/PostListitem';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { Post } from '@/types';
import { supabase } from '@/lib/supabase';

export default function HomeScreen() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase.from('posts').select('*, user:profiles(*)');
      if (error) {
        console.error(error);
      }
      setPosts(data as Post[]);
    };

    fetchPosts();
  }, []);

  return (
    <FlatList
      data={posts}
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

