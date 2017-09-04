/**
 * Created by zhang-j on 2017/8/18.
 */
// 没有竖边框的表格
import React from 'react';
class TbStrip extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <table class="tb-strip">
                <thead>
                <tr>
                    <th class="g-tit">标题</th>
                    <th class="g-date">报价日期</th>
                    <th class="g-date">报价截止日期</th>
                    <th class="g-serial">推荐供应商</th>
                    <th class="g-serial">收到的报价</th>
                    <th class="g-ope tac">操作</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    {
                        this.props.map((prop) => (
                            <td className="{prop.class}">
                                <TdContent type="{prop.type}" value="{prop.value}"/>
                            </td>
                        ))
                    }
                </tr>
                </tbody>
            </table>
        )
    }
}

function TdContent(props) {
    let type = props.type;
    let result = '';
    switch (type) {
        case 'a':
            result = (
                <a href="{props.href}" target="{props.target}">props.value</a>
            );
            break;
        default:
            result = props.value;
            break;
    }
    return result;
}