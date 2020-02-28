import React, { Component } from "react";
import tesseract from "./../Tesseract/test.js";

export default class scanTicket extends Component {
  state = {
    uploadFile: [],
    patterns: [],
    ScanDocuments: [],
    loading: false,
    //this will be taken from the ingredient database
    ingredients: ["onions", "olives", "salad", ""]
  };
  handleChange = event => {
    if (event.target.files[0]) {
      var uploads = [];
      for (var key in event.target.files) {
        if (!event.target.files.hasOwnProperty(key)) continue;
        let file = event.target.files[key];
        uploads.push(URL.createObjectURL(file));
      }
      this.setState({
        uploadFile: uploads
      });
    } else {
      this.setState({
        uploadFile: []
      });
    }
  };

  generateText = () => {
    this.setState({
      loading: true
    });
    let uploads = this.state.uploadFile;
    tesseract
      .getTextFromImage(uploads[0])
      .then(text => {
        var documents = [];
        for (let i = 0; i < text.words.length; i++) {
          documents.push(text.words[i].text);
        }
        this.setState({
          ScanDocuments: documents
        });
        console.log("documents", this.state.ScanDocuments);
        this.setState({
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          loading: false
        });
      });
  };

  render() {
    return (
      <div>
        <label className="fileUploaderContainer">
          Click here to upload documents
          <input
            type="file"
            id="fileUploader"
            onChange={this.handleChange}
            multiple
          />
        </label>
        <div>
          {this.state.uploadFile.map((value, index) => {
            return <img key={index} src={value} width="100px" />;
          })}
        </div>
        {this.state.loading && <h2>loading</h2>}

        <button className="button" onClick={this.generateText}>
          Scan your ticket
        </button>
      </div>
    );
  }
}
