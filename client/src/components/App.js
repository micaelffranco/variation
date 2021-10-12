import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => ./Header;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

function App() {
  return (
    <div>
      <BrowserRouter>
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