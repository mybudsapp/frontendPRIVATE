
import React, {Component} from 'react'
import {Card,Form, Label, Button, Segment} from 'semantic-ui-react'
import PropTypes from 'prop-types'

class EditStrainForm extends Component {

state = {

}


changeHandler = (e) => {



    e.preventDefault()
    //(this.state)
    e.target.files?
    this.setState({strain:{
        image: e.target.files[0]
    }
})
     : this.setState({ strain: {
    ...this.state.strain,
    [e.target.placeholder]: e.target.value,
    strain_id: e.target.parentElement.parentElement.getAttribute("strain")
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




    this.props.editStrainHandler(this.state, token);


    // gotta make the set the new state for new dispensarh
    // this.setState({
    //     newStrain :{
    //         Mental:  '000',
    //         Physical: '000',
    //         Velocity: '000',
    //         Flavor: '000',
    //         Overall: '000'
    //     }
    // })
    ;
};


handleChange = (e) => {
this.setState({
    personaility_type: e.target.value
})
}



render() {

    //needs to be the dispensary that is being edited
    //maybe map the user dispesnaries?? or find the dispensaries that matches the one that wants to be editted
    var last =  function(array, n) {
  if (array == null)
    return void 0;
  if (n == null)
     return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
  };

    let str = window.location.href
    let res = str.split("/")
    let strainID = last(res)

    return(



        <Segment raised>
        
                <img src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1"></img>

            <div class="ui form" encType="multipart/form-data" user={this.props.user.id} strain={strainID} >
            <h3>Edit Strain</h3>
             <form onSubmit={e => this.props.editStrainHandler(this.state, strainID)} >
           <label>Description:</label>
               <input
                 type="text"
                 placeholder="description"
                 value={this.state.email}
                 onChange={this.changeHandler}
               />
                   <button>Submit</button>
             </form>

         </div>
         </Segment>

    )
}






}

export default EditStrainForm
