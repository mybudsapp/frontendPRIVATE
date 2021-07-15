
import React, {Component} from 'react'
import {Card,Form, Label, Button, Segment} from 'semantic-ui-react'
import PropTypes from 'prop-types'

const initialState = {
    name: "",
    location: ""

}

class NewProductForm extends Component {

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






        this.setState({
    ...this.state.product,
    user_id: e.target.parentElement.parentElement.getAttribute("user"),
    [e.target.name]: e.target.value
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

    const setOfProducts = this.props.products.push(this.state)



    //("the state once submit handler is hit", this.state)
    this.props.submitProductHandler(setOfProducts);



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



            <div class="ui form" encType="multipart/form-data"  >
            <h3>New Product  </h3>
             <form onSubmit={e => this.theSubmitHandler(e)} >

             <label>Name:</label>
               <input
                 type="text"
                 name="productname"
                 onChange={this.changeHandler}
               />
           <br></br>
           <label> Location: </label>
            <select name="store"  onChange={this.changeHandler}>
                <option value="error">Choose Which Location</option>
                <option value="your store here" >Your Store Here</option>
             </select>
           <br></br>
           <label>Product Type:</label>
               <select name="producttype" id="producttype" onChange={this.changeHandler}>
                   <option value="error">Choose the Type</option>
       <option value="Clothes">Clothes</option>
       <option value="Food" >Food </option>
       <option value="Supplies">Supplies</option>
       <option value="Accessory">Accessory</option>
   </select>
   <br></br>
   <label>Description:</label>
       <input
         type="text"
         name="description"
         onChange={this.changeHandler}
       />
   <br></br>
   <br></br>
        <label>Price Per Item:</label>
         <br></br>
            <input
              type="integer"
              name="price"
              onChange={this.changeHandler}
            />
            <p>each</p>
            <br></br>
            <label>Company:</label>
                <input
                  type="text"
                  name="producer"
                  onChange={this.changeHandler}
                />

                   <button>Submit</button>
             </form>

         </div>

         </Segment>

    )
}






}

export default NewProductForm
