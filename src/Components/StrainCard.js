import React from 'react'
import PropTypes from 'prop-types'
import {Card, Segment, Menu, Image, Button, Popup, Item} from "semantic-ui-react"
import {Link, withRouter} from 'react-router-dom'

const StrainCard = props => {
    const editstrainpage = "/" + props.strain.name + "/editstrain/" + props.strain.id
    const viewstrainreviewpage = "/strains/" + props.strain.name + "/strainreview/" + props.strain.id
    const viewstrainprofile = "/strains/"+ props.strain.name + "/" + props.strain.id


//find out props to see if there is a user, if user then edit, if not,



    const user = props.user

    return (
        <Item id={props.strain.id} name={props.strain.name} >
            <Item.Image size="small" id="strainavatar" src="https://cdn.dribbble.com/users/2313464/screenshots/6379726/weed_3000_-_2000_2x.jpg"></Item.Image>

            <Item.Header>{props.strain.name}</Item.Header>

        <Item.Content >
              <Item.Meta>{props.strain.strain_type}</Item.Meta>
              <Item.Description>
                  By <br></br>
                {props.strain.growcompany}
            </Item.Description>
        </Item.Content>
            <Link to={viewstrainprofile}>
              <Button basic color='green'  id={props.strain.id}>
                Strain Profile
              </Button>
              </Link>
              <Link>
          <Button basic color='red'  id={props.strain.id} onClick={e => props.deleteStrainRequest(e)}>
            X
          </Button>
      </Link>
      </Item>
    )
}

export default withRouter(StrainCard)
