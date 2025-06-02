import { View, Text, Image, Pressable } from "react-native";
import { Post } from "@/types";
import Ionicons from "react-native-vector-icons/Ionicons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);


export default function PostListItem({ post }: {post: Post}) {
    return (
        <View className="flex-row items-start px-4 py-3 border-b border-neutral-800/70">
            {/* Avatar do usuário */}
            <Image
                source={{ uri: post.user.avatar_url }}
                className="w-10 h-10 mr-3 rounded-full" />
            {/* Conteúdo do post */}
            <View className="flex-1 gap-4 mt-2">
                <View className="flex-row items-center ">
                    <Text className="mr-2 font-semibold text-white">{post.user.username}</Text>
                    <Text className="ml-2 text-xs text-neutral-500">
                    {dayjs(post.created_at).fromNow()}    
                    </Text>
                </View>
                <Text className="text-white">{post.content}</Text>
                
                <View className="flex-row gap-4 mt-2 ">

                    <Pressable className="flex-row items-center pl-1 space-x-1">
                        <Ionicons name="heart-outline" size={16} color='#d1d5db'/>
                        <Text className="pl-1 text-xs text-neutral-300">0</Text>
                    </Pressable>
                    
                    <Pressable className="flex-row items-center">
                     <Ionicons name="chatbubble-outline" size={16} color="#d1d5db"/>
                     <Text className="pl-1 text-xs text-neutral-300">{0}</Text>
                    </Pressable>
                    
                <Pressable className="flex-row items-center pl-1 space-x-1">
                        <Ionicons name="repeat-outline" size={16} color='#d1d5db'/>
                        <Text className="pl-1 text-xs text-neutral-300">0</Text>
                    </Pressable>
                    
                                  
                   <Pressable>
                    <Ionicons name="paper-plane-outline" size={16} color='#d1d5db'/>
                   </Pressable>
                </View>
            </View>
        </View>
    );
}