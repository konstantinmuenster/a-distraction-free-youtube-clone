import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer';

import { Content } from './components/Layout';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Search from './pages/Search';
import Watch from './pages/Watch';
import NotFound from './pages/NotFound';

const store = createStore(
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Content>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/watch" component={Watch} />
            <Route component={NotFound} />
          </Switch>
        </Content>
        <Footer />
      </BrowserRouter>
    </Provider>
);

export default App;
