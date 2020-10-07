import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter,Link} from "react-router-dom";
import Home from "./Home";
import Counter from '../components/Counter';
import Timer from '../components/Timer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
            <ul>
                <li className='{li1}'><Link to={"/timer"}>在线倒计时器</Link></li>
                <li className='{li2}'><Link to={"/counter"}>在线计算器</Link></li>
                <li className='{li3}'><Link to={"/"}>HOME</Link></li>
            </ul>
          <Route exact path={'/'} component={Home}/>
          <Route path={'/counter'} component={Counter}/>
          <Route path={'/timer'} component={Timer}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;