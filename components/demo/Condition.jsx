import React from 'react';
import './condition.scss';

/**
 * 条件处理方式：
 *
 * 1. 新增一个组件
 *
 * 2. 组件中新增一个方法，在render中调用
 *
 * 3. 组件render 内部使用表达式
 *
 * 4. dom属性可以使用字符串模板
 *
 * 1，2 效果类似，对于比较复杂的判断建议使用1,2的处理方式
 * 3 简单的判断可以使用3来直接解决，利用&&的短路效果  或者 三目运算符进行处理
 * 4 处理dom中属性的判断，比如className 选中的时候加on 不选中的时候取消on
 *
 */
class Condition extends React.Component {
    constructor(props) {
        super(props);
    }

    showTenderFile() {
        let result = '';
        if (this.props.tenderStatus === '4') {
            let attachs = this.props.inviteAttachs;
            if (attachs) {
                result = <a href={attachs.url}>{attachs.name}</a>;
            }
        }
        else {
            if (this.props.chargeFlag === '0' || this.props.quaTenderStatus === '3') {
                result = <span>投资方资审通过之后才能下载</span>;
            }
            else {
                result = <span>投标方付款之后才能下载</span>;
            }
        }
        return result;
    }

    render() {
        return (
            <div>
                {
                    // 根据属性值的不同，显示不同的内容
                }
                <Greeting isLoggedIn={true} />
                {
                    // 根据属性值的不同，控制该结构是否显示
                }
                <WarningBanner warn={true}/>


                {
                    // 利用字符串模板处理class的部分
                }
                <div className={`demo-div ${this.props.isImportant ? 'red' : ''}`}>
                    hehe
                </div>

                {
                    /*
                        style的书写方式有点特别，style不接收字符串，只接受对象
                        所以直接写style="display:none"会报错
                    */
                }
                <div className={''} style={{display: 'block'}}>
                    haha
                </div>

                <table className="tb tb-border">
                    <colgroup>
                        <col width="20%"/>
                        <col/>
                    </colgroup>
                    <tbody>
                    <tr>
                        <th>招标文件</th>
                        <td>
                            {
                                this.showTenderFile()
                            }
                        </td>
                    </tr>
                    </tbody>
                </table>

                {
                    (function (props) {
                        if (props.name && props.name !== 'xiaoming') {
                            return <span>props.name</span>;
                        }
                        else if (props.name === 'xiaoming') {
                            return <a href="http://www.abiz.com" target="_blank">props.name</a>
                        }
                        else {
                            return <input type="text"/>
                        }
                    })(this.props)
                }

                {
                    // if语句
                    this.props.unreadCnt > 0 &&
                    <h2>
                        You have {this.props.unreadCnt} unread messages.
                    </h2>
                }

                {
                    // if else使用三目运算符
                    this.props.href ? <a href={this.props.href} target="_blank">这是一个链接</a> : "这不是一个链接"
                }

            </div>
        );
    }
}

// 控制组件是否显示
function WarningBanner(props) {
    // 返回null就不显示当前组件
    if (!props.warn) {
        return null;
    }
    return (
        <div>
            this is Warning!!!
        </div>
    );
}

// 根据登录状态返回不同的提示信息
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <h1>Welcome back!</h1>;
    }
    return <h1>Please sign up.</h1>;
}

export default Condition;