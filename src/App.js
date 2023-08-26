import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import EachFam from './Components/EachFam'
import PrivateEvent from './Components/PrivateEvent'
import SingleChat from './Components/SingleChat'
import AllChats from './Components/AllChats'
import UserProfile from './Components/UserProfile'
import Connections from './Components/Connections'
import Search from './Components/Search'
import PublicEvent from './Components/PublicEvent'
import Help from './Components/Help'
import React from 'react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/eachFam" element={<EachFam />}/>
          <Route path="/privateEvent" element={<PrivateEvent />}/>
          <Route path="/singleChat" element={<SingleChat />}/>
          <Route path="/allChats" element={<AllChats />}/>
          <Route path="/userProfile" element={<UserProfile />}/>
          <Route path="/connections" element={<Connections />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/publicEvent" element={<PublicEvent />}/>
          <Route path="/help" element={<Help />}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
