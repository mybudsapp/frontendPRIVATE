import React, {Component} from "react";
import Avatar from 'react-avatar'
import StrainCard from "./StrainCard"
import {Checkbox, Card, Segment, Menu, Image, Icon, Header, Divider, Button, Form, Input, TextArea, Select, Label} from "semantic-ui-react"
import avatar from "../assets/img/avatar.png"

class EditProfile extends Component {

    state={
    }

    handleStateChange = (e) => {


        e.preventDefault()

        this.setState({
            State: e.target.innerText
        })
    }

    componentDidMount = () => {
        //('')
    }

    changeHandler = (e) => {
        e.preventDefault()

        console.log(this.state)
        //(this.state)
        e.target.files?
        this.setState({user:{
            avatar: e.target.files[0]
        }
    })
         : this.setState({ user: {
        ...this.state.user,
        [e.target.placeholder]: e.target.value
    }})

    }

    handleAvatar = (e) => {
        e.preventDefault()
        //(e.target.files)
        this.setState({
            avatar: e.target.files[0]
        })
}


    theSubmitHandler = (e) => {

        e.preventDefault()

        let token = localStorage.getItem('token')
        let user_id = this.props.user.id


        this.props.submitEditHandler(this.state, token, user_id);

        this.setState({
                username: "",
                bio: "",
                avatar: "",
                personality_type: "",
                location : ""
        });
    };


    handleChange = (e) => {

    this.setState({
        personaility_type: e.target.value
    })
}


    render(){

    const stateOptions = [
        {key: "AL", text: "Alabama", value: "Alabama"},
    {key: "AK", text: "Alaska", value: "Alaska"},
    {key: "AS", text: "Alaska", value: "American Samoa"},
    {key: "AZ", text: "Arizona", value: "Arizona"},
    {key: "AR", text: "Arkansas", value: "Arkansas"},
    {key: "CA", text: "California", value: "California"},
    {key: "C0", text: "Colorado", value: "Colorado"},
    {key: "CT", text: "Connecticut", value: "Connecticut"},
    {key: "DE", text: "Delaware", value: "Delaware"},
    {key: "DC", text: "District Of Columbia", value: "District Of Columbia"},
    {key: "FL", text: "Florida", value: "Florida"},
    {key: "GA", text: "Georgia", value: "Georgia"},
    {key: "HI", text: "Hawaii", value: "Hawaii"},
    {key: "ID", text: "Idaho", value: "Idaho"},
    {key: "IL", text: "Illinois", value: "Illinois"},
    {key: "IN", text: "Indiana", value: "Indiana"},
    {key: "IA", text: "Iowa", value: "Iowa"},
    {key: "KS", text: "Kansas", value: "Kansas"},
    {key: "KY", text: "Kentucky", value: "Kentucky"},
    {key: "LA", text: "Louisiana", value: "Louisiana"},
    {key: "ME", text: "Maine", value: "Maine"},
    {key: "MD", text: "Maryland", value: "Maryland"},
    {key: "MA", text: "Massachusetts", value: "Massachusetts"},
    {key: "MI", text: "Michigan", value: "Michigan"},
    {key: "MN", text: "Minnesota", value: "Minnesota"},
    {key: "MS", text: "Mississippi", value: "Mississippi"},
    {key: "MO", text: "Missouri", value: "Missouri"},
    {key: "MT", text: "Montana", value: "Montana"},
    {key: "NE", text: "Nebraska", value: "Nebraska"},
    {key: "NV", text: "Nevada", value: "Nevada"},
    {key: "NH", text: "New Hampshire", value: "New Hampshire"},
    {key: "NJ", text: "New Jersey", value: "New Jersey"},
    {key: "NM", text: "New Mexico", value: "New Mexico"},
    {key: "NY", text: "New York", value: "New York"},
    {key: "NC", text: "North Carolina", value: "North Carolina"},
    {key: "ND", text: "North Dakota", value: "North Dakota"},
    {key: "OH", text: "Ohio", value: "Ohio"},
    {key: "OK", text: "Oklahoma", value: "Oklahoma"},
    {key: "OR", text: "Oregon", value: "Oregon"},
    {key: "PA", text: "Pennsylvania", value: "Pennsylvania"},
    {key: "PR", text: "Puerto Rico", value: "Puerto Rico"},
    {key: "RI", text: "Rhode Island", value: "Rhode Island"},
    {key: "SC", text: "South Carolina", value: "South Carolina"},
    {key: "SD", text: "South Dakota", value: "South Dakota"},
    {key: "TN", text: "Tennessee", value: "Tennessee"},
    {key: "TX", text: "Texas", value: "Texas"},
    {key: "UT", text: "Utah", value: "Utah"},
    {key: "VT", text: "Vermont", value: "Vermont"},
    {key: "VI", text: "Virgin Islands", value: "Virgin Islands"},
    {key: "VA", text: "Virginia", value: "Virginia"},
    {key: "WA", text: "Washington", value: "Washington"},
    {key: "WV", text: "West Virginia", value: "West Virginia"},
    {key: "WI", text: "Wisconsin", value: "Wisconsin"},
    {key: "WY", text: "Wyoming", value: "Wyoming"},
    ]

        //("in edit profile" , this.state)
        return(

            <div>
                <Segment.Group>
                    <Segment>

                        {this.props.user.avatar? <Avatar round={true} src={this.props.user.avatar.url} name={this.props.username} /> : <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} name={this.props.username} />}
                    </Segment>
                    <Segment.Group horizontal>
                    <Segment>
                 <span>{this.props.user.username}</span>
             </Segment>
                <Segment>
                 <span>{this.props.user.state? this.props.user.state : "No State Chosen"}</span>
             </Segment>
    </Segment.Group>

            <Segment textAlign="left">
                    <Form >
        <Form.Group widths={2}>
            <Form.Input fluid label='Avatar' encType="multipart/form-data" placeholder='avatar' type='file'  onChange={(e) => this.handleAvatar(e)}/>
          <Form.Input label='Username' name='username' placeholder='username' onChange={this.changeHandler} />
  </Form.Group>
  <Form.Input label='Bio' name='bio' placeholder='bio' onChange={this.changeHandler} />
      <div>
      <input type="checkbox" placeholder='friends_only' value="true" onChange={this.changeHandler}></input>
      <label for="friends_only">Friends Only</label>
 </div>
 <br></br>
  <Form.Button onClick={(e) => this.theSubmitHandler(e)}>Submit</Form.Button>



<h3>Password</h3>
<br></br>
<Form.Group widths={2}>


      <Form.Input label='Old Password' name='Password' placeholder='Old Password' onChange={this.changeHandler} />



          <Form.Input label='New Password' name='New Password' placeholder='New Password' onChange={this.changeHandler} />


    </Form.Group>
          <Form.Button onClick={(e) => this.theSubmitHandler(e)}>Submit</Form.Button>

      <h3>Location</h3>
      <br></br>
          <Form.Group widths={2}>
              <Form.Input label='City' name='City' placeholder='City' onChange={this.changeHandler} />


                <Form.Field
                control={Select}
                label='State'
                options={stateOptions}
                placeholder='State'
                onChange={this.handleStateChange}
              />
            </Form.Group>
            <Form.Button onClick={(e) => this.theSubmitHandler(e)}>Submit</Form.Button>
  </Form>
            </Segment>
            </Segment.Group>

      </div>
        )
    }


}


export default EditProfile;
