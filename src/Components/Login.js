import React, {Component} from 'react'




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
   return(
       <div></div>
   )
 }
}


export default Login
