
import React, {Component} from 'react'
import {Card,Form, Label, Button, Segment, Select, Dropdown} from 'semantic-ui-react'
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


    console.log(this.state)

        this.setState({
    ...this.state.product,
    user_id: e.target.parentElement.parentElement.getAttribute("user"),
    store_id: e.target.getAttribute("storeID"),
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





dispensariesOptions = (stores) => {



    if(stores){
        stores = stores
    }else{
        return <h1> Create a Store </h1>
    }
    return stores.map(store => {
        return <option value={store.id} storeid={store.id} >{store.namespace}</option>;
        })
    }



submitHandler = (e, product, props) => {

    props.submitProductHandler(product)


}


render() {

const productOptions = [
  { key: 'Clothes', value: 'Clothes', text: 'Clothes' },
  { key: 'Edibles', value: 'Edibles', text: 'Edibles' },
  { key: 'Concentrates', value: 'Concentrates', text: 'Concentrates' },
  { key: 'Accessories', value: 'Accessories', text: 'Accessories' }
]

// <select name="store"  onChange={this.changeHandler}>
//     <option name="Create a Store">Create a Store</option>
//     {this.dispensariesOptions(this.props.stores)}
//  </select>


    return(

        <Segment raised textAlign="left">
            <div class="ui form" encType="multipart/form-data" userID={this.props.user.id}>
             <Form onSubmit={e => this.submitHandler(e, this.state, this.props)}>
                 <Form.Field>
           <label>Product Name:</label>
               <input
                 type="text"
                 name="productname"
                 placeholder="Product Name"
                 onChange={this.changeHandler}
               />
       </Form.Field>
               <br></br>
               <br></br>
               <Form.Field>
           <label>Description:</label>
           <input
                 type="text"
                 name="description"
                 placeholder="Description"
                 onChange={this.changeHandler}
               />
       </Form.Field>
           <br></br>
               <br></br>
               <br></br>
               <Form.Field>
           <label>Product Type:</label>
               <select name="producttype"  onChange={this.changeHandler}>
                  <option name="Product Type">Product Type</option>
                        <option name= 'Clothes' value= 'Clothes' >Clothes</option>
                        <option name= 'Edibles' value= 'Edibles'>Edibles</option>
                        <option name= 'Concentrates' value= 'Concentrates' >Concentrates</option>
                        <option name= 'Accessories' value= 'Accessories' >Accessories</option>
               </select>
           </Form.Field>
      <br></br>
          <br></br>
          <br></br>
          <Form.Field>
          <label>Producer/Manufacturer Name:</label>
              <input
                type="text"
                name="producer"
                placeholder="Producer/Manufacturer"
                onChange={this.changeHandler}
              />
      </Form.Field>

          <br></br>
          <br></br>
          <Form.Field>
              <label>Located at Which Store</label>
              <select name="store_id"  onChange={this.changeHandler}>
                 <option name="Create a Store">Choose a Store</option>
                 {this.dispensariesOptions(this.props.stores)}
              </select>
          </Form.Field>
          <br></br>
           <button type="button" onClick={e => this.submitHandler(e, this.state, this.props)}>Submit</button>
           </Form>
         </div>

         </Segment>

    )
}






}

export default NewProductForm
