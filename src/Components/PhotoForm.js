import React, {Component} from 'react'
import {Card,Form, Label, Button,} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import {useAlert} from 'react-alert'
import MobileNavBar from "../Components/MobileNavBar"

class PhotoForm extends Component {

state = {
}


changeHandler = (e) => {


    console.log(this.state)
    this.setState({
        [e.target.name]: e.target.value
    })
    //('fromchangehandler', this.state)
}


handleImage = (e) => {
    e.preventDefault();


    this.setState({
        image: e.target.files[0]
    })

    //("the handle image has been hit", this.state)

}

theSubmitPhotoHandler = (e) => {

    e.preventDefault()

    let token = localStorage.getItem('token')

    console.log(this.state)
    //("the state once submit handler is hit", this.state)
    this.props.submitPostHandler(this.state, token);
    this.setState({
            image:'',
            caption:''
        }
    )
};




render() {

    return(

            <Form size="large">
        <div encType="multipart/form-data">



             <label>Photo</label>
               <input
                 encType="multipart/form-data"
                 type='file'
                 name='image'
                 onChange={(e) => this.handleImage(e)}
               />
           <label>Caption/Description</label>
               <input
                 type="text"
                 placeholder="what's this post about?"
                 name="caption"
                 onChange={this.changeHandler}
               />
           <br></br>
           <br></br>
           <br></br>
                   <Button onClick={this.theSubmitPhotoHandler}type='submit'>Submit</Button >
                   </div>
         </Form>



    )
}
}

export default PhotoForm
