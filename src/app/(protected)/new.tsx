import { supabase } from "@/lib/supabase";
import { useAuth } from "@/providers/AuthProvider";
import { useState } from "react";
import { 
    View, 
    Text, 
    TextInput, 
    Pressable, 
    KeyboardAvoidingView, 
    Platform, 
    ActivityIndicator, 
    Alert 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewPostScreen() {
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();

    const onSubmit = async () => {
        if (!text.trim() || !user) return;
        setLoading(true);
        const { error } = await supabase.from('posts').insert({
            content: text.trim(),
            user_id: user.id
        });
        setLoading(false);
        if (error) {
            Alert.alert("Erro ao postar", error.message);
            return;
        }
        setText("");
        Alert.alert("Sucesso", "Post criado!");
    };

    return (
        <SafeAreaView edges={['bottom']} className="flex-1 p-4">
            <KeyboardAvoidingView
                className="flex-1"
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 140 : 0}
            >
                <Text className="text-lg font-bold text-white">
                    { "Usuário"}
                </Text>

                <TextInput
                    className="p-3 mt-4 text-white border bg-neutral-900 border-neutral-700 rounded-xl"
                    placeholder="No que você está pensando?"
                    placeholderTextColor="#888"
                    multiline
                    value={text}
                    onChangeText={setText}
                    editable={!loading}
                />

                <View className="mt-auto">
                    <Pressable
                        onPress={onSubmit}
                        className={`self-end p-3 px-6 rounded-full ${(!text.trim() || loading) ? "bg-neutral-400" : "bg-white"}`}
                        disabled={!text.trim() || loading}
                    >
                        {loading ? (
                            <ActivityIndicator color="#000" />
                        ) : (
                            <Text className="font-bold text-black">Post</Text>
                        )}
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}