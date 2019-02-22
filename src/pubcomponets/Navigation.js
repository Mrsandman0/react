import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {
    HashRouter as Router,
} from 'react-router-dom';
import '../scss/navigation.scss';
class Navigation extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            bool: false,
            nav: [
                {
                    text: '首页',
                    path: '/home',
                },
                {
                    text: '国内游',
                    path: '/home/domestic',
                },
                {
                    text: '出境游',
                    path: '/home/abroad',
                },
                {
                    text: '跟团游',
                    path: '/home/domestic',
                },
                {
                    text: '自由行',
                    path: '/home/domestic',
                },
                {
                    text: '周边游',
                    path: '/home/domestic',
                },
                {
                    text: '游轮',
                    path: '/home/domestic',
                },
                {
                    text: '机票',
                    path: '/home/domestic',
                },
                {
                    text: '酒店',
                    path: '/home/domestic',
                },
                {
                    text: '签证',
                    path: '/home/domestic',
                },
                {
                    text: '春秋定制',
                    path: '/home/domestic',
                },
            ]
        }
    }

    toLink(key){
        this.props.history.push(key);
    }

    handleEnter() {
        this.setState({
            bool: true
        })
    }
    handleOut() {
        this.setState({
            bool: false
        })
    }
    tiaozhuan() {
        // this.history
    }

    render() {
        return (
            <Router>
                <div className="screen">
                    <div className="con nva">
                        <ul className="fl fl-ul">
                            <li>热门目的地</li>
                            {
                                this.state.nav.map((item,idx)=>{
                                    return (
                                        <li onClick={this.toLink.bind(this,item.path)} key={idx}>{item.text}</li>
                                    )
                                })
                            }
                            {/* onClick={this.toLink(item.path)} */}
                            {/* <li><Link to="/home/domestic">首页</Link></li>
                            <li>国内游</li>
                            <li>出境游</li>
                            <li>跟团游</li>
                            <li>自由行</li>
                            <li>周边游</li>
                            <li>游轮</li>
                            <li>机票</li>
                            <li>酒店</li>
                            <li>签证</li>
                            <li>春秋定制</li> */}
                        </ul>

                        <div className="fl fl-login">
                            <div className="login-register">
                                <span>登录</span>
                                <span>注册</span>
                            </div>
                            <div className="login-mine"
                                onMouseEnter={this.handleEnter.bind(this)}
                                onMouseLeave={this.handleOut.bind(this)}
                            >
                                <span>
                                    我的春秋游
                                <i>
                                        <img src={require("../assets/homepic/xia.png")} alt="" />
                                    </i>
                                </span>

                                <ul style={{ display: this.state.bool ? 'block' : 'none' }}>
                                    <li>全部订单</li>
                                    <li>机票订单</li>
                                    <li>定制订单</li>
                                    <li>我的信息</li>
                                    <li>我的收藏</li>
                                    <li>常旅客信息</li>
                                    <li>我的优惠卷</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <Route path="/home" component={Recommend} />
                <Route path="/domestic" component={Domestic} />
                <Route exact path="/" component={Recommend} /> */}
                </div>

            </Router>
        )
    }
}
export default withRouter(Navigation);