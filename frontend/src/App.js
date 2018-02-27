import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoadingBar from 'react-redux-loading-bar'

import Header from './components/header/header';
import IndexPage from './components/page/index';
import TankDetailPage from './components/page/tankdetail';
import NewTankPage from './components/page/newtankpage';

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
			    <LoadingBar />
			    <Switch>
				<Route exact path="/" component={ IndexPage } />
				<Route exact path="/tank" component={ NewTankPage } />
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
