import React from 'react';
class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'xiaoming'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            name: 'xiaoli'
        })
    }

    render() {
        return (
            <div>
                <span>name: {this.state.name}</span>
                <Age age={26} />

                <button onClick={this.handleClick}>change</button>
            </div>
        )
    }
}

// class Age extends React.Component {
//     render() {
//         console.log('a');
//         return (
//             <div>age: {this.props.age}</div>
//         )
//     }
//     shouldComponentUpdate(nextProps, nextState) {
//         if (nextProps.age === this.props.age) {
//             return false;
//         }
//         return true;
//     }
// }

function Age(props) {
    console.log('b');
    return  (
        <div>age: {props.age}</div>
    )
}

export default Person;