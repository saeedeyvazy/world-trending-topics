import React from 'react'
import './app.css'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
	return (
		<div className='app'>
			<Router>
				<Switch>
					<Route path='/' exact component={HomePage} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
