import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

//container because of materialize css
function App() {
  return (
    <div>
      <BrowserRouter className="container">
        <div>
          <Header />
          <Route exact={true} path ="/" component={Landing} />
          <Route exact={true} path ="/surveys" component={Dashboard} />
          <Route exact={true} path ="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
