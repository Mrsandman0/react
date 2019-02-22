import React, { Component } from 'react';
import axios from 'axios';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
  }
class City extends Component{
    constructor(props) {
        super(props)
        this.props = props
        this.state={
            hotStartCity:[],
            groupList:[],
        }
    }
    // state = {
    //     tabPosition: 'top',
    //   }
    changeTabPosition = (tabPosition) => {
    this.setState({ tabPosition });
    }
    // list(){
    //     let obj = this.state.groupList;
    //     let list= Object.keys(obj).map(key => {
    //             return obj[key]
    //         })
    //     let aa= Object.keys(list).map(key=> {
    //             console.log(list[key],key)
    //             return list[key]
    //         })
    //         for(var key in aa){
    //             // console.log(aa[key])
    //             for(var xx in aa[key]){
    //                 console.log(aa[key][xx],xx)
    //                 return (
    //                     <li>
    //                         <em>{xx}</em>
    //                         {
    //                             aa[key][xx].map((item,idx)=>{
    //                                 return (<span key={idx}>{item.nameDisplay}</span>)
    //                             })
    //                         }
    //                     </li>
                        
    //                 )
    //             }
                
    //         }
    // }
    async  componentDidMount(){
        let data = await axios.get('http://localhost:3303/city');
        // this.state.hotStartCity= data.data.hotStartCity;
        this.setState({
            groupList: data.data.groupList,
            hotStartCity: data.data.hotStartCity
        },() => {});
    }
    render(){   
        return (
            <div className="dialog-bd" style={{display:this.props.display?'block':'none'}}>
                <h2 className="have-padin">热门城市</h2>
                <p className="hot-city">
                    {this.state.hotStartCity.map((item,index) => {
                        return (<span key={index}>{item.nameDisplay}</span>)
                    })}    
                </p>
                <h2 className="no-padin">全部出发地</h2>
                <Tabs defaultActiveKey="1" onChange={callback} tabBarGutter={0}>
                    {/* {
                        // console.log(this.state.groupList)
                        Object.keys(this.state.groupList).forEach((key,index) => {
                            console.log(key, index ,this.state.groupList[key])
                            return (<TabPane tab={key+1} key={index}>{this.state.groupList[key]}</TabPane>)
                        })
                    }  */}
                    <TabPane tab="ABCDE" key="1">
                        <ul className="citylist">
                            {/* {this.list()} */}
                            <li>
                                <em>A</em>
                                <span>鞍山</span>
                                <span>鞍山</span>
                                <span>鞍山</span>
                                <span>鞍山</span>
                                <span>鞍山</span>
                                <span>鞍山</span>
                                <span>鞍山</span>
                                <span>鞍山</span>
                                <span>鞍山</span>
                            </li>
                            <li>
                                <em>B</em>
                                <span>曼谷</span>
                                <span>曼谷</span>
                                <span>曼谷</span>
                                <span>曼谷</span>
                                <span>曼谷</span>
                                <span>曼谷</span>
                                <span>曼谷</span>
                                <span>曼谷</span>
                                <span>曼谷</span>
                            </li>
                        </ul>
                    </TabPane>
                    <TabPane tab="FGHIJ" key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab="KLMNO" key="3">Content of Tab Pane 3</TabPane>
                    <TabPane tab="PQRST" key="4">Content of Tab Pane 4</TabPane>
                    <TabPane tab="UVWXYZ" key="5">Content of Tab Pane 5</TabPane>
                </Tabs> 
            </div>
        )
    }
    
}

export default City