  import React from "react";
import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Banner(props) {
    return (
      <div>
        <div className="banner">
          {/* <div className="container"> */}
            <div className="row rowone">
              <h1 className="pageTitle">Search any piece of art!</h1>
            </div>
            <div className="container containersearch">
            <div className="row rowtwo">
              <div className="col-md-4 colone">
              <input className="form-control searchform"  placeholder="Search">
                </input>
              </div>
              <div className="col-md-4">
               <button className="btn srchbtn btn-primary"><FontAwesomeIcon icon={faSearch} /></button> 
              </div>
            </div>
          </div>
        </div>
    </div>
    );
  }

  export default Banner;