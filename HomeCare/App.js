import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.addressText}>1234 Main St.</Text>
        <Text style={styles.classificationText}>4.5 *</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.roundedButton}>
          <Text style={styles.buttonText}>Agendar Reserva</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.serviceContainer}>
        <View style={styles.serviceHeader}>
          <Text style={styles.serviceTitle}>Proxima Reserva</Text>
        </View>
        <Text style={styles.serviceDescription}>05/15/2023 - 18H</Text>
      </View>
      <View style={styles.calendarContainer}>
        {/* Your calendar component goes here */}
      </View>
      <View style={styles.menuBarContainer}>
        <TouchableOpacity style={styles.menuBarButton} onPress={() => navigation.navigate('Atividade')}>
          <Text style={styles.menuBarButtonText}>Atividade</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBarButton} onPress={() => navigation.navigate('Agendar')}>
          <Text style={styles.menuBarButtonText}>Agendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBarButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.menuBarButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBarButton} onPress={() => navigation.navigate('Calendario')}>
          <Text style={styles.menuBarButtonText}>Calendario</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBarButton} onPress={() => navigation.navigate('Perfil')}>
          <Text style={styles.menuBarButtonText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function AtividadeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Atividade Screen</Text>
      <View style={styles.menuBarContainer}>
        <TouchableOpacity style={styles.menuBarButton} onPress={() => navigation.navigate('Atividade')}>
          <Text style={styles.menuBarButtonText}>Atividade</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBarButton} onPress={() => navigation.navigate('Agendar')}>
          <Text style={styles.menuBarButtonText}>Agendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBarButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.menuBarButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBarButton} onPress={() => navigation.navigate('Calendario')}>
          <Text style={styles.menuBarButtonText}>Calendario</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBarButton} onPress={() => navigation.navigate('Perfil')}>
          <Text style={styles.menuBarButtonText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
function AgendarScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Agendar Screen</Text>
      <View style={styles.menuBarContainer}>
        <TouchableOpacity style={styles.menuBarButton} onPress={() => navigation.navigate('Atividade')}>
          <Text style={styles.menuBarButtonText}>Atividade</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBarButton} onPress={() => navigation.navigate('Agendar')}>
          <Text style={styles.menuBarButtonText}>Agendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBarButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.menuBarButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBarButton} onPress={() => navigation.navigate('Calendario')}>
          <Text style={styles.menuBarButtonText}>Calendario</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBarButton} onPress={() => navigation.navigate('Perfil')}>
          <Text style={styles.menuBarButtonText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
function CalendarioScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Calendario Screen</Text>
      <View style={styles.menuBarContainer}>
        <TouchableOpacity style={styles.menuBarButton} onPress={() => navigation.navigate('Atividade')}>
          <Text style={styles.menuBarButtonText}>Atividade</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBarButton} onPress={() => navigation.navigate('Agendar')}>
          <Text style={styles.menuBarButtonText}>Agendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBarButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.menuBarButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBarButton} onPress={() => navigation.navigate('Calendario')}>
          <Text style={styles.menuBarButtonText}>Calendario</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBarButton} onPress={() => navigation.navigate('Perfil')}>
          <Text style={styles.menuBarButtonText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
function PerfilScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Perfil Screen</Text>
      <View style={styles.menuBarContainer}>
        <TouchableOpacity style={styles.menuBarButton} onPress={() => navigation.navigate('Atividade')}>
          <Text style={styles.menuBarButtonText}>Atividade</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBarButton} onPress={() => navigation.navigate('Agendar')}>
          <Text style={styles.menuBarButtonText}>Agendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBarButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.menuBarButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBarButton} onPress={() => navigation.navigate('Calendario')}>
          <Text style={styles.menuBarButtonText}>Calendario</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBarButton} onPress={() => navigation.navigate('Perfil')}>
          <Text style={styles.menuBarButtonText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Atividade" component={AtividadeScreen} />
        <Stack.Screen name="Agendar" component={AgendarScreen} />
        <Stack.Screen name="Calendario" component={CalendarioScreen} />
        <Stack.Screen name="Perfil" component={PerfilScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



// const MyStack = () => {
//   return (
//     <NavigationContainer>
//        <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{title: 'Welcome'}}
//         />
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// const HomeScreen = ({navigation}) => {
//   return (
//     <Button
//       title="Go to Jane's profile"
//       onPress={() =>
//         navigation.navigate('Profile', {name: 'Jane'})
//       }
//     />
//   );
// };
// const ProfileScreen = ({navigation, route}) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };



//   );
// };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: 'lightblue',
  },
  addressText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  classificationText: {
    fontSize: 16,
    color: 'blue',
    fontWeight: 'bold',
  },
  serviceContainer: {
    padding: 20,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  serviceDescription: {
    fontSize: 16,
    marginTop: 5,
  },
  calendarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: 'lightblue',
    borderTopWidth: 1,
    borderTopColor: 'blue',
  },
  menuBarButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuBarButtonText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -110,	
  },
  roundedButton: {
    backgroundColor: 'lightblue',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'blue',
    fontSize: 26,
    fontWeight: 'bold',
  },
  serviceContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: 'blue',
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
    alignItems: 'center',
    marginTop: -130,
  },

  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
  serviceDescription: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'bold',
  },
});

