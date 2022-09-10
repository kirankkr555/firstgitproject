import React, {useState, useEffect} from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';


const Launch = (props) => {

    const [version, setVersion] = useState([]);
   
    useEffect(() => {
        handleGetVersion()
    }, []);

    const handleGetVersion = async () => {
        let values = {
            url: `https://dev1.margadarsi.com/FSUMROAPP/fsapp/version`,
            method: 'get'
        }
        try {
            const response = await axios(values)
            console.log(response.data.versionList,'response');
            setVersion(response.data.versionList[0])
        } catch (error) {
            // handle error
            console.log(error);
        }
    };


    const handleNavigateToLoginScreen = () => {
       
        // {version.version === "1.0" ?
        //     props.navigation.navigate('DasboardScreenStack', { screen: 'Dashboard' }) : alert('Get back soon')
        //  }

        props.navigation.navigate('DasboardScreenStack', { screen: 'Dashboard' }) 
    }

    return (
        <View style={styles.Container}>
            <Image source={require('../../../assets/images/margadarsi_logo.png')} style={styles.mclogostyle} />
            <Text></Text>
            <Image source={require('../../../assets/images/rupee.png')} style={styles.rupeelogostyle} />
            <Text></Text>
            <Text style={styles.text}>Field Staff Collection {'\n'} Report</Text>
            <Text></Text>
            <TouchableOpacity style={styles.touchablestyle} onPress={handleNavigateToLoginScreen}>
                <Text style={styles.Enterbtnstyles} >Enter</Text>
                <AntDesign name='caretright' size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.version}>Version {version.version}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#226b36',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mclogostyle: {
        borderRadius: 5,
        // marginTop:30, 
    },
    text: {
        color: 'white',
        // fontSize:'30',
        // fontFamily: 'CWG',
        fontSize: 30,
        margin: 20,
        borderWidth: 2,
        padding: 10,
        borderColor: 'white',
        textAlign: 'center',
        borderRadius: 20,
    },
    rupeelogostyle: {
        width: 300,
        height: 300,
        marginRight: 15
    },
    Enterbtnstyles: {
        padding: 5,
        // margin:10,
        fontSize: 30,
        color: 'white',
        borderRadius: 10,
    },
    touchablestyle: {
        width: '75%',
        flexDirection: 'row',
        backgroundColor: '#e03226',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 15,

    },
    version: {
        color: 'white',
        fontSize: 13,
        fontStyle: 'italic',
         opacity: 0.4,
        position: 'relative',
         top: 15
    },
})

export default Launch;