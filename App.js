import 'react-native-gesture-handler';
import * as React from 'react';
import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AuthContextProvider, {AuthContext} from './store/auth-context';
import AuthScreen from './screens/Auth/AuthScreen';
import LoginScreen from './screens/Auth/LoginScreen';
import SignupScreen from './screens/Auth/SignupScreen';
import UserProfileScreen from './screens/Auth/UserProfileScreen';
import WelcomeScreen from './screens/Welcome';
import DiscoverScreen from './screens/DiscoverScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';
import AuthContent from './components/Auth/AuthContent';
import SettingsScreen from './screens/SettingsScreen';

const UnauthenticatedStack = createStackNavigator();
const AuthenticatedStack = createStackNavigator();
const BottomTabNavigator = createBottomTabNavigator();
const ProfilesStack = createStackNavigator();

function Unauthenticated(){
  return(
    <UnauthenticatedStack.Navigator screenOptions={{headerShown: false}}>
      <UnauthenticatedStack.Screen name="AuthScreen" component={ AuthScreen } options={{headerShown: false}}/>
      <UnauthenticatedStack.Screen name="LoginScreen" component={ LoginScreen } options={{headerShown: false}}/>
      <UnauthenticatedStack.Screen name="SignupScreen" component={ SignupScreen } options={{headerShown: false}}/>
    </UnauthenticatedStack.Navigator>
  )
}

function Authenticated(){
  return(
    <AuthenticatedStack.Navigator screenOptions={{headerShown: false}}>
      <AuthenticatedStack.Screen name='UserProfileScreen' component={UserProfileScreen}/>
      <AuthenticatedStack.Screen name='Welcome' component={TabNavigator}/>
    </AuthenticatedStack.Navigator>
  )
}

function ProfileScreens(){
  return(
    <ProfilesStack.Navigator screenOptions={{headerShown: false}}>
      <ProfilesStack.Screen name='DisplayedProfile' component={ProfileScreen}/>
      <ProfilesStack.Screen name='Settings' component={SettingsScreen}/>
    </ProfilesStack.Navigator>
  )
}

function TabNavigator(){

  return(
    <BottomTabNavigator.Navigator screenOptions={{headerShown: false}}>
      <BottomTabNavigator.Screen name="Discover" component={ DiscoverScreen }/>
      <BottomTabNavigator.Screen name="Chat" component={ ChatScreen }/>
      <BottomTabNavigator.Screen name="Profile" component={ ProfileScreens }/>
    </BottomTabNavigator.Navigator>
  )
}

function Naviagtion(){
  const authCtx = useContext(AuthContext);
  return(
    <NavigationContainer>
      {!authCtx.isAuthenticated && <Unauthenticated/>}
      {authCtx.isAuthenticated && <Authenticated/>}
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <AuthContextProvider>
      <Naviagtion/>
    </AuthContextProvider>
  );
}

