import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import EntypoDesign from 'react-native-vector-icons/Entypo';
import Launch from '../screens/LaunchScreen';
import LoginScreen from '../screens/Login';
import Dashboard from '../screens/Dasboard';
import Branches from '../screens/Branches';
import RoChitDetails from '../screens/RoChits';
import Collection from '../screens/BranchDetails';
import Top10 from '../screens/Top10Reciepts';
import StateCollection from '../screens/StateWideCollection';
import OverallCollection from '../screens/OverallCollection';
import GrandTotal from '../GrandTotal';
import Icon from 'react-native-vector-icons/FontAwesome';
import refreshIcon from 'react-native-vector-icons/Foundation';
import {handleGetBranches} from '../screens/Branches';



const AppNavigator = (props) => {
    const Stack = createStackNavigator();
    const RootStack = createStackNavigator();


    const LaunchScreenStack = ({ navigation }) => {
        return (
            <Stack.Navigator initialRouteName="Launch">
                <Stack.Screen
                    name="Launch"
                    component={Launch}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        );
    };

    // const LoginScreenStack = ({ navigation }) => {
    //     return (
    //         <Stack.Navigator initialRouteName="Login">
    //             <Stack.Screen
    //                 name="Login"
    //                 component={LoginScreen}
    //                 options={{
    //                     headerShown: false,
    //                 }}
    //             />
    //         </Stack.Navigator>
    //     );
    // };

    const DasboardScreenStack = ({ navigation }) => {
        return (
            <Stack.Navigator initialRouteName="Dashboard">
                <Stack.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Branches"
                    component={Branches}
                    headerTitleAlign='center'
                    options={{
                        headerTitle: () => (
                            <Text style={{
                                textAlign: 'center',
                                fontFamily: 'CWG',
                                color: 'white',
                                fontSize: 18
                            }}>Branch Collection</Text>
                        ),
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                                <EntypoDesign name='chevron-left' size={30} color="white"
                                    style={{ marginLeft: 7 }} />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <View style={{ flexDirection:'row' }}>

                               

                            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                                <Icon name='home' size={27} 
                                    style={{ marginRight: 15, color:'white' }} />
                            </TouchableOpacity>
                               
                            </View>
                        ),
                        headerStyle:{
                            backgroundColor:'#4b7f5d'
                        }
                    }}
                />
                <Stack.Screen
                    name="Collection"
                    component={Collection}
                    options={{
                        headerTitle: () => (
                            <Text style={{
                                textAlign: 'center',
                                fontFamily: 'CWG',
                                color: 'white',
                                fontSize: 18
                            }}>Collection Report</Text>
                        ),
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Branches')}>
                                <EntypoDesign name='chevron-left' size={30} color="white"
                                    style={{ marginLeft: 7 }} />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                                 <Icon name='home' size={27} 
                                    style={{ marginRight: 15, color:'white' }} />
                            </TouchableOpacity>
                        ),
                        headerStyle:{
                            backgroundColor:'#4b7f5d'
                        }
                    }}
                />
                <Stack.Screen
                    name="RoChits"
                    component={RoChitDetails}
                    options={{
                        headerTitle: () => (
                            <Text style={{
                                textAlign: 'center',
                                fontFamily: 'CWG',
                                color: 'white',
                                fontSize: 18
                            }}>R.O Chit Details</Text>
                        ),
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Collection')}>
                                <EntypoDesign name='chevron-left' size={30} color="white"
                                    style={{ marginLeft: 7 }} />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                                 <Icon name='home' size={27} 
                                    style={{ marginRight: 15, color:'white' }} />
                            </TouchableOpacity>
                        ),
                        headerStyle:{
                            backgroundColor:'#4b7f5d'
                        }
                    }}
                />
                <Stack.Screen
                    name="Top10"
                    component={Top10}
                    options={{
                        headerTitle: () => (
                            <Text style={{
                                textAlign: 'center',
                                fontFamily: 'CWG',
                                color: 'white',
                                fontSize: 18
                            }}>Top 10 Receipt Raisers</Text>
                        ),
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                                <EntypoDesign name='chevron-left' size={30} color="white"
                                    style={{ marginLeft: 7 }} />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                                 <Icon name='home' size={27} 
                                    style={{ marginRight: 15, color:'white' }} />
                            </TouchableOpacity>
                        ),
                        headerStyle:{
                            backgroundColor:'#4b7f5d'
                        }
                    }}
                />
                <Stack.Screen
                    name="StateCollection"
                    component={StateCollection}
                    options={{
                        headerTitle: () => (
                            <Text style={{
                                textAlign: 'center',
                                fontFamily: 'CWG',
                                color: 'white',
                                fontSize: 18
                            }}>State Wide Collection</Text>
                        ),
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                                <EntypoDesign name='chevron-left' size={30} color="white"
                                    style={{ marginLeft: 7 }} />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                                 <Icon name='home' size={27} 
                                    style={{ marginRight: 15, color:'white' }} />
                            </TouchableOpacity>
                        ),
                        headerStyle:{
                            backgroundColor:'#4b7f5d'
                        }
                    }}
                />
                <Stack.Screen
                    name="OverallCollection"
                    component={OverallCollection}
                    options={{
                        headerTitle: () => (
                            <Text style={{
                                textAlign: 'center',
                                fontFamily: 'CWG',
                                color: 'white',
                                fontSize: 18
                            }}>Overall Collection</Text>
                        ),
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                                <EntypoDesign name='chevron-left' size={30} color="white"
                                    style={{ marginLeft: 7 }} />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                                 <Icon name='home' size={27} 
                                    style={{ marginRight: 15, color:'white' }} />
                            </TouchableOpacity>
                        ),
                        headerStyle:{
                            backgroundColor:'#4b7f5d'
                        }
                    }}
                />
                <Stack.Screen
                    name="GrandTotal"
                    component={GrandTotal}
                    options={{
                        headerTitle: () => (
                            <Text style={{
                                textAlign: 'center',
                                fontFamily: 'CWG',
                                color: 'white',
                                fontSize: 18
                            }}>GrandTotal</Text>
                        ),
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('OverallCollection')}>
                                <EntypoDesign name='chevron-left' size={30} color="white"
                                    style={{ marginLeft: 7 }} />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                                 <Icon name='home' size={27} 
                                    style={{ marginRight: 15, color:'white' }} />
                            </TouchableOpacity>
                        ),
                        headerStyle:{
                            backgroundColor:'#4b7f5d'
                        }
                    }}
                />
            </Stack.Navigator>
        );
    };

    const MainStackScreen = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    initialRouteName="LaunchScreenStack"
                    name="LaunchScreenStack"
                    options={{
                        headerShown: false,
                    }}
                    component={LaunchScreenStack} />
                    {/* <Stack.Screen
                    initialRouteName="LoginScreenStack"
                    name="LoginScreenStack"
                    options={{
                        headerShown: false,
                    }}
                    component={LoginScreenStack} /> */}
                <Stack.Screen
                    name="DasboardScreenStack"
                    options={{
                        headerShown: false,
                    }}
                    component={DasboardScreenStack} />
            </Stack.Navigator>
        );
    };

    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen
                    name="MainStack"
                    component={MainStackScreen}
                    options={{
                        headerShown: false,
                    }}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};



export default AppNavigator;
