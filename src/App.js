import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
// import NewsItem from './components/NewsItem';

import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";



export default class App extends Component {

    state=({
      progress:0
    })
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <div>
        <Router>        
        <Navbar />
        <LoadingBar
        color='#f11946'
        height={4}
        progress={this.state.progress}
      />
      
        <Switch>
          <Route exact path="/"><News setProgress={this.setProgress} key="general" pageSize={9} country="in" category="General"/></Route>
          <Route exact path="/business"><News setProgress={this.setProgress}key="business" pageSize={9} country="in" category="Business"/></Route>
          <Route exact path="/entertainment"><News setProgress={this.setProgress} key="entertainment" pageSize={9} country="in" category="Entertainment"/></Route>
          <Route exact path="/general"><News setProgress={this.setProgress} key="general" pageSize={9} country="in" category="General"/></Route>
          <Route exact path="/health"><News setProgress={this.setProgress} key="health" pageSize={9} country="in" category="Health"/></Route>
          <Route exact path="/science"><News setProgress={this.setProgress} key="science" pageSize={9} country="in" category="Science"/></Route>
          <Route exact path="/sports"><News setProgress={this.setProgress}key="sports" pageSize={9} country="in" category="Sports"/></Route>
          <Route exact path="/technology"><News setProgress={this.setProgress}key="technology" pageSize={9} country="in" category="Technology"/></Route>

        </Switch>
        </Router>
      </div>
    )
  }
}