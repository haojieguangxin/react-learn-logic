import React from 'react';

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        };
        this.toggleChange = this.toggleChange.bind(this);
    }

    toggleChange(e) {
        this.setState({
            isChecked: e.target.checked
        });
        this.props.handleCheckboxChange(e.target.value);
    }

    render() {
        return (
            <input type="checkbox"
                   value={this.props.chkValue}
                   checked={this.state.isChecked}
                   onChange={this.toggleChange} />
        );
    }
}

export default Checkbox;