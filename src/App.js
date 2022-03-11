import React, { Component, useState } from "react";
import formData from "form-data";
import axios from "axios";
import PhotoForm from "./Components/PhotoForm";
import StrainForm from "./Components/StrainForm";
import {
  Route,
  Link,
  Switch,
  withRouter,
  Redirect,
  Match,
} from "react-router-dom";
import "./App.css";
import GuestContainerLayout from "./GuestsContainer/GuestContainer";
import ExploreContainer from "./Components/ExploreContainer";
import Home from "./Components/Home";
import UserDashboard from "./Components/UserDashboard.js";
import Profile from "./Components/Profile.js";
import EditProfile from "./Components/EditProfile.js";
import EditStoreForm from './Components/EditStoreForm'
import { useAlert } from "react-alert";
import { Card, Segment, Menu, Sidebar, Icon, Button } from "semantic-ui-react";
import Modal from "react-bootstrap/Modal";
import Error from "./Components/Error";
import StrainCard from "./Components/StrainCard";
import Quiz from "react-quiz-component";
import { quiz } from "./Components/quiz";
import "survey-react/survey.css";
import * as Survey from "survey-react";
import ProductProfile from "./Components/ProductProfile";
import PassWordWall from "./Components/PassWordWall";

class App extends Component {
  state = {
    user: {},
    token: "",
    displayStrainReviewForm: false,
    displayPhotoForm: false,
    displayPostForm: false,
    otherUser: {},
    selectedStrain: {},
    show: true,
    showPersonality: false,
    personalityTestCompleted: false,
    firstTime: false,
    showWelcome: false,
    showEdit: false,
    showAddPostForm: false
  };

  //----------------------Life Cycle Methods should go here--------------------//

  componentDidMount = () => {


    let token = localStorage.token;


//     fetch("http://localhost:3000/user", {
//        method: "GET",
//        headers: {
//          "content-type": "application/json",
//          accepts: "application/json",
//        },
//      }).then((resp) => resp.json())
//          .then((userData) => this.setState({
//              user: userData[0]
//          }));
//
//     ("stikdkdk", this.state)
    // if (Boolean(token)) {
    //   fetch("http://localhost:3000/api/v1/users/sign_in", {
    //     method: "GET",
    //     headers: {
    //       Authorization: `${token}`,
    //       "content-type": "application/json",
    //       accepts: "application/json",
    //     },
    //   }).then((res) => {
    //       if (!res.ok) {
    //         res.text().then(this.props.history.fpush("/home"))
    //       } else {
    //         return res.json().then((userData) => {
    //       this.setState({
    //         user: { ...userData.user },
    //         avatar: { ...userData.user.avatar}
    //       });
    //     })
    //     .then(() => this.props.history.push("/dashboard/"));
    // }})} else {
    //     this.props.history.push("/home")
    // }

    // fetch("http://localhost:3000/api/v1/strains/", {
    //   method: "GET",
    //   headers: {
    //     "content-type": "application/json",
    //     accepts: "application/json",
    //   },
    // }).then((res) => {
    //   if (!res.ok) {
    //     res.text().then((text) => alert(text));
    //   } else {
    //     return res.json().then((strainData) => {
    //       this.setState({ strains: strainData });
    //     });
    //   }
    // });


    // var map;
    //
    // function initialize() {
    // // Create a map centered in Pyrmont, Sydney (Australia).
    // map = new google.maps.Map(document.getElementById('map'), {
    // center: {lat: -33.8666, lng: 151.1958},
    // zoom: 15
    // });
    //
    // // Search for Google's office in Australia.
    // var request = {
    // location: map.getCenter(),
    // radius: '500',
    // query: 'Google Sydney'
    // };
    //
    // var service = new google.maps.places.PlacesService(map);
    // service.textSearch(request, callback);
    // }
    //
    // // Checks that the PlacesServiceStatus is OK, and adds a marker
    // // using the place ID and location from the PlacesService.
    // function callback(results, status) {
    // if (status == google.maps.places.PlacesServiceStatus.OK) {
    // var marker = new google.maps.Marker({
    // map: map,
    // place: {
    // placeId: results[0].place_id,
    // location: results[0].geometry.location
    // }
    // });
    // }
    // }

    // fetch("http://localhost:3000/api/v1/strains/", {
    //   method: "GET",
    //   headers: {
    //     "content-type": "application/json",
    //     accepts: "application/json",
    //   },
    // }).then((res) => {
    //   if (!res.ok) {
    //     res.text().then((text) => alert(text));
    //   } else {
    //     return res.json().then((strainData) => {
    //       this.setState({ strains: strainData });
    //     });
    //   }
    // });
  };

  //---------------------------------------------------------------------------------------





  //------------------Strain Review Functions-----------------////

  submitNewStrainReviewHandler = (newStrainReview) => {
    fetch("http://localhost:3000/api/v1/strain_reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
      },
      body: JSON.stringify({
        strain_review: newStrainReview,
        user_id: this.state.user.id,
      }),
    }).then((res) => {
      if (!res.ok) {
        res.text().then((text) => alert(text));
      } else {
        return res
          .json()
          .then(res =>     (res))
          .then(window.location.reload());
      }
    });
  };





  logOutHandler = () => {
    localStorage.removeItem("token");
    this.props.history.push("/Home");
  };




  //---------------------------store functions------------------------//



  editStoreHandler = (e, newStore, store_id) => {
    // needs token, auth???

    e.preventDefault()

    ("ITSBEENHIOT")


    if (newStore.avatar? true : false) {
      const fd = new formData();

      fd.append("avatar", newStore.avatar);

      axios
        .patch(
          `http://localhost:3000/api/v1/stores/${store_id}`,
          fd,
          {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          }
        )
        .then(
          fetch(
            `http://localhost:3000/api/v1/stores/${store_id}`,
            {
              method: "PATCH",
              headers: {
                // Authorization: `${token}`,
                "content-type": "application/json",
                accepts: "application/json",
              },
              body: JSON.stringify({ store: newStore }),
            },
                ("PATCHESSSS", newStore)
          )
        )
        .then(window.location.reload());
    } else {
      fetch(`http://localhost:3000/api/v1/stores/${store_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          accepts: "application/json",
        },
        body: JSON.stringify({ store: newStore }),
      })
        .then((res) => res.json())
        .then(window.location.reload());
    }
  };





  submitStoreHandler = (newStore, user_id) => {


    fetch("http://localhost:3000/api/v1/stores", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
      },
      body: JSON.stringify({ store: newStore }),
    }).then((res) => {
      if (!res.ok) {
        res.text().then((text) => alert(text));
      } else {
        return res
          .json()
          .then((storeData) => {
            this.setState({ store: { ...storeData.store } });
          })
          .then(window.location.reload());
      }
    });
  };

  deleteStoreRequest = (e) => {


     let store_id = e.target.parentElement.parentElement.getAttribute("store");



    return fetch(`http://localhost:3000/api/v1/stores/${store_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
      },
    }).then((res) => {
      if (!res.ok) {
        res.text().then((text) => alert(text));
      } else {
        window.location.reload();
      }
    });
  };

   handleShowEdit = (store_id, namespace) => {
    this.setState({
        store_namespace: namespace,
        store_id: store_id,
        showEdit: true
    });
  };

  handleShowEditClose = () => {
    this.setState({ showEdit: !this.state.showEdit });
  };

  handleShowErrorClose = () =>{
      this.setState({ hasError: !this.state.hasError})
  }











  //---------------------------Strain functions------------------------//
  editStrainHandler = (newStrain, strain_id) => {



    if (newStrain.avatar) {
      const fd = new formData();

      fd.append("avatar", newStrain.avatar);

      axios
        .patch(`http://localhost:3000/api/v1/strains/${strain_id}`, fd, {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        .then(
          fetch(
            `http://localhost:3000/api/v1/strains/${strain_id}`,
            {
              method: "PATCH",
              headers: {
                // Authorization: `${token}`,
                "content-type": "application/json",
                accepts: "application/json",
              },
              body: JSON.stringify({ strain: newStrain }),
            },
                ("PATCHESSSS", newStrain)
          )
        )
        .then(    ("PATCHESSS", newStrain));
    } else {
      fetch(`http://localhost:3000/api/v1/strains/${strain_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          accepts: "application/json",
        },
        body: JSON.stringify({ strain: newStrain }),
      })
        .then((res) => res.json())
        .then(    ("noPATTCHES", newStrain));
    }
  };




  submitFixedStrainRequest = () => {

          ("ponderiver")

      fetch("http://localhost:3000/api/v1/strains", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accepts: "application/json",
        },
        body: JSON.stringify({ strain: this.state.newStrain, sameGrower: true}),
      }).then((res) => {
        if (!res.ok) {
            res.text().then(text =>

          this.setState({
              errorMessage: text,
          hasError: true
          })

      )} else {

          return res
            .json()
            .then((strainData) => {
              this.setState({ strain: { ...strainData.strain } });
            })
            .then(window.location.reload());
        }
      });
  }




  deleteStrainRequest = (e) => {


    let strain_id = e.target.parentElement.parentElement.getAttribute("id");


    return fetch(`http://localhost:3000/api/v1/strains/${strain_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
      },
    }).then((res) => {
      if (!res.ok) {
        res.text().then((text) => alert(text));
      } else {
        window.location.reload();
      }
    });
  };

  handleViewStrainProfile = (e) => {
        ("is this shit even being hit");

    fetch(`http://localhost:3000/api/v1/strains/${e.target.id}`)
      .then((res) => res.json())
      .then((strainData) =>
        this.setState({
          selectedStrain: { ...strainData },
        })
      );
    // this.props.history.push("/explore/" + String(this.state.otherStrain.strain_name))
  };

  //---------------------------Products Functions------------------------//




  editProductHandler = (newProduct, product_id) => {



    if (newProduct.avatar) {
      const fd = new formData();

      fd.append("avatar", newProduct.avatar);

      axios
        .patch(`http://localhost:3000/api/v1/products/${product_id}`, fd, {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        .then(
          fetch(
            `http://localhost:3000/api/v1/products/${product_id}`,
            {
              method: "PATCH",
              headers: {
                // Authorization: `${token}`,
                "content-type": "application/json",
                accepts: "application/json",
              },
              body: JSON.stringify({ product: newProduct }),
            },
                ("PATCHESSSS", newProduct)
          )
        )
        .then(    ("PATCHESSS", newProduct));
    } else {
      fetch(`http://localhost:3000/api/v1/products/${product_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          accepts: "application/json",
        },
        body: JSON.stringify({ product: newProduct }),
      })
        .then((res) => res.json())
        .then(    ("noPATTCHES", newProduct));
    }
  };

  submitProductHandler = (newProduct, user_id) => {

      this.setState({
          newProduct: newProduct
      })


    fetch("http://localhost:3000/api/v1/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
      },
      body: JSON.stringify({ product: newProduct }),
    }).then((res) => {

      if (!res.ok) {
          res.text().then(text =>

        this.setState({
            errorMessage: text,
        hasError: true
        })

    )} else {


        return res
          .json()
          .then((productData) => {
            this.setState({ product: { ...productData.product } });
          })
          .then(window.location.reload());
      }
    });
  };


  submitFixedProductRequest = () => {

          ("ponderiver")

      fetch("http://localhost:3000/api/v1/products", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accepts: "application/json",
        },
        body: JSON.stringify({ product: this.state.newProduct, sameGrower: true}),
      }).then((res) => {
        if (!res.ok) {
            res.text().then(text =>

          this.setState({
              errorMessage: text,
          hasError: true
          })

      )} else {

          return res
            .json()
            .then((productData) => {
              this.setState({ product: { ...productData.strain } });
            })
            .then(window.location.reload());
        }
      });
  }




  deleteProductRequest = (e) => {


    let product_id = e.target.parentElement.parentElement.getAttribute("id");


    return fetch(`http://localhost:3000/api/v1/products/${product_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
      },
    }).then((res) => {
      if (!res.ok) {
        res.text().then((text) => alert(text));
      } else {
        window.location.reload();
      }
    });
  };

  handleViewProductProfile = (e) => {
        ("is this shit even being hit");

    fetch(`http://localhost:3000/api/v1/products/${e.target.id}`)
      .then((res) => res.json())
      .then((productData) =>
        this.setState({
          selectedProduct: { ...productData },
        })
      );
    // this.props.history.push("/explore/" + String(this.state.otherStrain.strain_name))
  };









  //-----------------------Fetch&API Handlers Should Go Here---------------------------------

  signupSubmitHandler = (userInfo) => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
      },
      body: JSON.stringify({ user: userInfo }),
    }).then((res) => {
      if (!res.ok) {
        res.text().then((text) => alert(text));
      } else {
        return res
          .json()
          .then((userData) => {
            this.setState({
              user: { ...userData.user },
              token: userData.jwt
            });
          })
          .then(() => localStorage.setItem("token", this.state.token))
          .then(this.props.history.push("/dashboard/"));
      }
    });
  };

  loginSubmitHandler = (userInfo) => {
    // fetch("http://localhost:3000/api/v1/users/sign_in", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //     accepts: "application/json",
    //   },
    //   body: JSON.stringify({ user: userInfo }),
    // }).then((res) => {
    //   if (!res.ok) {
    //     res.text().then((text) => alert(text));
    //   } else {
    //     return res
    //       .json()
    //       .then((userData) => {
    //         this.setState({
    //           user: { ...userData.user },
    //           token: userData.jwt
    //         });
    //       })
    //       .then(() => localStorage.setItem("token", this.state.token))


          // .then(
              this.props.history.push("/dashboard/")
          // );
}

  submitHandler = (userinfo, token, user_id) => {
    const fd = new formData();

    fd.append("avatar", userinfo.avatar);

    if (userinfo.avatar) {
      axios
        .patch(`http://localhost:3000/api/v1/users/${user_id}`, fd, {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        .then(
          fetch(`http://localhost:3000/api/v1/users/${user_id}`, {
            method: "PATCH",
            headers: {
              Authorization: `${token}`,
              "content-type": "application/json",
              accepts: "application/json",
            },
            body: JSON.stringify({ user: userinfo }),
          })
        )
        .then(this.props.history.push("/profile"));
    } else {
      fetch(`http://localhost:3000/api/v1/users/${user_id}`, {
        method: "PATCH",
        headers: {
          Authorization: `${token}`,
          "content-type": "application/json",
          accepts: "application/json",
        },
        body: JSON.stringify({ user: userinfo }),
      })
        .then((res) => res.json())
        .then(this.props.history.push("/profile"));
    }
  };

  submitPhotoHandler = (userInfo, token) => {
    const fd = new formData();

    let user_id = this.state.user.id;

    fd.append("image", userInfo.image);
    fd.append("description", userInfo.description);

    axios
      .patch(`http://localhost:3000/api/v1/gallery/${user_id}`, fd, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: token,
        },
      })
      .then(window.location.reload());
  };

  deletePhotoRequest = (e) => {
    let token = localStorage.token;

    let photo_id = e.target.parentElement.parentElement.parentElement.id;

    return fetch(`http://localhost:3000/api/v1/photos/${photo_id}`, {
      method: "DELETE",
      headers: {
        Authorization: `${token}`,
        "content-type": "application/json",
        accepts: "application/json",
      },
    }).then((res) => {
      if (!res.ok) {
        res.text().then((text) => alert(text));
      } else {
        window.location.reload();
      }
    });
  };

  handleNewFriendRequest = (user_id, friend_id) => {
    fetch("http://localhost:3000/api/v1/friend_request", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
      },
      body: JSON.stringify({ user_id: user_id }), //
    }).then((res) => {
      if (!res.ok) {
        res.text().then((text) => alert(text));
      } else {
        return res.json().then((userData) => {
          this.setState({
            user: { ...userData.user },
          });
        });
      }
    });
  };

  //---------------------------------------------------------------------------------------

  // ShowServerError = (error) => {
  //     if (!error) {
  //         return null;
  //     }
  //     return (
  //         <div className="alert">
  //             {error instanceof window.Response ? (
  //                 <p>
  //                     <b>{error.status}</b> on <b>{error.url}</b>
  //                     <br />
  //                     <small>{error.statusText}</small>
  //                 </p>
  //             ) : (
  //                 <p>
  //                     <code>{error.toString()}</code>
  //                 </p>
  //             )}
  //         </div>
  //     );
  // }

  // function deepIterator(error) {
  //   if (typeof error === "object") {
  //     for (const message in error) {
  //       deepIterator(error[message]);
  //     }
  //   } else {
  //         (error);
  //
  //     if (hasError) {
  //       alert(error);
  //     }
  //   }
  // }

  //----------------------------Small Event Handlers Should Go Here-----------------------

  handleEditClick = () => {
    this.props.history.push("/edit");
  };

  handleNewPhotoClick = () => {
    //should set new photo state to true and render new photo form component
        ("wowowowowow buddy");
    this.setState({
      displayPhotoForm: !this.state.displayPhotoForm,
    });
  };

  handleNewPostClick = () => {
        ("wowowowowow");
    this.setState({
      displayPostForm: !this.state.displayPostForm,
    });
  };

  handleNewStrainReviewClick = () => {
        ("from the new strain review click");
    this.setState({
      displayStrainReviewForm: !this.state.displayStrainReviewForm,
    });
  };

  handleViewUserProfile = (e) => {
    fetch(`http://localhost:3000/api/v1/users/${e.target.id}`)
      .then((res) => res.json())
      .then((userData) =>
        this.setState({
          otherUser: { ...userData.user },
        })
      );
    this.props.history.push(
      "/explore/" + String(this.state.otherUser.username)
    );
  };

  handleClose = () => {
    this.setState({ show: false, firstTime: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  //---------------------------------------------------------------------------------------
  handleAddPostForm = () => {

          ("ITITITITIT")
      this.setState({ showAddPostForm: true });
  }

  handleShowWelcome = () => {
    this.setState({ showWelcome: true });
  };

  handleCloseWelcome = () => {
    this.setState({ showWelcome: !this.state.showWelcome });
  };

  handleShowPersonality = () => {
    this.setState({ showPersonality: true });
  };

  handleShowPersonalityclose = () => {
    this.setState({ showPersonality: !this.state.showPersonality });
  };

  takeTheTest = () => {
    this.setState({ personalityTest: true });
  };

  displayError = () => {
      return <div>
          this.state.error
      </div>
  }



  passwordHandler = (password) => {


        
      if(password.Password == "ThankYou4coming") {

          localStorage.setItem("token", "good to go")

          this.props.history.push("/welcome")
      } else {
          this.props.history.push("/Home")
      }

  }

  render() {
    const sendDataToServer = (survey) => {
      //send Ajax request to your web server.

      let token = localStorage.token;

      fetch("http://localhost:3000/api/v1/personalitytests", {
        method: "POST",
        headers: {
          Authorization: `${token}`,
          "content-type": "application/json",
          accepts: "application/json",
        },
        body: JSON.stringify({ survey: survey.data }),
      }).then((res) => {
        if (!res.ok) {
          res.text().then((text) =>     (text));
        } else {
          return res.json().then(window.location.reload());
        }
      });



      alert("Your New Personality Type is....." + this.state.user.personality_type);
    };



    var surveyJSON = {
      title: "Why is This Important?",
      pages: [
        {
          name: "page1",
          elements: [
            {
              type: "expression",
              name: "question1",
              title: "So why is this important?",
              description: "bn b nb nb nb nb nb nb nb nb ",
              hideNumber: true,
            },
            {
              type: "expression",
              name: "question1",
              title: "So why is this important?",
              description: "bn b nb nb nb nb nb nb nb nb ",
              hideNumber: true,
            },
          ],
        },
        {
          name: "page1",
          elements: [
            {
              type: "boolean",
              name: "question2",
              indent: 2,
              title: "I show my feelings when I'm happy. ",
              description:
                "You let others know your happy, verbally or physically.",
              descriptionLocation: "underInput",
              labelTrue: "True",
              labelFalse: "False",
              hideNumber: true,
              showTitle: true,
            },
            {
              type: "boolean",
              name: "question3",
              useDisplayValuesInTitle: false,
              indent: 2,
              title: "I can't be bothered with other people's needs.",
              description:
                "You do not like to think of what someone else might need.",
              descriptionLocation: "underInput",
              labelTrue: "True",
              labelFalse: "False",
              hideNumber: true,
            },
            {
              type: "boolean",
              name: "question4",
              indent: 2,
              title: "I reveal little of myself.",
              description:
                "You keep most of your emotions and story to yourself. ",
              descriptionLocation: "underInput",
              labelTrue: "True",
              labelFalse: "False",
              hideNumber: true,
            },
            {
              type: "boolean",
              name: "question1",
              indent: 2,
              title: "I hate to seem pushy. ",
              description: "You go out of your way to seem NOT pushy.",
              descriptionLocation: "underInput",
              labelTrue: "True",
              labelFalse: "False",
              hideNumber: true,
            },
          ],
        },
        {
          name: "page2",
          elements: [
            {
              type: "boolean",
              name: "question6",
              indent: 2,
              title:
                "I see beauty in things that most people wouldn't notice. ",
              description: "You are no stranger to daydreams.",
              descriptionLocation: "underInput",
              labelTrue: "True",
              labelFalse: "False",
              hideNumber: true,
            },
            {
              type: "boolean",
              name: "question5",
              indent: 2,
              title: "I am not easily annoyed. ",
              description: 'You have a tolerance for people\'s "mistakes".',
              descriptionLocation: "underInput",
              labelTrue: "True",
              labelFalse: "False",
              hideNumber: true,
            },
            {
              type: "boolean",
              name: "question8",
              indent: 2,
              title: "I take advantage of others.",
              description: "You take when you can.",
              descriptionLocation: "underInput",
              labelTrue: "True",
              labelFalse: "False",
              hideNumber: true,
            },
            {
              type: "boolean",
              name: "question7",
              indent: 2,
              title: "I take interest in other people's lives. ",
              description: "You care about their story.",
              descriptionLocation: "underInput",
              labelTrue: "True",
              labelFalse: "False",
              hideNumber: true,
            },
          ],
        },
        {
          name: "page3",
          elements: [
            {
              type: "boolean",
              name: "question11",
              indent: 2,
              title: "I'm up for anything, twice!",
              description: "You are less fearful of consequences.",
              descriptionLocation: "underInput",
              labelTrue: "True",
              labelFalse: "False",
              hideNumber: true,
            },
            {
              type: "boolean",
              name: "question10",
              indent: 2,
              title: "I'm hard to get to know.",
              description: "You wait for others to lead the way.",
              descriptionLocation: "underInput",
              labelTrue: "True",
              labelFalse: "False",
              hideNumber: true,
            },
            {
              type: "boolean",
              name: "question9",
              indent: 2,
              title: 'I can easily be "stirred-up" or agitated.',
              description: "Your mood can swing, easily.",
              labelTrue: "True",
              labelFalse: "False",
              descriptionLocation: "underInput",
              hideNumber: true,
            },
          ],
        },
      ],
    };

    const { hasError } = this.state;

    const { errors } = this.state;

    const { history } = this.props;

    const { show } = this.state;

    const { showPersonality } = this.state;

    const { showWelcome } = this.state;

    const { user } = this.state;

    const { personalityTest } = this.state;

    const { firstTime } = this.state;

    const { showAddPostForm } = this.state;

    const onCompleteAction = (obj) => {

      // YOUR LOGIC GOES HERE
    };




    return (
      <React.Fragment>

        <Modal centered={true} size="lg" show={showWelcome}>
          <Modal.Header textAlign="center">
            <h3>Welcome to My Buds! </h3>
          </Modal.Header>
          <Modal.Body>
            <span>This Proof of Concept was built and developed as a Pre-Cursor to a Native Application for Apple and Android Devices </span>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseWelcome}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>



        <Modal centered={true} size="lg" show={showPersonality}>
          <Modal.Header>
            <h3>My Bud's Personality Test</h3>
            <div id="map"></div>
          </Modal.Header>
          <Modal.Body show={personalityTest}>
            <div id="surveyContainer">
              {!this.state.personalityTestCompleted ? (
                <Survey.Survey
                  json={surveyJSON}
                  onComplete={sendDataToServer}
                />
              ) : null}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={this.handleShowPersonalityclose}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal centered={true} size="lg" show={hasError} >

          <Modal.Header>
            <h3>Something Went Wrong...</h3>
          </Modal.Header>
          <Modal.Body>
           <Error message={this.state.errorMessage} submitFixedStrainRequest={this.submitFixedStrainRequest} closeErrorWindow={this.handleShowErrorClose}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShowErrorClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal centered={true} size="lg" show={this.state.showEdit} >

          <Modal.Header>
            <h3>Edit</h3>
          </Modal.Header>
          <Modal.Body>
           <EditStoreForm user={this.state.user} namespace={this.state.store_namespace} storeid={this.state.store_id} editStoreHandler={this.editStoreHandler}></EditStoreForm>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShowEditClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>


        <Switch>
          <Route
            path="/signup"
            render={(props) => {
              return (
                <GuestContainerLayout
                  signupSubmitHandler={this.signupSubmitHandler}
                />
              );
            }}
          />
          <Route
            path="/login"
            render={() => (
              <GuestContainerLayout loginHandler={this.loginSubmitHandler} />
            )}
          />
            <Route
              path="/enterpassword"
              render={() => (
                    <PassWordWall
                        passwordHandler={this.passwordHandler}

                    />
            )}
            />
            <Route
              path="/welcome"
              render={() => (
                    <UserDashboard
                      user={this.state.user}
                      handleViewUserProfile={this.handleViewUserProfile}
                      avatar={this.state.avatar}
                      history={this.props.history}
                      stores={this.state.user.stores}
                      deleteStoreRequest={this.deleteStoreRequest}
                      editStoreHandler={this.editStoreHandler}
                      strains={this.state.user.strains}
                      submitStrainHandler={this.submitStrainHandler}
                      deleteStrainRequest={this.deleteStrainRequest}
                      sendThisStrainToEdit={this.sendThisStrainToEdit}
                      products={this.state.user.products}
                      submitProductHandler={this.submitProductHandler}
                      deleteProductRequest={this.deleteProductRequest}
                      submitNewStrainReviewHandler={this.submitNewStrainReviewHandler}
                      handleShowEdit={this.handleShowEdit}
                      handleShowEditClose={this.handleShowEditClose}
                      handleShowPersonality={this.handleShowPersonality}
                      handleAddPostForm={this.handleAddPostForm}
                      handleShowWelcome={this.handleShowWelcome}
                      handleDeletePhoto={this.deletePhotoRequest}
                      logOutHandler={this.logOutHandler}
                      submitHandler={this.submitHandler}
                    />
            )}
            />
          <Route
            path="/profile"
            render={() => (
              <Profile
                user={this.state.user}
                avatar={this.state.avatar}
                history={this.props.history}
                strains={this.state.user.strains}
                gallery={this.state.user.gallery}
                handleEditClick={this.handleEditClick}
                handleAddPostForm={this.handleAddPostForm}
                handleNewPostClick={this.handleNewPostClick}
                handleNewPhotoClick={this.handleNewPhotoClick}
                handleNewStrainReviewClick={this.handleNewStrainReviewClick}
              />
            )}
          />

          <Route path="/home" render={() => <Home />} />
          <Route
            path="/explore"
            render={() => (
              <ExploreContainer
                user={this.state.user}
                avatar={this.state.avatar}
                handleAddPostForm={this.handleAddPostForm}
                handleViewUserProfile={this.handleViewUserProfile}
                handleNewFriendRequest={this.handleNewFriendRequest}
                handleViewStrainProfile={this.handleViewStrainProfile}
                logOutHandler={this.logOutHandler}
              />
            )}
          />
          <Route
            path="/product"
            render={() => (
              <ProductProfile
                  handleAddPostForm={this.handleAddPostForm}
                strains={this.state.strains}
                submitNewStrainReviewHandler={this.submitNewStrainReviewHandler}
              />
            )}
          />
          <Route
            path="/Post"
            render={() => (
             <GuestContainerLayout/>
            )}
          />
          <Route path="/" component={Home} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
