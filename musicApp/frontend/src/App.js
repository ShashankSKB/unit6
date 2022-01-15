import logo from './logo.svg';
import './App.css';
import { AlbumsList } from './components/list';
import { Route, Switch } from 'react-router-dom';
import { Album } from './components/currentAlbum';

import { Navbar } from './components/navbar';
import { Login } from './components/login';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch >
      <Route path="/" exact>
        <AlbumsList/>
      </Route>

      <Route path="/album" exact>
        <Album/>
      </Route>

      <Route path="/login" exact>
        <Login/>
      </Route>
      
      
      </Switch>
      
     
     
    </div>
  );
}

export default App;
