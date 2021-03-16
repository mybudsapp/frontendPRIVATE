import React, { Component } from "react";
import {Link, withRouter} from 'react-router-dom';
import {Card, Segment, Menu, Image, Icon, Header, Divider, Button, Form, Input, TextArea, Select} from "semantic-ui-react"
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
  faCannabis,
  faBong,
  faBirthdayCake
} from "@fortawesome/free-solid-svg-icons";
import StrainCard from "./StrainCard"
import ProductCard from "./ProductCard"




class UserProductContainer extends Component{






        strainProductsDisplay = () => {


                    let products = []

                    if(this.props.products){
                        products = this.props.products
                    }else{
                        return null
                    }
                    return products.map(product => {
                  return <ProductCard product={product} user={this.props.user} deleteDispensaryRequest={this.props.deleteDispensaryRequest} sendThisDispensaryToEdit={this.props.sendThisDispensaryToEdit} raised/>
                })
            }

            concentratesProductsDisplay = () => {


                        let products = []

                        if(this.props.products){
                            products = this.props.products
                        }else{
                            return null
                        }
                        return products.map(product => {
                      return <ProductCard product={product} user={this.props.user} deleteDispensaryRequest={this.props.deleteDispensaryRequest} sendThisDispensaryToEdit={this.props.sendThisDispensaryToEdit} raised/>
                    })
                }

                edibleProductsDisplay = () => {


                            let products = []

                            if(this.props.products){
                                products = this.props.products
                            }else{
                                return null
                            }
                            return products.map(product => {
                          return <ProductCard product={product} user={this.props.user} deleteDispensaryRequest={this.props.deleteDispensaryRequest} sendThisDispensaryToEdit={this.props.sendThisDispensaryToEdit} raised/>
                        })
                    }

                    glassProductsDisplay = () => {


                                let products = []

                                if(this.props.products){
                                    products = this.props.products
                                }else{
                                    return null
                                }
                                return products.map(product => {
                              return <ProductCard product={product} user={this.props.user} deleteDispensaryRequest={this.props.deleteDispensaryRequest} sendThisDispensaryToEdit={this.props.sendThisDispensaryToEdit} raised/>
                            })
                        }

                    accessoriesProductsDisplay = () => {


                                let products = []

                                if(this.props.products){
                                    products = this.props.products
                                }else{
                                    return null
                                }
                                return products.map(product => {
                              return <ProductCard product={product} user={this.props.user} deleteDispensaryRequest={this.props.deleteDispensaryRequest} sendThisDispensaryToEdit={this.props.sendThisDispensaryToEdit} raised/>
                            })
                        }



    render(){

        const user = "/" + this.props.user.username


        return(

            <div>

                <div className="row">
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                Strains
                                <Card.Group itemsPerRow={3} doubling raised>

                            </Card.Group>
                            </div>
                          </div>
                          <div className="col-auto">
                              <div className="col-auto">
                                <FontAwesomeIcon
                                  icon={faCannabis}
                                  className="fa-4x text-gray-300"
                                ></FontAwesomeIcon>
                              </div>
                          </div>
                        </div>
                        <Segment
                            circular style={ {width:80, height:80} }
                            >
                            <Link to={user + "/newstrain"}  >
                                <Menu.Item as='a' onClick={(e) => console.log("ASDMNASDNASNDNASDN", this.props.user)}>
                                    <i class="large icons">
                                        <i class="tree icon"></i>
                                        <i class="top right corner add icon"></i>
                                    </i>
                                </Menu.Item>
                            </Link>
                        </Segment>

                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                Concentrates
                            </div>
                            <div className="col-auto">
                                <FontAwesomeIcon
                                    icon={faGrin}
                                    className="fa-4x text-gray-300"
                                    ></FontAwesomeIcon>
                            </div>
                          <div className="col mr-2">
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                            </div>
                            <div className="col-auto">
                            <Segment
                                circular style={ {width:80, height:80} }
                                >
                                <Link to={user + "/newstrain"}  >
                                    <Menu.Item as='a' onClick={(e) => console.log("ASDMNASDNASNDNASDN", this.props.user)}>
                                        <i class="large icons">
                                            <i class="diamond icon"></i>
                                            <i class="top right corner add icon"></i>
                                        </i>
                                    </Menu.Item>
                                </Link>
                            </Segment>

                          </div>
                          </div>
                        </div>
                      </div>
                  </div>

                   </div>
                   <div className="col-xl-3 col-md-6 mb-4">
                       <div className="card border-left-success shadow h-100 py-2">
                           <div className="card-body">
                               <div className="row no-gutters align-items-center">
                                   <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                       Glass
                                   </div>
                                   <div className="col-auto">
                                       <FontAwesomeIcon
                                           icon={faBong}
                                           className="fa-4x text-gray-300"
                                           ></FontAwesomeIcon>



                                           <div className="col mr-2">
                                             <div className="h5 mb-0 font-weight-bold text-gray-800">
                                             </div>
                                             <div className="col-auto">
                                             <Segment
                                                 circular style={ {width:80, height:80} }
                                                 >
                                                 <Link to={user + "/newstrain"}  >
                                                     <Menu.Item as='a' onClick={(e) => console.log("ASDMNASDNASNDNASDN", this.props.user)}>
                                                         <i class="large icons">
                                                             <i class="add icon"></i>
                                                         </i>
                                                     </Menu.Item>
                                                 </Link>
                                             </Segment>

                                           </div>
                                           </div>

                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>


                   <div className="col-xl-3 col-md-6 mb-4">
                       <div className="card border-left-info shadow h-100 py-2">
                           <div className="card-body">
                               <div className="row no-gutters align-items-center">
                                   <div className="col mr-2">
                                       <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                                           Consumables - Edibles
                                       </div>
                                       <Segment
                                           circular style={ {width:80, height:80} }
                                           >
                                           <Link to={user + "/newstrain"}  >
                                               <Menu.Item as='a' onClick={(e) => console.log("ASDMNASDNASNDNASDN", this.props.user)}>
                                                   <i class="large icons">
                                                       <i class="food icon"></i>
                                                       <i class="top right corner add icon"></i>
                                                   </i>
                                               </Menu.Item>
                                           </Link>
                                       </Segment>
                                       <div className="row no-gutters align-items-center">
                                           <div className="col-auto">
                                               <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                                   50%
                                               </div>
                                           </div>
                                           <div className="col">
                                               <div className="progress progress-sm mr-2">
                                                   <div
                                                       className="progress-bar bg-info"
                                                       role="progressbar"
                                                       style={{ width: "50%" }}
                                                       aria-valuenow="50"
                                                       aria-valuemin="0"
                                                       aria-valuemax="100"
                                                       ></div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="col-auto">
                                       <FontAwesomeIcon
                                           icon={faBirthdayCake}
                                           className="fa-4x text-gray-300"
                                           ></FontAwesomeIcon>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>

                   <div className="col-xl-3 col-md-6 mb-4">
                       <div className="card border-left-warning shadow h-100 py-2">
                           <div className="card-body">
                               <div className="row no-gutters align-items-center">
                                   <div className="col mr-2">
                                       <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                           Accessories

                                       </div>
                                       <div className="h5 mb-0 font-weight-bold text-gray-800">
                                           18
                                       </div>
                                   </div>
                                   <div className="col-auto">
                                       <FontAwesomeIcon
                                           icon={faComment}
                                           className="fa-4x text-gray-300"
                                           ></FontAwesomeIcon>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
        )
    }

}

export default withRouter(UserProductContainer)
