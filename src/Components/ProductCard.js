import React from 'react'
import PropTypes from 'prop-types'
import {Card, Segment, Menu, Image, Button, Item} from "semantic-ui-react"
import {Link, withRouter} from 'react-router-dom'

const ProductCard = props => {

//find out props to see if there is a user, if user then edit, if not,


let displayCorrectImage = (product) => {

if(product.producttype == "Clothes") {

return <Item.Image size="small" id="productavatar" src="https://img.icons8.com/plasticine/2x/clothes.png"></Item.Image>

} else if (product.producttype == "Supplies") {

return <Item.Image size="small" id="productavatar" src="https://img.icons8.com/cotton/2x/length-1.png"></Item.Image>

} else if (product.producttype == "Foods") {

return <Item.Image size="small" id="productavatar" src="https://img.icons8.com/office/2x/pizza.png"></Item.Image>

} else if (product.producttype == "Accessories") {

return <Item.Image size="small" id="productavatar" src="https://img.icons8.com/emoji/2x/glasses-emoji.png"></Item.Image>

    } else {
return <Item.Image size="small" id="productavatar" src="https://img.icons8.com/bubbles/2x/product.png"></Item.Image>
}

}

    return (

            <Card id={props.product.id} name={props.product.productname} >
                {displayCorrectImage(props.product)}
            <Card.Content >
                <h1>
                    {props.product.productname}
                </h1>
                <Card.Description>
                </Card.Description>
            </Card.Content>
            <Link to="/product">
                <Button basic color='green'  id={props.product.id}>
                  View Product
                </Button>
            </Link>
      </Card>

    )
}

export default withRouter(ProductCard)
