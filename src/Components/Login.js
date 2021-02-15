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
} from 'semantic-ui-react'




class Login extends Component{


state ={ username:'', password_digest:''}

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
     password_digest: ""
   });
 };

 render() {

     const responseGoogleSuccess = (response) => {
         debugger
  console.log(response);
}
const responseGoogleFailure = (response) => {
console.log("FUCK",response);
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
  placeholder="password_digest"
  value={this.state.password_digest}
  onChange={this.changeHandler}
/>
<button>Log-in</button>
</form>
<Button size='huge'>
<GoogleLogin
    clientId="692197655220-r5gp6i79ejhkslft6ifshug96d5vssa0.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogleSuccess}
    onFailure={responseGoogleFailure}
    cookiePolicy={'single_host_origin'}
    />
</Button>
</div>

   )
 }
}


export default Login
