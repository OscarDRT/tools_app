import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import Navigation from './src/navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
          <Navigation />
          <StatusBar hidden/>
      </SafeAreaView>
    );
  }
}
