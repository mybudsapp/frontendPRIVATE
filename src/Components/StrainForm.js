
import React, {Component} from 'react'
import {Card,Form, Label, Button, Segment} from 'semantic-ui-react'
import PropTypes from 'prop-types'

const initialState = {
    name: "",
    location: ""

}

class NewStrainForm extends Component {

state = {

}

// validate = () => {
//     let nameError = "";
//     let emailError = "";
//     // let passwordError = "";
//
//     if (!this.state.name) {
//       nameError = "name cannot be blank";
//     }
//
//     if (!this.state.email.includes("@")) {
//       emailError = "invalid email";
//     }
//
//     if (emailError || nameError) {
//       this.setState({ emailError, nameError });
//       return false;
//     }
//
//     return true;
//   };



changeHandler = (e) => {

    e.preventDefault()

    // const isValid = this.validate();
    //
    //     if (isValid) {
    //       //(this.state);
    //       // clear form
    //       this.setState(initialState);
    //     }




        this.setState({ strain: {
    ...this.state.strain,
    user_id: e.target.parentElement.parentElement.getAttribute("user"),
    [e.target.name]: e.target.value

}}, () => {
//('from else if',this.state)
})

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



    //("the state once submit handler is hit", this.state)
    this.props.submitStrainHandler(this.state, token);



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

    const dispensariesOptions = () => {

        let stores = []

        if(this.props.user.stores){
            stores = this.props.user.stores
        }else{
            return <h1> No Dispensary </h1>
        }
        return stores.map(store => {
            return <option value={store.id} >{store.namespace}</option>;
            })
        }



    return(

        <Segment raised textAlign="left">
                <input
                  type="file"
                  placeholder="avatar"

                  onChange={this.changeHandler}
                />



            <div class="ui form" encType="multipart/form-data" user={this.props.user.id}  >
            <h3>New Strain </h3>
             <form onSubmit={e => this.theSubmitHandler(e)} >

             <label>Name:</label>
               <input
                 type="text"
                 name="strain_name"
                 onChange={this.changeHandler}
               />
           <br></br>
           <label> Location: </label>
            <select name="store"  onChange={this.changeHandler}>
                <option value="error">Choose Which Location</option>
                {dispensariesOptions()}
             </select>
           <br></br>
           <label>Strain Type:</label>
               <select name="strain_type" id="strain_type" onChange={this.changeHandler}>
                   <option value="error">Choose the Type</option>
       <option value="Sativa">Sativa</option>
       <option value="Indica" >Indica </option>
       <option value="Hybrid">Hybrid</option>
   </select>
   <br></br>
   <label>Description:</label>
       <input
         type="text"
         name="description"
         onChange={this.changeHandler}
       />
   <br></br>
        <label>Price Per Gram:</label>
         <br></br>
            <input
              type="integer"
              name="price"
              onChange={this.changeHandler}
            />
            <br></br>
            <label>Company:</label>
                <input
                  type="text"
                  name="growcompany"
                  onChange={this.changeHandler}
                />

                   <button>Submit</button>
             </form>

         </div>

         </Segment>

    )
}






}

export default NewStrainForm
