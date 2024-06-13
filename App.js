const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SplashScreen from "./screens/SplashScreen";
import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import LocationSelector from "./screens/LocationSelector";
import SignUpForm from "./screens/SignUpForm";
import ChatNegotiation from "./screens/ChatNegotiation";
import Categories from "./screens/Categories";
import CreateEvent from "./screens/CreateEvent";
import DetailCategory from "./screens/DetailCategory";
import Profile from "./screens/Profile";
import Notification1 from "./screens/Notification1";
import EditProfile from "./screens/EditProfile";
import Saved from "./screens/Saved";
import UploadUMKM from "./screens/UploadUMKM";
import UploadReview from "./screens/UploadReview";
import DetailEvent from "./screens/DetailEvent";
import AprovedEvent from "./screens/AprovedEvent";
import NearbyUMKM from "./screens/NearbyUMKM";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LocationSelector"
              component={LocationSelector}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpForm"
              component={SignUpForm}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatNegotiation"
              component={ChatNegotiation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Categories"
              component={Categories}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateEvent"
              component={CreateEvent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NearbyUMKM"
              component={NearbyUMKM}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetailCategory"
              component={DetailCategory}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notification1"
              component={Notification1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Saved"
              component={Saved}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadUMKM"
              component={UploadUMKM}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadReview"
              component={UploadReview}
              options={{ headerShown: false }}
            />
        
            <Stack.Screen
              name="DetailEvent"
              component={DetailEvent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AprovedEvent"
              component={AprovedEvent}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
