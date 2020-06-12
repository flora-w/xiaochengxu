import React from "react";
import {  Route,   HashRouter,Switch ,Redirect} from "react-router-dom";//Redirect,
// import createBrowserHistory from "history/createBrowserHistory";hashHistory
// import AuthRoute from './components/authRouter';
// import CommonPage from './commonPages';

import Home from './pages/home/home';
import SeatForm from './pages/home/Seatform';
import Programme from './pages/home/programme1';
import ProgrammeSecond from './pages/home/programme2';
import ProgrammeThird from './pages/home/programme3';
import ProgrammeForth from './pages/home/programme4';
import ProgrammeFifth from './pages/home/programme5';
import ProgrammeScore from './pages/home/score';
import ProgrammeResult from './pages/home/result';
import EchartRight from './pages/home/echarts';
import Tables from './pages/home/table';

const RouteConfig = () => {
  return ( 
    <HashRouter>
       <Switch>
      <Route  path='/home' exact component={Home} />
      <Route path='/Seatform' exact component={SeatForm} />
      <Route path='/programme1' exact component={Programme} />
      <Route path='/programme2' exact component={ProgrammeSecond}/>
      <Route path='/programme3' exact component={ProgrammeThird} />
      <Route path='/programme4' exact component={ProgrammeForth} />
      <Route path='/programme5/:id' exact component={ProgrammeFifth} />
      <Route path='/score' exact component={ProgrammeScore} />
      <Route path='/result' exact component={ProgrammeResult} />
      <Route path='/echarts' exact component={EchartRight} />
      <Route path='/table' exact component={Tables} />
      <Redirect exact from='/' to='/home' />
      </Switch>
      </HashRouter>
  
 )
}

export default RouteConfig;