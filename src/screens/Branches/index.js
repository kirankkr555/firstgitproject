import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Image, ImageBackground, ActivityIndicator, RefreshControl } from 'react-native';
//import BranchData from '../../Data/data1'
import EntypoDesign from 'react-native-vector-icons/Entypo';
import { Searchbar } from 'react-native-paper';
import DateRange from '../../DaterRangePicker'
//import { TotalBranchDetails } from '../../Data/data';
import RefreshIcon from 'react-native-vector-icons/Ionicons'


import axios from 'axios';

const Branches = (props) => {
  const [isPicker, setIsPicker] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [branches, SetBranches] = useState([]);
  const [count, SetCount] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [refreshing, setRefreshing] = useState(false);


  useEffect(() => {
    handleGetBranches()
  }, [])

  const handleGetBranches = async () => {

    const Branch = props.route.params
    console.log(Branch, 'Branch');
    let values = {
      url: `https://dev1.margadarsi.com/FSUMROAPP/fsapp/branchList/${Branch.stateCode}`,
      method: 'get'
    }
    try {
      const response = await axios(values)
      console.log(response, 'SetBranches', branches.length);
      SetBranches(response.data.branchList)
      SetCount(response.data.totalList[0])
      setFilteredData(response.data.branchList);
      setRefreshing(false)
    } catch (error) {
      // handle error
      console.log(error);
    }
  };

  const onRefresh = () => {
    setRefreshing(true)
    handleGetBranches()
  };


  const handleSelectedTwoDates = async (start, end) => {
    setStartDate(start)
    setEndDate(end)
    const Branch = props.route.params
    console.log(Branch, 'Branch');
    let values = {
      url: `https://dev1.margadarsi.com/FSUMROAPP/fsapp/branchList/${Branch.stateCode}/${start}/${end}`,
      method: 'get'
    }
    console.log(values, 'values');
    try {
      const response = await axios(values)
      console.log(response, 'SetBranches');
      SetBranches(response.data.branchList)
      SetCount(response.data.totalList[0])
      setFilteredData(response.data.branchList);
    } catch (error) {
      // handle error
      console.log(error);
    }
  }

  const handleNavigate = (branchCode) => {
    props.navigation.navigate('Collection', { BranchCode: branchCode, start: startDate, end: endDate });
  }

  const handlePickerDisplay = () => {
    setIsPicker(!isPicker)
  }

  const handleDatePicker = (dt1, dt2) => {
    console.log(dt1, 'date', dt2);
    if (dt1 == false) {
      setIsPicker(!isPicker)
    }
  }

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = branches.filter(item => {
        const itemData = item.branchName ? item.branchName.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      })
      SetBranches(newData);
      setSearchQuery(text);
    } else {
      SetBranches(filteredData);
      setSearchQuery(text);
    }
  }


  const renderItem = ({ item }) => {
    return (

      <View style={styles.opacitystyle} >
        <View style={styles.flatlist} >
          <TouchableOpacity style={{ flexDirection: 'row', padding: 4 }} onPress={() => handleNavigate(item.branchCode)}>
            <Text style={{ color: '#ff3300', fontWeight: 'bold', width: 170, textDecorationLine: 'underline' }}>{item.branchName}</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', padding: 4, flex: 2 }}>
            <Text style={{ color: '#004d00', textAlign: 'center', fontWeight: 'bold' }}>{item.noOfReceipts}</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 4 }}>
            <Text style={{ color: '#004d00', fontWeight: 'bold' }}>{item.total}</Text>
          </View>
        </View>
      </View>
    )
  };


  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/greenbg.jpg')}
        style={{
          width: '100%', height: '100%', position: 'absolute'
        }} />


      <View style={styles.search}>
        <View>
          <Searchbar
            placeholder="Search"
            onChangeText={(text) => searchFilterFunction(text)}
            value={searchQuery}
            style={{ width: 280 }}
          />
        </View>
        <View>
          <TouchableOpacity onPress={handlePickerDisplay}>
            <Image source={require('../../../assets/images/calender.png')} style={{ width: 50, height: 50, marginRight: 20 }} />
          </TouchableOpacity>
        </View>
      </View>
      {
        isPicker ?
          <View style={{ position: 'absolute', marginTop: 70, zIndex: 1000 }}>
            <DateRange
              DatePicker={(date1, date2) => handleDatePicker(date1, date2)}
              handleSelectedTwoDates={(start, end) => handleSelectedTwoDates(start, end)}
            />
          </View>
          : null
      }
      <View style={{ marginBottom: 5, }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15, marginRight: 15 }}>
          <View style={{ backgroundColor: '#339966', width: '45%', margin: 5, padding: 7, borderRadius: 15 }}>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Total Receipts :</Text>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 17 }}>{count.totalNoOfReceipts}</Text>
          </View>
          <View style={{ backgroundColor: '#ff6666', width: '45%', margin: 5, padding: 7, borderRadius: 15 }} >
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Total Amount :</Text>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 17 }}>{count.totalCollection}</Text>
          </View>
        </View>

      </View>
      <View style={styles.headers}>
        <Text style={styles.branchHeadings}>Branch Name </Text>
        <Text style={styles.receiptsHeadings} >Receipts </Text>
        <Text style={styles.amountHeadings}>Total Amount </Text>
      </View>

      {
        branches && branches.length > 0 ?
          (
            <View style={{ marginBottom: 170 }}>

              <FlatList
                data={branches}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            </View>
          ) :
          (
            <View>
              <Text style={{ color: 'red', textAlign: 'center', marginTop: 20, fontSize: 15 }}>No Data Found</Text>
            </View>
          )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#226b36',
    position: 'relative',
  },
  flatlist: {
    padding: 3,
    margin: 3,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#cce0ce',
    borderRadius: 5,
    marginVertical: 5,
    elevation: 7
  },
  opacitystyle: {
    width: '100%',
  },
  detailText: {
    fontSize: 15,
    color: '#e03226',
    textAlign: 'center',
    alignItems: 'center'
  },
  search: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 7,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 20
  },
  branchHeadings: {
    color: 'green',
    textDecorationLine: 'underline',
    fontSize: 15,
    width: 120,
    fontWeight: 'bold'
  },
  receiptsHeadings: {
    color: 'green',
    textDecorationLine: 'underline',
    fontSize: 15,
    fontWeight: 'bold'
  },
  amountHeadings: {
    color: 'green',
    textDecorationLine: 'underline',
    fontSize: 15,
    fontWeight: 'bold'
  },
  headers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
    padding: 3
  }
});

export default Branches;