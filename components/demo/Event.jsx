import React from 'react';
class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'xiaoming'
        };
        // 注释掉讲解this指向问题
        this.handleClick = this.handleClick.bind(this);

        // 讲解event loop结束，event被清空
        this.inputChange = this.inputChange.bind(this);

        this.aClick = this.aClick.bind(this);
    }

    aClick(e) {
        e.preventDefault();
        // 阻止默认事件不能用return false
        // return false;
    }


    handleClick(e) {
        // 查看this，this的值为null，应该是在react内部单独处理了
        // console.log(this);
        // console.log(e);

        this.setState({
            name: 'xiaoer'
        });
    }

    inputChange(e) {
        // 讲解event loop结束，event被清空
        // 这个是错误的写法
        // this.setState((prevState) => ({
        //     name: prevState.name + e.target.value
        // }));

        // 下面是正确的写法
        const value = e.target.value;
        this.setState((prevState) => ({
            name: prevState.name + value
        }));
    }

    render() {
        return (
            <div>
                <input type="text"  onChange={this.inputChange} />
                <span>name: {this.state.name}</span>
                <button onClick={this.handleClick}>change</button>

                <div>
                    <a href="http://cn.made-in-china.com" onClick={this.aClick} target="_blank">中国制造网首页</a>
                </div>
            </div>
        )
    }
}
export default Event;