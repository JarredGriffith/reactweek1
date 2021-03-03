import React from 'react';


export default class Nav extends React.Component {
    render(){
        return(
            //makes the nav bar links.
            <div >
                <ul className="nav-bar">
                    <li><a className="active" href="null">Home</a></li>
                    <li><a className="Contact" href="null">Contact</a></li>
                    <li><a className="About-Us" href="null">About Us</a></li>                    
                </ul>
            </div>
        ); 
    }
}