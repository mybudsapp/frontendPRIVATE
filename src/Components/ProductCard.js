import React from 'react'
import PropTypes from 'prop-types'
import {Card, Segment, Menu, Image, Button, Item} from "semantic-ui-react"
import {Link, withRouter} from 'react-router-dom'

const ProductCard = props => {

//find out props to see if there is a user, if user then edit, if not,


let displayCorrectImage = (product) => {

if(product.producttype == "Clothes") {

return <Item.Image size="tiny" id="productavatar" src="https://img.icons8.com/plasticine/2x/clothes.png"></Item.Image>

} else if (product.producttype == "Supplies") {

return <Item.Image size="tiny" id="productavatar" src="https://img.icons8.com/cotton/2x/length-1.png"></Item.Image>

} else if (product.producttype == "Foods") {

return <Item.Image size="tiny" id="productavatar" src="https://img.icons8.com/office/2x/pizza.png"></Item.Image>

} else if (product.producttype == "Accessories") {

return <Item.Image size="tiny" id="productavatar" src="https://img.icons8.com/emoji/2x/glasses-emoji.png"></Item.Image>

    } else {
return <Item.Image size="tiny" id="productavatar" src="https://img.icons8.com/bubbles/2x/product.png"></Item.Image>
}

}

    if(!props.showDelete){
    return <Card id={props.product.id} name={props.product.productname} >
                {displayCorrectImage(props.product)}
            <Card.Content >
                <h2>
                    {props.product.productname}
                </h2>
                <Card.Description>
                    {props.product.producer, console.log(props)}
                </Card.Description>
            </Card.Content>
                <div className='ui two buttons'>
                {props.editProducts? <div className='ui two buttons'><Button basic color='violet' onClick={(e) => props.displayItemForEdit(e)}>Edit</Button><Button basic color='red' onClick={(e) => props.displayItemForDelete(e)}>Delete</Button></div> : <Button basic color='green'  id={props.product.id}>
                  View Product
                </Button>}
            </div>
      </Card>


}else{
            return  <Card id={props.product.id} name={props.product.productname}>
      <Card.Content>
        {displayCorrectImage(props.product)}

        <Card.Description>{props.product.productname}</Card.Description>
        <Card.Meta>
          By {props.product.producer}

  </Card.Meta>
    <Card.Meta></Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={(e) => props.submitDeleteProductHandler(e)}>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    }



}

export default ProductCard
