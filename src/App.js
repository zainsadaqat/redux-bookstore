import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Books from './components/books/Books.js';
import Categories from './components/categories/categories';
import Navbar from './components/navbar/Navbar';
import store from './redux/configureStore';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const ID = 'skMgJnCkDOcgGUzY0dLE';
export const ENDPOINT = `${URL}${ID}/books`;

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
