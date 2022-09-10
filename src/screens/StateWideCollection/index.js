import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
//import { StateWideTotalCollection } from '../../Data/data';
import EntypoDesign from 'react-native-vector-icons/Entypo';
import { Searchbar } from 'react-native-paper';
import DateRange from '../../DaterRangePicker'
import axios from 'axios';



const StateWideCollection = (props) => {

  // const CollectionDetails = props.route.params

  const [isPicker, setIsPicker] = useState(false)
  // const [searchQuery, setSearchQuery] = React.useState('');
  const [statewise, setStatewise] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
      setRefreshing(true)
      handleGetStateWideCollection()
  }


  useEffect(()=>{
    handleGetStateWideCollection()
},[])

const  handleGetStateWideCollection = async () => {
  let values = {
      url:`https://dev1.margadarsi.com/FSUMROAPP/fsapp/cumList`, 
      method: 'get'
  }
  try {
    const response = await axios(values)
    console.log(response,'setStatewiscumStateListe');
    setStatewise(response.data.cumStateList)
    setFilteredData(response.data.cumStateList);
    setRefreshing(false)
  } catch (error) {
    console.log(error);
  }
};

const handleSelectedTwoDates = async (start,end) =>{
  let values = {
      url:`https://dev1.margadarsi.com/FSUMROAPP/fsapp/cumList/${start}/${end}`, 
      method: 'get'
  }
  console.log(values,'values');
  try {
    const response = await axios(values)
    setStatewise(response.data.cumStateList)
    setFilteredData(response.data.cumStateList);
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
          <View style={{ flexDirection: 'row', padding: 4,borderWidth:1, borderColor:'#cccccc', borderRadius:5  }}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold', }}>State</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.tsCityName}</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 4,borderWidth:1, borderColor:'#cccccc', borderRadius:5 }}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>Total Receipts</Text>
            <Text style={{ flex: 0.4, color: 'black' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.tsCityNoOfReceipts}</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 4,borderWidth:1, borderColor:'#cccccc', borderRadius:5 }}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>Cash</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.tsCityCash}</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 4,borderWidth:1, borderColor:'#cccccc', borderRadius:5 }}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>Cheque</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.tsCityCheque}</Text>
          </View>
          {/* <View style={{ flexDirection: 'row', padding: 4 ,borderWidth:1, borderColor:'#cccccc', borderRadius:5}}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>DD</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.tsCityDD}</Text>
          </View> */}
          <View style={{ flexDirection: 'row', padding: 4,borderWidth:1, borderColor:'#cccccc', borderRadius:5 }}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>Total Collection</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.tsCityTotal}</Text>
          </View>
        </View>

        <View style={styles.flatlist} >
          <View style={{ flexDirection: 'row', padding: 4,borderWidth:1, borderColor:'#cccccc', borderRadius:5 }}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>State</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.tsMufsilName}</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 4,borderWidth:1, borderColor:'#cccccc', borderRadius:5 }}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>Total Receipts</Text>
            <Text style={{ flex: 0.4, color: 'black' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.tsMufsilNoOfReceipts}</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 4 ,borderWidth:1, borderColor:'#cccccc', borderRadius:5}}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>Cash</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.tsMufsilCash}</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 4,borderWidth:1, borderColor:'#cccccc', borderRadius:5 }}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>Cheque</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.tsMufsilCheque}</Text>
          </View>
          {/* <View style={{ flexDirection: 'row', padding: 4,borderWidth:1, borderColor:'#cccccc', borderRadius:5 }}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>DD</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.tsMufsilDD}</Text>
          </View> */}
          <View style={{ flexDirection: 'row', padding: 4 ,borderWidth:1, borderColor:'#cccccc', borderRadius:5}}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>Total Collection</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.tsMufsilTotal}</Text>
          </View>
        </View>

        <View style={styles.flatlist} >
          <View style={{ flexDirection: 'row', padding: 4,borderWidth:1, borderColor:'#cccccc', borderRadius:5 }}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>State</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.tsName}</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 4,borderWidth:1, borderColor:'#cccccc', borderRadius:5 }}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>Total Receipts</Text>
            <Text style={{ flex: 0.4, color: 'black' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.tsNoOfReceipts}</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 4 ,borderWidth:1, borderColor:'#cccccc', borderRadius:5}}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>Cash</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.tsCash}</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 4,borderWidth:1, borderColor:'#cccccc', borderRadius:5 }}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>Cheque</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.tsCheque}</Text>
          </View>
          {/* <View style={{ flexDirection: 'row', padding: 4,borderWidth:1, borderColor:'#cccccc', borderRadius:5 }}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>DD</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.tsDD}</Text>
          </View> */}
          <View style={{ flexDirection: 'row', padding: 4,borderWidth:1, borderColor:'#cccccc', borderRadius:5 }}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>Total Collection</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.tsTotal}</Text>
          </View>
        </View>

        <View style={styles.flatlist} >
          <View style={{ flexDirection: 'row', padding: 4,borderWidth:1, borderColor:'#cccccc', borderRadius:5 }}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>State</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.apName}</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 4 ,borderWidth:1, borderColor:'#cccccc', borderRadius:5}}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>Total Receipts</Text>
            <Text style={{ flex: 0.4, color: 'black' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.apNoOfReceipts}</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 4 ,borderWidth:1, borderColor:'#cccccc', borderRadius:5}}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>Cash</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.apCash}</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 4,borderWidth:1, borderColor:'#cccccc', borderRadius:5 }}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>Cheque</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.apCheque}</Text>
          </View>
          {/* <View style={{ flexDirection: 'row', padding: 4 ,borderWidth:1, borderColor:'#cccccc', borderRadius:5}}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>DD</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.apDD}</Text>
          </View> */}
          <View style={{ flexDirection: 'row', padding: 4,borderWidth:1, borderColor:'#cccccc', borderRadius:5 }}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>Total Collection</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.apTotal}</Text>
          </View>
        </View>

        <View style={styles.flatlist} >
          <View style={{ flexDirection: 'row', padding: 4,borderWidth:1, borderColor:'#cccccc', borderRadius:5 }}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>State</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.tnName}</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 4 ,borderWidth:1, borderColor:'#cccccc', borderRadius:5}}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>Total Receipts</Text>
            <Text style={{ flex: 0.4, color: 'black' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.tnNoOfReceipts}</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 4,borderWidth:1, borderColor:'#cccccc', borderRadius:5 }}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>Cash</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.tnCash}</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 4 ,borderWidth:1, borderColor:'#cccccc', borderRadius:5}}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>Cheque</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.tnCheque}</Text>
          </View>
          {/* <View style={{ flexDirection: 'row', padding: 4 ,borderWidth:1, borderColor:'#cccccc', borderRadius:5}}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>DD</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.tnDD}</Text>
          </View> */}
          <View style={{ flexDirection: 'row', padding: 4 ,borderWidth:1, borderColor:'#cccccc', borderRadius:5}}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>Total Collection</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.tnTotal}</Text>
          </View>
        </View>

        <View style={styles.flatlist} >
          <View style={{ flexDirection: 'row', padding: 4 ,borderWidth:1, borderColor:'#cccccc', borderRadius:5 }}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>State</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.knName}</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 4 ,borderWidth:1, borderColor:'#cccccc', borderRadius:5}}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>Total Receipts</Text>
            <Text style={{ flex: 0.4, color: 'black' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.knNoOfReceipts}</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 4 ,borderWidth:1, borderColor:'#cccccc', borderRadius:5}}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>Cash</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.knCash}</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 4 ,borderWidth:1, borderColor:'#cccccc', borderRadius:5}}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>Cheque</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.knCheque}</Text>
          </View>
          {/* <View style={{ flexDirection: 'row', padding: 4,borderWidth:1, borderColor:'#cccccc', borderRadius:5 }}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>DD</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.knDD}</Text>
          </View> */}
          <View style={{ flexDirection: 'row', padding: 4,borderWidth:1, borderColor:'#cccccc', borderRadius:5 }}>
            <Text style={{ flex: 1, color: 'tomato', fontWeight:'bold' }}>Total Collection</Text>
            <Text style={{ flex: 0.4, color: '#004d00' }}>:</Text>
            <Text style={{ flex: 1, color: '#004d00', fontWeight:'bold' }}>{item.knTotal}</Text>
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
    marginTop:10,
    marginBottom:15,
    alignItems:'center',
    justifyContent:'flex-end',
    marginLeft:20
   },
});

export default StateWideCollection;