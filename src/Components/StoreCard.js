import React from 'react'
import PropTypes from 'prop-types'
import {Item, Segment, Menu, Image, Button, Icon, Dropdown, Modal, Card} from "semantic-ui-react"
import {Link, withRouter} from 'react-router-dom'
import EditStoreForm from './EditStoreForm'
import Avatar from "react-avatar";

const StoreCard = props => {


    const editstorepage = "/" + props.store.namespace + "/editstore/" + props.store.id




    return (


            <Card id={props.store.id} name="store">
                <Item>
         {props.store.storefront_picture? <Image size='tiny' round={true} src={props.store.storefront_picture.url} avatar/> : <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} name={props.store.namespace} />}
             <Card.Content >
                 <h1>
                     {props.store.spacename}
                 </h1>
                 <Card.Description>
                     {props.store.address}
                 </Card.Description>
             </Card.Content>
         <Item.Content>
         <Item.Description>
             0 followers <Icon name="male"></Icon>
         </Item.Description>
         </Item.Content>





         <Link>
             <Button basic onClick={(e) => props.displayStoreForEdit(props.store.id, props.store.namespace)}>Edit</Button>
         </Link>
     <Link>
         <Button basic onClick={(e) => props.deleteStoreRequest(e)}>Delete</Button>
     </Link>
     <Link>
         <Button basic onClick={(e) => props.handleViewStoreProfile(e)}>Profile</Button>
     </Link>


       </Item>
   </Card>


    )
}
// <Link to={editstorepage}>
//     <button>Edit Profile</button>
// </Link>
// <button>View Profile</button>
// <button onClick={(e) => props.deleteStoreRequest(e)}>Delete</button>

export default withRouter(StoreCard)
