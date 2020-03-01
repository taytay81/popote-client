import React, { Component } from "react";
import ScanTicket from "../components/ScanTicket";
import NavBar from "../components/NavBar";
import "../styles/scanTicket.css";

export default class SearchRecipeWithScanTicket extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className="space"></div>
        <ScanTicket></ScanTicket>
      </div>
    );
  }
}
