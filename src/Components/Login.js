import React, {Component} from 'react'
import { GoogleLogin } from 'react-google-login';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Form
} from 'semantic-ui-react'




class Login extends Component{


state ={ username:'', password:''}

 changeHandler = e => {
   this.setState({
     [e.target.placeholder]: e.target.value
   });
 };

 submitHandler = e => {
   e.preventDefault();
   this.props.loginHandler(this.state);
   this.setState({
     username: "",
     password: ""
   });
 };

 render() {

     const responseGoogleSuccess = (response) => {
         debugger
  //(response);
}
const responseGoogleFailure = (response) => {
//("FUCK",response);
}





   return(
       <div class="ui form">
<form onSubmit={this.submitHandler}>
  <label>Username</label>
<input
  type="text"
  placeholder="username"
  value={this.state.username}
  onChange={this.changeHandler}
/>
  <label>Password</label>
<input
  type="password"
  placeholder="password"
  value={this.state.password}
  onChange={this.changeHandler}
/>
<br></br>
<br></br>
<Button>Log-in</Button>
<br></br>

</form>
<ul>
<li>
    <a to="/home">Forgot Password?</a>

</li>

<li>
</li>
<br></br>
<Button size='huge'>


</Button>


</ul>


</div>

)
 }
}


//<GoogleLogin
//    clientId="692197655220-r5gp6i79ejhkslft6ifshug96d5vssa0.apps.googleusercontent.com"
    //buttonText="Login"
    //onSuccess={responseGoogleSuccess}
    //onFailure={responseGoogleFailure}
    //cookiePolicy={'single_host_origin'}
//    />

export default Login
