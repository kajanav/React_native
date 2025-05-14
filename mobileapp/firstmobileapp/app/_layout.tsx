import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Login' }} />
      <Stack.Screen name="signup" options={{ title: 'Sign Up' }} />
      <Stack.Screen name="search" options={{ title: 'Search results' }} />
      <Stack.Screen name="cart" options={{ title: 'Cart' }}/>
      <Stack.Screen name="filters" options={{ title: 'Filters' }} /> 
    </Stack>
  );
}
