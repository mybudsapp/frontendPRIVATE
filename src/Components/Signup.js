import React, {Component} from 'react'
import { useAlert } from 'react-alert'
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
  Form,
  Popup
} from 'semantic-ui-react'
import { GoogleLogin } from 'react-google-login';

class Signup extends Component {
 state = {
   username: "",
   password: "",
   dob: "",
   email:""
 };



 changeHandler = e => {
   this.setState({
     [e.target.placeholder]: e.target.value
   });
 };

 theSubmitHandler = (e) => {
     e.preventDefault()

     this.props.signupSubmitHandler(this.state);

     this.setState({
         username: "",
         password: "",
         dob: "",
         email:""
     });
 };

componentDidCatch = (error, info) => {
    alert(error)
}

 render() {


     const responseGoogleSuccess = (response) => {
         console.log(response.profileObj);

         debugger

         this.setState({
             username: response.profileObj.givenName,
             password: "",
             dob: this.state.dob,
             email: response.profileObj.email,
             googleID: response.profileObj.googleId
         });
}
const responseGoogleFailure = (response) => {
console.log("FUCK",response);
}



   return (
       <Segment basic>
           {console.log(this.props)}
             <Segment raised>
                      <h3>
                         Sign-Up with an Email
                     </h3>
                       <Form size='large'>

                           <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' onChange={this.changeHandler} />
                           <Form.Input fluid icon='mail' iconPosition='left' placeholder='Email' onChange={this.changeHandler} />
                       <Form.Input
                             onChange={this.changeHandler}
                             fluid
                             icon='lock'
                             iconPosition='left'
                             placeholder='Password'
                             type='password'
                           />
                       <Form.Input type='date' placeholder='dob' fluid onChange={this.changeHandler} min="1900-01-01" max="2000-01-01"/>

                           <Button color='teal' fluid size='large' onClick={this.theSubmitHandler}>
                             Sign Up
                           </Button>
                       </Form>
                   </Segment>

               <Divider horizontal>Or</Divider>

           <Segment raised>
               <h3>
                  Sign-Up With Google
              </h3>
                <Form size='large' >

               <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' onChange={this.changeHandler} />
                   <Popup content="Password Must be More than 6 Characters" position='left' trigger={
                           <Form.Input
                         onChange={this.changeHandler}
                         fluid
                         icon='lock'
                         iconPosition='left'
                         placeholder='Password'
                         type='password'
                       />}/>
                   <Form.Input type='date' fluid onChange={this.changeHandler} min="1900-01-01" max="2000-01-01"/>
                           <GoogleLogin
                               clientId="692197655220-r5gp6i79ejhkslft6ifshug96d5vssa0.apps.googleusercontent.com"
                               buttonText="Login"
                               onSuccess={responseGoogleSuccess}
                               onFailure={responseGoogleFailure}
                               cookiePolicy={'single_host_origin'}
                               >

          <span> Signup</span>

                           </GoogleLogin>
                       </Form>
                           </Segment>
         </Segment>

   );
 }
}

export default Signup;
