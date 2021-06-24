import React, {Component} from 'react'
import {Card,Form, Label, Button, Segment, Header, Icon, Message, Dropdown} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import SearchLocationInput from './SearchLocationInput'



class NewStoreForm extends Component {

state = {

}

handleStateChange = (e) => {


    e.preventDefault()

    this.setState({
        state: e.target.innerText
    })
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
    this.props.storesDisplay(this.state, true);

};

onAddressSelect = (googleInfo) => {



    this.setState({
        googleplaceID: googleInfo.place_id,
        city: googleInfo.formatted_address.split(", ")[1],
        address: googleInfo.formatted_address.split(", ")[0],
        store: googleInfo.types.includes('store')
    })

}




render() {

    const store = this.state.store

    const stateOptions = [
    {key: "AL", value: "Alabama, AL", text: "Alabama, AL"},
    {key: "AK", value: "Alaska", text: "Alaska, AK"},
    {key: "AS", value: "Alaska", text: "American Samoa, AS"},
    {key: "AZ", value: "Arizona", text: "Arizona, AZ"},
    {key: "AR", value: "Arkansas", text: "Arkansas, AR"},
    {key: "CA", value: "California", text: "California, CA"},
    {key: "C0", value: "Colorado", text: "Colorado, CO"},
    {key: "CT", value: "Connecticut", text: "Connecticut, CT"},
    {key: "DE", value: "Delaware", text: "Delaware, DE"},
    {key: "DC", value: "District Of Columbia", text: "District Of Columbia, DC"},
    {key: "FL", value: "Florida", text: "Florida, FL"},
    {key: "GA", value: "Georgia", text: "Georgia, GA"},
    {key: "HI", value: "Hawaii", text: "Hawaii, HI"},
    {key: "ID", value: "Idaho", text: "Idaho, ID"},
    {key: "IL", value: "Illinois", text: "Illinois, IL"},
    {key: "IN", value: "Indiana", text: "Indiana, IN"},
    {key: "IA", value: "Iowa", text: "Iowa, IA"},
    {key: "KS", value: "Kansas", text: "Kansas, KS"},
    {key: "KY", value: "Kentucky", text: "Kentucky, KY"},
    {key: "LA", value: "Louisiana", text: "Louisiana, LA"},
    {key: "ME", value: "Maine", text: "Maine, ME"},
    {key: "MD", value: "Maryland", text: "Maryland, MD"},
    {key: "MA", value: "Massachusetts", text: "Massachusetts, MA"},
    {key: "MI", value: "Michigan", text: "Michigan, MI"},
    {key: "MN", value: "Minnesota", text: "Minnesota, MN"},
    {key: "MS", value: "Mississippi", text: "Mississippi, MS"},
    {key: "MO", value: "Missouri", text: "Missouri, MO"},
    {key: "MT", value: "Montana", text: "Montana, MT"},
    {key: "NE", value: "Nebraska", text: "Nebraska, NE"},
    {key: "NV", value: "Nevada", text: "Nevada, NV"},
    {key: "NH", value: "New Hampshire", text: "New Hampshire, NH"},
    {key: "NJ", value: "New Jersey", text: "New Jersey, NJ"},
    {key: "NM", value: "New Mexico", text: "New Mexico, NM"},
    {key: "NY", value: "New York", text: "New York, NY"},
    {key: "NC", value: "North Carolina", text: "North Carolina, NC"},
    {key: "ND", value: "North Dakota", text: "North Dakota, ND"},
    {key: "OH", value: "Ohio", text: "Ohio, OH"},
    {key: "OK", value: "Oklahoma", text: "Oklahoma, OK"},
    {key: "OR", value: "Oregon", text: "Oregon, OR"},
    {key: "PA", value: "Pennsylvania", text: "Pennsylvania, PA"},
    {key: "PR", value: "Puerto Rico", text: "Puerto Rico, PR"},
    {key: "RI", value: "Rhode Island", text: "Rhode Island, RI"},
    {key: "SC", value: "South Carolina", text: "South Carolina, SC"},
    {key: "SD", value: "South Dakota", text: "South Dakota, SD"},
    {key: "TN", value: "Tennessee", text: "Tennessee, TN"},
    {key: "TX", value: "Texas", text: "Texas, TX"},
    {key: "UT", value: "Utah", text: "Utah, UT"},
    {key: "VT", value: "Vermont", text: "Vermont, VT"},
    {key: "VI", value: "Virgin Islands", text: "Virgin Islands, VI"},
    {key: "VA", value: "Virginia", text: "Virginia, VA"},
    {key: "WA", value: "Washington", text: "Washington, WA"},
    {key: "WV", value: "West Virginia", text: "West Virginia, WV"},
    {key: "WI", value: "Wisconsin", text: "Wisconsin, WI"},
    {key: "WY", value: "Wyoming", text: "Wyoming, WY"},
    ]

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
            {console.log(this.state)}
            <Header as='h2' icon textAlign='center'>
     <Icon name='building outline' circular color='grey' />
     <h1>New Store</h1>
     {store? null :  <Message
    warning
    header='Must be a Store on Google'
  />}
   </Header>
        <Segment>
            <SearchLocationInput onAddressSelect={this.onAddressSelect} onChange={() => null} />
        </Segment>
        <Segment raised>
            <div class="ui form" encType="multipart/form-data" >
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

                 onChange={this.changeHandler}
               />
           <br></br>
           <label>State:</label>
               <Dropdown
                   placeholder="State"
                   name="state"
                   fluid
                   selection
                   onChange={this.handleStateChange}
                   options={stateOptions}
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

export default NewStoreForm
