import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop:'10%',
        backgroundColor:'white'
    },
    cardItem: {
        margin:'3%',
        width: '92%',
        height: 500,
        marginTop:15
    },
    Image:{
        height:'50%'
    },
    cardInnerCard: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: 'black'
    },
   
    cardTitle:{
        color:'lime',
        width:'90%',
        margin:10,
        fontWeight:'bold',
        fontSize:15
    },
    cardSubTitle:{
        color:'gold',
        width:'50%',
        margin:5,
        fontSize:15
    }
})