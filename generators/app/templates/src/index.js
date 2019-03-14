import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'

import './styles/index.css'

import App from './views/app'
import About from './views/about'
import Topic from './views/topic'

import Navigation from './components/navigation'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <div style={{ height: '100%' }}>
          <Navigation>
            <Route path='/' component={App} exact />
            <Route path='/about' component={About} />
            <Route path='/topic' component={Topic} />
          </Navigation>
        </div>
      </Router>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
