import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./results.css";
import Result from "../components/Result/result"

function Results() {
    const [art, setArt] = useState(
        localStorage.getItem("art")
          ? JSON.parse(localStorage.getItem("art"))
          : null
      )
    



    return (
        <div>
            <Result />
        </div>
    )
}
export default Results;