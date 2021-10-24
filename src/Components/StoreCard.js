import React from 'react'
import PropTypes from 'prop-types'
import {Item, Segment, Menu, Image, Button, Icon, Dropdown, Modal, Card} from "semantic-ui-react"
import {Link, withRouter} from 'react-router-dom'
import EditStoreForm from './EditStoreForm'

const StoreCard = props => {


    const editstorepage = "/" + props.store.namespace + "/editstore/" + props.store.id

    const handleShowEditClose = () => {
      this.setState({ showEdit: !this.state.showEdit });
    };


    return (


            <Card id={props.store.id} name={props.store.spacename}>
                <Item>
         <Item.Image size='small' src='https://i.pinimg.com/originals/4f/22/a1/4f22a1fc23e0b11caf9a833bf9065b6b.jpg' />
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
             <Button basic onClick={(e) => props.handleShowEdit(props.store.id, props.store.namespace)}>Edit</Button>
         </Link>
     <Link>
         <Button basic onClick={(e) => props.deleteStoreRequest(e)}>Delete</Button>
     </Link>
     <Link>
         <Button basic>Profile</Button>
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
