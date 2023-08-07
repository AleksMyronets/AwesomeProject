import { RegistrationScreen } from "./src/screens/RegistrationScreen";
import { LoginScreen } from "./src/screens/LoginScreen";
import { PostsScreen } from "./src/screens/PostsScreen";
import { ProfileScreen } from "./src/Screens/ProfileScreen"
import { useFonts } from 'expo-font';
import { useCallback } from 'react';




export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
    'RobotoMedium': require("./screens/fonts/Roboto-Medium.ttf"),
  });

  const registerInfo=(info)=>{
    console.debug(info);
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RegistrationScreen registerInfo={registerInfo}/>
      <LoginScreen logininfo={loginInfo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:20,
  },
});
  
  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }
  // return <ProfileScreen />;
