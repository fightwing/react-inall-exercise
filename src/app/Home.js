import React from 'react';
import '../styles/home.css';
import {Link} from "react-router-dom";
import cal from '../images/calculator.png'
import timerPic from '../images/timer.png'

const Home = () => {
  return (
      <div className="home">
          <div className={'introduce'}><p>在线实用工具</p></div>
          <div className={'footer'}>
          <div className={'counterIntro'}>
              <img src={cal}></img>
              <p><Link to={"/counter"}>计算器</Link></p>
          </div>
          <div className={'timerIntro'}>
              <img src={timerPic}></img>
              <p><Link to={"/timer"}>倒计时器</Link></p>
          </div>
          </div>
      </div>
  );
};

export default Home;