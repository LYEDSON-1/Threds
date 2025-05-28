import  { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import { Link } from "expo-router";

export default function SignupScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Erro", "Preencha todos os campos.");
            return;
        }
        setIsLoading(true);
        try {
            // Simulação de requisição de login
            await new Promise((resolve) => setTimeout(resolve, 2000));
            // Aqui você pode adicionar a lógica de autenticação real
            Alert.alert("Sucesso", "Login realizado com sucesso!");
        } catch (error) {
            Alert.alert("Erro", "Ocorreu um erro ao fazer login.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View className="items-start justify-center flex-1 px-6 bg-neutral-900">
            <View className="w-full max-w-sm">
                <Text className="mb-8 text-3xl font-bold text-center text-white">
                    Create an account
                </Text>
                <View className="gap-4">
                    <View>
                        <Text className="mb-1 text-sm font-medium text-white">
                            Email
        </Text>
            <TextInput
             className="w-full px-4 text-white border rounded-lg bg-neutral-800 border-neutral-700"
             placeholder="Enter your email"
             placeholderTextColor="#687280"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
                        />
</View>

<View>
    <Text className="mb-1 text-sm font-medium text-gray-300 ">
        Password
    </Text>
            <TextInput
                className="w-full px-4 text-white border rounded-lg border-neutral-700 bg-neutral-800"
                placeholder="Enter your password"
                placeholderTextColor="#687280"
                keyboardType="visible-password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                        />
</View>
 </View>
    {/* Botão de Login */}
    <TouchableOpacity
    className="items-center w-full py-3 mt-6 bg-white rounded-lg"
    onPress={handleLogin}
    disabled={isLoading}
                >
      {isLoading ? (
    <ActivityIndicator color="#fff" />
                    ) : (
    
    <Text className="font-semibold text-center text-black">
        {isLoading ? 'Logging in...' : 'Sign up'}
    </Text>
                    )}
    </TouchableOpacity>
        {/* Texto para cadastro */}
        <View className="items-center w-full mt-4">
            <Text className="text-gray-400">
            Já tem uma conta?{" "}
            <Link href="/login" asChild>
            <Text className="font-semibold text-blue-500">
                            Sign up
                        </Text>
                        </Link>
                        
                    </Text>
                </View>
            </View>
        </View>
    );
}