/**
 * Created by zhang-j on 2017/8/18.
 */
import React from 'react';

class HelloWorld extends React.Component {
    // babel编译会报错
    // 解决方案1：安装babel-preset-stage-0 在babelrc中加入stage-0，注意这个属性一定要在es2015之后不然无效
    // 解决方案2：依赖plugin  babel-plugin-transform-class-properties
    static defaultProps = {
        name: 'World'
    }
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        // 改变页面的title
        document.title = 'hello' + this.props.name;
    }
    render() {
        return (
            <div>
                <div>Hello {this.props.name}!</div>
                <ul>
                    <li>您的年纪：{this.props.age}</li>
                    <li>您的性别：{this.props.sex}</li>
                    <li>您的身高：{this.props.height}</li>
                    <li>您的体重：{this.props.weight}</li>
                    {
                        this.props.showOthers && <li>其他：{this.props.others.a}</li>
                    }

                </ul>
            </div>
        );
    }
}

export {HelloWorld}