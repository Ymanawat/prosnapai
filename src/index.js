import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import GenerateImages from './views/generate-images'
import TrainModel from './views/train-model'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={GenerateImages} exact path="/generate-images" />
        <Route component={TrainModel} exact path="/train-model" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
