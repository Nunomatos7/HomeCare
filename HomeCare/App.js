import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from './icons';

const marked = {
  '2023-05-22': { selected: true, selectedColor: 'blue', selectedTextColor: 'white' },
  '2023-05-31': { selected: true, selectedColor: 'blue', selectedTextColor: 'white' },
  '2023-06-13': { selected: true, selectedColor: 'blue', selectedTextColor: 'white' }
};

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
          <Text style={styles.serviceTitle}>Proxima Reserva</Text>
          <Text style={styles.serviceDescription}>05/15/2023 - 18H</Text>
        </View>
        
      <View style={styles.calendarContainer}>
      <Calendar
        onDayPress={(day) => console.log('onDayPress', day) }
        onDayLongPress={(day) => console.log('onDayLongPress', day) }
        onMonthChange={(date) => console.log('onMonthChange', date) }
        onPressArrowLeft={(goToPreviousMonth) => {
          console.log('onPressArrowLeft'); goToPreviousMonth();
        }}
        onPressArrowRight={(goToNextMonth) => {
          console.log('onPressArrowRight'); goToNextMonth();
        }}
        markedDates={marked}
        style={{
          borderWidth: 1,
          borderRadius: 30,
          borderColor: 'blue',
          height: 350,
          width: 350,
        }}
      />
      </View>
      <View style={styles.menuBarContainer}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="feather" name="activity" size={40} color="blue" onPress={() => navigation.navigate('Atividade')}/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="material" name="schedule" size={40} color="blue" onPress={() => navigation.navigate('Agendar')}/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="ant" name="home" size={40} color="blue" onPress={() => navigation.navigate('Home')}/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="entypo" name="calendar" size={40} color="blue" onPress={() => navigation.navigate('Calendario')}/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="fa" name="user" size={40} color="blue" onPress={() => navigation.navigate('Perfil')}/>
        </View>
      </View>
    </View>
  );
}

function AtividadeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.serviceHeader1}>
        <View style={{flex: 0.5, justifyContent: 'flex-end', alignItems: 'center'}}>
          <Icon name="user" size={50} color="lightblue"/>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.serviceTitle}>João Silva</Text>
          <Text style={styles.serviceDescription}>02/04/2023   15h-20h</Text>
        </View>
        <View style={styles.circle}>
          <Text style={styles.circleText}>30€</Text>
        </View>
      </View>
      <View style={styles.serviceHeader1}>
        <View style={{flex: 0.5, justifyContent: 'flex-end', alignItems: 'center'}}>
          <Icon name="user" size={50} color="lightblue"/>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.serviceTitle}>Carla Morais</Text>
          <Text style={styles.serviceDescription}>09/04/2023   12h-17h</Text>
        </View>
        <View style={styles.circle}>
          <Text style={styles.circleText}>25€</Text>
        </View>
      </View>
      <View style={styles.serviceHeader1}>
        <View style={{flex: 0.5, justifyContent: 'flex-end', alignItems: 'center'}}>
          <Icon name="user" size={50} color="lightblue"/>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.serviceTitle}>Tiago Mendes</Text>
          <Text style={styles.serviceDescription}>16/04/2023   18h-22h</Text>
        </View>
        <View style={styles.circle}>
          <Text style={styles.circleText}>24€</Text>
        </View>
      </View>
      <View style={styles.serviceHeader1}>
      <View style={{flex: 0.5, justifyContent: 'flex-end', alignItems: 'center'}}>
          <Icon name="user" size={50} color="lightblue"/>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.serviceTitle}>Joana Lopes</Text>
          <Text style={styles.serviceDescription}>23/04/2023   9h-15h</Text>
        </View>
        <View style={styles.circle}>
          <Text style={styles.circleText}>36€</Text>
        </View>
      </View>
      <View style={styles.serviceHeader1}>
      <View style={{flex: 0.5, justifyContent: 'flex-end', alignItems: 'center'}}>
          <Icon name="user" size={50} color="lightblue"/>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.serviceTitle}>Carla Morais</Text>
          <Text style={styles.serviceDescription}>30/04/2023   7:30h-11h</Text>
        </View>
        <View style={styles.circle}>
          <Text style={styles.circleText}>15€</Text>
        </View>
      </View>
      <View style={styles.serviceHeader1}>
      <View style={{flex: 0.5, justifyContent: 'flex-end', alignItems: 'center'}}>
          <Icon name="user" size={50} color="lightblue"/>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.serviceTitle}>Carla Morais</Text>
          <Text style={styles.serviceDescription}>06/04/2023   11h-17h</Text>
        </View>
        <View style={styles.circle}>
          <Text style={styles.circleText}>32€</Text>
        </View>
      </View>
      <View style={styles.menuBarContainer}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="feather" name="activity" size={40} color="blue" onPress={() => navigation.navigate('Atividade')}/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="material" name="schedule" size={40} color="blue" onPress={() => navigation.navigate('Agendar')}/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="ant" name="home" size={40} color="blue" onPress={() => navigation.navigate('Home')}/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="entypo" name="calendar" size={40} color="blue" onPress={() => navigation.navigate('Calendario')}/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="fa" name="user" size={40} color="blue" onPress={() => navigation.navigate('Perfil')}/>
        </View>
      </View>
    </View>
  );
}
function AgendarScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Agendar Screen</Text>
      <View style={styles.menuBarContainer}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="feather" name="activity" size={40} color="blue" onPress={() => navigation.navigate('Atividade')}/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="material" name="schedule" size={40} color="blue" onPress={() => navigation.navigate('Agendar')}/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="ant" name="home" size={40} color="blue" onPress={() => navigation.navigate('Home')}/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="entypo" name="calendar" size={40} color="blue" onPress={() => navigation.navigate('Calendario')}/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="fa" name="user" size={40} color="blue" onPress={() => navigation.navigate('Perfil')}/>
        </View>
      </View>
    </View>
  );
}

const CustomDayComponent = ({ date, state }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ color: state === 'today' ? 'red' : 'black', fontSize: 20 }}>{date.day}</Text>
  </View>
);

const { height, width } = Dimensions.get('window');
// Set the height and width of the Calendar component
const calendarHeight = height - 200;
const calendarWidth = width - 40;

function CalendarioScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={(day) => console.log('onDayPress', day) }
        onDayLongPress={(day) => console.log('onDayLongPress', day) }
        onMonthChange={(date) => console.log('onMonthChange', date) }
        onPressArrowLeft={(goToPreviousMonth) => {
          console.log('onPressArrowLeft'); goToPreviousMonth();
        }}
        onPressArrowRight={(goToNextMonth) => {
          console.log('onPressArrowRight'); goToNextMonth();
        }}
        markedDates={marked}
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          height: calendarHeight,
          width: calendarWidth,
          transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
        }}
        scaleFactor={1.1}
      />
      <View style={styles.menuBarContainer}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="feather" name="activity" size={40} color="blue" onPress={() => navigation.navigate('Atividade')}/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="material" name="schedule" size={40} color="blue" onPress={() => navigation.navigate('Agendar')}/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="ant" name="home" size={40} color="blue" onPress={() => navigation.navigate('Home')}/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="entypo" name="calendar" size={40} color="blue" onPress={() => navigation.navigate('Calendario')}/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="fa" name="user" size={40} color="blue" onPress={() => navigation.navigate('Perfil')}/>
        </View>
      </View>
    </View>
  );
}
function PerfilScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.menuBarContainer}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="feather" name="activity" size={40} color="blue" onPress={() => navigation.navigate('Atividade')}/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="material" name="schedule" size={40} color="blue" onPress={() => navigation.navigate('Agendar')}/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="ant" name="home" size={40} color="blue" onPress={() => navigation.navigate('Home')}/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="entypo" name="calendar" size={40} color="blue" onPress={() => navigation.navigate('Calendario')}/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="fa" name="user" size={40} color="blue" onPress={() => navigation.navigate('Perfil')}/>
        </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    borderTopWidth: 1,
    borderTopColor: 'blue',
  },
  menuBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  menuBarIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuBarButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuBarButtonText: {
    color: 'blue',
    fontSize: 12,
    fontWeight: 'bold',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 5,
    backgroundColor: 'lightblue',
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
    marginBottom: -20,
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
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  serviceDescription: {
    fontSize: 16,
  },
  calendarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
  },
  menuBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: 'lightblue',
    borderTopWidth: 1,
    borderTopColor: 'blue',
    // put in the bottom of the screen
    position: 'absolute',
    bottom: 0,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -130,	
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
    marginTop: -150,
    padding: 20,
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
  serviceHeader: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '52%',
    marginBottom: 10,
    marginLeft: 70,
  },
  serviceHeader1: {
    borderTopWidth: 1,
    borderTopColor: 'blue',
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
    marginTop: 20,
    flexDirection: 'row',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    marginTop: 6

  },
  circleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  }
  
});

export default App;