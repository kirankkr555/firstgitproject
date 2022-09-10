import React, {useState, useEffect} from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity,Image, } from 'react-native';
//import { CollectionReport } from '../../Data/data';
//import BranchReport from '../../Data/data';
import EntypoDesign from 'react-native-vector-icons/Entypo'
import { NavigationContainer } from '@react-navigation/native';
import DateRange from '../../DaterRangePicker';
import { Searchbar } from 'react-native-paper';

import axios from 'axios';
import Branches from '../Branches';

const BranchReportDetails = (props) => {
  const [isPicker, setIsPicker] = useState(false)
  const [searchQuery, setSearchQuery] = React.useState('');
  const [branchDetails, setBranchDetails] = useState([]);
  const [count,setCount] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [startDate,setStartDate] = useState();
  const [endDate,setEndDate] = useState();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
      setRefreshing(true)
      handleGetBranchDetails()
  }


  useEffect(()=>{
    handleGetBranchDetails()
},[])

const handleGetBranchDetails = async () => {
  const Collection = props.route.params
  setStartDate(Collection.start)
  setEndDate(Collection.end)
  console.log(Collection,'CollectionWiseDate');
  let values = {
    url:`https://dev1.margadarsi.com/FSUMROAPP/fsapp/roList/${Collection.BranchCode}/${Collection.start}/${Collection.end}`, 
    method: 'get'
  }
  console.log(values,'branchValues');
  try {
    const response = await axios(values)
    console.log(response,'SetBranchDetails');
    setBranchDetails(response.data.roList)
    setCount(response.data.totalList[0])
    setFilteredData(response.data.roList);
    setRefreshing(false);
  } catch (error) {
    // handle error
    console.log(error);
  }
};


const handleSelectedTwoDates = async (start,end) =>{
   setStartDate(start)
   setEndDate(end)
  const Collection = props.route.params
  console.log(Collection,'CollectionNew');
  let values = {
      url:`https://dev1.margadarsi.com/FSUMROAPP/fsapp/roList/${Collection.BranchCode}/${start}/${end}`, 
      method: 'get'
  }
  console.log(values,'values');
  try {
    const response = await axios(values)
    console.log(response,'SetBranchDetailsNew');
    setBranchDetails(response.data.roList)
    setCount(response.data.totalList[0])
    setFilteredData(response.data.roList);
  } catch (error) {
    // handle error
    console.log(error);
  }
}

const handleNavigate = (item) => {
   props.navigation.navigate('RoChits', {StaffDeatils: item, start:startDate, end:endDate });
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

  const searchFilterFunction = (text) =>{
    if(text){
      const newData = branchDetails.filter(item=>{
        const itemData = item.staffCode ? item.staffCode.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1 ;
      })
      setBranchDetails(newData);
      setSearchQuery(text);
    }else{
      setBranchDetails(filteredData);
      setSearchQuery(text);
    }
  }

const renderItem = ({ item }) => {
  return (
    <View>
          <View style={styles.flatlist} >
              <View style={{flexDirection:'row',padding:4,borderWidth:1, borderColor:'#cccccc', borderRadius:5}}>
                <Text style={{flex:1,color:'tomato',fontWeight:'bold'}}>Staff Code</Text>
                <Text style={{flex:0.4,color:'#004d00'}}>:</Text>
                <TouchableOpacity style={{flex:1, flexDirection:'row'}} onPress={() => handleNavigate(item)}  >
                <Text style={{fontSize:15,color:'red',fontWeight:'bold',width:60,textDecorationLine:'underline'}}>{item.staffCode}</Text>
                <EntypoDesign name='chevron-right' size={20} color="red" />
                </TouchableOpacity>
              </View>
              <View style={{flexDirection:'row',padding:4,borderWidth:1, borderColor:'#cccccc', borderRadius:5}}>
                <Text style={{flex:1,color:'tomato', fontWeight:'bold'}}>Staff Name</Text>
                <Text style={{flex:0.4,color:'#004d00'}}>:</Text>
                <Text style={{flex:1,color:'#004d00',fontWeight:'bold'}}>{item.staffName}</Text>
              </View>
              <View style={{flexDirection:'row',padding:4,borderWidth:1, borderColor:'#cccccc', borderRadius:5}}>
                <Text style={{flex:1,color:'tomato', fontWeight:'bold'}}>Schedule Cases</Text>
                <Text style={{flex:0.4,color:'#004d00'}}>:</Text>
                <Text style={{flex:1,color:'#004d00',fontWeight:'bold'}}>{item.scheduleCases}</Text>
              </View>    
              <View style={{flexDirection:'row',padding:4,borderWidth:1, borderColor:'#cccccc', borderRadius:5}}>
                <Text style={{flex:1,color:'tomato', fontWeight:'bold'}}>Schedule Amount</Text>
                <Text style={{flex:0.4,color:'#004d00'}}>:</Text>
                <Text style={{flex:1,color:'#004d00',fontWeight:'bold'}}>{item.scheduleAmount}</Text>
              </View> 
              <View style={{flexDirection:'row',padding:4,borderWidth:1, borderColor:'#cccccc', borderRadius:5}}>
                <Text style={{flex:1,color:'tomato', fontWeight:'bold'}}>Collected Cases</Text>
                <Text style={{flex:0.4,color:'#004d00'}}>:</Text>
                <Text style={{flex:1,color:'#004d00',fontWeight:'bold'}}>{item.collectedCases}</Text>
              </View> 
              <View style={{flexDirection:'row',padding:4,borderWidth:1, borderColor:'#cccccc', borderRadius:5}}>
                <Text style={{flex:1,color:'tomato', fontWeight:'bold'}}>Collected Amount</Text>
                <Text style={{flex:0.4,color:'#004d00'}}>:</Text>
                <Text style={{flex:1,color:'#004d00',fontWeight:'bold'}}>{item.collectedAmount}</Text>
              </View> 
              <View style={{flexDirection:'row',padding:4,borderWidth:1, borderColor:'#cccccc', borderRadius:5}}>
                <Text style={{flex:1,color:'tomato', fontWeight:'bold'}}>Cash Details</Text>
                <Text style={{flex:0.4,color:'#004d00'}}>:</Text>
                <Text style={{flex:1,color:'#004d00',fontWeight:'bold'}}>{item.cash}</Text>
              </View> 
              <View style={{flexDirection:'row',padding:4,borderWidth:1, borderColor:'#cccccc', borderRadius:5}}>
                <Text style={{flex:1,color:'tomato', fontWeight:'bold'}}>Cheque Details</Text>
                <Text style={{flex:0.4,color:'#004d00'}}>:</Text>
                <Text style={{flex:1,color:'#004d00',fontWeight:'bold'}}>{item.cheque}</Text>
              </View>  
              {/* <View style={{flexDirection:'row',padding:4,borderWidth:1, borderColor:'#cccccc', borderRadius:5}}>
                <Text style={{flex:1,color:'tomato', fontWeight:'bold'}}>DD Details</Text>
                <Text style={{flex:0.4,color:'#004d00'}}>:</Text>
                <Text style={{flex:1,color:'#004d00',fontWeight:'bold'}}>{item.dd}</Text>
              </View>      */}
          </View>  
      </View>
  )
};


  return (
    <View style={styles.container}>
      {/* <Text style={{color:'red'}}>Branch name is {collectionDetails.branchName}</Text> */}
      <Image source={require('../../../assets/images/greenbg.jpg')}
                style={{
                    width:'100%', height:'100%', position:'absolute'
                }} />
      <View style={styles.search}>
        <View>
          <Searchbar
            placeholder="Search"
            onChangeText={(text)=>searchFilterFunction(text)}
            value={searchQuery}
            style={{width:280}}
          />
        </View>
        <View>
          <TouchableOpacity onPress={handlePickerDisplay}>
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
      <View style={{marginBottom:10}}>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginLeft:10, marginRight:10}}>
              <View style={{backgroundColor:'#3385ff', width:'45%', margin:5, padding:7, borderRadius:15}} >
                <Text style={{color:'white', textAlign:'center', fontWeight:'bold'}}>Total Cash :</Text>
                <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:17 }}>{count.totalCash}</Text>
              </View>
              {/* <View style={{backgroundColor:'#004d00', width:'45%', margin:5, padding:7, borderRadius:15}}>
                <Text style={{color:'white', textAlign:'center', fontWeight:'bold'}}>Total DD Collected :</Text>
                <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:17}}>{count.totalDd}</Text>
              </View>  */}
             <View style={{backgroundColor:'#339966', width:'45%', margin:5, padding:7, borderRadius:15}} >
                <Text style={{color:'white', textAlign:'center', fontWeight:'bold'}}>Total Cheque :</Text>
                <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:17}} >{count.totalCheque}</Text>
             </View>
          </View> 
              <View style={{ justifyContent:'center', alignSelf:'center', backgroundColor:'#ff6666', width:'55%', margin:5, padding:7, borderRadius:15}}>
                <Text style={{color:'white', textAlign:'center', fontWeight:'bold'}}>Total Amount Collected :</Text>
                <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:17}}>{count.totalAmount}</Text>
              </View>    
           
           
      </View>
      {
          branchDetails && branchDetails.length >  0 ?
           (
      <View style={{marginBottom:215}}>
          <FlatList
              data={branchDetails}
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
      marginVertical:3,
      marginHorizontal:20,
      borderRadius: 15,
      backgroundColor: '#cce0ce',
      elevation:7
  },
  
  detailText:{
    fontSize:15,
    color:'#e03226',
    textAlign:'center',
    alignItems:'center'
  },
  Rostyle:{
    alignSelf:'center',
    marginTop:20,
    color:'black',
    backgroundColor:'white',
    padding:10,
    borderRadius:7,
    fontSize:15
  },
  search: {
    flexDirection:'row',
    // padding:14,
    marginTop:10,
    marginBottom:7,
    alignItems:'center',
    justifyContent:'space-between',
    marginLeft:20
   },
});

export default BranchReportDetails;