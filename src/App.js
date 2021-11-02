import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Books from './components/books/books';
import Categories from './components/categories/categories';
import Navbar from './components/navbar/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <section>
      <Switch>
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route exact path="/">
          <Books />
        </Route>
      </Switch>
    </section>
  </Router>
);

export default App;
