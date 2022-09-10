import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import EntypoDesign from 'react-native-vector-icons/Entypo';
import { Searchbar } from 'react-native-paper';
 import DateRange from '../DaterRangePicker';
import axios from 'axios';


const GrandTotal = (props) => {

  // const CollectionDetails = props.route.params

  //const [isPicker, setIsPicker] = useState(false)
  // const [searchQuery, setSearchQuery] = React.useState('');
  const [statewise, setStatewise] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [companyCollection, setCompanyCollection]= useState([]);
  const [refreshing, setRefreshing] = useState(false);


  useEffect(()=>{
    handleGetGrandTotal();
    handleOverall()
},[])

const  handleGetGrandTotal = async () => {
  let values = {
      url:`https://dev1.margadarsi.com/FSUMROAPP/fsapp/cumList`, 
      method: 'get'
  }
  try {
    const response = await axios(values)
    console.log(response,'setStatewiscumStateListe');
    setStatewise(response.data.cumStateList)
    setFilteredData(response.data.cumStateList);
    setRefreshing(false);
  } catch (error) {
    console.log(error);
  }
};

const onRefresh = () => {
  setRefreshing(true);
  handleGetGrandTotal()
  handleOverall()
}

// const handleSelectedTwoDates = async (start,end) =>{
//   let values = {
//       url:`https://rolive.margadarsi.com/FSUMROAPP/fsapp/cumList/${start}/${end}`, 
//       method: 'get'
//   }
//   console.log(values,'values');
//   try {
//     const response = await axios(values)
//     setStatewise(response.data.cumStateList)
//     setFilteredData(response.data.cumStateList);
//   } catch (error) {
//     // handle error
//     console.log(error);
//   }
// }

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
  
  // const handleSelectedTwoDatesOverall = async (start,end) =>{
  //   let values = {
  //       url:`https://rolive.margadarsi.com/FSUMROAPP/fsapp/totalCollection/${start}/${end}`, 
  //       method: 'get'
  //   }
  //   console.log(values,'values');
  //   try {
  //     const response = await axios(values)
  //     console.log(response,'setComapnyCollectionDat');
  //     setCompanyCollection(response.data.collectionTotal[0])
  //   } catch (error) {
  //     // handle error
  //     console.log(error);
  //   }
  // }

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

    // let stateNames = {
    //   tsCityName :'ts city',
    //   tsMufsilName : 'ts mufsil',
    //   tsName : 'telangana',
    //   apName : 'andhra',
    //   tnName : 'tamilnadu',
    //   knName : 'karnataka',
    // }


    // const searchFilterFunction = (text) =>{
    //   if(text){
    //     const newData = statewise.filter(item=>{
    //       const itemData = item.knName ? item.knName.toUpperCase() : ''.toUpperCase();
    //       const textData = text.toUpperCase();
    //       return itemData.indexOf(textData) > -1 ;
    //     })
    //     setStatewise(newData);
    //     setSearchQuery(text);
    //   }else{
    //     setStatewise(filteredData);
    //     setSearchQuery(text);
    //   }
    // }


  const renderItem = ({item}) => {
    return (
      <View>
        {/* <TouchableOpacity style={styles.opacitystyle}> */}
        <View style={styles.flatlist} >
          <View style={{ flexDirection: 'row', padding: 4,borderWidth:1, borderColor:'#cccccc', borderRadius:5 ,justifyContent:'space-between' }}>
            <Text style={{  width:80,color: 'red', fontWeight:'bold' }}>{item.tsCityName}</Text>
            <Text style={{ color: '#004d00', fontWeight:'bold' }}>{item.tsCityNoOfReceipts}</Text>
            <Text style={{  color: '#004d00', fontWeight:'bold' }}>{item.tsCityTotal}</Text>
          </View>
        </View>

        <View style={styles.flatlist} >
          <View style={{ flexDirection: 'row', padding: 4,borderWidth:1, borderColor:'#cccccc', borderRadius:5,justifyContent:'space-between' }}>
            <Text style={{  width:80,color: 'red', fontWeight:'bold' }}>{item.tsMufsilName}</Text>
            <Text style={{  color: '#004d00', fontWeight:'bold' }}>{item.tsMufsilNoOfReceipts}</Text>
            <Text style={{  color: '#004d00', fontWeight:'bold' }}>{item.tsMufsilTotal}</Text>
          </View>
        </View>

        <View style={styles.flatlist} >
          <View style={{ flexDirection: 'row', padding: 4,borderWidth:1, borderColor:'#cccccc', borderRadius:5 ,justifyContent:'space-between'}}>
            <Text style={{  width:94,color: 'red', fontWeight:'bold' }}>{item.tsName}</Text>
            <Text style={{  color: '#004d00', fontWeight:'bold' }}>{item.tsNoOfReceipts}</Text>
            <Text style={{  color: '#004d00', fontWeight:'bold' }}>{item.tsTotal}</Text>
          </View>
        </View>

        <View style={styles.flatlist} >
          <View style={{ flexDirection: 'row', padding: 4,borderWidth:1, borderColor:'#cccccc', borderRadius:5,justifyContent:'space-between' }}>
            <Text style={{ width:80, color: 'red', fontWeight:'bold' }}>{item.apName}</Text>
            <Text style={{   color: '#004d00', fontWeight:'bold' }}>{item.apNoOfReceipts}</Text>
            <Text style={{  color: '#004d00', fontWeight:'bold' }}>{item.apTotal}</Text>
          </View>
        </View>

        <View style={styles.flatlist} >
          <View style={{ flexDirection: 'row', padding: 4,borderWidth:1, borderColor:'#cccccc', borderRadius:5,justifyContent:'space-between' }}>
            <Text style={{ width:80, color: 'red', fontWeight:'bold' }}>{item.tnName}</Text>
            <Text style={{ color: '#004d00', fontWeight:'bold' }}>{item.tnNoOfReceipts}</Text>
            <Text style={{  color: '#004d00', fontWeight:'bold' }}>{item.tnTotal}</Text>
          </View>
        </View>

        <View style={styles.flatlist} >
          <View style={{ flexDirection: 'row', padding: 4 ,borderWidth:1, borderColor:'#cccccc', borderRadius:5, justifyContent:'space-between' }}>
            <Text style={{ width:80, color: 'red', fontWeight:'bold' }}>{item.knName}</Text>
            <Text style={{  color: '#004d00', fontWeight:'bold' }}>{item.knNoOfReceipts}</Text>
            <Text style={{  color: '#004d00', fontWeight:'bold' }}>{item.knTotal}</Text>
          </View>
        </View>

      </View>
    // <View style={styles.opacitystyle} >
    //     <View style={styles.flatlist} >
    //       <TouchableOpacity style={{ flexDirection: 'row', padding: 4 }} onPress={() => handleNavigate(item.branchCode)}>
    //         <Text style={{ color: '#ff3300', fontWeight: 'bold', width: 170, textDecorationLine: 'underline' }}>{item.branchName}</Text>
    //       </TouchableOpacity>
    //       <View style={{ flexDirection: 'row', padding: 4, flex: 2 }}>
    //         <Text style={{ color: '#004d00', textAlign: 'center', fontWeight: 'bold' }}>{item.noOfReceipts}</Text>
    //       </View>
    //       <View style={{ flexDirection: 'row', padding: 4 }}>
    //         <Text style={{ color: '#004d00', fontWeight: 'bold' }}>{item.total}</Text>
    //       </View>
    //     </View>
    //   </View>
    )
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/greenbg.jpg')}
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
          {/* <TouchableOpacity onPress={handlePickerDisplay}>
            <Image source={require('../../assets/images/calender.png')} style={{width:50, height:50, marginRight:20}} />
          </TouchableOpacity> */}
        </View>
      </View>
      {/* {
        isPicker ?
          <View style={{ position:'absolute', marginTop:70, zIndex: 1000 }}>
            <DateRange 
              DatePicker={(date1,date2)=>handleDatePicker(date1,date2)}
              handleSelectedTwoDatesOverall={(start,end)=>handleSelectedTwoDatesOverall(start,end)}
              handleSelectedTwoDates={(start,end)=>handleSelectedTwoDates(start,end)}
            />
          </View>
          : null
      } */}
      <View style={styles.headers}>
        <Text style={styles.branchHeadings}>State </Text>
        <Text style={styles.receiptsHeadings} >Receipts </Text>
        <Text style={styles.amountHeadings}>Total Amount </Text>
      </View>
      {
        statewise && statewise.length >0 ?
      (
      <View style={{marginBottom:80}} >
        <FlatList 
        data ={statewise}
        renderItem={renderItem}
        keyExtractor={(item)=>(item.id)}
        refreshing={refreshing}
        onRefresh={onRefresh}
        />
         <Text style={{  fontSize: 18, color: 'white', fontWeight:'bold', textAlign:'center', position:'absolute', bottom:-100, alignSelf:'center', backgroundColor:'tomato', padding:20, borderRadius:10 }}>Total Receipts : {companyCollection.totalNoOfReceipts}</Text>
         <Text style={{  fontSize: 18, color: 'white', fontWeight:'bold', textAlign:'center', position:'absolute', bottom:-200, alignSelf:'center', backgroundColor:'tomato', padding:20, borderRadius:10 }}>Grand Total : {companyCollection.totalCollection}</Text>
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
  },
  flatlist: {
    padding: 3,
    margin: 3,
    marginHorizontal: 15,
    //flexDirection: 'row',
    //justifyContent: 'space-between',
    backgroundColor: '#cce0ce',
    borderRadius: 5,
    marginVertical: 5,
    //elevation: 7
    
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
    marginTop:10,
    marginBottom:15,
    alignItems:'center',
    justifyContent:'flex-end',
    marginLeft:20
   },
   branchHeadings: {
    color: 'green',
    textDecorationLine: 'underline',
    fontSize: 15,
    width: 100,
    fontWeight: 'bold'
  },
  receiptsHeadings: {
    color: 'green',
    textDecorationLine: 'underline',
    fontSize: 15,
    width: 70,
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
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    padding: 3
  }
});

export default GrandTotal;