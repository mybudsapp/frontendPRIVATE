import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'


class Error extends Component{


    componentDidMount = () => {
        console.log(this.props)
    }


    errorsDisplay = (errors) => {


            let errorObject = Object.assign(errors)

console.log(errorObject)
        //     for (const [key, value] of Object.entries(errorObject)) {
        //   return `${key} ${value}`;
        // }
        let keys = Object.keys(errorObject);

for (var i = 0; i < keys.length; i++) {
    var val = errorObject[keys[i]];
    console.log(i)
    return `${val}`
}


}









render(){

    const {errors} = this.props
    const {errorCode} = this.props

    if(errorCode == 3){
            return <div><p1>{errors.join('')}</p1></div>
    }else if(errorCode == 2){
            return (<div><p1>{this.props.message}</p1>
            <br></br>
            <br></br>
            </div>)
    }else if(errorCode == 1){
                    return <div><p1>{this.props.message}</p1><button onClick={this.props.submitFixedProductRequest}>Yes</button></div>
    }else if(errorCode == 4){
                                    return <div></div>
}else{
        return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />

    }


}
}

export default Error;
