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
import Chart from "react-apexcharts";
import CommentDisplay from "../Components/CommentDisplay"
import StrainReview from "../Components/StrainReview"

class StrainProfile extends Component{

    state = {
series: [{ name: "Indica Buddies",
  data: [44, 55, 41, 64, 22]
}, { name: "Sativa Buddies",
  data: [53, 32, 33, 52, 13]
}],
options: {
  chart: {
      toolbar: {
      show: false
  },
    type: 'bar',
    height: 430
  },
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        position: 'top',
      },
    }
  },
  dataLabels: {
    enabled: true,
    offsetX: -6,
    style: {
      fontSize: '12px',
      colors: ['#fff']
    }
  },
  stroke: {
    show: true,
    width: 1,
    colors: ['#fff']
  },
  xaxis: {
    categories: ["Physical", "Mental", "Velocity", "Flavor", "Overall"],
  },
}


}


componentDidMount = () => {
    //get the id from url, use the get to get the strain from backend
//save to state

    let token = localStorage.token

    let strain_id = document.location.href.substring(document.location.href.lastIndexOf('/') + 1)


    //
    //
    //
    // {make 2 new arrays with strain scores, indica buddies, sativa buddies}
    //
    //
    // function indicaBuddyScores(strain) {
    //
    //
    //
    //     t.float "strainData.mental_indica_score"
    // t.float "strainData.physical_indica_score"
    // t.float "strainData.velocity_indica_score"
    // t.float "strainData.flavor_indica_score"
    // t.float "strainData.overall_indica_score"
    //
    //
    //     this.setState({
    //         series: [{ name: "Indica Buddies",
    //           data: [44, 55, 41, 64, 22]
    //         }, { name: "Sativa Buddies",
    //           data: [53, 32, 33, 52, 13]
    //         }]
    // }
    //
    // function filterByType(product, props) {
    //     if (product.producttype == "Concentrate"){
    //         return <ProductCard product={product}
    //             user={props.user}
    //             submitProductHandler={props.submitProductHandler}
    //             deleteProductRequest={props.deleteProductRequest}
    //             raised/>
    //
    //
    //
    //



    fetch(`http://localhost:3000/api/v1/strains/${strain_id}`, {
      method: "GET",
      headers: {
        Authorization: `${token}`,
        "content-type": "application/json",
        accepts: "application/json",
      },
  } ).then((res) => {
      if (!res.ok) {
        console.log(res)
      } else {
        return res.json().then((strainData) => {

      this.setState({
        strain: { ...strainData}
      })
    })
}
})








}



// <div className="page-detail" style={{ marginTop: "50px" }}>
//   <div className="container">
//     <div className="row">
//       <div className="col-md-12">
//         <div className="section-1-title-breadcrumb-rating u-s-m-b-8">
//           <div className="product-title">
//             <h1>
//               <Link to="/">{strain.name}</Link>
//             </h1>
//           </div>
//           <ul className="bread-crumb">
//             <li className="has-separator">
//               <Link to="/">{strain.city}</Link>
//             </li>
//             <li className="has-separator">
//               <Link to="/">{strain.state}</Link>
//             </li>
//             <li className="has-separator">
//               <Link to="/">{strain.strain_type}</Link>
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
//               <h4>${strain.price} <span className="h-text-normal"> per Gram</span></h4>
//             </div>
//
//           <div className="section-5-product-variants u-s-p-y-14">
//             <div className="section-6-social-media-quantity-actions u-s-p-y-14">
//                 {
//                     //picture of strain and people using the bud
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
//           <span>4.0{console.log(strain)}</span>
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

calculateTheStrainScore = (strain) => {




    const allowedIndicaScores = ["mental_indica_score", "physical_indica_score", "velocity_indica_score", "flavor_indica_score", "overall_indica_score"];

    const indicaScoresFiltered = Object.keys(strain)
      .filter(key => allowedIndicaScores.includes(key))
      .reduce((obj, key) => {
        obj[key] = strain[key];
        return obj;
      }, {});


      const allowedSativaScores = ["mental_sativa_score", "physical_sativa_score", "velocity_sativa_score", "flavor_sativa_score", "overall_sativa_score"];

      const sativaScoresFiltered = Object.keys(strain)
        .filter(key => allowedSativaScores.includes(key))
        .reduce((obj, key) => {
          obj[key] = strain[key];
          return obj;
        }, {});



      const sativaBuddyScores = Object.values(sativaScoresFiltered)
      const indicaBuddyScores = Object.values(indicaScoresFiltered)

    console.log(sativaBuddyScores)


}


render(){


    const {strain} = this.state

  return (
    <React.Fragment>

      {strain? <div id="custom-css-product">

<Segment>
    {
        this.calculateTheStrainScore(strain)
    }
    <div className="page-detail" style={{ marginTop: "50px" }}>
      <div className="container">
        <div className="row">
            <h1>
                {strain.name}
            </h1>

          <div className="col-md-12">
            <div className="section-1-title-breadcrumb-rating u-s-m-b-8">
              <div className="product-title">
                  <img
                      id="zoom-pro"
                      className="img-fluid"
                      src={p1}
                      data-zoom-image="images/product/product@4x.jpg"
                      alt="Zoom"
                      />
              </div>
              <ul className="bread-crumb">
                  <span>
                      <h1>${strain.price} per Gram</h1>
                  </span>
                <li className="has-separator">
                  <Link to="/">{strain.city}</Link>
                </li>
                <li className="has-separator">
                  <Link to="/">{strain.state}</Link>
                </li>
                <li className="has-separator">
                  <Link to="/">{strain.strain_type}</Link>
                </li>
                <li className="has-colon">
                  <Link to="/">Description</Link>
                </li>
              </ul>
              {strain.description}
            </div>
          </div>

        </div>
<br></br>
<br></br>
<br></br>
        <h2>Buddy Ratings</h2>
<Chart options={this.state.options} series={this.state.series} type="bar" height={430} />
    <br></br>
    <br></br>
    <br></br>
    <StrainReview submitNewStrainReviewHandler={this.props.submitNewStrainReviewHandler}/>
        <Segment raised textAlign='center'>
          <h3>Review Comments</h3>

          <CommentDisplay photoID={this.state.currentPhotoId} comments={this.state.currentPhotoComments} commentType="photo" submitCommentHandler={this.submitCommentHandler} />
        </Segment>


        </div>
        </div>
    </Segment>
</div>
: null}

  </React.Fragment>
  );
}
};
//When logged in nav bar available <MobileNavBar active="product" />

export default withRouter(StrainProfile);
