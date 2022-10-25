import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import Collatz from "./components/Collatz";
import MenuCollatz from "./components/MenuCollatz";
export default class Router extends Component {
  render() {
    function GetCollatzParametro() {
      var { minumero } = useParams();
      return <Collatz numero={minumero} />;
    }
    return (
      <div>
        <BrowserRouter>
        <MenuCollatz/>
          <Routes>
            <Route path="/collatz/:minumero" element={<GetCollatzParametro />}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
