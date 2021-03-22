import React, { useState, useEffect } from "react";
import axios from "axios";
import Banner from '../components/Banner/banner';
import { Link } from "react-router-dom";
import Result from "../components/Result/result";
import rest from "restler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function FrontPage() {
    // const [input, setInput] = useState("");
    const [api, setApi] = useState([]);
    const [search, setSearch] = useState([]);
    const [results, setResults] = useState([]);
    const [list, setList] = useState([]);

//     useEffect(() => {
//         rest.get("https://api.harvardartmuseums.org/object", {
//     query: {
//         apikey: "13426f78-76b7-456b-85d9-15e3e4d1875a",
//         title: "dog"
//     }
// }).on("complete", function(data, response) {
//     setApi(data);
// });

//     }, [])
    
    console.log(api)

    function handleInputChange(event) {
        let value = event.target.value;
        setSearch(value);
      }
   

      const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!search) {
          return;
        }else {
            rest.get("https://api.harvardartmuseums.org/object", {
                    query: {
                        apikey: "13426f78-76b7-456b-85d9-15e3e4d1875a",
                        title: search
                    }
                }).on("complete", function(data, response) {
                    console.log(data);
                });
        }
    }


// console.log(search)

    return (
        <div>
            {/* <div className="row"> */}

            <Banner 
           search={search}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
            />
    
            {/* </div> */}
            <div className="row">
                {!list ? <h1>You currently have nothing in your saved list</h1> : (
                    <div>
                        {list.map(art => {
                            return (
                                <div>
                                    <div className="container">
                                        <Result />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )

                }
                </div>
            </div>
    )

}
export default FrontPage;