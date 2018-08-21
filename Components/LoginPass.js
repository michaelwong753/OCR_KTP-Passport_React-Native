import React, { Component } from 'react';
import {View, 
	Text, 
	StyleSheet,
	KeyboardAvoidingView,
	TouchableOpacity,
	Image} 
from 'react-native';
import Start from './Start';
import {Actions} from 'react-native-router-flux';
var path;
export default class LoginPass extends Component{
constructor(props) {
	super(props)
	this.state = {Jenis:'',
				  Kode_Negara: '',
				  Nama_Lengkap: '',
				  No_Paspor: '',
				  Tgl_Lahir: '',
				  Jenis_Kelamin: '',
				  Tgl_Pengeluaran:'',
					Tgl_Habis_Berlaku:'',
					valid: ''}
}

	Start(){
			Actions.Start();
		}
	render(){
		var ImagePicker = require('react-native-image-picker');

// More info on all the options is below in the README...just some common use cases shown here
var options = {
  title: 'Select Photo',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

/**
 * The first arg is the options object for customization (it can also be null or omitted for default options),
 * The second arg is the callback which sends object: response (more info below in README)
 */
ImagePicker.showImagePicker(options, (response) => {
  console.log('Response = ', response);
  path = response.path
  if (response.didCancel) {
    console.log('User cancelled image picker');
  }
  else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  }
  else if (response.customButton) {
    console.log('User tapped custom button: ', response.customButton);
  }
  else {
		 console.log('User selected a file form camera or gallery', response); 
		 const data = new FormData();
		 data.append('name', 'avatar');
		 data.append('fileData', {
		  uri : response.uri,
		  type: response.type,
		  name: response.fileName
		 });
		 const config = {
		  method: 'POST',
		  headers: {
		   'Accept': 'application/json',
		   'Content-Type': 'multipart/form-data',
		   'name': 'Passport'
		  },
		  body: data,
		 };
		fetch("http://206.189.159.245:3000/" + "upload", config)
		 .then((checkStatusAndGetJSONResponse)=>{    
		   return checkStatusAndGetJSONResponse.json()
		}).then((json) => {
			console.log(json)
			  if(  json.data <= 80 || json.data > 100 ){
            this.setState({valid:'IMAGE INVALID, PLEASE CHECK YOUR IMAGE QUALITY AND MAKE SURE IT IS A PASSPORT'}) 
          }
          else{
          	  this.setState({Jenis:json.Jenis,
		  				Kode_Negara:json.Kode_Negara,
		  				Nama_Lengkap:json.Nama_Lengkap,
		  				No_Paspor:json.No_Paspor,
		  				Tgl_Lahir:json.Tgl_Lahir,
		  				Jenis_Kelamin:json.Jenis_Kelamin,
		  				Tgl_Pengeluaran:json.Tgl_Pengeluaran,
		  				Tgl_Habis_Berlaku:json.Tgl_Habis_Berlaku,})

          }
		 }).catch((err)=>{console.log(err)});

		}
});




		return(
			<KeyboardAvoidingView behaviour="padding" style={styles.background}>
			<View style = {styles.background}> 
				<View style = {styles.logoContainer}>
					 <Text style= {styles.title}>This is your text :</Text>
					 <Text style = {styles.titleex}>Jenis: {this.state.Jenis}</Text>
					 <Text style = {styles.titleex}>Kode Negara: {this.state.Kode_Negara}</Text>
					 <Text style = {styles.titleex}>Nama Lengkap: {this.state.Nama_Lengkap}</Text>
					 <Text style = {styles.titleex}>No Paspor: {this.state.No_Paspor}</Text>
					 <Text style = {styles.titleex}>Tanggal Lahir: {this.state.Tgl_Lahir}</Text>
					 <Text style = {styles.titleex}>Jenis Kelamin: {this.state.Jenis_Kelamin}</Text>
					 <Text style = {styles.titleex}>Tanggal Pengeluaran: {this.state.Tgl_Pengeluaran}</Text>
					 <Text style = {styles.titleex}>Tanggal Habis Berlaku: {this.state.Tgl_Habis_Berlaku}</Text>
					  <Text style = {styles.titleexx}> {this.state.valid}</Text>
					 <Text style= {styles.title}>This is your picture :</Text>
					 <Image style = {styles.logoex} source={{uri: "file://" + path}} />                                                                 
					<Text style={styles.title}>OCR Again? </Text>
					<TouchableOpacity onPress = {this.Start} style = {styles.buttonContainer}>
					 <Text style= {styles.titlebold}>Press Here</Text>
					 </TouchableOpacity>
				</View>

				<View style = {styles.formContainer}>
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
			titleex: {
			color: 'white',
			marginTop: 2,
			width: 300,
			fontSize: 15,
			textAlign: 'center'
		},
		titleexx: {
			color: 'red',
			marginTop: 2,
			width: 300,
			fontSize: 15,
			textAlign: 'center'
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
				buttonContainer: {
			backgroundColor : '#2980b9',
			paddingVertical : 5,
			marginTop : 7
			
		},

		title: {
			color: 'white',
			marginTop: 10,
			width: 190,
			opacity: 0.9,
			fontSize: 15,
			textAlign: 'center'
		},
		titlebold: {
			color: 'white',
			marginTop: 10,
			width: 190,
			opacity: 0.9,
			fontSize: 18,
			fontWeight: 'bold',
			textAlign: 'center'
		},
		titleex: {
			color: 'white',
			marginTop: 10,
			width: 300,
			fontSize: 15,
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


		formContainer: { 
		}

		});	
