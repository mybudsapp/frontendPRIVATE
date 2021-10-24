import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'


class Error extends Component{


    componentDidMount = () => {
        console.log(this.props)
    }



render(){



    if(this.props.errorCode === 1){



        return(
                <p>
                    {this.props.message}
                    <Button onClick={this.props.submitFixedProductRequest}>Yes</Button>
                    <Button onClick={this.props.closeErrorWindow}>No</Button>
            </p>

        )
    }else if(this.props.errorCode === 2) {


                    return <div><p>

            {this.props.message}
            </p>

            <Button onClick={this.props.submitFixedProductRequest}>Yes</Button>
            <Button onClick={this.props.closeErrorWindow}>No</Button>
            </div>

    } else if(this.props.errorCode === 3){


        <div><p>

    {this.props.message}
</p>

<Button onClick={this.props.submitFixedProductRequest}>Yes</Button>
<Button onClick={this.props.closeErrorWindow}>No</Button>
</div>


    } else if(this.props.errorCode === 4) {


                    return <div>

                <p> Complete :)</p>
                <br></br>
                <Button onClick={this.props.handleSoftErrorClose}>Cool</Button>
            </div>
}else{
    return <h1>even worse than we thought... Try Again</h1>
    }
}
}


export default Error;
