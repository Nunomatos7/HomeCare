import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Modal, TouchableWithoutFeedback  } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import React,{useState,useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from './icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Button } from 'react-native-web';

LocaleConfig.locales['pt-br'] = {
  monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro',],
  monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dec',],
  dayNames: ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado',],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje',
};
LocaleConfig.defaultLocale = 'pt-br';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.addressText}>Trabalhador</Text>
        <Text style={styles.classificationText}>4.5</Text>
        <Icon type="entypo" name="star" size={30} color="blue"/>
      </View>
      <View style={styles.serviceContainer}>
          <Text style={styles.serviceTitle}>Proximo Serviço</Text>
          <Text style={styles.serviceDescription}>Rua Elias 2º 136</Text>
          <Text style={styles.serviceDescription}>15/05/2023   18h-21h</Text>
        </View>
        
      <View style={styles.calendarContainer } onPress={() => navigation.navigate('Agendar')}>      
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
          <Icon type="feather" name="activity" size={40} color="blue" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Atividade'},],
          })
        }/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="material" name="schedule" size={40} color="blue" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Agendar'},],
          })
        }/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="ant" name="home" size={40} color="blue"/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="entypo" name="calendar" size={40} color="blue" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Calendario'},],
          })
        }/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="fa" name="user" size={40} color="blue" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Perfil'},],
          })
        }/>
        </View>
      </View>
    </View>
  );
}

function AtividadeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.serviceHeader1}>
        <View style={{flex: 0.5, justifyContent: 'flex-end', justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="user" size={60} color="lightblue" position="absolute"/>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.serviceTitle}>João Silva</Text>
          <Text style={styles.serviceDescription}>Rua Alexandre Ramos 39</Text>
          <Text style={styles.serviceDescription}>02/04/2023   15h-20h</Text>
        </View>
        <View style={styles.circle}>
          <Text style={styles.circleText}>30€</Text>
        </View>
      </View>
      <View style={styles.serviceHeader1}>
        <View style={{flex: 0.5, justifyContent: 'flex-end', justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="user" size={60} color="lightblue"/>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.serviceTitle}>Carla Morais</Text>
          <Text style={styles.serviceDescription}>Rua Doutor Henrique 25</Text>
          <Text style={styles.serviceDescription}>09/04/2023   12h-17h</Text>
        </View>
        <View style={styles.circle}>
          <Text style={styles.circleText}>25€</Text>
        </View>
      </View>
      <View style={styles.serviceHeader1}>
        <View style={{flex: 0.5, justifyContent: 'flex-end', justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="user" size={60} color="lightblue"/>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.serviceTitle}>Tiago Mendes</Text>
          <Text style={styles.serviceDescription}>Rua Herculano Lopes 245</Text>
          <Text style={styles.serviceDescription}>16/04/2023   18h-22h</Text>
        </View>
        <View style={styles.circle}>
          <Text style={styles.circleText}>24€</Text>
        </View>
      </View>
      <View style={styles.serviceHeader1}>
      <View style={{flex: 0.5, justifyContent: 'flex-end', justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="user" size={60} color="lightblue"/>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.serviceTitle}>Joana Lopes</Text>
          <Text style={styles.serviceDescription}>Rua Doutor Paulo 132</Text>
          <Text style={styles.serviceDescription}>23/04/2023   9h-15h</Text>
        </View>
        <View style={styles.circle}>
          <Text style={styles.circleText}>36€</Text>
        </View>
      </View>
      <View style={styles.serviceHeader1}>
      <View style={{flex: 0.5, justifyContent: 'flex-end', justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="user" size={60} color="lightblue"/>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.serviceTitle}>Carla Morais</Text>
          <Text style={styles.serviceDescription}>Rua Mario do Carmo 12</Text>
          <Text style={styles.serviceDescription}>30/04/2023   7:30h-11h</Text>
        </View>
        <View style={styles.circle}>
          <Text style={styles.circleText}>15€</Text>
        </View>
      </View>
      <View style={styles.serviceHeader1}>
      <View style={{flex: 0.5, justifyContent: 'flex-end', justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="user" size={60} color="lightblue"/>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.serviceTitle}>Matilde Castro</Text>
          <Text style={styles.serviceDescription}>Avenida 1º de Maio 342</Text>
          <Text style={styles.serviceDescription}>06/05/2023   11h-17h</Text>
        </View>
        <View style={styles.circle}>
          <Text style={styles.circleText}>15€</Text>
        </View>
      </View>
      <View style={styles.menuBarContainer}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="feather" name="activity" size={40} color="blue"/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="material" name="schedule" size={40} color="blue" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Agendar'},],
          })
        }/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="ant" name="home" size={40} color="blue" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Início'},],
          })
        }/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="entypo" name="calendar" size={40} color="blue" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Calendario'},],
          })
        }/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="fa" name="user" size={40} color="blue" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Perfil'},],
          })
        }/>
        </View>
      </View>
    </View>
  );
}
function AgendarScreen({ navigation }) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePicker1Visible, setTimePicker1Visibility] = useState(false);
  const [isTimePicker2Visible, setTimePicker2Visibility] = useState(false);

  var date = new Date();
  
  const [time1, setTime1] = useState(null);
  const [time2, setTime2] = useState(null);
  const [date1, setDate] = useState(null);

  const [time1Sel, setTime1Sel] = useState(false);
  const [time2Sel, setTime2Sel] = useState(false);
  const [dateSel, setDateSel] = useState(false);


  const [isConfirmEnabled, setIsConfirmEnabled] = useState(false);

  useEffect(() => {
    setIsConfirmEnabled(dateSel !== null && time1Sel !== null && time2Sel !== null);
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
    const newDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
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
    console.log('Confirmed:', dateSel, time1, time2);
  };



  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.roundedButton} onPress={showDatePicker}>
          <Text style={styles.buttonText}>{date1 || 'Select a date'}</Text>
        </TouchableOpacity>
        {dateSel && (
        <>
          <View style={styles.line} />
          <View style={styles.timePickerContainer}>
            <TouchableOpacity style={styles.roundedButton} onPress={showTimesPicker1}>
              <Text style={[styles.buttonText, {fontSize: 15}] }>{time1 || 'Start Time:'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundedButton} onPress={showTimesPicker2}>
              <Text style={[styles.buttonText, {fontSize: 15}] }>{time2 || ' End Time: '}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={[styles.confirmButton, isConfirmEnabled ? styles.confirmButtonEnabled : styles.confirmButtonDisabled]} onPress={handleConfirmPress} disabled={!isConfirmEnabled}>
            <Text style={styles.buttonText}>Confirm</Text>
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
          <Icon type="feather" name="activity" size={40} color="blue" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Atividade'},],
          })
        }/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="material" name="schedule" size={40} color="blue"/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>

          <Icon type="ant" name="home" size={40} color="blue" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Início'},],
          })
        }/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="entypo" name="calendar" size={40} color="blue" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Calendario'},],
          })
        }/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="fa" name="user" size={40} color="blue" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Perfil'},],
          })
        }/>
        </View>
      </View>
    </View>
  );
}

const marked = {
    '2023-05-22': { selected: true, selectedColor: 'blue', selectedTextColor: 'white' },
    '2023-05-31': { selected: true, selectedColor: 'blue', selectedTextColor: 'white' },
    '2023-06-13': { selected: true, selectedColor: 'blue', selectedTextColor: 'white' }
  };

const { height, width } = Dimensions.get('window');
// Set the height and width of the Calendar component
const calendarHeight = height - 200;
const calendarWidth = width - 40;

function CalendarioScreen({ navigation }) {
  const [selectedDay, setSelectedDay] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isNestedModalVisible, setNestedModalVisible] = useState(false);
  const [nestedModalText] = useState('');
  const [isNestedModalVisible2, setNestedModalVisible2] = useState(false);
  const [nestedModalText2] = useState('');
  const [isNestedModalVisible3, setNestedModalVisible3] = useState(false);
  const [nestedModalText3] = useState('');

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
          borderColor: 'blue',
          marginTop: 45,
        }}
      />
      {/* Pop-up */}
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          {marked[selectedDay?.dateString] ? (
            <View>
              <Text style={styles.modalTitle}>Reservas: {selectedDay?.dateString}</Text>
              <TouchableOpacity onPress={() => openNestedModal()}>
                <View style={styles.serviceHeader2}>
                  <View style={{ flex: 0.5, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Icon name="user" size={50} color="lightblue" />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.serviceTitle}>João Silva</Text>
                    <Text style={styles.serviceDescription}>9h-12h</Text>
                  </View>
                  <View style={styles.circle}>
                    <Text style={styles.circleText}>18€</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <Modal transparent visible={isNestedModalVisible} onRequestClose={closeNestedModal}>
                <TouchableWithoutFeedback onPress={handleNestedModalClose}>
                  <View style={styles.modalContainer1}>
                    <View style={styles.modalContent1}>
                      <Text style={styles.serviceTitle}>{nestedModalText} Rua João Paulo II 127</Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </Modal>
              <TouchableOpacity onPress={() => openNestedModal2()}>
                <View style={styles.serviceHeader2}>
                  <View style={{flex: 0.5, justifyContent: 'flex-end', alignItems: 'center'}}>
                    <Icon name="user" size={50} color="lightblue"/>
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={styles.serviceTitle}>Carla Silva</Text>
                    <Text style={styles.serviceDescription}>20h-23h</Text>
                  </View>
                  <View style={styles.circle}>
                    <Text style={styles.circleText}>30€</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <Modal transparent visible={isNestedModalVisible2} onRequestClose={closeNestedModal2}>
                <TouchableWithoutFeedback onPress={handleNestedModalClose2}>
                  <View style={styles.modalContainer1}>
                    <View style={styles.modalContent1}>
                    <Text style={styles.serviceTitle}>{nestedModalText2} Avenida da Liberdade 98</Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </Modal>
              <TouchableOpacity onPress={() => openNestedModal3()}>
                <View style={styles.serviceHeader2}>
                  <View style={{flex: 0.5, justifyContent: 'flex-end', alignItems: 'center'}}>
                    <Icon name="user" size={50} color="lightblue"/>
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={styles.serviceTitle}>Maria Rosa</Text>
                    <Text style={styles.serviceDescription}>13:30h-16h</Text>
                  </View>
                  <View style={styles.circle}>
                    <Text style={styles.circleText}>24€</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <Modal transparent visible={isNestedModalVisible3} onRequestClose={closeNestedModal3}>
                <TouchableWithoutFeedback onPress={handleNestedModalClose3}>
                  <View style={styles.modalContainer1}>
                    <View style={styles.modalContent1}>
                      <Text style={styles.serviceTitle}>{nestedModalText3} Rua Manuel Mendes 39</Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </Modal>              
            </View>
          ) : (
            <View>
              <Text style={styles.modalTitle}>Dia: {selectedDay?.dateString}</Text>
              <Text style={styles.modalTitle}>Nenhuma Reserva</Text>
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
          <Icon type="feather" name="activity" size={40} color="blue" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Atividade'},],
          })
        }/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="material" name="schedule" size={40} color="blue" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Agendar'},],
          })
        }/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="ant" name="home" size={40} color="blue" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Início'},],
          })
        }/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="entypo" name="calendar" size={40} color="blue"/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="fa" name="user" size={40} color="blue" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Perfil'},],
          })
        }/>
        </View>
      </View>
    </View>
  );
}
function PerfilScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerUser}>
        <View style={styles.header}>
          <View style={styles.userInfoContainer}>
            <Text style={styles.userName}>Pedro Costa</Text>
          </View>
          <View style={styles.userIconContainer}>
            <Icon type="fa" name="user" size={40} color="blue" />
          </View>
        </View>
        <View style={styles.menuContainer}>
          <View style={[styles.menuItem, styles.emphasizedMenuItem]}>
            <Icon type="fa5" name="euro-sign" size={50} color="blue" />
            <Text style={styles.emphasizedMenuItemText}>    Tarifa</Text>
          </View>
          <View style={[styles.menuItem, styles.emphasizedMenuItem]}>
            <Icon type="entypo" name="message" size={50} color="blue" />
            <Text style={styles.emphasizedMenuItemText}>  Mensagens</Text>
          </View>
          <View style={[styles.menuItem, styles.emphasizedMenuItem]}>
            <Icon type="ionicon" name="settings" size={50} color="blue" />
            <Text style={styles.emphasizedMenuItemText}>  Definições</Text>
          </View>
          <View style={[styles.menuItem, styles.emphasizedMenuItem]}>
            <Icon type="entypo" name="help" size={50} color="blue" />
            <Text style={styles.emphasizedMenuItemText}>  Sobre</Text>
          </View>
        </View>
      </View>
      <View style={styles.menuBarContainer}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="feather" name="activity" size={40} color="blue" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Atividade'},],
          })
        }/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="material" name="schedule" size={40} color="blue" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Agendar'},],
          })
        }/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="ant" name="home" size={40} color="blue" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Início'},],
          })
        }/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="entypo" name="calendar" size={40} color="blue" onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Calendario'},],
          })
        }/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: -10}}>
          <Icon type="fa" name="user" size={40} color="blue"/>
        </View>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function loginWorker() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Início'>
        <Stack.Screen name="Início"  component={HomeScreen} options={{ headerTitleStyle: { color: 'blue', fontWeight: 'bold' }}}/>
        <Stack.Screen name="Atividade" component={AtividadeScreen} options={{ headerTitleStyle: { color: 'blue', fontWeight: 'bold' }}}/>
        <Stack.Screen name="Agendar" component={AgendarScreen} options={{ headerTitleStyle: { color: 'blue', fontWeight: 'bold' }}}/>
        <Stack.Screen name="Calendario" component={CalendarioScreen} options={{ headerTitleStyle: { color: 'blue', fontWeight: 'bold' }}}/>
        <Stack.Screen name="Perfil" component={PerfilScreen} options={{ headerTitleStyle: { color: 'blue', fontWeight: 'bold' }}}/>
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
    fontSize: 18,
    color: 'blue',
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
    marginTop: 60,
    marginLeft: -20,
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
  serviceHeader2: {
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
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonPopupContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonPopupText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
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
    borderBottomColor: 'blue',
    backgroundColor: 'lightblue',
  },
  userInfoContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'blue',
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
    color: 'blue',
    fontSize: 30,
    fontWeight: 'bold',
  },
  modalContainer1: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent1: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
});

export default loginWorker;