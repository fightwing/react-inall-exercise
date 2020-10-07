import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {Link} from "react-router-dom";
import '../styles/counter.css'
class Counter extends Component{
    constructor() {
        super();
        this.state={
            num1: 0,
            num2: 0,
            result: 0,
            opera: '',

        }
    }

    operaHandler = (opera) =>{
        let operaResult = 0;
        const dom = ReactDOM.findDOMNode(this.refs.tip)
        dom.value += opera;
        if (opera === '='){
            if(this.state.opera === '+'){
                operaResult = Number(this.state.num1)+Number(this.state.num2);
            }
            if(this.state.opera === '-'){
                operaResult = Number(this.state.num1)-Number(this.state.num2);
            }
            if(this.state.opera === '*'){
                operaResult = Number(this.state.num1)*Number(this.state.num2);
            }
            dom.value += operaResult;
        }

        this.setState({
            result: operaResult,
            opera: opera,

        })
    }
    numHandler = (numb) => {
        const dom = ReactDOM.findDOMNode(this.refs.tip)
        dom.value += numb;
        if(this.state.num1 !== 0){
            this.setState({
                num2: numb
            })
        }else{
            this.setState({
                num1: numb
            })
        }

    }
    clearHandler(){
        const dom = ReactDOM.findDOMNode(this.refs.tip)
        dom.value = null;
        this.setState({
            num1: 0,
            num2: 0,
            result: 0,
            opera: ''
        })

    }
    render(){
        return(
            <div className='counterMain'>
            <div className='counterTitle'><p>在线计算器</p></div>
        <div className='counterBody'>
            <div className='counterFirst'>
                <input className='scoren' ref='tip' />
            </div>
            <div className='operaBtn'>
                <button className='firstOper' onClick={this.operaHandler.bind(this,'+')}>+</button>
                <button onClick={this.operaHandler.bind(this,'-')}>-</button>
                <button onClick={this.operaHandler.bind(this,'*')}>*</button>
            </div>
            <div className='numberBtn'>
                <button onClick={this.numHandler.bind(this,7)}>7</button>
                <button onClick={this.numHandler.bind(this,8)}>8</button>
                <button onClick={this.numHandler.bind(this,9)}>9</button>
                <br/>
                <button onClick={this.numHandler.bind(this,4)}>4</button>
                <button onClick={this.numHandler.bind(this,5)}>5</button>
                <button onClick={this.numHandler.bind(this,6)}>6</button>
                <br/>
                <button onClick={this.numHandler.bind(this,1)}>1</button>
                <button onClick={this.numHandler.bind(this,2)}>2</button>
                <button onClick={this.numHandler.bind(this,3)}>3</button>
                <br/>
                <button onClick={this.numHandler.bind(this,0)}>0</button>
                <button className='clear' onClick={this.clearHandler.bind(this)}>Clear</button>
                <button className='equalsBtn' onClick={this.operaHandler.bind(this,'=')}>=</button>
            </div>
        </div>
        <div className='countFooter'>
                    <Link to={"/"}>回到主页</Link>

            </div>
    </div>
        );

    }

}
export default Counter;