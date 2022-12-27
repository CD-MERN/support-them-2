import React, {Component} from 'react';

class PersonCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            age:  this.props.age
        };
    }
    render(){
        const {firstName, lastName, hairColor} = this.props
        return <>
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={ this.birthDay }>Birthday for {lastName}, {firstName}</button>
        </>
    }
    birthDay = () => {
        this.setState({age: this.state.age+1})
    }
}
export default PersonCard;