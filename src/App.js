import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import AppNavbar from './layout/AppNavbar';

import Home from './pages/Home';
import Comments from './pages/Comments';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/comments" component={Comments} />
      </Switch>
    </Router>
  );
}

export default App;
