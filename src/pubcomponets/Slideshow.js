import React, { Component } from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
class Slideshow extends Component{
    constructor(props){
        super(props)
        this.props=props;
        this.start={

        }
    }
    render(){
        return (
            <div>
                <Carousel autoplay>
                    <div><img src={require("../assets/homepic/slide1.jpg")} alt=""/></div>
                    <div><img src={require("../assets/homepic/slide2.jpg")} alt=""/></div>
                    <div><img src={require("../assets/homepic/slide3.jpg")} alt=""/></div>
                    <div><img src={require("../assets/homepic/slide4.jpg")} alt=""/></div>
                    <div><img src={require("../assets/homepic/slide5.jpg")} alt=""/></div>
                    <div><img src={require("../assets/homepic/slide6.jpg")} alt=""/></div>
                </Carousel>
            </div>
        )
    }
}

export default Slideshow