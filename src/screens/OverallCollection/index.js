import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity,Image, 
  ScrollView, ImageBackground, RefreshControl } from 'react-native';
// import { OverallCollection } from '../../Data/data';
import { Searchbar } from 'react-native-paper';
import DateRange from '../../DaterRangePicker';

import axios from 'axios';

const Overall = (props) => {

  const [isPicker, setIsPicker] = useState(false);
  const [companyCollection, setCompanyCollection]= useState([]);
  const [refreshing,setRefreshing]=useState(false);

  const onRefresh = () => {
    setRefreshing(true)
    handleOverall()

  }
  
   useEffect(()=>{
    handleOverall()
},[])

const handleOverall = async () => {
  let values = {
      url:`https://dev1.margadarsi.com/FSUMROAPP/fsapp/totalCollection`, 
      method: 'get'
  }
  try {
    const response = await axios(values)
     console.log(response,'setOverallCollection',);
     setCompanyCollection(response.data.collectionTotal[0])
     setRefreshing(false);
      } catch (error) {
    // handle error
    console.log(error);
  }
};

const handleSelectedTwoDates = async (start,end) =>{
  let values = {
      url:`https://dev1.margadarsi.com/FSUMROAPP/fsapp/totalCollection/${start}/${end}`, 
      method: 'get'
  }
  console.log(values,'values');
  try {
    const response = await axios(values)
    console.log(response,'setComapnyCollectionDat');
    setCompanyCollection(response.data.collectionTotal[0])
  } catch (error) {
    // handle error
    console.log(error);
  }
}
 

  // const [searchQuery, setSearchQuery] = React.useState('');

  
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

  // const onChangeSearch = query => setSearchQuery(query);

  

  return (
        
      <ImageBackground source={require('../../../assets/images/greenbg.jpg')}
                resizeMode="cover" style={styles.container}>
                  {/* <ScrollView 
                  scrollEnabled={false}
                  refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                     
                    />
                  }> */}
      <View style={styles.search}>
        {/* <View>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{width:280}}
          />
        </View> */}
        <View>
          <TouchableOpacity onPress={handlePickerDisplay}>
            {/* <Text style={{color:'white',marginLeft:20}}>Picker</Text> */}
            <Image source={require('../../../assets/images/calender.png')} style={{width:50, height:50, marginRight:15}} />
          </TouchableOpacity>
        </View>
      </View>
      {
        isPicker ?
          <View style={{ position:'absolute', marginTop:70, zIndex: 1000,  }}>
            <DateRange 
              DatePicker={(date1,date2)=>handleDatePicker(date1,date2)}
              handleSelectedTwoDates={(start,end)=>handleSelectedTwoDates(start,end)}
            />
          </View>
          : null
      }
      
      <View>
        <View style={styles.flatlist} >
          <View style={{backgroundColor:'#339966', margin:20, width:'75%', borderRadius:10, padding:7}}>
            <Text style={{fontSize: 18, color: 'white', fontWeight:'bold', textAlign:'center'}}>Total Receipts : </Text>
            <Text style={{ fontSize: 18,color: 'white', fontWeight:'bold', textAlign:'center' }}>{companyCollection.totalNoOfReceipts}</Text>
          </View>
          <TouchableOpacity style={{backgroundColor:'#ff6666', margin:20, width:'75%',  borderRadius:10,  padding:7, elevation:10}} onPress={()=>props.navigation.navigate('GrandTotal')} >
            <Text style={{ fontSize: 18, color: 'white', fontWeight:'bold', textAlign:'center' }}>Total Amount :</Text>
            <Text style={{  fontSize: 18, color: 'white', fontWeight:'bold', textAlign:'center' }}>{companyCollection.totalCollection}</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* </ScrollView> */}
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
   flex:1,
    backgroundColor: '#226b36',

  },
  flatlist: {
    padding: 10,
    margin: 10,
    marginHorizontal: 20,
    padding: 20,
    alignItems:'center'

  },
  search: {
    flexDirection:'row',
    // padding:14,
    marginTop:10,
    marginBottom:7,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:15
   },


});

export default Overall;