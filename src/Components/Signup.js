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
import logo from "../assets/img/mybudslogo.png";









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
       <div style={{"margin-top": "100px"}}>



               <Segment>
                  { login?
                      <div>
                      <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
      aria-controls="pills-login" aria-selected="true">Login</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
      aria-controls="pills-register" aria-selected="false" onClick={this.registerButtonPressed}>Register</a>
  </li>
</ul>
<div class="tab-content">
  <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
      <img src={logo} style={{width: 618}}></img>
    <form>

      <div class="form-outline mb-4">
          <label class="form-label" for="Username">Email or username</label>
        <input type="email" id="loginName" class="form-control" name="Username" placeholder='Username' onChange={this.changeHandler} />
      </div>


      <div class="form-outline mb-4">
        <input type="password" id="loginPassword" class="form-control"  name='Password' placeholder='Password' type='password' onChange={this.changeHandler} />
        <label class="form-label" for="loginPassword">Password</label>
      </div>


      <div class="row mb-4">
        <div class="col-md-6 d-flex justify-content-center">

          <div class="form-check mb-3 mb-md-0">
            <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
            <label class="form-check-label" for="loginCheck"> Remember me </label>
          </div>
        </div>

        <div class="col-md-6 d-flex justify-content-center">

          <a href="#!">Forgot password?</a>
        </div>
      </div>


      <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>
      </form>
      </div>
      </div>
      </div>
      :
      <div>
          <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
<li class="nav-item" role="presentation">
<a class="nav-link" id="tab-login" data-mdb-toggle="pill"  role="tab"
aria-controls="pills-login" aria-selected="false" onClick={this.registerButtonPressed}>Login</a>
</li>
<li class="nav-item" role="presentation">
<a class="nav-link active" id="tab-register" data-mdb-toggle="pill"  role="tab"
aria-controls="pills-register" aria-selected="true" onClick={this.registerButtonPressed}>Register</a>
</li>
</ul>
    <form>

      <div class="form-outline mb-4">
        <input type="text" id="registerUsername" class="form-control"  name='Username' placeholder='Username' onChange={this.changeHandler}/>
        <label class="form-label" for="registerUsername">Username</label>
      </div>


      <div class="form-outline mb-4">
        <input type="email" id="registerEmail" class="form-control"  name='Email' placeholder='Email' onChange={this.changeHandler}/>
        <label class="form-label" for="registerEmail">Email</label>
      </div>

      <div class="form-outline mb-4">
        <input type="password" id="registerPassword" class="form-control"  name='Password' placeholder='Password' type='password' onChange={this.changeHandler} />
        <label class="form-label" for="registerPassword">Password</label>
      </div>


      <div class="form-outline mb-4">
        <input type="password" id="registerRepeatPassword" class="form-control"  name='confirmed password' placeholder='Password' type='password' onChange={this.changeHandler} />
        <label class="form-label" for="registerRepeatPassword">Repeat password</label>
      </div>


      <div class="form-check d-flex justify-content-center mb-4">
          <Form>
          <Form.Checkbox label='I Agree To Terms And Conditions' name='Terms' onClick={this.termsCheckBoxHandle}/>
          <Form.Checkbox label='I am Certifying that I am 21+ Years Old' name='over21'  onClick={this.over21Handle}/>
          <Form.Checkbox label='I am an Employee or Owner of Store/Dispensary'name='businessaccount'  onClick={this.businessAccountHandle}/>
      </Form>
      </div>

      <button type="submit" class="btn btn-primary btn-block mb-3" onClick={this.theSubmitHandler}>Sign up</button>
    </form>

  </div>
}

  </Segment>



     </div>
   );
 }
}

export default Signup;
