import { supabase } from "@/lib/supabase";
import { View, Text } from "react-native";

export default function ProfileScreen(){
    return(
        <View className="items-center justify-center flex-1">
                    <Text
                    onPress={() => supabase.auth.signOut()} className="text-2xl font-bold text-white">Sign out</Text>
        </View>
    );
}