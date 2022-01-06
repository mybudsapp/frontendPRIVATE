
import React, {Component} from 'react'
import {Card,Form, Label, Button, Segment} from 'semantic-ui-react'
import PropTypes from 'prop-types'

class EditStoreForm extends Component {

state = {
    storehours: {}
}




changeHandler = (e) => {



    e.preventDefault()
    this.setState({ store: {
    ...this.state.store,
    [e.target.placeholder]: e.target.value
}})

console.log(this.state)
}

handleStoreFrontPicture = (e) => {
    e.preventDefault()
    //(e.target.files)
    this.setState({
        avatar: e.target.files[0]
    })
}


handleStoreHours = (e) => {
    e.preventDefault()
    //(e.target.files)


    this.setState({
        storehours:{
            ...this.state.storehours,
            [e.target.placeholder]: e.target.value
        }

    })

    console.log(this.state)
}








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



        <Segment vertical>

            <Segment vertical>
            <label>Edit {this.props.storeToEdit.namespace}</label>
        </Segment>
            <br></br>
            <div class="ui form" encType="multipart/form-data"  store={this.props.storeToEdit.id} user={this.props.user.id} >
             <Form onSubmit={e => this.props.editStoreHandler(e, this.state, this.props.storeToEdit.id)} >

                         <Form.Field>
                 <label for="avatar">Choose a Store Front picture:</label>
<input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg" onChange={(e) => this.handleStoreFrontPicture(e)}/>
</Form.Field>
    <Form.Field>
                 <label>Address:</label>
                   <input
                     type="text"
                     placeholder="address"
                     value={this.state.state}
                     onChange={this.changeHandler}
                   />
           </Form.Field>
           <Form.Field>
             <label>State:</label>
               <input
                 type="text"
                 placeholder="state"
                 value={this.state.state}
                 onChange={this.changeHandler}
               />
       </Form.Field>
        <Form.Field>
           <label>City:</label>
               <input
                 type="text"
                 placeholder="city"
                 value={this.state.city}
                 onChange={this.changeHandler}
               />
       </Form.Field>
       <Form.Field>
           <label>Name Space:</label>
               <input
                 type="text"
                 placeholder="namespace"
                 onChange={this.changeHandler}
               />

       </Form.Field>
       <Form.Field>
           <label>Description:</label>
              <textarea placeholder="Description" name="description" onChange={this.changeHandler} />
      </Form.Field>
          <Form.Field onChange={this.handleStoreHours}>
              <Segment.Group >
                  <Segment>
                  <label for="storehours">Store Hours</label>
              </Segment>
              <Segment>
              <label>
                  Monday
              </label>
              <br></br>
              <br></br>
             Opening:
             <input type="time" id="Monday" placeholder="MondayOpeningTime" min="07:00" max="22:00" ></input>
                 <br></br>
                 <br></br>
 Closing: <input type="time" id="Monday" placeholder="MondayClosingTime" min="07:00" max="22:00" ></input>
    </Segment>
    <Segment>
    <label>
        Tuesday:
    </label>
    <br></br>
    <br></br>
   Opening:
<input type="time" id="Tuesday" placeholder="TuesdayOpeningTime" min="07:00" max="22:00" ></input>
    <br></br>
    <br></br>
Closing:
<input type="time" id="Tuesday" placeholder="TuesdayClosingTime" min="07:00" max="22:00" ></input>

</Segment>
<Segment>
<label>
    Wednesday:
</label>
<br></br>
<br></br>
Opening:
<input type="time" id="Wednesday" placeholder="WednesdayOpeningTime" min="07:00" max="22:00" ></input>
    <br></br>
    <br></br>
    Closing: <input type="time" id="Wednesday" placeholder="WednesdayClosingTime" min="07:00" max="22:00" ></input>
</Segment>
<Segment>
<label>
    Thursday:

</label>
<br></br>
<br></br>
Opening:
<input type="time" id="Thursday" placeholder="ThursdayOpeningTime" min="07:00" max="22:00" ></input>
    <br></br>
    <br></br>
Closing:
<input type="time" id="Thursday" placeholder="ThursdayClosingTime" min="07:00" max="22:00" ></input>

</Segment>
<Segment>
<label>
    Friday:

</label>
<br></br>
<br></br>
Opening:
<input type="time" id="Friday" placeholder="FridayOpeningTime" min="07:00" max="22:00" ></input>
    <br></br>
    <br></br>
Closing:
<input type="time" id="Friday" placeholder="FridayClosingTime" min="07:00" max="22:00" ></input>

</Segment>
<Segment>
<label>
    Saturday:

</label>
<br></br>
<br></br>
Opening:
<input type="time" id="Saturday" placeholder="SaturdayOpeningTime" min="07:00" max="22:00" ></input>
    <br></br>
    <br></br>
    Closing:
<input type="time" id="Saturday" placeholder="SaturdayClosingTime" min="07:00" max="22:00" ></input>

</Segment>
<Segment>
<label>
    Sunday:

</label>
<br></br>
<br></br>
Opening:
<input type="time" id="Sunday" placeholder="SundayOpeningTime" min="07:00" max="22:00" ></input>
    <br></br>
    <br></br>
    Closing:
<input type="time" id="Sunday" placeholder="SundayClosingTime" min="07:00" max="22:00" ></input>

</Segment>


</Segment.Group>
</Form.Field>
              <br></br>
   <Button>Submit</Button>
   </Form>

         </div>
     </Segment>

    )
}






}

export default EditStoreForm
