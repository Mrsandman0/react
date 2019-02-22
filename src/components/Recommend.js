import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../scss/recommend.scss';
class Recommend extends Component{
    constructor(props){
        super(props)
        this.props=props
        this.state={

        }
    }
    componentWillMount(){
        // console.log(this)
    }
    render(){
        return (
            <div className="hot-box">
                <div className="con main">
                    <div className="main-top clearfix">
                        <h2>当季热推</h2>
                        <ul className="t-nav">
                            <li>
                                <span>精选</span>
                            </li>
                            <li>
                                <span>日本</span>
                            </li>
                            <li>
                                <span>韩国</span>
                            </li>
                            <li>
                                <span>泰国</span>
                            </li>
                            <li>
                                <span>周边</span>
                            </li>
                            <li>
                                <span>柬越</span>
                            </li>
                            <li>
                                <span>醉美中国</span>
                            </li>
                        </ul>
                    </div>
                    <div className="main-botm">
                        <ul className="item-outer">
                            <li>
                                <div className="img-outer">
                                    <img src={require("../assets/homepic/ceshi.jpg")} alt=""/>
                                    <em>自由行</em>
                                </div>
                                <div className="info-outer">
                                    <p className="info-introduce">
                                        【限时抢购】广州直飞往返大阪6日自由行（双人赠送Wifi+BIC优惠券+返程25KG）
                                    </p>
                                    <p className="money-outer">
                                        <span className="money">
                                            <em>¥</em>
                                            <i>1299</i>
                                            起
                                        </span>
                                        <span className="set">
                                            广州出发
                                        </span>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="img-outer">
                                    <img src=""alt=""/>
                                    <em>自由行</em>
                                </div>
                                <div className="info-outer">
                                    <p className="info-introduce">
                                        【限时抢购】广州直飞往返大阪6日自由行（双人赠送Wifi+BIC优惠券+返程25KG）
                                    </p>
                                    <p className="money-outer">
                                        <span className="money">
                                            <em>¥</em>
                                            <i>1299</i>
                                            起
                                        </span>
                                        <span className="set">
                                            广州出发
                                        </span>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="img-outer">
                                    <img src=""alt=""/>
                                    <em>自由行</em>
                                </div>
                                <div className="info-outer">
                                    <p className="info-introduce">
                                        【限时抢购】广州直飞往返大阪6日自由行（双人赠送Wifi+BIC优惠券+返程25KG）
                                    </p>
                                    <p className="money-outer">
                                        <span className="money">
                                            <em>¥</em>
                                            <i>1299</i>
                                            起
                                        </span>
                                        <span className="set">
                                            广州出发
                                        </span>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="img-outer">
                                    <img src=""alt=""/>
                                    <em>自由行</em>
                                </div>
                                <div className="info-outer">
                                    <p className="info-introduce">
                                        【限时抢购】广州直飞往返大阪6日自由行（双人赠送Wifi+BIC优惠券+返程25KG）
                                    </p>
                                    <p className="money-outer">
                                        <span className="money">
                                            <em>¥</em>
                                            <i>1299</i>
                                            起
                                        </span>
                                        <span className="set">
                                            广州出发
                                        </span>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="img-outer">
                                    <img src=""alt=""/>
                                    <em>自由行</em>
                                </div>
                                <div className="info-outer">
                                    <p className="info-introduce">
                                        【限时抢购】广州直飞往返大阪6日自由行（双人赠送Wifi+BIC优惠券+返程25KG）
                                    </p>
                                    <p className="money-outer">
                                        <span className="money">
                                            <em>¥</em>
                                            <i>1299</i>
                                            起
                                        </span>
                                        <span className="set">
                                            广州出发
                                        </span>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="img-outer">
                                    <img src=""alt=""/>
                                    <em>自由行</em>
                                </div>
                                <div className="info-outer">
                                    <p className="info-introduce">
                                        【限时抢购】广州直飞往返大阪6日自由行（双人赠送Wifi+BIC优惠券+返程25KG）
                                    </p>
                                    <p className="money-outer">
                                        <span className="money">
                                            <em>¥</em>
                                            <i>1299</i>
                                            起
                                        </span>
                                        <span className="set">
                                            广州出发
                                        </span>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="img-outer">
                                    <img src=""alt=""/>
                                    <em>自由行</em>
                                </div>
                                <div className="info-outer">
                                    <p className="info-introduce">
                                        【限时抢购】广州直飞往返大阪6日自由行（双人赠送Wifi+BIC优惠券+返程25KG）
                                    </p>
                                    <p className="money-outer">
                                        <span className="money">
                                            <em>¥</em>
                                            <i>1299</i>
                                            起
                                        </span>
                                        <span className="set">
                                            广州出发
                                        </span>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

Recommend=withRouter(Recommend)
export default Recommend;