/* eslint-disable no-unused-vars */
import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss'
import {Switch,Route} from 'react-router'
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import { ProfileProvider } from './context/profile.context';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <ProfileProvider>
    <Switch>
      <PublicRoute path='/signin'>
        <SignIn/>
      </PublicRoute>

      <PrivateRoute path='/'>
        <Home/>
      </PrivateRoute>
    </Switch>
    </ProfileProvider>
  )
}

export default App;
