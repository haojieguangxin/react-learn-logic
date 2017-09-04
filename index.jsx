/**
 * Created by zhang-j on 2017/8/18.
 */
import React from 'react';
import ReactDom from 'react-dom';
import {HelloWorld} from './components/HelloWorld.jsx';
import {CusDiv} from "./components/CusDiv.jsx";
import {wrapEvent} from "./components/wrapEvent.jsx";

let height = '178cm';
const WrapCusDiv = wrapEvent(CusDiv);

ReactDom.render(

    <div>
        <CusDiv children="heheda">
            Hello
            <WrapCusDiv/>
        </CusDiv>


        {
            // 注解方式，需要使用大括号，大括号是将内容转换成js进行解析
            // 需要传递的数据太多的时候，可以使用解构
            // 传递object的时候，在object的大括号外面再加一层大括号
            // 基础类型传递的时候，boolean型如果使用""，会转成字符串型，导致判断失效，需要使用{}赋值
            // 使用ts试试判断传入值的类型，看看能不能传递正常的类型
        }
        <HelloWorld {...{
            age: 18,
            sex: 'male',
            weight: '75公斤'
        }} height={height} others={{a: 1, b: 2}} showOthers={false}/>
    </div>,
    document.getElementById('root')
);