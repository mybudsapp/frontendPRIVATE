import React, {Component} from 'react'
import {Card,Form, Label, Button,} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import {useAlert} from 'react-alert'
import MobileNavBar from "../Components/MobileNavBar"

class PhotoForm extends Component {

state = {
}


changeHandler = (e) => {
    e.preventDefault();

    this.setState({
        [e.target.placeholder]: e.target.value
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


    //("the state once submit handler is hit", this.state)
    this.props.submitPhotoHandler(this.state, token);
    this.setState({
            image:'',
            description:''
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
                 placeholder="photo"
                 onChange={(e) => this.handleImage(e)}
               />
           <label>Caption/Description</label>
               <input
                 type="text"
                 placeholder="what's this post about?"
                 value={this.state.description}
                 onChange={this.changeHandler}
               />
           <br></br>
           <br></br>
           <br></br>
                   <Button type='submit'>Submit</Button>
                   </div>
         </Form>



    )
}
}

export default PhotoForm
