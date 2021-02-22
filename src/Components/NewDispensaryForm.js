import React, {Component} from 'react'
import {Card,Form, Label, Button, Segment, Header, Icon} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import SearchLocationInput from './SearchLocationInput'



class NewDispensaryForm extends Component {

state = {

}



changeHandler = (e) => {



    e.preventDefault()
    console.log(this.state)
    e.target.files?
    this.setState({dispensary:{
        image: e.target.files[0]
    }
},  () => {
console.log('from true statement and saving file from change handler',this.state)})
     : this.setState({ dispensary: {
    ...this.state.dispensary,
    [e.target.placeholder]: e.target.value,
    user_id: e.target.parentElement.parentElement.getAttribute("user")
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

};

onAddressSelect = (googleInfo) => {


    this.setState({
        googleInfo,
        place_id: googleInfo.place_id,
        address: googleInfo.formatted_address,
        store: googleInfo.types.includes('store')
    })
}




render() {

//     const { isLoaded, loadError} = LoadScript({
//     googleMapsApiKey: "AIzaSyDVees6AhLJ4o0EfQfVXKQuUM7HvLP31ro",
//     libraries: ["places"],
// })

//
//      const responseGoogleSuccess = (response) => {
//          console.log(response.profileObj);
//
//          debugger
//
//          this.setState({
//              username: response.profileObj.givenName,
//              password: "",
//              dob: this.state.dob,
//              email: response.profileObj.email,
//              googleID: response.profileObj.googleId
//          });
// }
// const responseGoogleFailure = (response) => {
// console.log("FUCK",response);
// }
//
//
//
//  const containerStyle = {
//   width: '50vw',
//   height: '50vw'
// };
//
// const center = {
//   lat: -3.745,
//   lng: -38.523
// };
//
//
//   const {map, setMap} = this.state
//
//   //
//




  // <LoadScript
  //     googleMapsApiKey="AIzaSyDVees6AhLJ4o0EfQfVXKQuUM7HvLP31ro"
  //     >
  //     <GoogleMap
  //         mapContainerStyle={containerStyle}
  //         center={center}
  //         zoom={13}
  //         onLoad={map => {
  //             const bounds = new window.google.maps.LatLngBounds();
  //             map.fitBounds(bounds);
  //         }}
  //
  //         >
  //
  //     </GoogleMap>
  // </LoadScript>

    return(
        <div>
            <Header as='h2' icon textAlign='center'>
     <Icon name='building outline' circular color='grey' />
     <h1>New Store / Dispensary</h1>
   </Header>
        <Segment>
            <SearchLocationInput onAddressSelect={this.onAddressSelect} onChange={() => null} />
        </Segment>
        <Segment raised>
            <div class="ui form" encType="multipart/form-data" user={this.props.user.id}>
             <form onSubmit={e => this.theSubmitHandler(e)} >

           <label>Name Space:</label>
               <input
                 type="text"
                 placeholder="namespace"
                 onChange={this.changeHandler}
               />
           <label>Description:</label>
               <input
                 type="text"
                 placeholder="description"
                 value={this.state.email}
                 onChange={this.changeHandler}
               />
           <br></br>
           <br></br>
           <Button>Submit</Button>
             </form>
         </div>
         </Segment>
     </div>

    )
}






}

export default NewDispensaryForm
