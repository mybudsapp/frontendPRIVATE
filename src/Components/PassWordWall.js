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
  Input
} from 'semantic-ui-react'




class PassWordWall extends Component{


state ={Password:""}

 changeHandler = e => {

   this.setState({
     [e.target.placeholder]: e.target.value
   });
 };

 submitHandler = e => {
   e.preventDefault();
   this.props.passwordHandler(this.state);

   this.setState({
     password: ""
   });
 };

 render() {


const style = {
 padding: "100px",
 marginTop: "228px"
};



   return(

        <Segment.Group>
        <Segment style={style} textAlign="center">

        <span>Welcome, Please Enter Password</span>
        <br></br>
        <br></br>
        <Input
        type="Password"
        placeholder="Password"
        value={this.state.password}
        onChange={e => this.changeHandler(e)}

        />
            <br></br>
            <br></br>
            <br></br>
        <Button onClick={e => this.submitHandler(e)}>Submit</Button>

        </Segment>




        </Segment.Group>







   )
 }
}


export default PassWordWall
