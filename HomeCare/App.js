import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Modal, TextInput   } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import React,{useState,useEffect} from 'react';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from './icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Button } from 'react-native-web';
import WeekView from 'react-native-week-view';
import {LinearGradient} from 'expo-linear-gradient';

LocaleConfig.locales['pt-br'] = {
  monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro',],
  monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dec',],
  dayNames: ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado',],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje',
};
LocaleConfig.defaultLocale = 'pt-br';


function HomeUserScreen({ navigation }) {
  const handleCalendarPress = (day) => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Agenda',
      params: { selectedDay: day} }],
    });
  };
  const handleCalendarPress1 = (day) => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Agenda'}]
    });
  };
  const [modalVisible, setModalVisible] = useState(false);

  const route = useRoute();
  const showPopupSent = route.params?.showPopupSent;

  useEffect(() => {
    if(showPopupSent) togglePopup();
  }, []);
  
  const togglePopup = () => {
    setModalVisible(!modalVisible);
    setTimeout(() => setModalVisible(false), 2000);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Icon type="fa" name="close" size={30} color="black" style={[{alignSelf:'flex-end', marginTop: -5,position: 'absolute',}]} onPress={() => setModalVisible(!modalVisible)}/>
            <Text style={[styles.modalText, {fontSize: 20}]}>Ordem colocada com sucesso</Text>
          </View>
        </View>
      </Modal>
    <LinearGradient colors={['#2980b9', '#06284D']} style={styles.linearGradient}>
      <View style={styles.topContainer}>
        <Text style={styles.addressText}>1234 Main St.</Text>
        <Text style={styles.classificationText}>4.5</Text>
        <Icon type="entypo" name="star" size={30} color="white" onPress={() => navigation.navigate('Marcar')}/>
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.roundedButton} onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Marcar'},],
          })
        }>
        <Text style={styles.buttonText}>Marcar Reserva</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.serviceContainer}>
          <Text style={styles.serviceTitle}>Proxima Reserva</Text>
          <Text style={styles.serviceDescription}>05/15/2023 - 18H</Text>
        </View>
        
        <View style={styles.calendarContainer }> 
      <TouchableOpacity onPress={handleCalendarPress1}>     
      <Calendar
        onDayPress={(day) => handleCalendarPress(day)}
        onDayLongPress={(day) => console.log('onDayLongPress', day)}
        onMonthChange={(date) => console.log('onMonthChange', date)}
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
          borderColor: 'transparent',
          height: 350,
          width: 350,
        }}
        theme={{
          calendarBackground: 'transparent',
          textSectionTitleColor: 'white',
          textSectionTitleDisabledColor: 'white',
          dayTextColor: 'white',
          todayTextColor: 'white',
          selectedDayTextColor: 'white',
          monthTextColor: 'white',
          indicatorColor: 'white',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
      </TouchableOpacity>
      </View>
      </LinearGradient>
      <View style={styles.menuBarContainer}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="feather" name="activity" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Recente'},],
          })
        }/>
        <Text style={styles.label}>Recente</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="material" name="schedule" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Marcar'},],
          })
        }/>
        <Text style={styles.label}>Marcar</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
            <Icon type="ant" name="home" size={40} color="white"/>
            <Text style={styles.label1}>Início</Text>
            
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="entypo" name="calendar" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Agenda'},],
          })
        }/>
        <Text style={styles.label}>Agenda</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="fa" name="user" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Perfil'},],
          })
        }/>
        <Text style={styles.label}>Perfil</Text>
        </View>
      </View>
      
    </View>
  );
}

function HomeWorkerScreen({ navigation }) {
  const handleCalendarPress = (day) => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Agenda',
      params: { selectedDay: day} }],
    });
  };
  const handleCalendarPress1 = (day) => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Agenda'}]
    });
  };
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#2980b9', '#06284D']} style={styles.linearGradient}>
      <View style={styles.topContainer}>
        <Text style={styles.addressText}>Trabalhador</Text>
        <Text style={styles.classificationText}>4.5</Text>
        <Icon type="entypo" name="star" size={30} color="white"/>
      </View>
      <View style={styles.serviceContainer1}>
          <Text style={styles.serviceTitle}>Proximo Serviço</Text>
          <Text style={styles.serviceDescription}>05/15/2023 - 18h-21h</Text>
        </View>     
     
      <View style={styles.calendarContainer }> 
      <TouchableOpacity onPress={handleCalendarPress1}>     
      <Calendar
        onDayPress={handleCalendarPress}
        onDayLongPress={(day) => console.log('onDayLongPress', day) && {handleCalendarPress}}
        onMonthChange={(date) => console.log('onMonthChange', date) && {handleCalendarPress}}
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
          borderColor: 'transparent',
          height: 350,
          width: 350,
        }}
        theme={{
          calendarBackground: 'transparent',
          textSectionTitleColor: 'white',
          textSectionTitleDisabledColor: 'white',
          dayTextColor: 'white',
          todayTextColor: 'white',
          selectedDayTextColor: 'white',
          monthTextColor: 'white',
          indicatorColor: 'white',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
      </TouchableOpacity>
      </View>
      </LinearGradient>
      <View style={styles.menuBarContainer}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="feather" name="activity" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Recente'},],
          })
        }/>
        <Text style={styles.label}>Recente</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="ionicon" name="notifications-outline" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Pedidos'},],
          })
        }/>
        <Text style={styles.label}>Pedidos</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="ant" name="home" size={40} color="white"/>
          <Text style={styles.label1}>Início</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="entypo" name="calendar" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Agenda'},],
          })
        }/>
        <Text style={styles.label}>Agenda</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="fa" name="user" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Perfil'},],
          })
        }/>
        <Text style={styles.label}>Perfil</Text>
        </View>
      </View>
    </View>
  );
}

function RecenteUserScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#2980b9', '#06284D']} style={styles.linearGradient}>
      <View style={styles.serviceHeader1}>
        <View style={{flex: 0.5, justifyContent: 'flex-end', alignItems: 'center'}}>
          <Icon name="user" size={50} color="#06284D"/>
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
          <Icon name="user" size={50} color="#06284D"/>
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
          <Icon name="user" size={50} color="#06284D"/>
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
          <Icon name="user" size={50} color="#06284D"/>
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
          <Icon name="user" size={50} color="#06284D"/>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.serviceTitle}>Carla Morais</Text>
          <Text style={styles.serviceDescription}>30/04/2023   7h-11h</Text>
        </View>
        <View style={styles.circle}>
          <Text style={styles.circleText}>15€</Text>
        </View>
      </View>
      <View style={styles.serviceHeader1}>
      <View style={{flex: 0.5, justifyContent: 'flex-end', alignItems: 'center'}}>
          <Icon name="user" size={50} color="#06284D"/>
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
          <Icon type="feather" name="activity" size={40} color="white"/>
          <Text style={styles.label1}>Recente</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="material" name="schedule" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Marcar'},],
          })
        }/>
        <Text style={styles.label}>Marcar</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="ant" name="home" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Início'},],
          })
        }/>
        <Text style={styles.label}>Início</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="entypo" name="calendar" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Agenda'},],
          })
        }/>
        <Text style={styles.label}>Agenda</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="fa" name="user" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Perfil'},],
          })
        }/>
        <Text style={styles.label}>Perfil</Text>
        </View>
      </View>
      </LinearGradient>
    </View>
  );
}

function RecenteWorkerScreen({ navigation }) {
  return (
    <View style={styles.container}>
       <LinearGradient colors={['#2980b9', '#06284D']} style={styles.linearGradient}>
      <View style={styles.serviceHeader1}>
        <View style={{flex: 0.5, justifyContent: 'flex-end', justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="user" size={60} color="#06284D" position="absolute"/>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.serviceTitle}>João Silva</Text>
          <Text style={styles.serviceDescription}>Rua Alex Ramos 39</Text>
          <Text style={styles.serviceDescription}>02/04/2023   15h-20h</Text>
          </View>
        <View style={styles.circle}>
          <Text style={styles.circleText}>30€</Text>
        </View>
      </View>
      <View style={styles.serviceHeader1}>
        <View style={{flex: 0.5, justifyContent: 'flex-end', justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="user" size={60} color="#06284D"/>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.serviceTitle}>Carla Morais</Text>
          <Text style={styles.serviceDescription}>Rua Dr. Henrique 25</Text>
          <Text style={styles.serviceDescription}>09/04/2023   12h-17h</Text>
        </View>
        <View style={styles.circle}>
          <Text style={styles.circleText}>25€</Text>
        </View>
      </View>
      <View style={styles.serviceHeader1}>
        <View style={{flex: 0.5, justifyContent: 'flex-end', justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="user" size={60} color="#06284D"/>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.serviceTitle}>Tiago Mendes</Text>
          <Text style={styles.serviceDescription}>Rua Rui Herculano 245</Text>
          <Text style={styles.serviceDescription}>16/04/2023   18h-22h</Text>
        </View>
        <View style={styles.circle}>
          <Text style={styles.circleText}>24€</Text>
        </View>
      </View>
      <View style={styles.serviceHeader1}>
      <View style={{flex: 0.5, justifyContent: 'flex-end', justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="user" size={60} color="#06284D"/>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.serviceTitle}>Joana Lopes</Text>
          <Text style={styles.serviceDescription}>Rua Doutor Paulo 32</Text>
          <Text style={styles.serviceDescription}>23/04/2023   9h-15h</Text>
        </View>
        <View style={styles.circle}>
          <Text style={styles.circleText}>36€</Text>
        </View>
      </View>
      <View style={styles.serviceHeader1}>
      <View style={{flex: 0.5, justifyContent: 'flex-end', justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="user" size={60} color="#06284D"/>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.serviceTitle}>Carla Morais</Text>
          <Text style={styles.serviceDescription}>Rua Mario Carmo 12</Text>
          <Text style={styles.serviceDescription}>30/04/2023   7h-11h</Text>
        </View>
        <View style={styles.circle}>
          <Text style={styles.circleText}>15€</Text>
        </View>
      </View>
      <View style={styles.serviceHeader1}>
      <View style={{flex: 0.5, justifyContent: 'flex-end', justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="user" size={60} color="#06284D"/>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.serviceTitle}>Matilde Castro</Text>
          <Text style={styles.serviceDescription}>Avenida 1º de Maio 34</Text>
          <Text style={styles.serviceDescription}>06/05/2023   11h-17h</Text>
        </View>
        <View style={styles.circle}>
          <Text style={styles.circleText}>15€</Text>
        </View>
      </View>
      <View style={styles.menuBarContainer}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="feather" name="activity" size={40} color="white"/>
          <Text style={styles.label1}>Recente</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="ionicon" name="notifications-outline" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Pedidos'},],
          })
        }/>
        <Text style={styles.label}>Pedidos</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="ant" name="home" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Início'},],
          })
        }/>
        <Text style={styles.label}>Início</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="entypo" name="calendar" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Agenda'},],
          })
        }/>
        <Text style={styles.label}>Agenda</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="fa" name="user" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Perfil'},],
          })
        }/>
        <Text style={styles.label}>Perfil</Text>
        </View>
      </View>
      </LinearGradient>
    </View>
  );
}

function MarcarUserScreen({ navigation,route }) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePicker1Visible, setTimePicker1Visibility] = useState(false);
  const [isTimePicker2Visible, setTimePicker2Visibility] = useState(false);
  const [text, setText] = React.useState('');

  var date = new Date();
  
  const [time1, setTime1] = useState(null);
  const [time2, setTime2] = useState(null);
  const [date1, setDate] = useState(null);

  const [time1Sel, setTime1Sel] = useState(null);
  const [time2Sel, setTime2Sel] = useState(null);
  const [dateSel, setDateSel] = useState(null);

  const selectedDay = route.params?.selectedDay;
  


  const [isConfirmEnabled, setIsConfirmEnabled] = useState(false);

  useEffect(() => {
    setIsConfirmEnabled(dateSel !== null && time1Sel !== null && time2Sel !== null);
    console.log(selectedDay)
    if(selectedDay) {setDate(selectedDay);setDateSel(true);}
  }, [dateSel, time1Sel, time2Sel]);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const showTimesPicker1 = () => {
    setTimePicker1Visibility(true);
  };

  const showTimesPicker2 = () => {
    setTimePicker2Visibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const hideTimePicker1 = () => {
    setTimePicker1Visibility(false);
  };

  const hideTimePicker2 = () => {
    setTimePicker2Visibility(false);
  };

  const handleConfirmDate = (date) => {
    console.log(date);
    const newDate = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
    console.log(newDate);
    setDate(newDate)
    string = date;
    hideDatePicker();
    setDateSel(true);
  };


  let zeroes;
  const handleConfirmTime1 = (time) => {
    console.log(time);
    if(time.getMinutes()==0) zeroes = "0";
    else zeroes="";
    const newTime1 = time.getHours() + ":" + time.getMinutes() + zeroes;
    console.log(newTime1);
    setTime1(newTime1);
    hideTimePicker1();
    setTime1Sel(true);
  };

  const handleConfirmTime2 = (time) => {
    console.log(time);
    if(time.getMinutes()==0) zeroes = "0";
    else zeroes="";
    const newTime2 = time.getHours() + ":" + time.getMinutes() + zeroes;
    console.log(newTime2);
    setTime2(newTime2);
    hideTimePicker2();
    setTime2Sel(true);
  };

  const handleConfirmPress = () => {
    console.log('Confirmed:', date1, time1, time2);
    navigation.navigate('Escolher Trabalhador', { date1, time1, time2 });
  };



  return (
    <View style={styles.container}>
      <LinearGradient colors={['#2980b9', '#06284D']} style={styles.linearGradient}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.roundedButton} onPress={showDatePicker}>
          <Text style={styles.buttonText}>{date1 || 'Escolha uma data'}</Text>
        </TouchableOpacity>
        {dateSel && (
        <>
          <View style={styles.line} />
          <View style={styles.timePickerContainer}>
            <TouchableOpacity style={styles.roundedButton} onPress={showTimesPicker1}>
              <Text style={[styles.buttonText, {fontSize: 15}] }>{time1 || 'Início:'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundedButton} onPress={showTimesPicker2}>
              <Text style={[styles.buttonText, {fontSize: 15}] }>{time2 || ' Fim: '}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Descrição"
            onChangeText={setText}
            value={text}
            multiline={true}
          />
        </View>
          <TouchableOpacity style={[styles.confirmButton, isConfirmEnabled ? styles.confirmButtonEnabled : styles.confirmButtonDisabled]} onPress={handleConfirmPress} disabled={!isConfirmEnabled}>
            <Text style={isConfirmEnabled ? styles.buttonText : styles.buttonTextdisabled}>Confirmar</Text>
          </TouchableOpacity>
        </>
      )}
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirmDate}
          onCancel={hideDatePicker}
          minimumDate={new Date()}
          maximumDate={new Date(date.setMonth(date.getMonth()+6))}
        />

        <DateTimePickerModal
          isVisible={isTimePicker1Visible}
          mode="time"
          onConfirm={handleConfirmTime1}
          onCancel={hideTimePicker1}
          display='spinner'
          minuteInterval={15}
        />

        <DateTimePickerModal
          isVisible={isTimePicker2Visible}
          mode="time"
          onConfirm={handleConfirmTime2}
          onCancel={hideTimePicker2}
          display='spinner'
          minuteInterval={15}
        />
        
      </View>
      <View style={styles.menuBarContainer}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="feather" name="activity" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Recente'},],
          })
        }/>
        <Text style={styles.label}>Recente</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="material" name="schedule" size={40} color="white"/>
          <Text style={styles.label1}>Marcar</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>

          <Icon type="ant" name="home" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Início'},],
          })
        }/>
        <Text style={styles.label}>Início</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="entypo" name="calendar" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Agenda'},],
          })
        }/>
        <Text style={styles.label}>Agenda</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="fa" name="user" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Perfil'},],
          })
        }/>
        <Text style={styles.label}>Perfil</Text>
        </View>
      </View>
      </LinearGradient>
    </View>
  );
}

function MarcarUserScreen2({ navigation }) {
  const { date1, time1, time2 } = useRoute().params;
  const [showPopup, setShowPopup] = useState(false);
  const [preco, setPreco] = useState(null);
  const [nome, setNome] = useState(null);
  const [showPopupSent, setShowPopupSent] = useState(true);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#2980b9', '#06284D']} style={styles.linearGradient}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.roundedButton}>
          <Text style={styles.buttonText}>{date1}</Text>
        </TouchableOpacity>
        <View style={styles.line}/>
        <View style={styles.timePickerContainer}>
          <TouchableOpacity style={styles.roundedButton}>
            <Text style={[styles.buttonText, {fontSize: 18}] }>{time1}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundedButton}>
            <Text style={[styles.buttonText, {fontSize: 18}] }>{time2}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.serviceContainer, {justifyContent:"center"}]}>
        <TouchableOpacity style={styles.serviceHeader1} onPress={() => {setNome('João Silva');setPreco('30€');setShowPopup(true)}}>
          <View style={{flex: 0.5, justifyContent: 'flex-end', alignItems: 'center'}}>
            <Icon name="user" size={50} color="#06284D"/>
          </View>
          <View style={{flex: 2}}>
            <Text style={styles.serviceTitle}>João Silva</Text>
            <Text style={styles.classificationText}>4.8</Text>
            <View style={{ position: 'absolute', paddingTop:20, paddingLeft:30}}>
              <Icon type="entypo" name="star" size={30} color="white"/>
            </View>
          </View>
          <View style={styles.circle}>
            <Text style={styles.circleText}>30€</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceHeader1} onPress={() => {setNome('Carla Morais');setPreco('25€');setShowPopup(true)}}>
          <View style={{flex: 0.5, justifyContent: 'flex-end', alignItems: 'center'}}>
            <Icon name="user" size={50} color="#06284D"/>
          </View>
          <View style={{flex: 2}}>
            <Text style={styles.serviceTitle}>Carla Morais</Text>
            <Text style={styles.classificationText}>4.5</Text>
            <View style={{ position: 'absolute', paddingTop:20, paddingLeft:30}}>
              <Icon type="entypo" name="star" size={30} color="white"/>
            </View>
          </View>
          <View style={styles.circle}>
            <Text style={styles.circleText}>25€</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceHeader1} onPress={() => {setNome('Tiago Mendes');setPreco('24€');setShowPopup(true)}}>
          <View style={{flex: 0.5, justifyContent: 'flex-end', alignItems: 'center'}}>
            <Icon name="user" size={50} color="#06284D"/>
          </View>
          <View style={{flex: 2}}>
            <Text style={styles.serviceTitle}>Tiago Mendes</Text>
            <Text style={styles.classificationText}>4.4</Text>
            <View style={{ position: 'absolute', paddingTop:20, paddingLeft:30}}>
              <Icon type="entypo" name="star" size={30} color="white"/>
            </View>
          </View>
          <View style={styles.circle}>
            <Text style={styles.circleText}>24€</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceHeader1} onPress={() => {setNome('Joana Lopes');setPreco('36€');setShowPopup(true)}}>
          <View style={{flex: 0.5, justifyContent: 'flex-end', alignItems: 'center'}}>
              <Icon name="user" size={50} color="#06284D"/>
          </View>
          <View style={{flex: 2}}>
            <Text style={styles.serviceTitle}>Joana Lopes</Text>
            <Text style={styles.classificationText}>4.2</Text>
            <View style={{ position: 'absolute', paddingTop:20, paddingLeft:30}}>
              <Icon type="entypo" name="star" size={30} color="white"/>
            </View>
          </View>
          <View style={styles.circle}>
            <Text style={styles.circleText}>36€</Text>
          </View>
        </TouchableOpacity>
      <TouchableOpacity style={styles.serviceHeader1} onPress={() => {setNome('Carla Morais');setPreco('15€');setShowPopup(true)}}>
        <View style={{flex: 0.5, justifyContent: 'flex-end', alignItems: 'center'}}>
          <Icon name="user" size={50} color="#06284D"/>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.serviceTitle}>Carla Morais</Text>
          <Text style={styles.classificationText}>3.8</Text>
            <View style={{ position: 'absolute', paddingTop:20, paddingLeft:30}}>
              <Icon type="entypo" name="star" size={30} color="white"/>
            </View>
        </View>
        <View style={styles.circle}>
          <Text style={styles.circleText}>15€</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.serviceHeader1} onPress={() => {setNome('Carla Morais');setPreco('32€');setShowPopup(true)}}>
        <View style={{flex: 0.5, justifyContent: 'flex-end', alignItems: 'center'}}>
            <Icon name="user" size={50} color="#06284D"/>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.serviceTitle}>Carla Morais</Text>
          <Text style={styles.classificationText}>3.5</Text>
            <View style={{ position: 'absolute', paddingTop:20, paddingLeft:30}}>
              <Icon type="entypo" name="star" size={30} color="white"/>
            </View>
        </View>
        <View style={styles.circle}>
          <Text style={styles.circleText}>32€</Text>
        </View>
      </TouchableOpacity>
      <Modal visible={showPopup} animationType="slide">
      <LinearGradient colors={['#2980b9', '#06284D']} style={styles.linearGradient}>
        <View style={[styles.modalContainer, {width:"80%", alignSelf: 'center'}]}>
          <Icon type="fa" name="close" size={30} color="white" style={[{alignSelf:'flex-end', marginTop: -5}]} onPress={() => setShowPopup(false)}/>
            <View style={styles.serviceHeader2}>
              <View style={{flex: 0.5, justifyContent: 'flex-end', alignItems: 'center'}}>
                <Icon name="user" size={50} color="#06284D"/>
              </View>
              <View style={{flex: 2}}>
                <Text style={styles.serviceTitle}>{nome}</Text>
                <Text style={styles.serviceDescription}>{date1}   {time1}-{time2}</Text>
              </View>
              <View style={styles.circle}>
                <Text style={styles.circleText}>{preco}</Text>
              </View>
            </View>

          <TouchableOpacity onPress={() => navigation.reset({  index: 0,  routes: [{name: 'Início', params: {showPopupSent}}]})}>
            <Text style={styles.buttonText1}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      </Modal>
      </View>
      </LinearGradient>
    </View>
  );
}

function PedidosWorkerScreen({ navigation }) {
  const [accepted1, setAccepted1] = useState(false);
  const [rejected1, setRejected1] = useState(false);
  const [accepted2, setAccepted2] = useState(false);
  const [rejected2, setRejected2] = useState(false);
  const [accepted3, setAccepted3] = useState(false);
  const [rejected3, setRejected3] = useState(false);
  const [accepted4, setAccepted4] = useState(false);
  const [rejected4, setRejected4] = useState(false);

  const handleAccept1 = () => {
    setAccepted1(false);
    setTimeout(() => setAccepted1(true), 50);
  };

  const handleReject1 = () => {
    setRejected1(false);
    setTimeout(() => setRejected1(true), 50);
  };
  const handleAccept2 = () => {
    setAccepted2(false);
    setTimeout(() => setAccepted2(true), 50);
  };

  const handleReject2 = () => {
    setRejected2(false);
    setTimeout(() => setRejected2(true), 50);
  };
  const handleAccept3 = () => {
    setAccepted3(false);
    setTimeout(() => setAccepted3(true), 50);
  };

  const handleReject3 = () => {
    setRejected3(false);
    setTimeout(() => setRejected3(true), 50);
  };
  const handleAccept4= () => {
    setAccepted4(false);
    setTimeout(() => setAccepted4(true), 50);
  };

  const handleReject4 = () => {
    setRejected4(false);
    setTimeout(() => setRejected4(true), 50);
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#2980b9', '#06284D']} style={styles.linearGradient}>
      {!accepted1 && !rejected1 && (
        <>
          <View style={styles.serviceHeader1}>
            <View style={{flex: 0.5, justifyContent: 'flex-end', alignItems: 'center'}}>
              <Icon name="user" size={60} color="#06284D"/>
            </View>
            <View style={{flex: 2}}>
              <Text style={styles.serviceTitle}>João Silva</Text>
              <Text style={styles.serviceDescription}>Rua Alexandre Ramos 39</Text>
              <Text style={styles.serviceDescription}>15/05/2023   15h-20h</Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.circleText}>25€</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', width: '80%', alignSelf: 'center', paddingTop:3}}>
            <TouchableOpacity style={{flex: 0.5, backgroundColor: 'red', borderRadius: 10, padding:5}} onPress={handleReject1}>
              <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>Rejeitar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 0.5, backgroundColor: 'green', borderRadius: 10, padding:5}} onPress={handleAccept1}>
              <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>Aceitar</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      {!accepted2 && !rejected2 && (
        <>
          <View style={styles.serviceHeader1}>
            <View style={{flex: 0.5, justifyContent: 'flex-end', alignItems: 'center'}}>
              <Icon name="user" size={60} color="#06284D"/>
            </View>
            <View style={{flex: 2}}>
              <Text style={styles.serviceTitle}>Carla Morais</Text>
              <Text style={styles.serviceDescription}>Rua Luis Costa 20</Text>
              <Text style={styles.serviceDescription}>17/05/2023   14h-18h</Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.circleText}>25€</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', width: '80%', alignSelf: 'center', paddingTop:3}}>
            <TouchableOpacity style={{flex: 0.5, backgroundColor: 'red', borderRadius: 10, padding:5}} onPress={handleReject2}>
              <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>Rejeitar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 0.5, backgroundColor: 'green', borderRadius: 10, padding:5}} onPress={handleAccept2}>
              <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>Aceitar</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      {!accepted3 && !rejected3 && (
        <>
          <View style={styles.serviceHeader1}>
            <View style={{flex: 0.5, justifyContent: 'flex-end', alignItems: 'center'}}>
              <Icon name="user" size={60} color="#06284D"/>
            </View>
            <View style={{flex: 2}}>
              <Text style={styles.serviceTitle}>Tiago Mendes</Text>
              <Text style={styles.serviceDescription}>Rua Republica 7</Text>
              <Text style={styles.serviceDescription}>17/05/2023   15h-20h</Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.circleText}>25€</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', width: '80%', alignSelf: 'center', paddingTop:3}}>
            <TouchableOpacity style={{flex: 0.5, backgroundColor: 'red', borderRadius: 10, padding:5}} onPress={handleReject3}>
              <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>Rejeitar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 0.5, backgroundColor: 'green', borderRadius: 10, padding:5}} onPress={handleAccept3}>
              <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>Aceitar</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      {!accepted4 && !rejected4 && (
        <>
          <View style={styles.serviceHeader1}>
            <View style={{flex: 0.5, justifyContent: 'flex-end', alignItems: 'center'}}>
              <Icon name="user" size={60} color="#06284D"/>
            </View>
            <View style={{flex: 2}}>
              <Text style={styles.serviceTitle}>Joana Lopes</Text>
              <Text style={styles.serviceDescription}>Avenida Liberdade 64</Text>
              <Text style={styles.serviceDescription}>23/05/2023   9h-12h</Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.circleText}>25€</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', width: '80%', alignSelf: 'center', paddingTop:3}}>
            <TouchableOpacity style={{flex: 0.5, backgroundColor: 'red', borderRadius: 10, padding:5}} onPress={handleReject4}>
              <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>Rejeitar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 0.5, backgroundColor: 'green', borderRadius: 10, padding:5}} onPress={handleAccept4}>
              <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>Aceitar</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      <View style={styles.menuBarContainer}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="feather" name="activity" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Recente'},],
          })
        }/>
        <Text style={styles.label}>Recente</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="ionicon" name="notifications-outline" size={40} color="white"/>
          <Text style={styles.label1}>Pedidos</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="ant" name="home" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Início'},],
          })
        }/>
        <Text style={styles.label}>Início</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="entypo" name="calendar" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Agenda'},],
          })
        }/>
        <Text style={styles.label}>Agenda</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="fa" name="user" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Perfil'},],
          })
        }/>
        <Text style={styles.label}>Perfil</Text>
        </View>
      </View>
      </LinearGradient>
    </View>
  );
}

const marked = {
    '2023-05-22': { selected: true, selectedColor: 'lightblue', selectedTextColor: 'white' },
    '2023-05-31': { selected: true, selectedColor: 'lightblue', selectedTextColor: 'white' },
    '2023-06-13': { selected: true, selectedColor: 'lightblue', selectedTextColor: 'white' }
  };

const { height, width } = Dimensions.get('window');
// Set the height and width of the Calendar component
const calendarHeight = height - 200;
const calendarWidth = width - 40;

function AgendaUserScreen({ navigation, route }) {
  const [selectedDay, setSelectedDay] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const selectedDay1 = route.params?.selectedDay;
  
  useEffect(() => {
    if (selectedDay1) {
      openModal(selectedDay1);
    }
  }, [selectedDay1]);

  const openModal = (day) => {
    setSelectedDay(day);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };


  return (
    <View style={styles.container}>
      <LinearGradient colors={['#2980b9', '#06284D']} style={styles.linearGradient}>
      <View style={styles.calendarContainer }>
      <Calendar
        onDayPress={(day) => openModal(day)}
        onDayLongPress={(day) => console.log('onDayLongPress', day)}
        onMonthChange={(date) => console.log('onMonthChange', date)}
        onPressArrowLeft={(goToPreviousMonth) => {
          console.log('onPressArrowLeft');
          goToPreviousMonth();
        }}
        onPressArrowRight={(goToNextMonth) => {
          console.log('onPressArrowRight');
          goToNextMonth();
        }}
        markedDates={marked}
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          height: calendarHeight,
          width: calendarWidth,
          transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
          marginTop: 45,
        }}
        theme={{
          calendarBackground: 'transparent',
          textSectionTitleColor: 'white',
          textSectionTitleDisabledColor: 'white',
          dayTextColor: 'white',
          todayTextColor: 'white',
          selectedDayTextColor: 'white',
          monthTextColor: 'white',
          indicatorColor: 'white',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
      </View>
      {/* Pop-up */}
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          {marked[selectedDay?.dateString] ? (
            <View>
              <LinearGradient colors={['#2980b9', '#06284D']} style={styles.linearGradient}>
              <View style={styles.test123}>
              <Text style={styles.modalTitle}>Reserva: {selectedDay?.dateString}</Text>
              <View style={styles.serviceHeader2}>
                <View style={{flex: 0.5, justifyContent: 'flex-end', alignItems: 'center'}}>
                  <Icon name="user" size={50} color="#06284D"/>
                </View>
                <View style={{flex: 1}}>
                  <Text style={styles.serviceTitle}>João Silva</Text>
                  <Text style={styles.serviceDescription}>15h-20h</Text>
                </View>
                <View style={styles.circle}>
                  <Text style={styles.circleText}>30€</Text>
                </View>
              </View>
              </View>
              </LinearGradient>
            </View>
          ) : (
            <View>
              <LinearGradient colors={['#2980b9', '#06284D']} style={styles.linearGradient}>
              <View style={styles.test123}>
              <Text style={styles.modalTitle}>Dia: {selectedDay?.dateString}</Text>
              <Text style={styles.modalTitle}>Nenhuma Reserva</Text>
              <View style={styles.buttonPopupContainer}>
                <TouchableOpacity style={styles.roundedButton} onPress={() => navigation.navigate('Marcar', {
                  selectedDay: selectedDay?.dateString,
                })}>
                  <Text style={styles.buttonPopupText}>Marcar agora</Text>
                </TouchableOpacity>
              </View>
              </View>
              </LinearGradient>
            </View>
          )}
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      
      </Modal>

      <View style={styles.menuBarContainer}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="feather" name="activity" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Recente'},],
          })
        }/>
        <Text style={styles.label}>Recente</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="material" name="schedule" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Marcar'},],
          })
        }/>
        <Text style={styles.label}>Marcar</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="ant" name="home" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Início'},],
          })
        }/>
        <Text style={styles.label}>Início</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="entypo" name="calendar" size={40} color="white"/>
          <Text style={styles.label1}>Agenda</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="fa" name="user" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Perfil'},],
          })
        }/>
        <Text style={styles.label}>Perfil</Text>
        </View>
      </View>
      </LinearGradient>
    </View>
  );
}
const myEvents = [
  {
    id: 1,
    description: 'Maria Rosa\nAvenida Liberdade 64',
    startDate: new Date(2023, 4, 22, 9, 0),
    endDate: new Date(2023,4,22,12,0),
    color: '#06284D',
    fontWeight: 'bold',

    },
  {
    id: 2,
    description: 'João Silva\nAvenida Liberdade 64',
    startDate: new Date(2023, 4, 22, 13, 30),
    endDate: new Date(2023,4,22,16,0),
    color: '#06284D',
    // ... more properties if needed,
    },
  {
    id: 3,
    description: 'Carla Silva\nAvenida Liberdade 64',
    startDate: new Date(2023, 4, 22, 20, 0),
    endDate: new Date(2023,4,22,23,0),
    color: '#06284D',
    // ... more properties if needed,
      },
  {
    id: 4,
    description: 'Carla Silva\nAvenida Liberdade 64',
    startDate: new Date(2023, 4, 31, 9, 0),
    endDate: new Date(2023,4,31,12,0),
    color: '#06284D',
    // ... more properties if needed,
    },
  {
    id: 5,
    description: 'João Silva\nAvenida Liberdade 64',
    startDate: new Date(2023, 4, 31, 13, 30),
    endDate: new Date(2023,4,31,16,0),
    color: '#06284D',
    // ... more properties if needed,
    },
  {
    id: 6,
    description: 'Maria Rosa\nAvenida Liberdade 64',
    startDate: new Date(2023, 4, 31, 20, 0),
    endDate: new Date(2023,4,31,23,0),
    color: '#06284D',
    // ... more properties if needed,
    },
  {
    id: 7,
    description: 'Maria Rosa\nAvenida Liberdade 64',
    startDate: new Date(2023, 6, 13, 9, 0),
    endDate: new Date(2023,6, 13,12,0),
    color: '#06284D',
    // ... more properties if needed,
    },
  {
    id: 8,
    description: 'João Silva\nAvenida Liberdade 64',
    startDate: new Date(2023, 6, 13, 13, 30),
    endDate: new Date(2023,6, 13,16,0),
    color: '#06284D',
    // ... more properties if needed,
    },
  {
    id: 9,
    description: 'Carla Silva\nAvenida Liberdade 64',
    startDate: new Date(2023, 6, 13, 20, 0),
    endDate: new Date(2023,6, 13,23,0),
    color: '#06284D',
    // ... more properties if needed,
    },
 ];

function AgendaWorkerScreen({ navigation, route }) {
  const [selectedDay, setSelectedDay] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isNestedModalVisible, setNestedModalVisible] = useState(false);
  const [nestedModalText] = useState('');
  const [isNestedModalVisible2, setNestedModalVisible2] = useState(false);
  const [nestedModalText2] = useState('');
  const [isNestedModalVisible3, setNestedModalVisible3] = useState(false);
  const [nestedModalText3] = useState('');
  const [isCalendarView, setCalendarView] = useState(true);

  const selectedDay1 = route.params?.selectedDay;
  
  useEffect(() => {
    if (selectedDay1) {
      openModal(selectedDay1);
    }
  }, [selectedDay1]);

  const openModal = (day) => {
    setSelectedDay(day);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  
  const openNestedModal = () => {
    setNestedModalVisible(true);
  };

  const closeNestedModal = () => {
    setNestedModalVisible(false);
  };
  const handleNestedModalClose = () => {
    closeNestedModal();
  };

  const openNestedModal2 = () => {
    setNestedModalVisible2(true);
  };

  const closeNestedModal2 = () => {
    setNestedModalVisible2(false);
  };

  const handleNestedModalClose2 = () => {
    closeNestedModal2();
  };

  const openNestedModal3 = () => {
    setNestedModalVisible3(true);
  };

  const closeNestedModal3 = () => {
    setNestedModalVisible3(false);
  };

  const handleNestedModalClose3 = () => {
    closeNestedModal3();
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#2980b9', '#06284D']} style={styles.linearGradient}>
      {isCalendarView ? (
      <Calendar
        onDayPress={(day) => openModal(day)}
        onDayLongPress={(day) => console.log('onDayLongPress', day)}
        onMonthChange={(date) => console.log('onMonthChange', date)}
        onPressArrowLeft={(goToPreviousMonth) => {
          console.log('onPressArrowLeft');
          goToPreviousMonth();
        }}
        onPressArrowRight={(goToNextMonth) => {
          console.log('onPressArrowRight');
          goToNextMonth();
        }}
        markedDates={marked}
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          height: calendarHeight,
          width: calendarWidth,
          transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
          borderWidth: 1,
          borderRadius: 30,
          borderColor: 'transparent',
          marginTop: 45,
        }}
        theme={{
          calendarBackground: 'transparent',
          textSectionTitleColor: 'white',
          textSectionTitleDisabledColor: 'white',
          dayTextColor: 'white',
          todayTextColor: 'white',
          selectedDayTextColor: 'white',
          monthTextColor: 'white',
          indicatorColor: 'white',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
      ) : (
        <WeekView
          events={myEvents}
          selectedDate={new Date()}
          numberOfDays={3}
          allowScrollByDay={true}
        />
        )}
  
        <TouchableOpacity
          style={{
            position: 'absolute',
            top:580,
            right: 10,
            zIndex: 999,
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 5,
          }}
          onPress={() => setCalendarView(!isCalendarView)}
        >
 
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
              {isCalendarView ? 'Calendário de 3 dias' : 'Calendário Mensal' }</Text>
      </TouchableOpacity>
      {/* Pop-up */}
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          {marked[selectedDay?.dateString] ? (
            <View>
              <LinearGradient colors={['#2980b9', '#06284D']} style={styles.linearGradient}>
              <View style={styles.test123}>
              <Text style={styles.modalTitle}>Reservas: {selectedDay?.dateString}</Text>
                <View style={styles.serviceHeader1}>
                  <View style={{flex: 0.5, justifyContent: 'flex-end', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name="user" size={60} color="#06284D" position="absolute"/>
                  </View>
                  <View style={{flex: 2}}>
                    <Text style={styles.serviceTitle}>João Silva</Text>
                    <Text style={styles.serviceDescription}>15h-20h</Text>
                    <Text style={styles.serviceDescription}>Rua Alex Ramos 121</Text>
                    </View>
                  <View style={styles.circle}>
                    <Text style={styles.circleText}>30€</Text>
                  </View>
                </View>
                <View style={styles.serviceHeader1}>
                  <View style={{flex: 0.5, justifyContent: 'flex-end', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name="user" size={60} color="#06284D" position="absolute"/>
                  </View>
                  <View style={{flex: 2}}>
                  <Text style={styles.serviceTitle}>Carla Silva</Text>
                    <Text style={styles.serviceDescription}>20h-23h</Text>
                    <Text style={styles.serviceDescription}> Avenida da Alegria 98</Text>
                    </View>
                  <View style={styles.circle}>
                    <Text style={styles.circleText}>30€</Text>
                  </View>
                </View>
                
                <View style={styles.serviceHeader1}>
                  <View style={{flex: 0.5, justifyContent: 'flex-end', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name="user" size={60} color="#06284D" position="absolute"/>
                  </View>
                  <View style={{flex: 2}}>
                    <Text style={styles.serviceTitle}>Maria Rosa</Text>
                    <Text style={styles.serviceDescription}>13:30h-16h</Text>
                    <Text style={styles.serviceDescription}>Rua Manuel Mendes 39</Text>  
                    </View>
                  <View style={styles.circle}>
                    <Text style={styles.circleText}>30€</Text>
                  </View>
                </View>   
                </View>
                </LinearGradient>       
            </View>
          ) : (
            <LinearGradient colors={['#2980b9', '#06284D']} style={styles.linearGradient}>
              <View style={styles.test123}>
            <View>
              <Text style={styles.modalTitle}>Dia: {selectedDay?.dateString}</Text>
              <Text style={styles.modalTitle}>Nenhuma Reserva</Text>
            </View>
            </View>
              </LinearGradient>
          )}
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.menuBarContainer}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="feather" name="activity" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Recente'},],
          })
        }/>
        <Text style={styles.label}>Recente</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="ionicon" name="notifications-outline" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Pedidos'},],
          })
        }/>
        <Text style={styles.label}>Pedidos</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="ant" name="home" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Início'},],
          })
        }/>
        <Text style={styles.label}>Início</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="entypo" name="calendar" size={40} color="white"/>
          <Text style={styles.label1}>Agenda</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="fa" name="user" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Perfil'},],
          })
        }/>
        <Text style={styles.label}>Perfil</Text>
        </View>
      </View>
      </LinearGradient>
    </View>
  );
}


function PerfilUserScreen({ navigation,route }) {
  const { setUserType } = route.params;
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#2980b9', '#06284D']} style={styles.linearGradient}>
      <View style={styles.containerUser}>
        <View style={styles.header}>
          <View style={styles.userInfoContainer}>
            <Text style={styles.userName}>Pedro Costa</Text>
          </View>
          <View style={styles.userIconContainer}>
            <Icon type="fa" name="user" size={40} color="white" />
          </View>
        </View>
        <View style={styles.menuContainer}>
          <View style={[styles.menuItem, styles.emphasizedMenuItem]}>
            <Icon type="entypo" name="message" size={50} color="white" />
            <Text style={styles.emphasizedMenuItemText}>  Mensagens</Text>
          </View>
          <View style={[styles.menuItem, styles.emphasizedMenuItem]}>
            <Icon type="ionicon" name="settings" size={50} color="white" />
            <Text style={styles.emphasizedMenuItemText}>  Definições</Text>
          </View>
          <View style={[styles.menuItem, styles.emphasizedMenuItem]}>
            <Icon type="entypo" name="help" size={50} color="white" />
            <Text style={styles.emphasizedMenuItemText}>  Sobre</Text>
          </View>
          <TouchableOpacity style={[styles.menuItem, styles.emphasizedMenuItem]} onPress={() => setUserType('')}>
            <Icon type="material" name="logout" size={50} color="white" />
            <Text style={styles.emphasizedMenuItemText}>{'  Terminar Sessão'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.menuBarContainer}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="feather" name="activity" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Recente'},],
          })
        }/>
        <Text style={styles.label}>Recente</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="material" name="schedule" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Marcar'},],
          })
        }/>
        <Text style={styles.label}>Marcar</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="ant" name="home" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Início'},],
          })
        }/>
        <Text style={styles.label}>Início</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="entypo" name="calendar" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Agenda'},],
          })
        }/>
        <Text style={styles.label}>Agenda</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="fa" name="user" size={40} color="white"/>
          <Text style={styles.label1}>Perfil</Text>
        </View>
      </View>
      </LinearGradient>
    </View>
  );
}
function PerfilWorkerScreen({ navigation,route }) {
  const { setUserType } = route.params;
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#2980b9', '#06284D']} style={styles.linearGradient}>
      <View style={styles.containerUser}>
        <View style={styles.header}>
          <View style={styles.userInfoContainer}>
            <Text style={styles.userName}>Pedro Costa</Text>
          </View>
          <View style={styles.userIconContainer}>
            <Icon type="fa" name="user" size={40} color="white" />
          </View>
        </View>
        <View style={styles.menuContainer}>
          <View style={[styles.menuItem, styles.emphasizedMenuItem]}>
            <Icon type="fa5" name="euro-sign" size={50} color="white" />
            <Text style={styles.emphasizedMenuItemText}>    Tarifa</Text>
          </View>
          <View style={[styles.menuItem, styles.emphasizedMenuItem]}>
            <Icon type="entypo" name="message" size={50} color="white" />
            <Text style={styles.emphasizedMenuItemText}>  Mensagens</Text>
          </View>
          <View style={[styles.menuItem, styles.emphasizedMenuItem]}>
            <Icon type="ionicon" name="settings" size={50} color="white" />
            <Text style={styles.emphasizedMenuItemText}>  Definições</Text>
          </View>
          <View style={[styles.menuItem, styles.emphasizedMenuItem]}>
            <Icon type="entypo" name="help" size={50} color="white" />
            <Text style={styles.emphasizedMenuItemText}>  Sobre</Text>
          </View>
          <TouchableOpacity style={[styles.menuItem, styles.emphasizedMenuItem]} onPress={() => setUserType('')}>
            <Icon type="material" name="logout" size={50} color="white" />
            <Text style={styles.emphasizedMenuItemText}>{'  Terminar Sessão'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.menuBarContainer}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="feather" name="activity" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Recente'},],
          })
        }/>
        <Text style={styles.label}>Recente</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="ionicon" name="notifications-outline" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Pedidos'},],
          })
        }/>
        <Text style={styles.label}>Pedidos</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="ant" name="home" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Início'},],
          })
        }/>
        <Text style={styles.label}>Início</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="entypo" name="calendar" size={40} color="white" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Agenda'},],
          })
        }/>
        <Text style={styles.label}>Agenda</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="fa" name="user" size={40} color="white"/>
          <Text style={styles.label1}>Perfil</Text>
        </View>
      </View>
      </LinearGradient>
    </View>
  );
}

const SignInScreen = ({ navigation,route }) => {
  const { setUserType } = route.params;

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#2980b9', '#06284D']} style={styles.linearGradient}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.roundedButton1}  onPress={() => setUserType('User')}>
          <Text style={styles.buttonText}>{'Cliente'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundedButton1}  onPress={() => setUserType('Worker')}>
          <Text style={styles.buttonText}>{'Trabalhador'}</Text>
        </TouchableOpacity>
      </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
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
    backgroundColor: '#005073',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: 'white',
    borderTopColor: 'white',
    marginBottom: -20,
  },
  addressText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  classificationText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginRight: -125,
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
    marginBottom: 80,
    backgroundColor: 'transparent',
  },
  menuBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#005073',
    borderTopWidth: 1,
    borderTopColor: 'white',
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
    backgroundColor: '#005073',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  roundedButton1: {
    backgroundColor: '#005073',
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  buttonText: {
    color: 'blue',
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonText1: {
    color: 'blue',
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  buttonTextdisabled: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  serviceContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    alignItems: 'center',
    marginTop: -150,
    padding: 20,
  },
  serviceContainer1: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    alignItems: 'center',
    marginTop: 60,
    padding: 20,
  },
  serviceContainer2: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    alignItems: 'center',
    marginTop: -150,
    padding: 20,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  serviceDescription: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'bold',
    color: 'lightblue',
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
    borderTopColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    borderLeftColor: 'white',
    borderLeftWidth: 1,
    borderRightColor: 'white',
    borderRightWidth: 1,
    marginTop: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  serviceHeader2: {
    borderTopWidth: 1,
    borderTopColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginTop: 20,
    flexDirection: 'row',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#06284D',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    marginTop: 6

  },
  circleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  modalButton: {
    padding: 10,
    backgroundColor: '#005073',
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonPopupContainer: {
    backgroundColor: '#005073',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    //color radius white
    borderTopWidth: 1,
    borderTopColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    borderLeftColor: 'white',
    borderLeftWidth: 1,
    borderRightColor: 'white',
    borderRightWidth: 1,

  },
  buttonPopupText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  closeButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
  },

  timePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timePicker: {
    flex: 1,
  },
  datePickerButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    },
  line: {
    height: 1,
    width: '80%',
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  timePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
  },
  timePickerButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    width: '48%',
  },
  timePickerText: {
    color: '#333',
    fontSize: 18,
  },
  containerUser: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    backgroundColor: '#005073',
  },
  userInfoContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
  },
  userIconContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    //put in the left of the screen
    position: 'absolute',
    left: 10,
    top: 100,
  },
  menuItem: {
    marginBottom: 40,
    flexDirection: 'row',
    alignItems: 'center',

  },
  emphasizedMenuItem: {
    
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  emphasizedMenuItemText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  confirmButton: {
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#005073', // default background color for disabled button
  },
  confirmButtonEnabled: {
    backgroundColor: '#005073', // background color for enabled button
  },
  confirmButtonDisabled: {
    backgroundColor: 'grey', // background color for disabled button
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  modalContainer1: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    paddingTop: 20,
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalContent1: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  rejectButton: {
    flex: 0.5,
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  acceptButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  circle1: {
    position: 'absolute',
    bottom: -6,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'blue'
  },
  label1: {
    fontSize: 15,
    fontWeight: '900',
    textAlign: 'center',
    color: 'white',
    marginBottom: -5,
  },
  label: {
    fontSize: 13,
    textAlign: 'center',
    color: 'white',
    marginBottom: -5,
  },
  linearGradient: {
    borderRadius: 5,
    height: 700,
    width: 360,
  },
  test123: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  textInputContainer: {
    marginBottom: 20,
    marginTop: 10,
  },
  textInput: {
    height: 60,
    width: 250,
    borderColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 4,
    color: 'white',
  },

});

const Stack = createNativeStackNavigator();


export default function App()  {
  const [userType, setUserType] = React.useState(null);

  return(
    <NavigationContainer>
      <Stack.Navigator>
        {userType=='User' ? (
          <React.Fragment key="user">
            <Stack.Screen name="Início" component={HomeUserScreen} options={{ headerTitleStyle: { color: 'blue', fontWeight: 'bold' }}}/>
            <Stack.Screen name="Recente" component={RecenteUserScreen} options={{ headerTitleStyle: { color: 'blue', fontWeight: 'bold' }}}/>
            <Stack.Screen name="Marcar" component={MarcarUserScreen} options={{ headerTitleStyle: { color: 'blue', fontWeight: 'bold' }}}/>
            <Stack.Screen name="Agenda" component={AgendaUserScreen} options={{ headerTitleStyle: { color: 'blue', fontWeight: 'bold' }}}/>
            <Stack.Screen name="Perfil" component={PerfilUserScreen} initialParams={{ setUserType }} options={{ headerTitleStyle: { color: 'blue', fontWeight: 'bold' }}}/>
            <Stack.Screen name="Escolher Trabalhador" component={MarcarUserScreen2} options={{ headerTitleStyle: { color: 'blue', fontWeight: 'bold' }}}/>
          </React.Fragment>
        ) : userType=='Worker' ? (
          <React.Fragment key="worker">
            <Stack.Screen name="Início" component={HomeWorkerScreen} options={{ headerTitleStyle: { color: 'blue', fontWeight: 'bold' }}}/>
            <Stack.Screen name="Recente" component={RecenteWorkerScreen} options={{ headerTitleStyle: { color: 'blue', fontWeight: 'bold' }}}/>
            <Stack.Screen name="Pedidos" component={PedidosWorkerScreen} options={{ headerTitleStyle: { color: 'blue', fontWeight: 'bold' }}}/>
            <Stack.Screen name="Agenda" component={AgendaWorkerScreen} options={{ headerTitleStyle: { color: 'blue', fontWeight: 'bold' }}}/>
            <Stack.Screen name="Perfil" component={PerfilWorkerScreen} initialParams={{ setUserType }} options={{ headerTitleStyle: { color: 'blue', fontWeight: 'bold' }}}/>
          </React.Fragment>
        ) : (
          <React.Fragment key="auth">
            <Stack.Screen name="Entrar" component={SignInScreen}  initialParams={{ setUserType }}/>
          </React.Fragment>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}