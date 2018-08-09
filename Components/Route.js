import React, { Component } from 'react';
import {Router,Stack,Scene} from 'react-native-router-flux';
import Login from './Login'
import Start from './Start'
import LoginPass from './LoginPass'


export default class Route extends Component{
	render(){
		return(
				 <Router>
   					 <Stack key="root" hideNavBar = {true}>
                <Scene key= "Start" component={Start} title = "Start" />
   					   <Scene key="Login" component={Login} title="Login" />
   					   <Scene key ="LoginPass" component={LoginPass} title="LoginPass" />
  				     </Stack>
  				 </Router>

			);
	}
}