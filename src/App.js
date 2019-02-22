import React, { Component } from 'react';
import { Route,withRouter } from 'react-router-dom';
import Home from './components/Home';
// import Domestic from './pages/Domestic';
// import Recommend from './components/Recommend';
import Login from './pages/Login';
import Reg from './pages/Reg';
// import PropTypes from 'prop-types';
class App extends Component {
  constructor(props) {
    super(props);
    this.props=props
    this.state = {

    }
  }
  componentWillMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div>
        
        
          {/* <div> */}
            {/* <Home/> */}
            {/* <Switch> */}
                <Route path="/home" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/reg" component={Reg}/>
                <Route exact path="/" component={Home} />
            {/* </Switch> */}
            {/* <Route exact path="/" component={Recommend} />
            <Route path="/home" component={Recommend} />
            <Route path="/domestic" component={Domestic} />
            <Route path="/login" component={Login}/> */}
            
          {/* </div> */}
        
      </div>
    );
  }
}
// App.contextTypes = {
//   router:PropTypes.object
// }
App = withRouter(App);
export default App;
