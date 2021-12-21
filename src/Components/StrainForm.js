
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

        <Segment vertical textAlign="left">
            <div class="ui form" encType="multipart/form-data" user={this.props.user.id}  >
            <Form onSubmit={e => this.submitHandler(e, this.state, this.props)}>
                <Form.Field>
                    <label>Product Profile Picture:</label>
                    <input  type="file"
                        placeholder="avatar"
                        onChange={(e) => this.handleAvatar(e)}></input>
                    <br></br>
                    <br></br>
                </Form.Field>
                <Form.Field>
          <label>Strain Name:</label>
              <input
                type="text"
                name="strain_name"
                placeholder="Strain Name"
                onChange={this.changeHandler}
              />
      </Form.Field>

      <Form.Field>
  <label>Description:</label>
  <input
        type="text"
        name="description"
        placeholder="Description"
        onChange={this.changeHandler}
      />
</Form.Field>
<Form.Field>
<label>Price Per Gram:</label>
<input type="number" onChange={this.changeHandler} name="retail_price"></input>
<br></br>
<br></br>
</Form.Field>

<Form.Field>
<label>Located at Which Store:</label>
<select name="store_id"  onChange={this.changeHandler}>
   <option name="Choose a Store">Choose a Store</option>

   {dispensariesOptions()}
</select>
</Form.Field>

<Form.Field>
<label>Strain Type:</label>
    <select name="strain_type" id="strain_type" onChange={this.changeHandler}>
        <option value="error">Choose the Type</option>
    <option value="Sativa">Sativa Dominant</option>
    <option value="Indica">Indica Dominant</option>

    </select>
</Form.Field>

<Form.Field>
<label>Grower/Manufacturer Name:</label>
    <input
      type="text"
      name="producer"
      placeholder="Producer/Manufacturer"
      onChange={this.changeHandler}
    />
</Form.Field>
<Button type="Button" onClick={e => this.submitHandler(e, this.state, this.props)}>Submit</Button>
            </Form>


         </div>

         </Segment>

    )
}






}

export default NewStrainForm
