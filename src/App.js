import React from "react";
import { Link } from "react-router-dom";
export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Home page</h1>
        <Link to="/profile">Go back to profile</Link>
        <div>
          <img src="https://miro.medium.com/max/700/0*xsrFIR6nemUKr47o"></img>
        </div>
               <button id="openWindow">Click TO Open Electron</button>
      </div>
    );
  }
}