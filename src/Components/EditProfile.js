import React, {Component} from "react";
import Avatar from 'react-avatar'
import StrainCard from "./StrainCard"
import {Card, Segment, Menu, Image, Icon, Header, Divider, Button, Form, Input, TextArea, Select, Label} from "semantic-ui-react"
import avatar from "../assets/img/avatar.png"

class EditProfile extends Component {

    state={
        user: {
            username: null,
            bio: null,
            personality_type : null,
            location : null
        }
    }

    componentDidMount = () => {
        //('')
    }

    changeHandler = (e) => {
        e.preventDefault()
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


        this.props.submitHandler(this.state, token, user_id);

        this.setState({
            user :{
                username: "",
                bio: "",
                avatar: "",
                personality_type: "",
                location : ""
            }
        });
    };


    handleChange = (e) => {

    this.setState({
        personaility_type: e.target.value
    })
}


    render(){
        const genderOptions = [
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' },
      { key: 'o', text: 'Other', value: 'other' },
    ]

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
    {key: "PA", text: "Rhode Island", value: "Rhode Island"},
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

            <React.Fragment>
            <Card fluid>
              <Card.Content textAlign="left">
                  <Avatar size={67} round={true} src={avatar}></Avatar>
                 <h1>USERNAME</h1>
                 <h2>LOCATION</h2>
                 <h3>BIO</h3>
              </Card.Content>
            </Card>
            <Segment>

                <h1>Edit Profile</h1>
                    <Form>
        <Form.Group widths='equal'>
            <Form.Input fluid label='Avatar' encType="multipart/form-data" placeholder='avatar' type='file' value={this.state.user.avatar} onChange={(e) => this.handleAvatar(e)}/>
          <Form.Field
            id='form-input-control-first-name'
            control={Input}
            label='Username'
            placeholder='Username'
          />
          <Form.Field
            control={Select}
            options={genderOptions}
            label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
            placeholder='Gender'
            search
            searchInput={{ id: 'form-select-control-gender' }}
          />
        </Form.Group>
        <Form.Field
    id='form-textarea-control-opinion'
    control={TextArea}
    label='Bio'
    placeholder='Bio'
  />
  <Form.Button onClick={(e) => this.theSubmitHandler(e)}>Submit</Form.Button>
        <Divider section />
        <h2>Edit Email</h2>
<Form.Field>
        <label>Email</label>
      <input placeholder="email"/>
    </Form.Field>
      <Form.Button onClick={(e) => this.theSubmitHandler(e)}>Submit</Form.Button>
    <Divider section />
    <h3>Edit Password</h3>
    <Form.Field>
        <label>Old Password</label>
      <input placeholder="password"/>

      <label>New Password</label>
        <input placeholder="new password"/>
        </Form.Field>
          <Form.Button onClick={(e) => this.theSubmitHandler(e)}>Submit</Form.Button>
      <Divider section />
      <h3>Edit Location</h3>
          <Form.Field>
              <label>Current Location</label>
                  <label>New City</label>
                    <input placeholder="City"/>
                    <label>New State</label>
                        <Form.Field
                          control={Select}
                          options={stateOptions}
                          label={{ children: 'State', htmlFor: 'form-select-control-state' }}
                          placeholder='State'
                          search
                          searchInput={{ id: 'form-select-control-gender' }}
                        />
              </Form.Field>
                <Form.Button onClick={(e) => this.theSubmitHandler(e)}>Submit</Form.Button>

  </Form>
            </Segment>
            <br></br>
            <br></br>
            <br></br>
      </React.Fragment>
        )
    }


}


export default EditProfile;
