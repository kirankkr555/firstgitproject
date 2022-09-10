import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { Images } from '../../Data/data'
import Modal from "react-native-modal";

import axios from 'axios';

const numColumns = 2;

const Dashboard = (props) => {

   const [isModalVisible, setModalVisible] = useState(false);

   const [states, setStates] = useState([]);

    useEffect(() => {
        handleGetStates()
    }, []);

    const handleGetStates = async () => {
        let values = {
            url: `https://dev1.margadarsi.com/FSUMROAPP/fsapp/states`,
            method: 'get'
        }
        try {
            const response = await axios(values)
            setStates(response.data)
            console.log(response.data, 'response');
        } catch (error) {
            // handle error
            console.log(error);
        }
    };


    const handleNavigateBranches = (stateCode) => {
        if (stateCode === "TS") {
            setModalVisible(!isModalVisible);
        }
        else {
            props.navigation.navigate('Branches', { stateCode: stateCode });
        }
    }

    const handleNavigateTop10 = () => {
        props.navigation.navigate('Top10');
    }

    const handleNavigateStateCollection = () => {
        props.navigation.navigate('StateCollection');
    }

    const handleNavigateOverall = () => {
        props.navigation.navigate('OverallCollection');
    }

    const handleButton1 = (stateCode) => {
        console.log(stateCode, 'stateCode');
        setModalVisible(false);
        props.navigation.navigate('Branches', { stateCode: stateCode });
    }

    const handleButton2 = (stateCode) => {
        setModalVisible(false);
        props.navigation.navigate('Branches', { stateCode: stateCode });
    }
    const handleButton3 = (stateCode) => {
        setModalVisible(false);
        props.navigation.navigate('Branches', { stateCode: stateCode });
    }

    const hanldeBackPress = () => {
        setModalVisible(false);
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.opacitystyle}
                onPress={() => handleNavigateBranches(item.stateCode)}
            >
                <View style={styles.flatlist} >
                    <Image source={{ uri: `${item.image}` }} style={{ width:58, height:58, resizeMode:'contain' }} />
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/images/greenbg.jpg')}
                style={{
                    width: '100%', height: '100%', position: 'absolute'
                }} />
            <Image source={require('../../../assets/images/margadarsi_logo.png')}
                style={{
                    alignSelf: 'center',
                    marginBottom: 20, marginTop: 30
                }} />

            <FlatList
                numColumns={numColumns}
                data={states}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <View style={styles.bottomtextstyle}>
                <TouchableOpacity onPress={handleNavigateTop10}>
                    <Text style={styles.text}>Top 10 Receipt Raisers</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleNavigateStateCollection}>
                    <Text style={styles.text}>Statewide Collection</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleNavigateOverall}>
                    <Text style={styles.text}>Company Collection</Text>
                </TouchableOpacity>
            </View>


            <View>
                <Modal isVisible={isModalVisible}
                    onBackdropPress={hanldeBackPress}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: 300, height: 300, backgroundColor: 'white', borderRadius: 15 }}>
                            <TouchableOpacity onPress={() => handleButton1("TSC")} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#ff333d', borderColor: '#ff333d', fontSize: 20, fontWeight: 'bold', borderWidth: 1, padding: 10, borderRadius: 10, width: '60%', textAlign: 'center' }}>TS City</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleButton2("TSM")} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#ff333d', borderColor: '#ff333d', borderWidth: 1, fontSize: 20, fontWeight: 'bold', padding: 10, borderRadius: 10, width: '60%', textAlign: 'center' }}>TS Mufsil</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleButton3("TS")} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#ff333d', borderColor: '#ff333d', borderWidth: 1, fontSize: 20, fontWeight: 'bold', padding: 10, borderRadius: 10, width: '60%', textAlign: 'center' }}>TS Total </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#F4D03F',
    },
    // item: {
    //     // backgroundColor: '#f9c2ff',
    //     // padding: 20,
    //     marginVertical: 8,
    //     marginHorizontal: 16,
    // },
    title: {
        fontSize: 14,
        margin: 10,
        alignContent: 'center',
        color: '#ff333d',
        fontFamily: 'Montserrat-Bold',
    },
    flatlist: {
        padding: 10,
        margin: 20,
        justifyContent: 'space-evenly',
        borderRadius: 15,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    opacitystyle: {
        width: '50%'
    },
    text: {
        color: 'white',
        fontFamily: 'CWG',
        fontSize: 20,
        margin: 20,
        borderWidth: 1.5,
        padding: 10,
        borderColor: 'white',
        textAlign: 'center',
        borderRadius: 20,
    },
    bottomtextstyle: {
        marginTop: 0,
        marginBottom: 30
    }
});

export default Dashboard;