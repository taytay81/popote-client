import React, { Component } from "react";
import ScanTicket from "../components/ScanTicket";
import NavBar from "../components/NavBar";
import "./../styles/scanTicket.css";

export default class SearchRecipeWithScanTicket extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <h1> Scan your groceries ticket and be able to search for recipes </h1>
        <ScanTicket></ScanTicket>
      </div>
    );
  }
}
