import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Create from './pages/Create';
import Detail from './pages/Detail';
import Nav from '../components/Nav';
import { useEffect } from 'react';

function App() {

  // useEffect(() => {
  //   if (sessionStorage.login) {

  //   }
  // });

  const handleLogin = () => {
    sessionStorage.login = true;
  }

  const handleLogout = () => {
    sessionStorage.login = '';
  }

  return (
    <div className="App">
      <h1>Henry Dogs</h1>
      <Route 
        path="/"
        render={() => sessionStorage.login ? 
          <Nav logout={handleLogout}/> : 
          <Redirect to="/"/> }>
      </Route>
      <Switch>
        <Route
          path='/'
          exact
          render={() => sessionStorage.login ?
          <Redirect to="/home"/> :
          <Landing login={handleLogin}/>}>
        </Route>
        <Route
          path='/home'
          render={() => sessionStorage.login ? 
            <Home/> : 
            <Redirect to="/"/>}>
        </Route>
        <Route
          path='/create'
          render={() => <Create/>}>
        </Route>
        <Route
          path='/detail'
          render={() => <Detail/>}>
        </Route>
        <Redirect to="/"/>
      </Switch>
    </div>
  );
}

export default App;
