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

storeOptions = (stores) => {

    if(stores){
        stores = stores
    }else{
        return <h1> No Stores </h1>
    }
    return stores.map(store => {
        return <option key={store.id} storeid={store.id} value={store.id}>{store.namespace}</option>;
        })


}



render() {

    return(

            <Form size="large">
        <div encType="multipart/form-data">

            {this.props.stores?
                <select name="store_id"  onChange={this.changeHandler}>
               <option name="Choose a Store">Store Post?</option>
               {this.storeOptions(this.props.stores)}
           </select> : null}

           <br></br>

             <label>Photo</label>
               <input
                 encType="multipart/form-data"
                 type='file'
                 name='image'
                 onChange={(e) => this.handleImage(e)}
               />
           <br></br>
           <br></br>
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
