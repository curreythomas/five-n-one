import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Colors from './pages/colors'
import Buzzwords from './pages/buzzwords'
import Starwars from './pages/starwars'
import FortuneCookie from './pages/fortune-cookies'
import Emojis from './pages/emojis'
import ColorForm from './pages/colors/form'
import BuzzwordForm from './pages/buzzwords/form'
import StarwarForm from './pages/starwars/form'
import FortuneForm from './pages/fortune-cookies/form'
import EmojiForm from './pages/emojis/form'
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
          <Route path="/buzzwords/new" component={BuzzwordForm} />
          <Route path="/buzzwords" component={Buzzwords} />
          <Route path="/starwars/new" component={StarwarForm} />
          <Route path="/starwars" component={Starwars} />
          <Route path="/fortune-cookies/new" component={FortuneForm} />
          <Route path="/fortune-cookies" component={FortuneCookie} />
          <Route path="/emojis/new" component={EmojiForm} />
          <Route path="/emojis" component={Emojis} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
