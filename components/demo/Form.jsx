import React from 'react';
import Checkbox from './Checkbox.jsx';
import enhanceForm from './enhanceForm.jsx';
import enhanceUi from './ui/enhanceUi.jsx';
import Input from './ui/Input.jsx';
import './form.scss';

const items = ['内部项目', '外部项目', '合作项目'];

// @enhanceForm
// class Form extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             pmName: '',
//             pmNo: '',
//             pmType: '',
//             remark: '',
//             selectedCheckboxes: new Set()
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.toggleCheckbox = this.toggleCheckbox.bind(this);
//     }
//
//     handleChange(e) {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }
//
//     handleSubmit(e) {
//         console.log(this.state);
//         e.preventDefault();
//     }
//
//     toggleCheckbox(label) {
//         if (this.state.selectedCheckboxes.has(label)) {
//             this.state.selectedCheckboxes.delete(label);
//         }
//         else {
//             this.state.selectedCheckboxes.add(label);
//         }
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <div className="form-lst">
//                     <ul className="form-row form-row--2 clearfix">
//                         <FormLi name="项目名称">
//                             <input type="text"
//                                    className="txt txt-l"
//                                    name="pmName"
//                                    value={this.state.pmName}
//                                    maxLength={100}
//                                    autoComplete="off" />
//                         </FormLi>
//                         <FormLi name="项目编号">
//                             <input type="text"
//                                    className="txt txt-l"
//                                    name="pmNo"
//                                    value={this.state.pmNo}
//                                    maxLength={24}
//                                    autoComplete="off"
//                                    placeholder="不填则自动编码"/>
//                         </FormLi>
//                         <FormLi name="项目计划">
//                             <select name="pmType" value={this.state.pmType}>
//                                 <option value="周计划">周计划</option>
//                                 <option value="月度计划">月度计划</option>
//                                 <option value="年度计划">年度计划</option>
//                             </select>
//                         </FormLi>
//                         <FormLi name="项目类型">
//                             {
//                                 (function (that) {
//                                     return items.map(function (item, index) {
//                                         return (
//                                             <label key={index}>
//                                                 <Checkbox chkValue={item}
//                                                           handleCheckboxChange={that.toggleCheckbox}/>
//                                                 {item}
//                                             </label>
//                                         )
//                                     })
//                                 })(this)
//
//                             }
//                         </FormLi>
//                         <FormLi name="项目说明">
//                             <textarea name="remark"
//                                       value={this.state.remark}
//                                       maxLength={2000}/>
//                         </FormLi>
//                     </ul>
//                     <div className="main-ope">
//                         <button type="submit">submit</button>
//                     </div>
//                 </div>
//             </form>
//         );
//     }
// }

@enhanceUi
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pmName: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = props.handleChange.bind(this);
    }

    handleSubmit(e) {
        console.log(this.state);
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-lst">
                    <ul className="form-row form-row--2 clearfix">
                        <FormLi name="项目名称">
                            <Input name="pmName"
                                   value={this.state.pmName}
                                   maxLength={100}
                                   autoComplete="off"
                                   onChange={this.handleChange}/>
                        </FormLi>
                    </ul>
                    <div className="main-ope">
                        <button type="submit">submit</button>
                    </div>
                </div>
            </form>
        );
    }
}

function FormLi(props) {
    return (
        <li className="field">
            <label className="field-tit">{props.name}</label>
            <div className="field-bd">{props.children}</div>
        </li>
    );
}

export default Form;