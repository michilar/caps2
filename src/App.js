import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/About us/AboutUs';
import Discussion from './Components/Discussions/Discussion';
import Courses from './Components/Courses/Courses';
import Login from './Components/Logins/Login';
import './App.css';
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Route, Switch}  from 'react-router-dom';

function App() {
  return (
  <Router>
    <div className="App">
      <Navigation/>
      <div className='content'>
         <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/AboutUs'>
            <AboutUs/>
          </Route>
          <Route path='/Discussion'>
            <Discussion/>
          </Route>
          <Route path='/Courses'>
            <Courses/>
          </Route>
          <Route path='/Login'>
            <Login/>
          </Route>
        </Switch> 
      </div>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
