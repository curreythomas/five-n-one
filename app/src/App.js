import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Colors from './pages/colors'
import Buzzwords from './pages/buzzwords'
import Starwars from './pages/starwars'
import FortuneCookie from './pages/fortune-cookies'
import Emojis from './pages/emojis'
import ColorForm from './pages/colors/form'

const Menu = props => {
  return (
    <div>
      <h1>Five in One</h1>
      <ul>
        <li>
          <Link to="/colors">Colors</Link>
        </li>
        <li>
          <Link to="/buzzwords">Buzzwords</Link>
        </li>
        <li>
          <Link to="/starwars">Star Wars Names</Link>
        </li>
        <li>
          <Link to="/fortune-cookies">Fortune Cookies</Link>
        </li>
        <li>
          <Link to="/emojis">Emojis</Link>
        </li>
      </ul>
    </div>
  )
}

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route path="/colors/new" component={ColorForm} />
          <Route path="/colors" component={Colors} />
          <Route path="/buzzwords" component={Buzzwords} />
          <Route path="/starwars" component={Starwars} />
          <Route path="/fortune-cookies" component={FortuneCookie} />
          <Route path="/emojis" component={Emojis} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
