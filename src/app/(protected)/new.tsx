import { useState } from "react";
import { 
    View, 
    Text, 
    TextInput, 
    Pressable, KeyboardAvoidingView, Platform 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewPostScreen(){
    const [text, setText] = useState("");
    
    
    return(
        <SafeAreaView edges={['bottom']} className="flex-1 p-4 ">
            <KeyboardAvoidingView className="flex-1"
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 140 : 0}
            >           
            <Text className="text-lg font-bold text-white">username</Text>

            <TextInput
                className="mt-4 p-3 text-white bg-neutral-900 border border-neutral-700 rounded-xl"
                placeholder="No que você está pensando?"
                placeholderTextColor="#888"
                multiline
                value={text}
                onChangeText={setText}
            />

            <View className="mt-auto">
                <Pressable onPress={() => console.log('Post: ', text)}
                className="self-end p-3 px-6 bg-white rounded-full"    
                >
                    <Text className="font-bold text-black" >Post</Text>
                </Pressable>
            </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}