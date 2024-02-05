import { StatusBar } from 'expo-status-bar';
import AppInitializer from './AppInitializer';
import { GlobalProvider } from './src/providers/GlobalProvider';

export default function App() {
  return (
    <>
      <GlobalProvider>
        <AppInitializer />
        <StatusBar style="auto" />
      </GlobalProvider>
    </>
  );
}