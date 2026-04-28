import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';


const RootLayout = () => {

  return (
    <SafeAreaView style={styles.appContainer}>
      <Stack screenOptions={{headerShown: false}}/>
    </SafeAreaView>
  );
}

export default RootLayout;

const styles = StyleSheet.create({
  appContainer: {
    flex : 1
  }
})