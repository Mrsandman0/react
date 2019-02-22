import React, { Component } from 'react';
import '../scss/login.scss';
import axios from 'axios'
class Login extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            login_user: '',
            login_psd: '',
            iptcode: '',
            code: '',
            warning_msg: ''
        }
    }
    //获取用户名
    loginUsername(e) {
        this.setState({
            login_user: e.target.value,
            warning_msg: ''
        })

    }
    //获取密码
    loginPassword(e) {
        this.setState({
            login_psd: e.target.value,
            warning_msg: ''
        })
    }
    //获取验证码
    inputCode(e) {
        this.setState({
            iptcode: e.target.value,
            warning_msg: ''
        })
    }
    async componentWillMount() {
        //产生随机数
        this.setState({
            code: randomNum()
        })

        //token验证
        let token = localStorage.getItem('token');

        if (token) {
            // 发起ajax请求验证token
            let res = await axios.post('http://localhost:3303/users/verifytoken', {
                headers: {
                    'token': token
                }
            });
            // console.log(res.data.states)
            if (res.data.states) {
                // 如token还未失效，则调到我的页面，否则保留当前登录页面
                this.props.history.push('home');
            }
        }


    }
    //刷新验证码
    changeCode() {
        this.setState({
            code: randomNum()
        })
    }
    //跳转到注册页面

    toReg() {
        this.props.history.push('reg');
    }

    //登录验证
    async login() {
        let { login_user, login_psd, iptcode, code } = { ...this.state }
        if (code.toLowerCase() === iptcode.toLowerCase() && login_user && login_psd) {
            let data = await axios.post('http://localhost:3303/users/login', {
                username: login_user,
                password: login_psd
            })
            // console.log(data)
            if (data.data.status === "success") {
                localStorage.setItem('token', data.data.token);
                this.props.history.push('home')
            }
        } else {
            this.setState({
                warning_msg: '用户名密码为空或验证码错误',
                code: randomNum()
            })
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
                                <li className="">会员帐号登录<i></i></li>
                                <li className="active">手机动态密码登录<i></i></li>
                            </ul>
                            <div className="new-tabbox">
                                <div className="default">
                                    <span className="err">{this.state.warning_msg}</span>
                                </div>
                                <ul>
                                    <li>
                                        <span style={{
                                            background: `url(${require("../assets/login/denglu_kai.png")})no-repeat`
                                        }}></span>
                                        <input onChange={this.loginUsername.bind(this)} className="fr" type="text" placeholder="请输入用户名" />
                                    </li>
                                    <li>
                                        <span style={{
                                            background: `url(${require("../assets/login/denglu_suo.png")})no-repeat`
                                        }}></span>
                                        <input onChange={this.loginPassword.bind(this)} className="fr" type="password" placeholder="请输入密码" />
                                    </li>
                                    <li>
                                        <span className="login_head_yzm">验证码:</span>
                                        <input onChange={this.inputCode.bind(this)} type="text" placeholder="请输入验证码" />
                                        <span className="login_head_num">{this.state.code}</span>
                                        <span className="login_head_change" onClick={this.changeCode.bind(this)}>换一张</span>
                                    </li>
                                    <li>
                                        <span onClick={this.login.bind(this)}>登录</span>
                                    </li>
                                </ul>
                                <div className="reg">
                                    <span onClick={this.toReg.bind(this)}>免费注册</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function randomNum() {
    var str1 = '';
    var str = '0123456789aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ';
    for (var i = 0; i < 4; i++) {
        str1 += str[parseInt(Math.random() * 62)];
    }
    return str1;
}

export default Login;