import Books from './redux/books/books';
import Categories from './redux/categories/categories';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
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
};

export default App;
