import React, {Component} from 'react'
import { withRouter, Link } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Label,
  Input,
  Card,
  Dropdown
} from 'semantic-ui-react'


import home from "../assets/img/home.svg";
import notification from "../assets/img/notification.svg";
import message from "../assets/img/message.svg";
import logo from "../assets/img/logo.svg";
import avatar from "../assets/img/avatar.png";
import p1 from "../assets/img/p1.jpg";
import p2 from "../assets/img/p2.jpg";
import p3 from "../assets/img/p3.jpg";
import p4 from "../assets/img/p4.jpg";
import heart from "../assets/img/heart.png";
import c1 from "../assets/img/c1.jpg";
import c2 from "../assets/img/c2.jpg";
import c3 from "../assets/img/c3.jpg";

import MobileNavBar from "../Components/MobileNavBar"

import "../assets/css/bundle.css";

import CommentDisplay from "../Components/CommentDisplay"
import ProductReview from "../Components/ProductReview"



const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}










class ProductProfile extends Component{

    state = {product:{
        name: "sasdasd",
        city: "orlando",
        state: "florida",
        description: "adasdasdasdasdasdasd"
    }
}




render(){

    const {product} = this.state
    const options = [
  { key: 'Products', text: 'Products', value: 'Products' },
  { key: 'Buddies', text: 'Buddies', value: 'Buddies' },
  { key: 'Shop', text: 'Shop', value: 'Shop' },
]


  return (
    <React.Fragment>
        <div id="custom-css-product">

    

                <div className="page-detail" style={{ marginTop: "50px" }}>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="section-1-title-breadcrumb-rating u-s-m-b-8">
                          <div className="product-title">
                            <h1>
                              <Link to="/">Casual Cotton Jeans</Link>
                            </h1>
                          </div>
                          <ul className="bread-crumb">
                            <li className="has-separator">
                              <Link to="/">Helen's Boutique</Link>
                            </li>
                            <li className="has-separator">
                              <Link to="/">Bottoms</Link>
                            </li>
                            <li className="is-marked">
                              <Link to="/">Pants</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="thumbnail-row">
                          <Link>
                            <img src={p1} alt="Product" />
                          </Link>
                          <Link>
                            <img src={p2} alt="Product" />
                          </Link>
                          <Link>
                            <img src={p3} alt="Product" />
                          </Link>
                          <Link>
                            <img src={p4} alt="Product" />
                          </Link>
                          <Link>
                            <img src={p1} alt="Product" />
                          </Link>

                        </div>
                        <div className="zoom-area">
                          <img
                            id="zoom-pro"
                            className="img-fluid"
                            src={p1}
                            data-zoom-image="images/product/product@4x.jpg"
                            alt="Zoom"
                          />
                          <span className="favouite">
                            <img src={heart} alt="like" className="fav" />
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="all-information-wrapper">
                          <div className="section-3-price-original-discount u-s-p-y-14">
                            <div className="price">
                              <h4>$55.00</h4>
                            </div>
                            <div className="product-rating">
                              <div
                                className="star"
                                title="4.5 out of 5 - based on 23 Reviews"
                              >
                                <span style={{ width: "67px" }}></span>
                              </div>

                            </div>
                          </div>
                          <div className="section-5-product-variants u-s-p-y-14">
                            <div className="section-6-social-media-quantity-actions u-s-p-y-14">
                              <form action="#" className="post-form">
                                <div className="form-group custom-dropdown">
                                  <label for="exampleFormControlSelect1">
                                    Quantity
                                  </label>
                                  <select
                                    className="form-control"
                                    id="exampleFormControlSelect1"
                                  >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </select>
                                </div>
                              </form>
                            </div>
                            <div className="size-group">
                              <h6 className="information-heading u-s-m-b-8">
                                Tags

                              </h6>
                              <div className="u-s-m-b-11">
                                <button type="button" className="btn btn-outline-dark btn-m ml-0">
                                 Washed
                                </button>
                                <button type="button" className="btn btn-outline-dark btn-m ml-0">
                                  Jean
                                </button>
                                <button type="button" className="btn btn-outline-dark btn-m ml-0">
                                  Faded
                                </button>
                                <button type="button" className="btn btn-outline-dark btn-m ml-0">
                                  Big And Tall
                                </button>
                              </div>
                            </div>
                            <div className="size">
                              <h6 className="information-heading u-s-m-b-8">
                                Size
                                <span className="h-text-normal">L</span>
                              </h6>
                              <div className="u-s-m-b-11">
                                <button type="button" className="btn btn-outline-dark btn-m ml-0">
                                  S
                                </button>
                                <button type="button" className="btn btn-outline-dark btn-m ml-0">
                                  M
                                </button>
                                <button type="button" className="btn btn-outline-dark btn-m ml-0">
                                  L
                                </button>
                                <button type="button" className="btn btn-outline-dark btn-m ml-0">
                                  XL
                                </button>
                              </div>
                            </div>
                            <div className="color">
                              <h6 className="information-heading u-s-m-b-8">
                                Color
                                <span className="h-text-normal">Black</span>
                              </h6>
                              <div className="color u-s-m-b-11">
                                <button type="button" className="btn btn-outline-dark btn-m ml-0">
                                  <img src={c1} alt="c1" className="c1" />
                                </button>
                                <button type="button" className="btn btn-outline-dark btn-m ml-0">
                                  <img src={c2} alt="c2" className="c1" />
                                </button>
                                <button type="button" className="btn btn-outline-dark btn-m ml-0">
                                  <img src={c3} alt="c3" className="c1" />
                                </button>
                                <button type="button" className="btn btn-outline-dark btn-m ml-0">
                                  <img src={c1} alt="c1" className="c1" />
                                </button>
                                <button type="button" className="btn btn-outline-dark btn-m ml-0">
                                  <img src={c2} alt="c2" className="c1" />
                                </button>
                                <button type="button" className="btn btn-outline-dark btn-m ml-0">
                                  <img src={c3} alt="c3" className="c1" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container wrapper">
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="review-header">So Comfortable</h4>
                          <div
                            className="star review-star"
                            title="4.5 out of 5 - based on 23 Reviews"
                          >
                            <span style={{ width: "75px" }}></span>
                          </div>
                          <p className="timestamp">
                            @joshuaCLE - 2 days ago, <spna>Verified purchaser</spna>
                          </p>
                          <p className="text-justify review-text">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with
                            the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software
                            like Aldus PageMaker including versions of Lorem Ipsum.
                          </p>

                          <div className="row">
                            <div className="col-md-4 col-6 d-flex align-items-center mt-3">
                              <div className="c100 p100 small green">
                                <span>5.0</span>
                                <div className="slice">
                                  <div className="bar"></div>
                                  <div className="fill"></div>
                                </div>
                              </div>
                              <div className="rating-info">
                                <h5>Comfort</h5>
                                <p>out of 5</p>
                              </div>
                            </div>
                            <div className="col-md-4 col-6 d-flex align-items-center mt-3">
                              <div className="c100 p100 small green">
                                <span>5.0</span>
                                <div className="slice">
                                  <div className="bar"></div>
                                  <div className="fill"></div>
                                </div>
                              </div>
                              <div className="rating-info">
                                <h5>Style</h5>
                                <p>out of 5</p>
                              </div>
                            </div>
                            <div className="col-md-4 col-6 d-flex align-items-center mt-3">
                              <div className="c100 p100 small green">
                                <span>5.0</span>
                                <div className="slice">
                                  <div className="bar"></div>
                                  <div className="fill"></div>
                                </div>
                              </div>
                              <div className="rating-info">
                                <h5>Value</h5>
                                <p>out of 5</p>
                              </div>
                            </div>
                            <div className="col-md-4 col-6 d-flex align-items-center mt-3">
                              <div className="c100 p100 small green">
                                <span>5.0</span>
                                <div className="slice">
                                  <div className="bar"></div>
                                  <div className="fill"></div>
                                </div>
                              </div>
                              <div className="rating-info">
                                <h5>Sizing</h5>
                                <p>out of 5</p>
                              </div>
                            </div>
                          </div>

                          <p className="mt-3 mb-3">Did you find this review helpful?</p>

                          <button
                            type="button"
                            className="btn btn-outline-secondary btn-block"
                          >
                            Helpful
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary btn-block"
                          >
                            Not Helpful
                          </button>
                          <div className="d-flex justify-content-end mt-4">
                            <u>Report review</u>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-12 self-review">
                      <h2 className="text-center">Buddy Ratings &amp; Reviews</h2>
                      <div className="row">
                        <div className="col-6 d-flex flex-column justify-content-center align-items-center self-review-star">
                          <span>4.0</span>
                          <div
                            className="star"
                            title="4.5 out of 5 - based on 23 Reviews"
                          >
                            <span style={{ width: "60px" }}></span>
                          </div>
                          <p>86 star ratings</p>
                        </div>
                        <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                          <div className="c100 p100 small green">
                            <span>5.0</span>
                            <div className="slice">
                              <div className="bar"></div>
                              <div className="fill"></div>
                            </div>
                          </div>
                          <h4 className="review-propositon">69% would recommend</h4>
                          <p>36 recommendations</p>
                        </div>
                      </div>
                      <div className="row mt-3 mb-3">
                        <div className="col-12">
                          <div className="d-flex">
                            <div className="bar-side">
                              <div>5 star</div>
                            </div>
                            <div className="middle">
                              <div className="bar-container">
                                <div className="bar-5"></div>
                              </div>
                            </div>
                            <div className="bar-side right">
                              <div>150</div>
                            </div>
                          </div>

                          <div className="d-flex">
                            <div className="bar-side">
                              <div>4 star</div>
                            </div>
                            <div className="middle">
                              <div className="bar-container">
                                <div className="bar-4"></div>
                              </div>
                            </div>
                            <div className="bar-side right">
                              <div>63</div>
                            </div>
                          </div>

                          <div className="d-flex">
                            <div className="bar-side">
                              <div>3 star</div>
                            </div>
                            <div className="middle">
                              <div className="bar-container">
                                <div className="bar-3"></div>
                              </div>
                            </div>
                            <div className="bar-side right">
                              <div>15</div>
                            </div>
                          </div>

                          <div className="d-flex">
                            <div className="bar-side">
                              <div>2 star</div>
                            </div>
                            <div className="middle">
                              <div className="bar-container">
                                <div className="bar-2"></div>
                              </div>
                            </div>
                            <div className="bar-side right">
                              <div>6</div>
                            </div>
                          </div>

                          <div className="d-flex">
                            <div className="bar-side">
                              <div>1 star</div>
                            </div>
                            <div className="middle">
                              <div className="bar-container">
                                <div className="bar-1"></div>
                              </div>
                            </div>
                            <div className="bar-side right">
                              <div>20</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4 col-6 d-flex align-items-center mt-3">
                          <div className="c100 p100 small green">
                            <span>5.0</span>
                            <div className="slice">
                              <div className="bar"></div>
                              <div className="fill"></div>
                            </div>
                          </div>
                          <div className="rating-info">
                            <h5>Comfort</h5>
                            <p>out of 5</p>
                          </div>
                        </div>
                        <div className="col-md-4 col-6 d-flex align-items-center mt-3">
                          <div className="c100 p100 small green">
                            <span>5.0</span>
                            <div className="slice">
                              <div className="bar"></div>
                              <div className="fill"></div>
                            </div>
                          </div>
                          <div className="rating-info">
                            <h5>Style</h5>
                            <p>out of 5</p>
                          </div>
                        </div>
                        <div className="col-md-4 col-6 d-flex align-items-center mt-3">
                          <div className="c100 p100 small green">
                            <span>5.0</span>
                            <div className="slice">
                              <div className="bar"></div>
                              <div className="fill"></div>
                            </div>
                          </div>
                          <div className="rating-info">
                            <h5>Value</h5>
                            <p>out of 5</p>
                          </div>
                        </div>
                        <div className="col-md-4 col-6 d-flex align-items-center mt-3">
                          <div className="c100 p100 small green">
                            <span>5.0</span>
                            <div className="slice">
                              <div className="bar"></div>
                              <div className="fill"></div>
                            </div>
                          </div>
                          <div className="rating-info">
                            <h5>Sizing</h5>
                            <p>out of 5</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4 pb-5 d-flex flex-column customer-review-image">
                    <h2 className="text-center">Review images</h2>
                    <div className="d-flex justify-content-center">
                      <Link>
                        <img src={p1} className="review-image" alt="Product" />
                      </Link>
                      <Link>
                        <img src={p2} className="review-image" alt="Product" />
                      </Link>
                      <Link>
                        <img src={p2} className="review-image" alt="Product" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <br></br>
            {getWidth() > 650? null : <MobileNavBar active="product" handleAddPostForm={this.props.handleAddPostForm}/>}
  </React.Fragment>
  );
}
};
//When logged in nav bar available <MobileNavBar active="product" />
// calculateTheproductScore = (product) => {
//
//
//
//
//     const allowedIndicaScores = ["mental_indica_score", "physical_indica_score", "velocity_indica_score", "flavor_indica_score", "overall_indica_score"];
//
//     const indicaScoresFiltered = Object.keys(product)
//       .filter(key => allowedIndicaScores.includes(key))
//       .reduce((obj, key) => {
//         obj[key] = product[key];
//         return obj;
//       }, {});
//
//
//       const allowedSativaScores = ["mental_sativa_score", "physical_sativa_score", "velocity_sativa_score", "flavor_sativa_score", "overall_sativa_score"];
//
//       const sativaScoresFiltered = Object.keys(product)
//         .filter(key => allowedSativaScores.includes(key))
//         .reduce((obj, key) => {
//           obj[key] = product[key];
//           return obj;
//         }, {});
//
//
//
//       const sativaBuddyScores = Object.values(sativaScoresFiltered)
//       const indicaBuddyScores = Object.values(indicaScoresFiltered)
//
//
//     //(product, sativaBuddyScores, indicaBuddyScores)
//
//
//
//
// }


// componentDidMount = () => {
    //get the id from url, use the get to get the product from backend
//save to state

    // let token = localStorage.token
    //
    // let product_id = document.location.href.substring(document.location.href.lastIndexOf('/') + 1)
    //
    //


//
//     fetch(`http://localhost:3000/api/v1/products/${product_id}`, {
//       method: "GET",
//       headers: {
//         Authorization: `${token}`,
//         "content-type": "application/json",
//         accepts: "application/json",
//       },
//   } ).then((res) => {
//       if (!res.ok) {
//         //(res)
//       } else {
//         return res.json().then((productData) => {
//
//
//             const allowedIndicaScores = ["mental_indica_score", "physical_indica_score", "velocity_indica_score", "flavor_indica_score", "overall_indica_score"];
//
//             const indicaScoresFiltered = Object.keys(productData)
//             .filter(key => allowedIndicaScores.includes(key))
//             .reduce((obj, key) => {
//                 obj[key] = productData[key];
//                 return obj;
//             }, {});
//
//
//             const allowedSativaScores = ["mental_sativa_score", "physical_sativa_score", "velocity_sativa_score", "flavor_sativa_score", "overall_sativa_score"];
//
//             const sativaScoresFiltered = Object.keys(productData)
//             .filter(key => allowedSativaScores.includes(key))
//             .reduce((obj, key) => {
//                 obj[key] = productData[key];
//                 return obj;
//             }, {});
//
//             const sativaBuddyScores = Object.values(sativaScoresFiltered)
//             const indicaBuddyScores = Object.values(indicaScoresFiltered)
//
//
//
//
//             this.setState({
//                 product: productData,
//                 series: [{ name: "Indica Buddies",
//                   data: [...indicaBuddyScores],
//                   colors: '#e83e8c'
//                 }, { name: "Sativa Buddies",
//                   data: [...sativaBuddyScores],
//                   colors: '#20c997'
//               }],
//               options: {
//                 chart: {
//                     toolbar: {
//                     show: false
//                 },
//                   type: 'bar',
//                   height: 500
//                 },
//                 plotOptions: {
//                   bar: {
//                     horizontal: true,
//                     dataLabels: {
//                       position: 'top',
//                     },
//                   }
//                 },
//                 dataLabels: {
//                   enabled: true,
//                   offsetX: -6,
//                   style: {
//                     fontSize: '12px'
//                   }
//                 },
//                 stroke: {
//                   show: true,
//                   width: 14,
//                   colors: ['#e83e8c', '#20c997']
//                 },
//                 xaxis: {
//                   categories: ["Physical", "Mental", "Velocity", "Flavor", "Overall"],
//                 }
//               }
// })
//     })
// }
// })
//
//
//
//
//
//
//
//
//
//
//
//
// }
//



    // let product = this.state.product
    //
    // const allowedIndicaScores = ["mental_indica_score", "physical_indica_score", "velocity_indica_score", "flavor_indica_score", "overall_indica_score"];
    //
    // const indicaScoresFiltered = Object.keys(product)
    //   .filter(key => allowedIndicaScores.includes(key))
    //   .reduce((obj, key) => {
    //     obj[key] = product[key];
    //     return obj;
    //   }, {});
    //
    //
    //   const allowedSativaScores = ["mental_sativa_score", "physical_sativa_score", "velocity_sativa_score", "flavor_sativa_score", "overall_sativa_score"];
    //
    //   const sativaScoresFiltered = Object.keys(product)
    //     .filter(key => allowedSativaScores.includes(key))
    //     .reduce((obj, key) => {
    //       obj[key] = product[key];
    //       return obj;
    //     }, {});
    //
    //
    //
    //   const sativaBuddyScores = Object.values(sativaScoresFiltered)
    //   const indicaBuddyScores = Object.values(indicaScoresFiltered)


    // //(product, sativaBuddyScores, indicaBuddyScores)

    // this.setState({
    //     series: [{ name: "Indica Buddies",
    //       data: [indicaBuddyScores]
    //     }, { name: "Sativa Buddies",
    //       data: [sativaBuddyScores]
    //     }]
    // })







// <div className="page-detail" style={{ marginTop: "50px" }}>
//   <div className="container">
//     <div className="row">
//       <div className="col-md-12">
//         <div className="section-1-title-breadcrumb-rating u-s-m-b-8">
//           <div className="product-title">
//             <h1>
//               <Link to="/">{product.name}</Link>
//             </h1>
//           </div>
//           <ul className="bread-crumb">
//             <li className="has-separator">
//               <Link to="/">{product.city}</Link>
//             </li>
//             <li className="has-separator">
//               <Link to="/">{product.state}</Link>
//             </li>
//             <li className="has-separator">
//               <Link to="/">{product.product_type}</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     <div className="row">
//       <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
//         <div className="thumbnail-row">
//           <Link>
//             <img src={p1} alt="Product" />
//           </Link>
//           <Link>
//             <img src={p2} alt="Product" />
//           </Link>
//           <Link>
//             <img src={p3} alt="Product" />
//           </Link>
//           <Link>
//             <img src={p4} alt="Product" />
//           </Link>
//           <Link>
//             <img src={p1} alt="Product" />
//           </Link>
//
//         </div>
//         <div className="zoom-area">
//           <img
//             id="zoom-pro"
//             className="img-fluid"
//             src={p1}
//             data-zoom-image="images/product/product@4x.jpg"
//             alt="Zoom"
//           />
//           <span className="favouite">
//             <img src={heart} alt="like" className="fav" />
//           </span>
//         </div>
//       </div>
//       <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
//         <div className="all-information-wrapper">
//           <div className="section-3-price-original-discount u-s-p-y-14">
//             <div className="price">
//               <h4>${product.price} <span className="h-text-normal"> per Gram</span></h4>
//             </div>
//
//           <div className="section-5-product-variants u-s-p-y-14">
//             <div className="section-6-social-media-quantity-actions u-s-p-y-14">
//                 {
//                     //picture of product and people using the bud
//                 }
//             <div className="color">
//               <h6 className="information-heading u-s-m-b-8">
//                 <span className="h-text-normal">Gallery</span>
//               </h6>
//               <div className="color u-s-m-b-11">
//                 <button type="button" className="btn btn-outline-dark btn-m ml-0">
//                   <img src={c1} alt="c1" className="c1" />
//                 </button>
//                 <button type="button" className="btn btn-outline-dark btn-m ml-0">
//                   <img src={c2} alt="c2" className="c1" />
//                 </button>
//                 <button type="button" className="btn btn-outline-dark btn-m ml-0">
//                   <img src={c3} alt="c3" className="c1" />
//                 </button>
//                 <button type="button" className="btn btn-outline-dark btn-m ml-0">
//                   <img src={c1} alt="c1" className="c1" />
//                 </button>
//                 <button type="button" className="btn btn-outline-dark btn-m ml-0">
//                   <img src={c2} alt="c2" className="c1" />
//                 </button>
//                 <button type="button" className="btn btn-outline-dark btn-m ml-0">
//                   <img src={c3} alt="c3" className="c1" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//
// <div className="container wrapper">
//   <div className="container wrapper">
//         <div className="card">
//           <div className="card-body">
//   <div className="row">
//     <div className="col-12">
//
//
//       <h2 className="text-center">Buddy Ratings</h2>
//       <div className="row">
//         <div className="col-6 d-flex flex-column justify-content-center align-items-center self-review-star">
//           <span>4.0{//(product)}</span>
//           <div
//             className="star"
//             title="4.5 out of 5 - based on 23 Reviews"
//           >
//             <span style={{ width: "60px" }}></span>
//
//           </div>
//           <p>86 star ratings</p>
//         </div>
//
//         <Chart options={this.state.options} series={this.state.series} type="bar" height={430} />
//
//         <div className="col-6 d-flex flex-column justify-content-center align-items-center">
//           <div className="c100 p100 small green">
//             <span>5.0</span>
//             <div className="slice">
//               <div className="bar"></div>
//               <div className="fill"></div>
//             </div>
//           </div>
//           <h4 className="review-propositon">69% would recommend</h4>
//           <p>36 recommendations</p>
//         </div>
//       </div>
//
//
//
//       <div className="row mt-3 mb-3">
//         <div className="col-12">
//           <div className="d-flex">
//             <div className="bar-side">
//               <div>5 star</div>
//             </div>
//             <div className="middle">
//               <div className="bar-container">
//                 <div className="bar-5"></div>
//               </div>
//             </div>
//             <div className="bar-side right">
//               <div>150</div>
//             </div>
//           </div>
//
//           <div className="d-flex">
//             <div className="bar-side">
//               <div>4 star</div>
//             </div>
//             <div className="middle">
//               <div className="bar-container">
//                 <div className="bar-4"></div>
//               </div>
//             </div>
//             <div className="bar-side right">
//               <div>63</div>
//             </div>
//           </div>
//
//           <div className="d-flex">
//             <div className="bar-side">
//               <div>3 star</div>
//             </div>
//             <div className="middle">
//               <div className="bar-container">
//                 <div className="bar-3"></div>
//               </div>
//             </div>
//             <div className="bar-side right">
//               <div>15</div>
//             </div>
//           </div>
//
//           <div className="d-flex">
//             <div className="bar-side">
//               <div>2 star</div>
//             </div>
//             <div className="middle">
//               <div className="bar-container">
//                 <div className="bar-2"></div>
//               </div>
//             </div>
//             <div className="bar-side right">
//               <div>6</div>
//             </div>
//           </div>
//
//           <div className="d-flex">
//             <div className="bar-side">
//               <div>1 star</div>
//             </div>
//             <div className="middle">
//               <div className="bar-container">
//                 <div className="bar-1"></div>
//               </div>
//             </div>
//             <div className="bar-side right">
//               <div>20</div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-md-4 col-6 d-flex align-items-center mt-3">
//           <div className="c100 p100 small green">
//             <span>5.0</span>
//             <div className="slice">
//               <div className="bar"></div>
//               <div className="fill"></div>
//             </div>
//           </div>
//           <div className="rating-info">
//             <h5>Comfort</h5>
//             <p>out of 5</p>
//           </div>
//         </div>
//         <div className="col-md-4 col-6 d-flex align-items-center mt-3">
//           <div className="c100 p100 small green">
//             <span>5.0</span>
//             <div className="slice">
//               <div className="bar"></div>
//               <div className="fill"></div>
//             </div>
//           </div>
//           <div className="rating-info">
//             <h5>Style</h5>
//             <p>out of 5</p>
//           </div>
//         </div>
//         <div className="col-md-4 col-6 d-flex align-items-center mt-3">
//           <div className="c100 p100 small green">
//             <span>5.0</span>
//             <div className="slice">
//               <div className="bar"></div>
//               <div className="fill"></div>
//             </div>
//           </div>
//           <div className="rating-info">
//             <h5>Value</h5>
//             <p>out of 5</p>
//           </div>
//         </div>
//         <div className="col-md-4 col-6 d-flex align-items-center mt-3">
//           <div className="c100 p100 small green">
//             <span>5.0</span>
//             <div className="slice">
//               <div className="bar"></div>
//               <div className="fill"></div>
//             </div>
//           </div>
//           <div className="rating-info">
//             <h5>Sizing</h5>
//             <p>out of 5</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//
//   <div className="row mt-4 pb-5 d-flex flex-column customer-review-image" style={{height: "295px"}}>
//     <h2 className="text-center">Review images</h2>
//     <div className="d-flex justify-content-center">
//       <Link>
//         <img src={p1} className="review-image" alt="Product" />
//       </Link>
//       <Link>
//         <img src={p2} className="review-image" alt="Product" />
//       </Link>
//       <Link>
//         <img src={p2} className="review-image" alt="Product" />
//       </Link>
//     </div>
//   </div>
// </div>
// </div>
// </div>
//
// <div className="row">
// <div className="col-12">
// <div className="card">
//   <div className="card-body">
//     <h4 className="review-header">Comments</h4>
//     <div
//       className="star review-star"
//       title="4.5 out of 5 - based on 23 Reviews"
//     >
//       <span style={{ width: "75px" }}></span>
//     </div>
//     <p className="timestamp">
//       Babe - 2 days ago, <spna>Verified purchaser</spna>
//     </p>
//     <p className="text-justify review-text">
//       Lorem Ipsum is simply dummy text of the printing and
//       typesetting industry. Lorem Ipsum has been the industry's
//       standard dummy text ever since the 1500s, when an unknown
//       printer took a galley of type and scrambled it to make a
//       type specimen book. It has survived not only five centuries,
//       but also the leap into electronic typesetting, remaining
//       essentially unchanged. It was popularised in the 1960s with
//       the release of Letraset sheets containing Lorem Ipsum
//       passages, and more recently with desktop publishing software
//       like Aldus PageMaker including versions of Lorem Ipsum.
//     </p>
//
//     <div className="row">
//       <div className="col-md-4 col-6 d-flex align-items-center mt-3">
//         <div className="c100 p100 small green">
//           <span>5.0</span>
//           <div className="slice">
//             <div className="bar"></div>
//             <div className="fill"></div>
//           </div>
//         </div>
//         <div className="rating-info">
//           <h5>Comfort</h5>
//           <p>out of 5</p>
//         </div>
//       </div>
//       <div className="col-md-4 col-6 d-flex align-items-center mt-3">
//         <div className="c100 p100 small green">
//           <span>5.0</span>
//           <div className="slice">
//             <div className="bar"></div>
//             <div className="fill"></div>
//           </div>
//         </div>
//         <div className="rating-info">
//           <h5>Style</h5>
//           <p>out of 5</p>
//         </div>
//       </div>
//       <div className="col-md-4 col-6 d-flex align-items-center mt-3">
//         <div className="c100 p100 small green">
//           <span>5.0</span>
//           <div className="slice">
//             <div className="bar"></div>
//             <div className="fill"></div>
//           </div>
//         </div>
//         <div className="rating-info">
//           <h5>Value</h5>
//           <p>out of 5</p>
//         </div>
//       </div>
//       <div className="col-md-4 col-6 d-flex align-items-center mt-3">
//         <div className="c100 p100 small green">
//           <span>5.0</span>
//           <div className="slice">
//             <div className="bar"></div>
//             <div className="fill"></div>
//           </div>
//         </div>
//         <div className="rating-info">
//           <h5>Sizing</h5>
//           <p>out of 5</p>
//         </div>
//       </div>
//     </div>
//
//     <p className="mt-3 mb-3">Did you find this review helpful?</p>
//
//     <button
//       type="button"
//       className="btn btn-outline-secondary btn-block"
//     >
//       Helpful
//     </button>
//     <button
//       type="button"
//       className="btn btn-outline-secondary btn-block"
//     >
//       Not Helpful
//     </button>
//     <div className="d-flex justify-content-end mt-4">
//       <u>Report review</u>
//     </div>
//   </div>
// </div>
// </div>
// </div>
// </div>
//
//
// </div></div>

// calculateTheproductScore = (product) => {
//
//
//
//
//     const allowedIndicaScores = ["mental_indica_score", "physical_indica_score", "velocity_indica_score", "flavor_indica_score", "overall_indica_score"];
//
//     const indicaScoresFiltered = Object.keys(product)
//       .filter(key => allowedIndicaScores.includes(key))
//       .reduce((obj, key) => {
//         obj[key] = product[key];
//         return obj;
//       }, {});
//
//
//       const allowedSativaScores = ["mental_sativa_score", "physical_sativa_score", "velocity_sativa_score", "flavor_sativa_score", "overall_sativa_score"];
//
//       const sativaScoresFiltered = Object.keys(product)
//         .filter(key => allowedSativaScores.includes(key))
//         .reduce((obj, key) => {
//           obj[key] = product[key];
//           return obj;
//         }, {});
//
//
//
//       const sativaBuddyScores = Object.values(sativaScoresFiltered)
//       const indicaBuddyScores = Object.values(indicaScoresFiltered)
//
//
//     //(product, sativaBuddyScores, indicaBuddyScores)
//
//
// }



export default withRouter(ProductProfile);
