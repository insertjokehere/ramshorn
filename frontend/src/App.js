import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'

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
		<div>
		    <Header />
		    <Router>
			<div className="container-fluid" style={{ paddingTop: "5px" }}>
			    <Route path="/" component={ IndexPage } />
			    <Route path="/tanks/:tankId" component={ TankDetailPage } />
			</div>
		    </Router>
		</div>
	    </Provider>
	);
  }
}

export default App;
