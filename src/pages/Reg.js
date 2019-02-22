import React, { Component } from 'react';
import '../scss/login.scss';
class Reg extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div className="header">
                    <div className="warp con">
                        <span className="lg_logo">
                            <img src="https://media.china-sss.com/chunqiu/online/images/logo.png?releaseno=20180531_20190118" alt="春秋旅游网" />
                        </span>

                        <span className="lg_phone" style={{
                            background: `url(${require("../assets/login/zc_ph.png")})`
                        }}></span>
                    </div>
                </div>
                <div className="contentBox">
                    <div className="contentBoxmain con" style={{
                        background: `url(${require("../assets/login/zcbg.jpg")})no-repeat 150px top`
                    }}>
                        <div className="loginbox">
                            <ul className="new-login">
                                <li className="active">手机号注册<i></i></li>
                                <li className="">邮箱注册<i></i></li>
                            </ul>
                            <div className="new-tabbox">
                                <div className="default">
                                    <span className="err">请输入手机号码</span>
                                </div>
                                <ul>
                                    <li>
                                        <span style={{
                                            background:`url(${require("../assets/login/denglu_kai.png")})no-repeat`
                                        }}></span>
                                        <input className="fr" type="text" placeholder="请输入用户名" />
                                    </li>
                                    <li>
                                        <span style={{
                                             background:`url(${require("../assets/login/denglu_suo.png")})no-repeat`
                                        }}></span>
                                        <input className="fr" type="password" placeholder="请输入密码" />
                                    </li>
                                    <li>
                                        <span className="login_head_yzm">验证码:</span>
                                        <input type="text" placeholder="请输入验证码"/>
                                        <span className="login_head_num">5678</span>
                                        <span className="login_head_change">换一张</span>
                                    </li>
                                    <li>
                                        <span>注册</span>
                                    </li>
                                </ul>
                                <div  className="reg">
                                    <span>已有账号点击登录</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Reg;