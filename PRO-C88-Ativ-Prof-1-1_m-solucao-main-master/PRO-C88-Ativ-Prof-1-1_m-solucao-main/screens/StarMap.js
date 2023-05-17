import React, {Component} from "react";
import {Text, TextInput, View, StyleSheet} from "react-native";
import {WebView} from 'react-native-webview';

export default class StarMapScreen extends Component{
    constructor(){
        super()
        this.state={
            longitude: ' ',
            latitude: ' '
        }
    }
    render(){
        const{longitude, latitude} = this.state;
        const path= `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`
        return(
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>Mapa das estrelas</Text>
                <WebView
                scalesPageToFit={true}
                source={{uri: path}}
                style={{marginTop: 20,
                        marginBottom: 20,}}/>

                        <TextInput
                        style={styles.inputStyle}
                        placeholder="Digite sua latitude"
                        placeholderTextColor={white}
                        onChangeText={(text)=>{
                            this.setState({
                                latitude: text
                            })
                        }}/>
            </View>
        )
    }
}
    const styles = StyleSheet.create({
        inputStyle:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        textAlign: 'center',
        color: 'white',
        width: 200
        }
    })