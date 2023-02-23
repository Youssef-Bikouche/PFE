import React from "react";
import Side from "./Side";
import QuestionCard from "./questionCard";
import "./style/SearchClicked.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
library.add(faSearch);

const SearchClicked = () => {
  const [Questions,setquestions]=useState('');
  const getQuestions= async event => {
    const response = await axios.post('http://localhost:8080/pfe/src/Components/PHP/Questions.php').then((result)=>{
    console.log(result.data.data);
    setquestions(result.data.data);
    // console.log(data[0].nom);
  });}
  useEffect(()=>{
    getQuestions();
  }
  ,[]);
 return ( 
  <div className="search-clicked">
      <div>
      <Side />
      </div>
    <div className="content">
        <div className="Searchbar">
          <input type="search" placeholder="search here"/>
          <div className="icon-search"><FontAwesomeIcon icon="search"/></div>
        </div>
        {Questions?.length > 0 ? (
          <div className="QuestionsBord">
            {Questions.map((question) => (
              <QuestionCard props={question} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Question found</h2>
          </div>
      )}  
    </div>
  </div>
  );
}
 
export default SearchClicked;