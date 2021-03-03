import React from 'react';
import Nav from './navbar';  
import Login from './login'

//this js making the whole page and will be linked on the app.js page to make the login page. 
export default class HomePage extends React.Component {
    render(){
        return(
            <div>
                <Nav/>
                <Login/>
            </div>
        ); 
    }

}