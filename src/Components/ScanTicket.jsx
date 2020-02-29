import React, { Component } from "react";
import tesseract from "../Tesseract/test.js";
import Loader from "../components/Loader.jsx";
import apiHandler from "../Api/APIHandler";

export default class scanTicket extends Component {
  state = {
    uploadFile: [],
    ScanDocuments: [],
    loading: false,
    //this will be taken from the ingredient database
    ingredientsInDb: "",
    //need to add the field Ingredientchecked to true .
    matchIngredients: [
      {
        id: "5e5924ef6d0c853ad0f85c07",
        name: "rice",
        image: undefined,
        ingredientChecked: true
      },
      {
        id: "5e5924ef6d0c853ad0f85c9f",
        name: "tahini",
        image: undefined,
        ingredientChecked: true
      },
      {
        id: "5e5924ef6d0c853ad0f85b6b",
        name: "olives",
        image: undefined,
        ingredientChecked: true
      },
      {
        id: "5e5924ef6d0c853ad0f8593f",
        name: "arugula",
        image: undefined,
        ingredientChecked: true
      },
      {
        id: "5e5924ef6d0c853ad0f85afc",
        name: "kale",
        image: undefined,
        ingredientChecked: true
      }
    ]
  };

  componentDidMount() {
    apiHandler
      .get("/ingredients")
      .then(apiRes => {
        console.log(apiRes);
        this.setState({ ingredientsInDb: apiRes.data });
      })
      .catch(apiErr => console.log(apiErr));
  }
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

  scanText = () => {
    this.setState({ loading: true });
    let uploads = this.state.uploadFile;

    tesseract
      .getTextFromImage(uploads[0])
      .then(text => {
        var documents = [];
        for (let i = 0; i < text.words.length; i++) {
          documents.push(text.words[i].text);
        }
        this.setState({ ScanDocuments: documents });
        this.setState({ loading: false });
        console.log("documents", this.state.ScanDocuments);
      })
      .catch(error => {
        console.log(error);
        this.setState({ ScanDocuments: [] });
        this.setState({ loading: false });
      });
  };

  findIngredientsInDb = () => {
    const ingredientsInDb = this.state.ingredientsInDb;
    const ingredientsFoundInTicket = this.state.ScanDocuments;
    var copy = [...this.state.matchIngredients];

    var index = 0;
    ingredientsFoundInTicket.map(function(ingredient, i) {
      for (let i = 0; i < ingredientsInDb.length; i++) {
        if (
          ingredientsInDb[i].name.toUpperCase() === ingredient.toUpperCase()
        ) {
          var ingredientToAdd = {
            id: ingredientsInDb[i]._id,
            name: ingredientsInDb[i].name,
            image: ingredientsInDb.image
          };

          copy[index] = ingredientToAdd;
          index++;
        } else {
          if (
            ingredientsInDb[i].name.toUpperCase() ===
            ingredient + "s".toUpperCase()
          ) {
            var ingredientToAdd = {
              id: ingredientsInDb[i]._id,
              name: ingredientsInDb[i].name,
              image: ingredientsInDb.image
            };

            copy[index] = ingredientToAdd;
            index++;
          }
        }
      }
    });
    console.log("copy", copy);

    /*WHY THE SETSTATE DOESNT WORK  WHNE IM DOING A COPY  */
    this.setState({
      matchIngredients: copy
    });

    console.log("tableau retourne", this.state.matchIngredients);
  };

  handleCheckboxChange = (event, i) => {
    const copy = [...this.state.matchIngredients];
    copy[i].ingredientChecked = event.target.checked;
    this.setState({ matchIngredients: copy });
    console.log(this.state.matchIngredients);
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
            return (
              <img key={index} src={value} width="100px" alt="TicketPreview" />
            );
          })}
        </div>
        {this.state.loading && <Loader></Loader>}
        {!this.state.loading && (
          <button className="button" onClick={this.scanText}>
            {" "}
            scan ticket
          </button>
        )}
        {!this.state.loading && (
          <button className="button" onClick={this.findIngredientsInDb}>
            {" "}
            retrieve ingredients
          </button>
        )}
        {this.state.matchIngredients.map((ingredient, i) => (
          <div key={i}>
            <label>{ingredient.name}</label>
            <img src={ingredient.image} alt={ingredient.name + i} />
            <input
              id={ingredient.id}
              type="checkbox"
              value={ingredient.name}
              checked={this.state.matchIngredients[i].ingredientChecked}
              onChange={e => this.handleCheckboxChange(e, i)}
            ></input>
          </div>
        ))}
      </div>
    );
  }
}
