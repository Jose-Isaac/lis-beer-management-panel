import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Post from './pages/Post_/post'
import Edit from './pages/Edit/edit'
import LerMais from './pages/LerMais/lermais'
import Feed from './pages/Feed/feed'

function App() {
 return(
  <Router>
    <Switch>
      <Route exact={true} path="/" component={Feed}/>
      <Route exact={true} path="/post" component={Post}/>
      <Route exact={true} path="/edit" component={Edit}/>
      <Route exact={true} path="/lermais" component={LerMais} />
    </Switch>
  </Router>
 )
}

export default App;
