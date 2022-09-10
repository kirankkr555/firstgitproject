import React from "react";
import { StyleSheet, View, Text } from "react-native";
// import DateRangePicker from "react-native-daterange-picker";
import CalendarPicker from 'react-native-calendar-picker';
import { TouchableOpacity } from "react-native-gesture-handler";
import moment from "moment";


export default class DateRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null, 
    };
  }

  onDateChange =(date, type)=>{
    if (type === 'END_DATE') {
      this.setState({
        selectedEndDate: date,
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: date,
      });
    }
  }

   handleCanclePicker = () =>{
     const start = this.state.selectedStartDate ? this.state.selectedStartDate.toString() : ''
     const end = this.state.selectedEndDate ? this.state.selectedEndDate.toString() : ''
     let startVal = moment(start).format('DD-MM-YYYY')
     let endVal =  moment(end).format('DD-MM-YYYY')
     console.log(startVal,'startVal',endVal);
     this.props.DatePicker(false)
     this.props.handleSelectedTwoDates(startVal,endVal)
  }


  render() {
   
    const { selectedStartDate, selectedEndDate } = this.state;
    const minDate = new Date(2020,1,1); 
    const maxDate = new Date(2022,12,31);
    const startDate  = selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';
     //this.props.DatePicker(startDate,endDate == startDate ? null : endDate)
      return (
      <View style={styles.container}>
       <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={minDate}
          maxDate={maxDate}
          // todayBackgroundColor="#f2e6ff"
          selectedDayColor="green"
          selectedDayTextColor="#FFFFFF"
          onDateChange={this.onDateChange}
        />
       
        <TouchableOpacity style={{ margin:5, padding:5, width:70 }}
        onPress={this.handleCanclePicker}
        >
          <Text style={{backgroundColor:'green', color:'white', padding:5, textAlign:'center', borderRadius:5}}>Ok</Text>
        </TouchableOpacity>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"white",
    margin:2,
    borderRadius:10,
  },
});