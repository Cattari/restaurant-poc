import React from 'react';
import { HashRouter, Route, Switch} from "react-router-dom";

import { HomePage, TablePage } from './pages'

export const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/tables/:id" component={TablePage}/>
      </Switch>  
    </HashRouter>
    
  )
} 
