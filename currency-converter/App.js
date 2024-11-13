import React from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CurrencyConverter from './CurrencyConverter';
import CurrencyRates from './CurrencyRates';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Конвертер валют</Link>
        <Link to="/rates">Курсы валют</Link>
      </nav>
      <Switch>
        <Route path="/" exact component={CurrencyConverter} />
        <Route path="/rates" component={CurrencyRates} />
      </Switch>
    </Router>
  );
};

export default App;