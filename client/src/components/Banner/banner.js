import React from "react";
import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Banner(props) {




  return (
    <div>
      <div className="banner">
        {/* <div className="container"> */}
        <div className="row rowone">
          <h1 className="pageTitle redressed searchTitle">Search any piece of art!</h1>
        </div>
        <div className="container containersearch">
          <div className="row rowtwo">
            <div className="col-md-4 colone">
              <input className="form-control"
                type="text"
                value={props.search}
                placeholder="Search"
                onChange={props.handleInputChange}>
              </input>
            </div>
            <div className="col-md-4">

<div className="row">
              <a className="resultslink" href="/results">
                <button

                  onClick={() => {

                    props.handleFormSubmit()
                  }}
                  className="btn btn-primary">

                  <FontAwesomeIcon icon={faSearch} />

                </button>
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;