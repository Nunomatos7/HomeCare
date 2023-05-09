import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, } from 'react-native';
import React from 'react';


// Marked dates Calendar
const marked = {
  '2023-05-22': { selected: true, selectedColor: 'blue', selectedTextColor: 'white' },
  '2023-05-31': { selected: true, selectedColor: 'blue', selectedTextColor: 'white' },
  '2023-06-13': {selected: true, selectedColor: 'blue', selectedTextColor: 'white'}
};

const MainScreen = () => {
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
        
      </View>
    </View>
  );
};

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
    marginBottom: 40,
  },
  menuBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
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

export default MainScreen;