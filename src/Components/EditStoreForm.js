
import React, {Component} from 'react'
import {Card,Form, Label, Button, Segment} from 'semantic-ui-react'
import PropTypes from 'prop-types'

class EditStoreForm extends Component {

state = {

}




changeHandler = (e) => {



    e.preventDefault()
    console.log(this.state)
    e.target.files?
    this.setState({store:{
        image: e.target.files[0]
    }
},  () => {
console.log('from true statement and saving file from change handler',this.state)})
     : this.setState({ store: {
    ...this.state.store,
    [e.target.placeholder]: e.target.value,
    user_id: e.target.parentElement.parentElement.getAttribute("user"),
    id: e.target.parentElement.parentElement.getAttribute("store")
    // store_id: e.target.parentElement.parentElement.getAttribute()
}}, () => {
console.log('from else if',this.state)
})

}

handleAvatar = (e) => {
    e.preventDefault()
    console.log(e.target.files)
    this.setState({
        avatar: e.target.files[0]
    },  () => {
console.log('from handle avatar',this.state)})
}


theSubmitHandler = (e) => {


    e.preventDefault()

    let token = localStorage.getItem('token')



    console.log("the state once submit handler is hit", this.state)
    this.props.submitHandler(this.state, token);

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





render() {

    //needs to be the store that is being edited
    //maybe map the user dispesnaries?? or find the dispensaries that matches the one that wants to be editted
  //   var last =  function(array, n) {
  // if (array == null)
  //   return void 0;
  // if (n == null)
  //    return array[array.length - 1];
  // return array.slice(Math.max(array.length - n, 0));
  // };
  //
  //   let str = window.location.href
  //   let res = str.split("/")
  //   let storeID = last(res)

    return(



        <Label raised>

            <div class="ui form" encType="multipart/form-data"  store={this.props.storeid} user={this.props.user.id} >
            <h3>Edit {this.props.namespace}</h3>
             <form onSubmit={e => this.props.editStoreHandler(e, this.state, this.props.storeid)} >
                 <label for="avatar">Choose a profile picture:</label>
<input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg"/>


                 <label>Address:</label>
                   <input
                     type="text"
                     placeholder="street address"
                     value={this.state.state}
                     onChange={this.changeHandler}
                   />
             <label>State:</label>
               <input
                 type="text"
                 placeholder="state"
                 value={this.state.state}
                 onChange={this.changeHandler}
               />
           <label>City:</label>
               <input
                 type="text"
                 placeholder="city"
                 value={this.state.city}
                 onChange={this.changeHandler}
               />
           <label>Name Space:</label>
               <input
                 type="text"
                 placeholder="namespace"
                 onChange={this.changeHandler}
               />
           <label>Description:</label>
              <textarea placeholder="Description" name="description" onChange={this.changeHandler} />

              <br></br>
   <Button>Submit</Button>
             </form>

         </div>
     </Label>

    )
}






}

export default EditStoreForm
