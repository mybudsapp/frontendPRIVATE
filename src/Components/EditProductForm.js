
import React, {Component} from 'react'
import {Card,Form, Label, Button, Segment, Divider} from 'semantic-ui-react'
import PropTypes from 'prop-types'

class EditProductForm extends Component {

state = {

}


componentDidMount = () => {
    console.log(this.props)
}

changeHandler = (e) => {



    e.preventDefault()



    e.target.files?
    this.setState({product:{
        image: e.target.files[0]
    }
})
     : this.setState({ ...this.state.productUpdated,
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


theSubmitHandler = (e, state, props) => {


    e.preventDefault()

    let token = localStorage.getItem('token')




props.editProductSubmitHandler(state, props.productToEdit);


    // gotta make the set the new state for new dispensarh
    // this.setState({
    //     newproduct :{
    //         Mental:  '000',
    //         Physical: '000',
    //         Velocity: '000',
    //         Flavor: '000',
    //         Overall: '000'
    //     }
    // })
    ;
};



dispensariesOptions = (stores) => {



    if(stores){
        stores = stores
    }else{
        return <h1> Create a Store </h1>
    }
    return stores.map(store => {
        return <option key={store.id} storeid={store.id} id={store.id} value={store.id}>{store.namespace}</option>;
        })
    }

    dispensariesOptionsForRetailPrice = (stores) => {


        if(stores){
            stores = stores
        }else{
            return <h1> Create a Store </h1>
        }
        return stores.map(store => {
            return <option key={store.id} storeid={store.id} value={store.id}>{store.namespace}</option>;
            })


        }



render() {


    return(



        <Segment vertical textAlign="left">

        <div class="ui form" encType="multipart/form-data"  >




         <Form onSubmit={e => this.theSubmitHandler(e, this.state, this.props)}>
            <p>Add Retail Price or Change Retail Price</p>
         <Form.Field>
         <label>Retail Price:</label>
         <input type="number" onChange={this.changeHandler} name="retail_price"></input>
         <br></br>
         <br></br>
         </Form.Field>

         <label>Located at Which Store</label>
         <select name="store_id"  onChange={this.changeHandler}>
            <option name="Choose a Store">Choose a Store</option>
            {this.dispensariesOptionsForRetailPrice(this.props.stores)}
         </select>
         <br></br>
         <br></br>
         <button type="button" onClick={e => this.theSubmitHandler(e, this.state, this.props)}>Submit</button>
         <Divider horizontal>or</Divider>
         <br></br>

            <p>Change Item Properties</p>

             <Form.Field>
       <label>Product Name:</label>
           <input
             type="text"
             name="productname"
             placeholder={this.props.productToEdit.productname}
             onChange={this.changeHandler}
           />
   </Form.Field>
           <br></br>
           <br></br>
           <Form.Field>
       <label>Description:</label>
       <textarea
             name="description"
             placeholder={this.props.productToEdit.description}
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
            placeholder={this.props.productToEdit.producer}
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

       <button type="button" onClick={e => this.theSubmitHandler(e, this.state, this.props)}>Submit</button>
       </Form>
     </div>


         </Segment>

    )
}






}

export default EditProductForm
