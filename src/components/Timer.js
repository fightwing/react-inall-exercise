import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {Link} from "react-router-dom";
import '../styles/timer.css'
class Timer extends Component{
    constructor() {
        super();
        this.state ={
            time : 0,
        }
    }
    setTime = () => {
        const timCon = ReactDOM.findDOMNode(this.refs.timeController)
        const time  =timCon.value;
        this.setState(
            {
                time:time
            }
        )
    }
    componentDidMount(){
        const showTimer = ReactDOM.findDOMNode(this.refs.showTimes)
        showTimer.value = 'Start';
    }
    countDown =() =>{
        let time = this.state.time ;
        const showTimer = ReactDOM.findDOMNode(this.refs.showTimes)
        showTimer.value = `${time} Seconds` ;
        if(time>0){
            this.setState(
                {
                    time:time-1
                }
            )
        }else{
            showTimer.value = 'End';
            return ;
        }
        setTimeout(()=>{
            this.countDown();
        },1000);
    }
    render() {
        return(
            <div className={'timerMain'}>
            <div className={'timerHeader'}>
                <p>在线倒计时器</p>
            </div>
                <div className={'timerBody'}>
                    <div className={'timerLeft'}>
                       <label>设置时间：</label>
                        <input type={'text'}   ref={'timeController'} defaultValue={0} onChange={this.setTime}/>
                        <br/>
                        <button onClick={this.countDown}>Start</button>
                    </div>
                    <div className={'showTimer'} >
                        <input type='button' ref={'showTimes'}></input>
                    </div>

                </div>
                <div className={'countFooter'}>
                    <Link to={"/"}>回到主页</Link>

                </div>
            </div>
        )
    }

}
export default Timer