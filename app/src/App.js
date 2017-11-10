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
import ShowColor from './pages/colors/show'
import ShowBuzzword from './pages/buzzwords/show'
import ShowStarwar from './pages/starwars/show'
import ShowFortune from './pages/fortune-cookies/show'
import ShowEmoji from './pages/emojis/show'
import EditColorForm from './pages/colors/edit-form'
import EditBuzzwordForm from './pages/buzzwords/edit-form'
import EditStarwarForm from './pages/starwars/edit-form'
import EditFortuneForm from './pages/fortune-cookies/edit-form'
import EditEmojiForm from './pages/emojis/edit-form'
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
          <Route path="/colors/:id/edit" component={EditColorForm} />
          <Route path="/colors/:id" component={ShowColor} />
          <Route path="/colors" component={Colors} />
          <Route path="/buzzwords/new" component={BuzzwordForm} />
          <Route path="/buzzwords/:id/edit" component={EditBuzzwordForm} />
          <Route path="/buzzwords/:id" component={ShowBuzzword} />
          <Route path="/buzzwords" component={Buzzwords} />
          <Route path="/starwars/new" component={StarwarForm} />
          <Route path="/starwars/:id/edit" component={EditStarwarForm} />
          <Route path="/starwars/:id" component={ShowStarwar} />
          <Route path="/starwars" component={Starwars} />
          <Route path="/fortune-cookies/new" component={FortuneForm} />
          <Route path="/fortune-cookies/:id/edit" component={EditFortuneForm} />
          <Route path="/fortune-cookies/:id" component={ShowFortune} />
          <Route path="/fortune-cookies" component={FortuneCookie} />
          <Route path="/emojis/new" component={EmojiForm} />
          <Route path="/emojis/:id/edit" component={EditEmojiForm} />
          <Route path="/emojis/:id" component={ShowEmoji} />
          <Route path="/emojis" component={Emojis} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
