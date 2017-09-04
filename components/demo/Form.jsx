import React from 'react';
import Checkbox from './Checkbox.jsx';

const items = ['One', 'Two', 'Three'];
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            language: 'react',
            remark: '',
            selectedCheckboxes: new Set()
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleCheckbox = this.toggleCheckbox.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        console.log(this.state);
        e.preventDefault();
    }

    toggleCheckbox(label) {
        if (this.state.selectedCheckboxes.has(label)) {
            this.state.selectedCheckboxes.delete(label);
        }
        else {
            this.state.selectedCheckboxes.add(label);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    name:
                    {
                        // 单向数据绑定
                    }
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                </label>

                {
                    (function(that) {
                        return items.map(function(item, index) {
                            return (
                                <label key={index}>
                                    <Checkbox chkValue={item}
                                              handleCheckboxChange={that.toggleCheckbox} />
                                    {item}
                                </label>
                            )
                        })
                    })(this)

                }


                {/*<input type="radio" name="" id=""/>*/}
                {/*<input type="radio" name="" id=""/>*/}
                {/*<input type="radio" name="" id=""/>*/}

                <select name="language" value={this.state.language} onChange={this.handleChange}>
                    <option value="es6">es6</option>
                    <option value="webpack">webpack</option>
                    <option value="react">react</option>
                    <option value="nodejs">nodejs</option>
                </select>

                <textarea name="remark" value={this.state.remark} onChange={this.handleChange} />

                <button type="submit">submit</button>
            </form>
        );
    }
}

export default Form;