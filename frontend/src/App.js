import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/header/header';
import IndexPage from './components/page/index';
import TankDetailPage from './components/page/tankdetail';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import configureStore from './store';

const store = configureStore();

class App extends Component {
    render() {
	return (
	    <Provider store={ store }>
		<Router>
		    <div>
			<Header />
			<div className="container-fluid" style={{ paddingTop: "5px" }}>
			    <Switch>
				<Route exact path="/" component={ IndexPage } />
				<Route path="/tanks/:tankId" component={ TankDetailPage } />
			    </Switch>
			</div>
		    </div>
		</Router>
	    </Provider>
	);
  }
}

export default App;
