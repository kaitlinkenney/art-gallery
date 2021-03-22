import React, { useState, useEffect } from "react";
import "./frontpage.css";
import axios from "axios";
import Banner from '../components/Banner/banner';
import Result from "../components/Result/result";
import rest from "restler";
import { Row } from "react-bootstrap";


function FrontPage() {

    const [api, setApi] = useState({});
    const [search, setSearch] = useState([]);
    // const [results, setResults] = useState([]);
    const [list, setList] = useState([]);

    let featured = ['1951.62','2006.4', 'BR66.4', '1951.65', '1899.11', '1916.496', '1923.150.9'];

        useEffect(() => {
            // for (let i=0; i<featured.length; i++){
            rest.get("https://api.harvardartmuseums.org/object", {
        query: {
            apikey: "13426f78-76b7-456b-85d9-15e3e4d1875a",
            // title: "garden"
            // objectnumber: featured[i]
        }
    
    }).on("complete", function(data, response) {
        console.log(data);
    });
            // }
        }, [])

    // console.log(api)

    function handleInputChange(event) {
        let value = event.target.value;
        setSearch(value);
    }


    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!search) {
            return;
        } else {
            rest.get("https://api.harvardartmuseums.org/object", {
                query: {
                    apikey: "13426f78-76b7-456b-85d9-15e3e4d1875a",
                    title: search
                }
            }).on("complete", function (data, response) {
                setApi(data);
            });
        }
        localStorage.setItem("art", JSON.stringify(api));
    }


    // console.log(search)

    return (
        <div>


            <Banner
                search={search}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
            />

            <Row style={{ marginTop: "2rem" }}>

            </Row>

            <div className=" row rowsaved">
                {/* {!list ? <h1>You currently have nothing in your saved list</h1> : (
                    <div>
                        {list.map(savedart => {
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

                } */}
                <div className="col-md-6">
                <h4 className="savedheader ml-2">You currently have nothing in your saved list.</h4>
                </div>
                <div className="col-md-6">
                    <h2 className="featuredart lora">Featured art to explore:</h2>

                    </div>
                </div>
        </div>
    )

}
export default FrontPage;