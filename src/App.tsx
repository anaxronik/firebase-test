import React from 'react'
import { routes } from './routes'
import './styles/global.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <div className="container">
            {routes.map((route, idx) => (
              <Route
                path={route.path}
                component={route.component}
                exact={route.exact}
                key={idx}
              />
            ))}
          </div>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
