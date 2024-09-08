import {RootStackParamList} from '@/interfaces/root-stack-params.interface';
import {LoginPage} from '@/pages/login/login.page';
import {HomePage} from '@/pages/home/home.page';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation: React.FC = () => {
  const loggedIn = false;

  const publicStack = (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );

  const privateStack = (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      {loggedIn ? privateStack : publicStack}
    </NavigationContainer>
  );
};
