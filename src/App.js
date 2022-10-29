import Header from './Header/Header';
import './App.scss';
import React from 'react';
import Home from './Page/Home/homepage';
// import { Route, Router} from 'react-router'
// import DetailPage from './Page/DetailPage/detailPage';
// import ThisDay from './Page/Home/MainComp/ThisDay/ThisDay';

function App() {
  return (
    <div className="Container">
     <Header/>
     <Home/>
     {/* <Router>
          <Route path="/" exact component={Home} />
          <Route path="/detail" exact component={DetailPage} />
        </Router> */}
    </div>
  );
}

export default App;
