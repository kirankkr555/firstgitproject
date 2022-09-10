import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import axios from 'axios';


const LoginScreen = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
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
            console.log(response.data.versionList, 'response');
            setVersion(response.data.versionList[0])

        } catch (error) {
            // handle error
            console.log(error);
        }
    };

    const handleGetLogin = async () => {
        if (username =="Administrator" && password == "FD@Server123"){
            let values = {
                url: `http://172.10.28.66:8080/FSUMROAPP/fsapp/login/${username}/${password}`,
                method: 'get',
                data:{
                    username:username,
                    password:password
                }
            };
            console.log(values,'values')
            try {
                const response = await axios(values)
                console.log(response, 'response');
                setUsername('');
                setPassword('');
                props.navigation.navigate('DasboardScreenStack', { screen: 'Dashboard' })
    
            } catch (error) {
                // handle error
                console.log(error);
            }
        } if (username =="BR-MZ" && password == "br@2181326"){
            let values = {
                url: `http://172.10.28.66:8080/FSUMROAPP/fsapp/login/${username}/${password}`,
                method: 'get',
                data:{
                    username:username,
                    password:password
                }
            };
            console.log(values,'values')
            try {
                const response = await axios(values)
                console.log(response, 'response');
                setUsername('');
                setPassword('');
                props.navigation.navigate('Branches')
            } catch (error) {
                // handle error
                console.log(error);
            }
        } if (username =="BR-KZ" && password == "br@2181126"){
            let values = {
                url: `http://172.10.28.66:8080/FSUMROAPP/fsapp/login/${username}/${password}`,
                method: 'get',
                data:{
                    username:username,
                    password:password
                }
            };
            console.log(values,'values')
            try {
                const response = await axios(values)
                console.log(response, 'response');
                setUsername('');
                setPassword('');
                props.navigation.navigate('Branches')
    
            } catch (error) {
                // handle error
                console.log(error);
            }
        }
       
    };

       
            // if(username == "BR-MZ" && password == "br@2181326"  )
            // {
            //     `https://rolive.margadarsi.com/FSUMROAPP/fsapp/branchList/TN`
            // }
            
        //     const handleGetLogin = () => {
        //         if (username =="Administrator" || password == "FD@Server123" ){
        //             props.navigation.navigate('DasboardScreenStack', { screen: 'Dashboard' })
        //                 } else{
        //         alert('username/password incorrect')
        //     }
        // }

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/images/greenbg.jpg')}
                style={{
                    width: '100%', height: '100%', position: 'absolute'
                }} />
            <Image source={require('../../../assets/images/mlogo.png')} style={styles.mlogoStyle} />

            <Text style={styles.title}>field staff collection {'\n'} report</Text>
            {/* <Text  style={styles.fieldStaff}>FIELD STAFF COLLECTION REPORT</Text> */}
            <View style={styles.combined}>
                <Icon name='person' size={20} color='white' style={styles.iconStyle} />
                <TextInput
                    style={styles.inputText}
                    placeholder='Username'
                    placeholderTextColor='#c4b9b9'
                    value={username}
                    onChangeText={(username) => setUsername(username)}
                />
            </View>
            <View style={styles.combined}>
                <Icon name='key' size={20} color='white' style={styles.iconStyle} />
                <TextInput
                    style={styles.inputText}
                    placeholder='Password'
                    placeholderTextColor='#c4b9b9'
                    value={password}
                    onChangeText={(Password) => setPassword(Password)}
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity onPress={handleGetLogin} >
                <Text style={styles.loginButton} >LOGIN</Text>
            </TouchableOpacity>

            <Text style={styles.version}>Version {version.version}</Text>

        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mlogoStyle: {
        width: 90,
        height: 90,
        resizeMode: 'contain'
    },
    inputText: {

        width: '80%',
        // margin:10,
        padding: 10
    },
    loginButton: {
        backgroundColor: '#e03226',
        color: 'white',
        borderRadius: 10,
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'bold',
        width: 200
    },
    fieldStaff: {
        color: 'green',
        fontSize: 25,
        marginHorizontal: 20,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 10,
        borderRadius: 15,
        marginTop: 10
    },
    combined: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        paddingLeft: 7,
        margin: 10,
        width: '75%'

    },
    iconStyle: {
        borderRightWidth: 1,
        borderRightColor: '#8c8c8c',
        paddingRight: 7
    },
    version: {
        color: 'white',
        fontSize: 13,
        fontStyle: 'italic',
        opacity: 0.5,
        position: 'relative',
        top: 140
    },
    title: {
        color: '#e03226',
        fontFamily: 'Bastaman',
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 10
    }


})

export default LoginScreen;