import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator';

export default function App() {

  const [fontLoaded] = useFonts({
      'Poppins-Bold': require('./src/Assets/Fonts/Poppins-Bold.ttf'),
      'Poppins-Medium': require('./src/Assets/Fonts/Poppins-Medium.ttf'),
      'Poppins-Light': require('./src/Assets/Fonts/Poppins-Light.ttf'),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <Navigator />
  );
}

