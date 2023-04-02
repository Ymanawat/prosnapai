import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import TrainModel from './views/train-model'
import GenerateImages from './views/generate-images'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={TrainModel} exact path="/train-model" />
        <Route component={GenerateImages} exact path="/generate-images" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
