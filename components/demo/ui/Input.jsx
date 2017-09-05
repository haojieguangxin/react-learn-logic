import React from 'react';


class Input extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <input type="text"
                   className="txt txt-l"
                   name={this.props.name}
                   value={this.props.value}
                   maxLength={this.props.maxLength}
                   autoComplete="off"
                   onChange={this.props.onChange} />
        )
    }
}
export default Input;
