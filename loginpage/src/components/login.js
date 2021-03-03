import React from 'react';

//when the user logins in a alert will show that they are loged in. 
function loginComplete() {
    alert("you have loged in now")}
    

export default class Login extends React.Component {
    render(){
        //making the login box with a for that the user logins with.
        return (
            <div className="login-box">
                <div>
                    <div className="login-info">
                        <form>
                            <h3>Log In</h3>
                            <input className="Username input" type="text" placeholder="Username"></input> <br></br> <br></br>
                            <input className="Password input" type="text" placeholder="Password"></input> <br></br>
                            <br></br>
                            <button className="login-button" onClick={loginComplete}>Login</button> 
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}