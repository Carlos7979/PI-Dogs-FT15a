import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Create from './pages/Create';
import Detail from './pages/Detail';
import Header from '../components/Header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLog } from '../../logic/actions';

function App() {

  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isLog(sessionStorage.login));
  }, []);

  const handleLogin = () => {
    sessionStorage.login = true;
  }

  const handleLogout = () => {
    sessionStorage.login = '';
  }
  
  const body = document.getElementsByTagName('body')[0];
  isLoggedIn ? body.setAttribute('class', 'logged') : body.removeAttribute('class');

  return (
    <div className='App'>
      {!sessionStorage.login && <h1 className="appTitle">Henry Dogs</h1>}
      <Route 
        path="/"
        render={({location}) => sessionStorage.login ? 
          <Header logout={handleLogout} location={location}/> : 
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
        {/* <Route
          path='/detail/:id'
          render={({match}) => <Detail id={match.params.id}/>}>
        </Route> */}
        <Redirect to="/"/>
      </Switch>
    </div>
  );
}

export default App;
