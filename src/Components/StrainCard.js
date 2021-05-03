import React from 'react'
import PropTypes from 'prop-types'
import {Card, Segment, Menu, Image, Button, Popup} from "semantic-ui-react"
import {Link, withRouter} from 'react-router-dom'

const StrainCard = props => {
    const editstrainpage = "/" + props.strain.strain_name + "/editstrain/" + props.strain.id
    const viewstrainpage = "/strains/" + props.strain.strain_name + "/" + props.strain.id
//find out props to see if there is a user, if user then edit, if not,
    const user = props.user

    return (
        <Card id={props.strain.id} name={props.strain.strain_name} raised>
            <Card.Content centered>
              <div >
                      <Image centered fluid id="strainavatar" src="https://cdn.dribbble.com/users/2313464/screenshots/6379726/weed_3000_-_2000_2x.jpg"></Image>
              </div>
              <p>{props.strain.name}</p>
              <Card.Meta>{props.strain.strain_type}</Card.Meta>
              <Card.Description>
                  By <br></br>
                {props.strain.growcompany}
              </Card.Description>
            </Card.Content>

            {user? <Card.Content extra fluid>
            <Link to={viewstrainpage}>
              <Button basic color='green'  id={props.strain.id}>
                Review Strain
              </Button>
              </Link>
          </Card.Content> : null}
          <Button basic color='red'  id={props.strain.id} onClick={e => props.deleteStrainRequest(e)}>
            X
          </Button>
          </Card>
    )
}

export default withRouter(StrainCard)
