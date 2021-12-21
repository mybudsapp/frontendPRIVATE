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
  Popup,
  Message
} from 'semantic-ui-react'

import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';








class Signup extends Component {
 state = {Terms: false,
 over21: false,
businessAccount: false};



 changeHandler = e => {

     console.log(e.target.name, this.state)
     this.setState({
         [e.target.name]: e.target.value
     })

 };

 termsCheckBoxHandle = e => {

     this.setState({
         Terms: !this.state.Terms
     })
 }

 over21Handle = e => {

     this.setState({
         over21: !this.state.over21
     })
 }

 businessAccountHandle = e => {

     this.setState({
         businessAccount: !this.state.businessAccount
     })
 }
 dateChangeHandler = e => {

     this.setState({
         ...this.state,
         [e.target.name]: e.target.value
     })
 }
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

    componentDidMount = () => {

    }
//
// <FacebookLogin
//     appId="576054099462971"
//     fields="name,email,picture"
//     callback={responseFacebook}
//     size="small"
//     icon="fa-facebook"></FacebookLogin>
//
// <GoogleLogin
//     clientId="692197655220-r5gp6i79ejhkslft6ifshug96d5vssa0.apps.googleusercontent.com"
//     buttonText="Login"
//     onSuccess={responseGoogleSuccess}
//     onFailure={responseGoogleFailure}
//     cookiePolicy={'single_host_origin'}
//     >
// </GoogleLogin>

//const responseGoogleFailure = (response) => {
    //("FUCK",response);
//}
//
//      const responseFacebook = (response) => {
//          console.log(response);
//      }
//
//      const responseGoogleSuccess = (response) => {
//          //(response.profileObj);
//
//          debugger
//
//          this.setState({
//              username: response.profileObj.givenName,
//              password: "",
//              dob: this.state.dob,
//              email: response.profileObj.email,
//              googleID: response.profileObj.googleId
//          });
// }
//
//
 render() {





   return (
       <div style={{"margin-top": "100px"}}>



                      <h3>
                         Sign-Up with an Email
                     </h3>
                     <Form warning >
        <Form.Group stackable widths={2}>
          <Form.Input label='Username' name='Username' placeholder='Username' onChange={this.changeHandler} />
          <Form.Input label='Password' name='Password' placeholder='Password' type='password' onChange={this.changeHandler}/>
        </Form.Group>
                <Form.Input label='Email' name='Email' placeholder='Email' onChange={this.changeHandler} />
                <Form.Input label='Birthday' type="date" name='dob' placeholder='bfurbfr' onChange={this.changeHandler} />
            <br></br>
                    <Form.Checkbox label='I Agree To Terms And Conditions' name='Terms' onClick={this.termsCheckBoxHandle}/>
        <Form.Checkbox label='I am Certifying that I am 21+ Years Old' name='over21'  onClick={this.over21Handle}/>
        <Form.Checkbox label='I am an Employee or Owner of Store/Dispensary'name='businessaccount'  onClick={this.businessAccountHandle}/>

            <Message
         warning
         list={['You Will Not Be Able To Change This Later!',
           'You Would Have To Wait For The Update 😅'
         ]}
       />
   <Button type='submit'onClick={this.theSubmitHandler}>Submit</Button>
      </Form>


     </div>
   );
 }
}

export default Signup;
