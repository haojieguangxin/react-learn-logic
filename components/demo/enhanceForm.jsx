import React from 'react';
import ReactDom from 'react-dom';

function enhanceForm(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
        }
        componentDidMount() {
            let inputs = ReactDom.findDOMNode(this.formComponent).querySelectorAll('input,textarea,select');
            inputs = [...inputs];
            inputs.map((input) => {
                input.addEventListener('input', this.handleChange.bind(this.formComponent));
                // 原生事件绑定的时候，input输入框中的change事件是不会被触发的，因为输入的时候没有设置state中的值
                // 导致输入框中的值一直是空的。我怀疑react中的合成事件，对于input的onChange事件实际上包含了输入的时候的input事件
                input.addEventListener('change', this.handleChange.bind(this.formComponent));
            });
        }
        handleChange(e) {
            console.log(e.target.name);
            console.log(e.target.value);

            this.setState({
                [e.target.name]: e.target.value
            });
        }
        render() {
            return <WrappedComponent ref={(input) => { this.formComponent = input; }}/>
        }
    }
}
export default enhanceForm;