import './App.css';
import { Route, Router } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Create from './pages/Create';
import Detail from './pages/Detail';

function App() {
  return (
    <div className="App">
      <h1>Henry Dogs</h1>
      <Route 
        path='/'
        exact
        render={() => <Landing/>}>
      </Route>
      <Route 
        path='/home'
        exact
        render={() => <Home/>}>
      </Route>
      <Route 
        path='/create'
        exact
        render={() => <Create/>}>
      </Route>
      <Route 
        path='/detail'
        exact
        render={() => <Detail/>}>
      </Route>
    </div>
  );
}

export default App;
