import React, { useState, useEffect } from "react";
import axios from "axios";
import Banner from '../components/Banner/banner';

function FrontPage() {

    // function Search() {
    //     API.getArt
    // }

    useEffect(() => {
        axios
        .get(`https://api.artic.edu/api/v1/artworks/search?q=starrynight`)
        .then(res => console.log(res.data))
      })

    return (
    <div>

<Banner />
    </div>
    )
}
export default FrontPage;