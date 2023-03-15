import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import home from './componentes/Home/index';
import EntypoTela from './componentes/entypoTela/index';
import AwesomeTela from './componentes/fontAwesomeTela';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={home} />
        <Drawer.Screen name='Entypo' component={EntypoTela} />
        <Drawer.Screen name='Icons Awesome' component={AwesomeTela} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}