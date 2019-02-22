import React, { Component } from 'react';
import { Switch, HashRouter as Router, Route, } from 'react-router-dom';
import {
    Icon,
} from 'antd';
import 'antd/dist/antd.css';
import '../scss/test.scss';
import Domestic from '../pages/Domestic';
import Abroad from '../pages/Abroad';
import Recommend from '../components/Recommend';
import Navigation from '../pubcomponets/Navigation';
import Slideshow from '../pubcomponets/Slideshow';
import City from '../pubcomponets/City';
let Background = {
    display: 'block',
    width: '18px',
    height: '18px',
    marginLeft: '50%',
    transform: 'translateX(-50%)',
    overflow: 'hidden',
    marginTop: '9px',
    backgroundImage: `url(${require("../assets/homepic/search.png")})`,
    backgroundSize: '18px'
}
let Home = class Home extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            display: false
        }

    }
    hide() {
        this.setState({
            display: !this.state.display
        })
    }
    render() {
        return (
            <div>
                <div className="con conbox">
                    <div className="logo fl">
                        <img src="http://media.china-sss.com/res/dist/online/images/logo.png" alt='' />
                    </div>
                    <div className="search-box fl">
                        <div className="search-txt">
                            <div className="search-city fl">
                                <img style={{ width: '18px', height: '18px', marginRight: '5px', }} src={require('../assets/homepic/dingwei.png')} alt='' />
                                <span style={{ marginRight: '5px', }}>广州</span>
                                <span style={{ marginRight: '5px', cursor: 'pointer' }} onClick={this.hide.bind(this)}>
                                    出发
                                <Icon type="down" />
                                </span>
                            </div>
                            <div className="search-inpt fl">
                                <input className="fl" placeholder="日本" text='日本' />
                                <span className="fl">
                                    <i style={Background}></i>
                                </span>
                            </div>
                        </div>
                        <City display={this.state.display} />
                    </div>
                    <div className="other-box fr">
                        <span>
                            <i style={{
                                background: `url(${require("../assets/homepic/zaixiankefu.png")})`
                            }}></i>
                            在线客服
                    </span>
                        <span>
                            <i style={{
                                background: `url(${require("../assets/homepic/dianhua.png")})`
                            }}></i>
                            <em>400-820-6222</em>
                        </span>
                        <span>
                            <i style={{
                                background: `url(${require("../assets/homepic/shouji.png")})`
                            }}></i>
                            <i style={{
                                background: `url(${require("../assets/homepic/weixin.png")})`
                            }}></i>
                        </span>
                    </div>
                </div>
                <Navigation />
                <Slideshow />
                <Router>
                    <Switch>
                        <Route exact path="/" component={Recommend} />
                        <Route exact path="/home" component={Recommend} />
                        <Route exact path="/home/domestic" component={Domestic} />
                        <Route exact path="/home/abroad" component={Abroad} />
                        
                        {/* <Route exact path="/" component={Recommend} /> */}
                    </Switch>
                </Router>
            </div>

        )
    }
}

export default Home