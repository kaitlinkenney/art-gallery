import React, { useState, useEffect } from "react";
import axios from "axios";
import Banner from '../components/Banner/banner';
import { Link } from "react-router-dom";
import Result from "../components/Result/result";
import rest from "restler";


function FrontPage() {
    // const [input, setInput] = useState("");
    const [api, setApi] = useState([]);
    const [search, setSearch] = useState([]);
    const [results, setResults] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        rest.get("https://api.harvardartmuseums.org/object", {
    query: {
        apikey: "13426f78-76b7-456b-85d9-15e3e4d1875a",
        title: "dog",
        // fields: "objectnumber,title,dated",
    }
}).on("complete", function(data, response) {
    console.log(data);
});

    }, [])
    
    console.log(api)

    function handleSearch(event) {
        let value = event.target.value;
        setSearch(value);
      }
   

    //   const handleFormSubmit = (event) => {
    //     event.preventDefault();

    //     if (!search) {
    //       return;
    //     }
    // function searchApi(){
      
    //         let lowerSearch = search.toLocaleLowerCase();
    //         let c = search.map((x) => JSON.stringify(x.title));
    //         let temp = c
    //             .filter((art) => art.toLocaleLowerCase().includes(lowerSearch) === true)
    //             .map((x) => JSON.parse(x));
    //         console.log(c)
    //         console.log(temp)
    //         let final = search.filter(item => temp.includes(item.name))
    //         setResults(final);
 
    // }


// console.log(search)

    return (
        <div>

            <Banner 
           search={search}
            handleSearch={handleSearch}
            />
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