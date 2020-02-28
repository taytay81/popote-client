import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Recipes from "./views/Recipes";
import Recipe from "./views/Recipes";
import Favorites from "./views/Favorites";
import User from "./views/User";
import Login from "./views/Login";
import Signup from "./views/Signup";
import NotFound from "./views/NotFound";


function App() {
  return (
    <div>
      <Switch>
        <Route path="/recipes" component={Recipes}/>
        <Route path="/recipe/:id" component={Recipe}/>
        <Route path="/favorites" component={Favorites}/>
        <Route path="/user" component={User}/>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exatch path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
