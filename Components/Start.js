import React, { Component } from 'react';
import {View, 
	Text, 
	StyleSheet,
	KeyboardAvoidingView,
	TouchableOpacity,
	Image} 
from 'react-native';
import Login from './Login';
import {Actions} from 'react-native-router-flux';
import LoginPass from './LoginPass';
export default class Start extends Component{

		LoginPass(){
			Actions.LoginPass();
		}
			
		Login(){
			Actions.Login();
		}
		render(){
		return(
			<KeyboardAvoidingView behaviour="padding" style={styles.background}>
			<View style = {styles.background}> 
				<View style = {styles.logoContainer}>
				<Text style= {styles.titleex}>Welcome</Text>
					<Image
					style = {styles.logo} 
					source={require('./Octocat.png')} />
					 <Text style= {styles.title}>Press the button!</Text>
					 <View style = {styles.logoContainer2}>
					 </View>
					 <TouchableOpacity onPress = {this.Login} 
					 				   style = {styles.buttonContainer}>
					 <Text style= {styles.buttontext}>OCR MY KTP</Text>
					 </TouchableOpacity>
					 <Text style={styles.title}>Or</Text>
					 <TouchableOpacity onPress = {this.LoginPass} style = {styles.buttonContainer}>
					 <Text style= {styles.buttontext}>OCR MY PASSPORT</Text>
					 </TouchableOpacity>

				</View>
			</View>
			</KeyboardAvoidingView>
			);
	}

}

const styles = StyleSheet.create( {
		signupContainer: {
			flexDirection: 'row',
			justifyContent: 'center',
			marginBottom : 20,
			alignItems : 'flex-end'
		},
		signupText: {
			fontSize: 15,
			color : 'white'

		},
		signUptext: {
			color : 'white',
			fontWeight: '700',
			fontSize : 17,
		},

		background: { flex: 1,
						backgroundColor : '#3498db'
						},

		logoContainer:{
			alignItems: 'center',
			flexGrow: 1,
			justifyContent: 'center',
		},

		logo: {
			width: 200,
			height: 200
		},
		logoex: {
			width: 200,
			height: 100
		},
		image: {
			width: 250,
			marginTop: 50,
			height: 100
		},

		title: {
			color: 'white',
			marginTop: 10,
			width: 190,
			opacity: 0.9,
			fontSize: 15,
			textAlign: 'center'
		},
		titleex: {
			color: 'white',
			marginTop: 10,
			width: 190,
			marginBottom: 20,
			fontSize: 40,
			textAlign: 'center'
		},
		example: {
			color: 'white',
			marginTop: 10,
			width: 190,
			opacity: 0.9,
			fontSize: 15,
			textAlign: 'center'
		},


		submittext: {
			color : 'white',
			fontWeight: '700',
			fontSize : 17,
			textAlign : 'center',
			justifyContent : 'center'
		},

		buttontext: {
			color : 'white',
			fontWeight: '700',
			fontSize : 17,
			letterSpacing : 1.5,
			textAlign : 'center',
			margin : 5

		},

		buttonContainer: {
			backgroundColor : '#2980b9',
			paddingVertical : 17,
			marginTop : 7
			
		}

		});	
