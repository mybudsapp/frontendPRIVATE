import React, { Component, useState, useEffect } from "react";
import {Link, withRouter} from 'react-router-dom';
import {Grid, Card, Segment, Menu, Image, Icon, Header, Divider, Button, Form, Input, TextArea, Select, Item} from "semantic-ui-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faCalendar,
  faDollarSign,
  faClipboard,
  faComment,
  faStore,
  faBarcode,
  faSearchPlus,
  faGrin,
  faCogs,
  faTshirt,
  faBong,
  faBirthdayCake,
  faUtensils,
  faFillDrip,
  faToolbox,
  faCannabis
} from "@fortawesome/free-solid-svg-icons";
import StrainForm from "./StrainForm"
import StrainCard from "./StrainCard"
import ProductCard from "./ProductCard"
import NewProductForm from "./ProductForm"




class UserProductContainer extends Component{




    state = {
        newStrainForm: false
    }

    newStrainButtonPressed = () => {

        this.setState({
            newStrainForm: !this.state.newStrainForm
        })


    }




    strainsDisplay = (strains) => {

        return strains.map(strain => <StrainCard strain={strain} />)

        }


        clothesProductsDisplay = (products, newProduct) => {




     return products.filter(product => product.producttype === "Clothes").map(filteredProduct => <ProductCard product={filteredProduct} />)


            }




            concentratesDisplay = (products) => {

                    return products.filter(product => product.producttype === "Concentrates").map(filteredProduct => <ProductCard product={filteredProduct} />)


}

                foodItemsDisplay = (products) => {

                    return products.filter(product => product.producttype === "Edibles").map(filteredProduct => <ProductCard product={filteredProduct} />)

                    }


                    accessoriesProductsDisplay = (products) => {

                        return products.filter(product => product.producttype === "Accessories").map(filteredProduct => <ProductCard product={filteredProduct} />)
                    }



    render(){

        const {products} = this.props

        if (products) {
            return(
                <div>
                    <div>
                        <br></br>
                        <Segment raised >
                            <Segment textAlign="center" vertical>
                                <FontAwesomeIcon
                                    icon={faTshirt}
                                    className="fa-2x text-gray-300"
                                    ></FontAwesomeIcon>

                                <h1>
                                    Clothes
                                </h1>
                            </Segment>
                            <br></br>
                            <Card.Group itemsPerRow={4} divided>
                                <br></br>
                                {this.props.products.length > 0 ? this.clothesProductsDisplay(this.props.products): <span>No Items</span>}

                            </Card.Group>

                            <Grid>




                            </Grid>
                            <br></br>
                            <br></br>
                        </Segment>
                        <br></br>
                        <br></br>
                        <Segment raised >
                            <Segment textAlign="center" vertical>
                                <FontAwesomeIcon
                                    icon={faTshirt}
                                    className="fa-2x text-gray-300"
                                    ></FontAwesomeIcon>

                                <h1>
                                    Concentrates
                                </h1>
                            </Segment>
                            <br></br>
                            <Card.Group itemsPerRow={4} divided>
                                <br></br>
                                {this.props.products.length > 0 ? this.concentratesDisplay(this.props.products) : <span>No Items</span>}

                            </Card.Group>

                            <Grid>




                            </Grid>
                            <br></br>
                            <br></br>
                        </Segment>
                        <br></br>
                        <br></br>
                        <Segment raised >
                            <Segment textAlign="center" vertical>
                                <FontAwesomeIcon
                                    icon={faTshirt}
                                    className="fa-2x text-gray-300"
                                    ></FontAwesomeIcon>

                                <h1>
                                    Edibles
                                </h1>
                            </Segment>
                            <br></br>
                            <Card.Group itemsPerRow={4} divided>
                                <br></br>
                                {this.props.products.length > 0 ? this.foodItemsDisplay(this.props.products) : <span>No Items</span>}

                            </Card.Group>

                            <Grid>




                            </Grid>
                            <br></br>
                            <br></br>
                        </Segment>
                        <br></br>
                        <br></br>
                        <Segment raised >
                            <Segment textAlign="center" vertical>
                                <FontAwesomeIcon
                                    icon={faTshirt}
                                    className="fa-2x text-gray-300"
                                    ></FontAwesomeIcon>

                                <h1>
                                    Accessories
                                </h1>
                            </Segment>
                            <br></br>
                            <Card.Group itemsPerRow={4} divided>
                                <br></br>
                                {this.props.products.length > 0 ? this.accessoriesProductsDisplay(this.props.products) : <span>No Items</span>}

                            </Card.Group>

                            <Grid>




                            </Grid>
                            <br></br>
                            <br></br>
                        </Segment>
                        <br></br>
                    </div>
                </div>)
        } else {
            return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />


}
    }

}

export default withRouter(UserProductContainer)















// <br></br>
// <Segment raised>
//     <Segment textAlign="center" vertical>
//         <FontAwesomeIcon
//             icon={faCannabis}
//             className="fa-2x text-gray-300"
//             ></FontAwesomeIcon>
//         <h1>
//             Strains
//         </h1>
//     </Segment>
//     <br></br>
//     <Card.Group itemsPerRow={4} divided>
//         <br></br>
//         {this.props.products.length > 0 ? this.strainsDisplay(this.props.strains) : <span>No Items</span>}
//     </Card.Group>
//     <Grid>
//     </Grid>
//     <br></br>
//     <br></br>
// </Segment>
//
// <br></br>
//
// <Segment raised >
//     <Segment textAlign="center" vertical>
//         <FontAwesomeIcon
//             icon={faFillDrip}
//             className="fa-2x text-gray-300"
//             ></FontAwesomeIcon>
//         <h1>
//             Concentrates
//         </h1>
//     </Segment>
//     <br></br>
//     <Card.Group itemsPerRow={4} divided>
//         <br></br>
//         {this.props.products.length > 0 ? this.concentratesDisplay(this.props.products) : <span>No Items</span>}
//     </Card.Group>
//
//
//
//     <Grid>
//
//
//
//     </Grid>
//     <br></br>
// </Segment>
//
// <br></br>
// <br></br>
//
// <Segment raised>
//     <Segment textAlign="center" vertical>
//         <FontAwesomeIcon
//             icon={faUtensils}
//             className="fa-2x text-gray-300"
//             ></FontAwesomeIcon>
//         <h1>
//             Edibles
//
//         </h1>
//     </Segment>
//     <br></br>
//     <Card.Group itemsPerRow={4} divided>
//         <br></br>
//         {this.props.products.length > 0 ? this.foodItemsDisplay(this.props.products) : <span>No Items</span>}
//     </Card.Group>
//
//
//
//     <Grid>
//
//
//
//     </Grid>
//     <br></br>
// </Segment>
//
// <br></br>
// <br></br>
//
// <Segment raised >
//     <Segment textAlign="center" vertical>
//         <FontAwesomeIcon
//             icon={faToolbox}
//             className="fa-2x text-gray-300"
//
//             ></FontAwesomeIcon>
//
//         <h1>
//             Accessories
//         </h1>
//     </Segment>
//     <br></br>
//     <Card.Group itemsPerRow={4} divided>
//         {this.props.products.length > 0 ? this.accessoriesProductsDisplay(this.props.products) : <span>No Items</span>}
//     </Card.Group>
//
//
//
//     <Grid>
//
//
//
//     </Grid>
//     <br></br>
// </Segment>
//
//
//
//
// </div>
// </div>
