import React from 'react';

export default (WrappedComponent) => {
    class Enhance extends React.Component {

        handleChange(e) {

            console.log(e.target.name);

            this.setState({
                [e.target.name]: e.target.value
            });
        }
        render() {
            return <WrappedComponent {...this.props} handleChange={this.handleChange}/>
        }
    }
    return Enhance;
};