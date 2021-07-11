import React from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Responsive,
  Segment,
  Visibility,
  Label,
  Input,
  Card
} from 'semantic-ui-react'
import Avatar from 'react-avatar'
import Buds from '../mybuds-v2.png'
import { Link } from "react-router-dom";

const UserCard = (props) => {


    return(
        <Card>
       <Image src={props.user.avatar} wrapped ui={false} />
       <Card.Content>
         <h2>{props.user.username}</h2>
         <br></br>
         <Card.Meta>
           <span className='date'>Joined in 2015</span>
         </Card.Meta>
         <Card.Description>
             <Link to="/profile">
             <Button basic> View Profile</Button>
         </Link>
         </Card.Description>
       </Card.Content>
       <Card.Content extra>
         <a>
           <Icon name='user' />
           22 Friends
         </a>
       </Card.Content>
     </Card>
    )
}

export default UserCard
