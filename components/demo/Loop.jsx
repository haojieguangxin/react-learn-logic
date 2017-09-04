import React from 'react';

class Loop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [
                {id: 'a', name: 'es6'},
                {id: 'b', name: 'webpack'},
                {id: 'c', name: 'react'},
                {id: 'v', name: '<script>alert(1)</script>'},
                // {id: '5', name: 'HEHE'},
                {id: '5', name: '<strong>HEHE</strong>'}
            ],
            count: 5
        };

        this.addList = this.addList.bind(this);
    }

    addList() {
        const {list, count} = this.state;
        // 新建一个新的arr
        let arr = [...list];
        // arr.push({
        //     id: 'g', name: 'new' + count
        // });

        list.splice(3, 0, {
            id: count + 1, name: 'new' + count
        });

        arr.reverse();
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));

        this.setState({
            list: list
        });
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        // 设置key的地方，循环return的结构或者组件上加key
                        this.state.list.map(function(item) {
                            return <LoopLi key={item.id} id={item.id} name={item.name} />
                        })
                    }

                    {
                        // 如果有重复key值的话，只有第一个key值的内容会被显示出来，控制台会有warning信息
                        this.state.list.map(function(item) {
                            if (item.id === 5) {
                                // 如何不进行转义处理，直接当成html处理
                                return <li key={item.id} dangerouslySetInnerHTML={{__html: item.name}} />
                            }
                            return <li key={item.id}>{item.id}: {item.name}</li>
                        })
                    }
                </ul>


                <ul style={{marginTop: '10px'}}>
                    {
                        this.state.list.map(function(item, index) {
                            return <li key={index}>{item.id}:{item.name}</li>
                        })
                    }
                </ul>

                <ul style={{marginTop: '10px'}}>
                    {
                        /**
                         * As a last resort, you can pass item's index in the array as a key.
                         * This can work well if the items are never reordered, but reorders will be slow.
                         *
                         * 展示的时候是不会出现问题的，但是如果是后面跟着输入框，输入框中的值不会跟着走
                         */
                        this.state.list.map(function(item, index) {
                            return <LoopLi key={index} id={item.id} name={item.name} />
                        })
                    }
                </ul>
                <button onClick={this.addList}>add</button>
            </div>
        );
    }
}

function LoopLi(props) {
    return (
        <li>{props.id}:<input type="text" /></li>
    );
}

export default Loop;