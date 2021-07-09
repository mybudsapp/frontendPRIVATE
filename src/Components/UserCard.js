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
      <Card.Content id={props.user.id} name={props.user.username}>

            <Image src={props.user.avatar} alt="Avatar" size='medium' circular></Image>



        <Card.Meta><br></br></Card.Meta>
        <Card.Description textAlign="center">
          {props.user.username}
        </Card.Description>
        <Card.Description textAlign="center">
          {props.user.location}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
            <Link to="/profile">
          <Button basic color='green' id={props.user.id}>
            View Profile
          </Button>
      </Link>
        </div>
      </Card.Content>
    </Card>
    )
}

export default UserCard
