import { useAuth } from "@/providers/AuthProvider";
import { Stack, Redirect } from "expo-router";

export default function AuthLayout() {
const {isAuthenticated} = useAuth();
if(isAuthenticated){
  return <Redirect href="(protected)"/>
}

  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ title: 'Criar conta', headerBackButtonDisplayMode: 'minimal' }} />
    </Stack>
  );
}
