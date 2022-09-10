import{ StyleSheet} from 'react-native';

const styles=StyleSheet.create({
    Container:{
       
        justifyContent:'center',
        alignItems:'center'
    },
    mclogostyle:{
         
        marginBottom:20
    },
    inputstyle:{
        borderBottomWidth:1,
        borderTopColor: 'gray',
        margin:10,
        padding:10,
        width:'70%', 
    },
    loginbtnstyles:{
        backgroundColor:'green',
        padding:10,
        marginTop:20,
        textAlign:'center',
        borderRadius:50,
        color:'white',
        fontSize:15,
        fontWeight:'bold' ,
    },
    touchablestyle:{
        width:'50%'
    },
    admintext:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        backgroundColor:'green',
        width:'50%',
        textAlign:'center',
        padding:5,
        borderRadius:5
    }
});

export default styles;