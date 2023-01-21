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
import signuppic from "../assets/img/13_IsometricTeamwork.jpg"
import logo from "../assets/img/buds-high-resolution-color-logo.png";









class Signup extends Component {

 state = {Terms: false,
 over21: false,
businessAccount: false,
login: true};



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

 theLoginSubmitHandler = (e) => {
     e.preventDefault()

     this.props.loginHandler(this.state);

     this.setState({
         username: "",
         password: ""
     });
 };

componentDidCatch = (error, info) => {
    alert(error)
}

registerButtonPressed = () => {
    this.setState({
        login: !this.state.login
    })
}

    componentDidMount = () => {

    }
//





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
// <h3>
//     Sign-Up with an Email
// </h3>
// <Form warning >
//     <Form.Group stackable widths={2}>
//         <Form.Input label='Username' name='Username' placeholder='Username' onChange={this.changeHandler} />
//         <Form.Input label='Password' name='Password' placeholder='Password' type='password' onChange={this.changeHandler}/>
//     </Form.Group>
//     <Form.Input label='Email' name='Email' placeholder='Email' onChange={this.changeHandler} />
//     <Form.Input label='Birthday' type="date" name='dob' placeholder='bfurbfr' onChange={this.changeHandler} />
//     <br></br>
//     <Form.Checkbox label='I Agree To Terms And Conditions' name='Terms' onClick={this.termsCheckBoxHandle}/>
//     <Form.Checkbox label='I am Certifying that I am 21+ Years Old' name='over21'  onClick={this.over21Handle}/>
//     <Form.Checkbox label='I am an Employee or Owner of Store/Dispensary'name='businessaccount'  onClick={this.businessAccountHandle}/>
//
//     <Button type='submit'onClick={this.theSubmitHandler}>Submit</Button>
// </Form>
//
 render() {


     const { login } = this.state


   return (

       <div >
      <div class="signup-container">
<div class="container_logo-signup">

    <img class="logo-signup" src={logo}></img>
</div>
    <div class="Google-container">
<h1>
Sign in with:
</h1>
<br></br>
<GoogleLogin
clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
buttonText="Google"
cookiePolicy={'single_host_origin'}
/>


</div>
<Divider horizontal>OR</Divider>
    <form class="signup-form">

      <div class="form-outline mb-4">
          <label class="form-label" for="registerUsername">Create a Handle</label>
        <input type="text" id="registerUsername" class="form-control"  name='Username' placeholder='Handle' onChange={this.changeHandler}/>
      </div>


      <div class="form-outline mb-4">
          <label class="form-label" for="registerEmail">Email</label>
        <input type="email" id="registerEmail" class="form-control"  name='Email' placeholder='Email' onChange={this.changeHandler}/>
      </div>

      <div class="form-outline mb-4">
          <label class="form-label" for="registerPassword">Password</label>
        <input type="password" id="registerPassword" class="form-control"  name='Password' placeholder='Password' type='password' onChange={this.changeHandler} />
      </div>

      <div class="terms-of-use">
          <u>
              <a>
                  Forgot your Password?
              </a>
          </u>
      </div>

      <div class="form-check d-flex justify-content-center mb-4">
          <Form>
          <Form.Checkbox label='I am Certifying that I am 21+ Years Old' name='over21'  onClick={this.over21Handle}/>
      </Form>
      </div>

      <button type="submit" class="btn btn-primary btn-block mb-3" onClick={this.theSubmitHandler}>Create an Account</button>
    </form>
        <div class="terms-of-use">
            By signing up, I agree to Bud's <u><a>Terms of Use </a> </u> and <u> <a>Privacy Policy </a>
        </u> .
        </div>

  </div>


 <div class="footer-menu">
 <ul>
     <li><u>
         <a >
    Privacy Policy

</a>
</u>
     </li>
     <li>
         <u>
         <a>
        Terms Of Use
    </a>
</u>

     </li>
     <li>
         <u>
         <a>
         Cookie Policy
     </a>
 </u>
     </li>

 </ul>
 </div>
     </div>
   );
 }
}

export default Signup;
