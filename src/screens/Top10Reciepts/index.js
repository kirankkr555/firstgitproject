import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
// import { Top10Receipts } from '../../Data/data';
import EntypoDesign from 'react-native-vector-icons/Entypo'
import { Searchbar } from 'react-native-paper';
import DateRange from '../../DaterRangePicker'
import axios from 'axios';

const Top10 = (props) => {
  // const CollectionDetails = props.route.params
  const [isPicker, setIsPicker] = useState(false)
  // const [searchQuery, setSearchQuery] = React.useState('');
  const [top10, setTop10]=useState([]);
  // const [filteredData, setFilteredData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
      setRefreshing(true)
      handleGetTop10()
  }


  useEffect(()=>{
    handleGetTop10()
},[])

const handleGetTop10 = async () => {
  let values = {
      url:`https://dev1.margadarsi.com/FSUMROAPP/fsapp/topTenReceipts`, 
      method: 'get'
  }
  try {
    const response = await axios(values)
    console.log(response,'setTop10');
    setTop10(response.data.topList)
    // setFilteredData(response.data);
    setRefreshing(false)
  } catch (error) {
    // handle error
    console.log(error);
  }
};

const handleSelectedTwoDates = async (start,end) =>{
  let values = {
      url:`https://dev1.margadarsi.com/FSUMROAPP/fsapp/topTenReceipts/${start}/${end}`, 
      method: 'get'
  }
  console.log(values,'values');
  try {
    const response = await axios(values)
    console.log(response,'setTop10');
    setTop10(response.data.topList)
    // setFilteredData(response.data);
  } catch (error) {
    // handle error
    console.log(error);
  }
}
const handlePickerDisplay = () => {
  setIsPicker(!isPicker)
}

const handleDatePicker = (dt1,dt2) =>{
  console.log(dt1,'date',dt2);
    if(dt1 == false)
    {
      setIsPicker(!isPicker)
    } 
  }

  // const searchFilterFunction = (text) =>{
  //   if(text){
  //     const newData = top10.filter(item=>{
  //       const itemData = item.branchName ? item.branchName.toUpperCase() : ''.toUpperCase();
  //       const textData = text.toUpperCase();
  //       return itemData.indexOf(textData) > -1 ;
  //     })
  //     setTop10(newData);
  //     setSearchQuery(text);
  //   }else{
  //     setTop10(filteredData);
  //     setSearchQuery(text);
  //   }
  // }


  const renderItem = ({ item }) => {
    return (
      <View>
        {/* <TouchableOpacity style={styles.opacitystyle}> */}
        <View style={styles.flatlist} >
          <View style={{ flexDirection: 'row', padding: 4,borderWidth:1, borderColor:'#cccccc', borderRadius:5 }}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>Branch Name</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.branchName}</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 4 ,borderWidth:1, borderColor:'#cccccc', borderRadius:5}}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>Agent Name</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.agentName}</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 4,borderWidth:1, borderColor:'#cccccc', borderRadius:5 }}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>Username</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.userName}</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 4,borderWidth:1, borderColor:'#cccccc', borderRadius:5 }}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>Total Receipts</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold'}}>{item.totalReceipts}</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 4,borderWidth:1, borderColor:'#cccccc', borderRadius:5 }}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>Total Collection</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold'}}>{item.totalCollection}</Text>
          </View>
        </View>
      </View>
    )
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/greenbg.jpg')}
                style={{
                    width:'100%', height:'100%', position:'absolute'
                }} />
      <View style={styles.search}>
        {/* <View>
          <Searchbar
            placeholder="Search"
            onChangeText={searchFilterFunction}
            value={searchQuery}
            style={{width:280}}
          />
        </View> */}
        <View>
          <TouchableOpacity onPress={handlePickerDisplay}>
            {/* <Text style={{color:'white',marginLeft:20}}>Picker</Text> */}
            <Image source={require('../../../assets/images/calender.png')} style={{width:50, height:50, marginRight:20}} />
          </TouchableOpacity>
        </View>
      </View>
      {
        isPicker ?
          <View style={{ position:'absolute', marginTop:70, zIndex: 1000 }}>
            <DateRange 
              DatePicker={(date1,date2)=>handleDatePicker(date1,date2)}
              handleSelectedTwoDates={(start,end)=>handleSelectedTwoDates(start,end)}
            />
          </View>
          : null
      }
       {
          top10 && top10.length >  0 ?
           (
      <View style={{marginBottom:80}}>
        <FlatList
          data={top10}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      </View>
       ):
       (
        <View>
        <Text style={{color:'red', textAlign:'center', marginTop:20, fontSize:15}}>No Data Found</Text>
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
  },
  flatlist: {
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 20,
    borderRadius: 15,
    backgroundColor: '#cce0ce',
    color: 'black',
    elevation:7
  },
  detailText: {
    fontSize: 15,
    color: '#e03226',
    textAlign: 'center',
    alignItems: 'center'
  },
  Rostyle: {
    alignSelf: 'center',
    marginTop: 20,
    color: 'black',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 7,
    fontSize: 15
  },
  search: {
    flexDirection:'row',
    // padding:14,
    marginTop:10,
    marginBottom:15,
    alignItems:'center',
    justifyContent:'flex-end',
    marginLeft:20
   },
});

export default Top10;