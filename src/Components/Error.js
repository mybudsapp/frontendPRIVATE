import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'


class Error extends Component{






render(){


    if(this.props.message === "Name Already Exists"){



        return(
                <div>
                    <p>Name Already Exists</p>
        </div>

        )
    }else if(this.props.message.includes("provided by") ){


                    return <div><p>

                Is this Strain grown by {this.props.message.split(",")[1]}
            </p>

            <Button onClick={this.props.submitFixedStrainRequest}>Yes</Button>
            <Button onClick={this.props.closeErrorWindow}>No</Button>
            </div>

    } else if(this.props.message.includes("complete") ){


                    return <div>

                <p> Complete :)</p>
            </div>

    }else{
    return <h1>even worse than we thought... Try Again</h1>
    {console.log("bput", this.props.message)}
    }



    }
}


export default Error;
