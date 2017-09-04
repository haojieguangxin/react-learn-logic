
import React from 'react';

class CusDiv extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            // this.props.children  代表的是子元素，当前元素中间嵌套的元素
            // 如果children属性和子元素同时存在，子元素的优先级比较高
            <div>hehe{this.props.children}</div>
        );
    }
}

export {CusDiv}