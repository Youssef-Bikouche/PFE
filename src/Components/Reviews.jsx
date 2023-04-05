import "./style/Reviews.css" ;
import review from "./images/review.png";
import userReview from "./images/userReview.png"
import React, { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';
import axios from "axios";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import CryptoJS from "crypto-js";
library.add(faUser);
const Reviews = () => {
/************************************************ */
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [Reviews,setReviews]=useState('');
    const [error,setError]=useState('');
    const [login,setislogin]=useState(false)
    const [postedMessage,setpostedMessage]=useState('')
    const user=localStorage.getItem('username');
    const id=localStorage.getItem('id');


    const checkLogin=()=>{
      if(localStorage.getItem('token')==='verified'){
          setislogin(true);
      }
      else{
          setislogin(false);
      }
    }
    
/************************************************ */
    const SubmitReview = async event => {
      getReviews();
      try {
        await axios.post('http://localhost:8080/pfe/src/Components/PHP/PostReview.php', {
          user,
          id,
          comment,
          rating,
        }).then((result)=>{
          setpostedMessage('your review has been approuved !');
        });
      }catch(error){
        setError('An error occurred');
        setpostedMessage(error);
      }
    };
/************************************************ */
    const getReviews= async event=>{
      await axios.post('http://localhost:8080/pfe/src/Components/PHP/getReviews.php').then((result)=>{
        setReviews(result.data.data);
      })
      }
/************************************************ */
    useEffect(()=>{
      getReviews();
      checkLogin();
      checkAdmin();
    })
  /******************************************************* */
   const [adminDeleteReview,setadminDeleteReview]=useState(false);
   const checkAdmin=()=>{
    const CryptingKey = "xxx";
      const encryptedData = localStorage.getItem('Crypted');
   if(encryptedData){
      const decryptedData = CryptoJS.AES.decrypt(encryptedData,CryptingKey).toString(CryptoJS.enc.Utf8);
    if(decryptedData==='admin'){
      setadminDeleteReview(true);
    }
    else{
      setadminDeleteReview(false);
    }
  }}
   const DeleteReview=async (id)=>{
    await axios.post('http://localhost:8080/pfe/src/Components/PHP/PhpAdmin/DeleteReview.php',{
      id,
    }).then((result)=>{
       console.log("review Deleted");
       getReviews();
    })
   }
  /******************************************************* */
  return (  
    <div className="main-container-reviews">
      {login ?( 
      <div className="review-input">
        <div className="review-box">
          <div className="review-comment">
            <p>Talk to us about your expericence :</p>
            <textarea onChange={(event) => setComment(event.target.value)} />
          </div>

          <div className="review-stars">
            <p>Give your expericence a rating  :</p>
            <StarRatings
              rating={rating}
              starRatedColor="yellow"
              changeRating={(newRating) => setRating(newRating)}
              numberOfStars={5}
              name='rating'
            />
          </div>
          <div className="postMessage">{postedMessage}</div>
          <button type="submit" onClick={(event)=>SubmitReview()}>Submit Review</button>
         </div>
         <div className="review-pic">
          <img src={review} />
         </div>
         
      </div>
      ):
      <>
      <div className="review-input">
        <div className="review-box-notLogin">
          <div className="review-comment">
            <p>Talk to us about your expericence :</p>
            <textarea onChange={(event) => setComment(event.target.value)} />
          </div>

          <div className="review-stars">
            <p>Give your expericence a rating  :</p>
            <StarRatings
              rating={rating}
              starRatedColor="yellow"
              changeRating={(newRating) => setRating(newRating)}
              numberOfStars={5}
              name='rating'
            />
          </div>
          <button type="submit" onClick={(event)=>SubmitReview()}>Submit Review</button>
         </div>
         <div className="review-pic">
          <img src={review} />
         </div>
      </div>
      </>
    }
      <h1> Previous reviews </h1>
        {Reviews?.length > 0 ?(
          <div className="user-reviews-container">
            {Reviews.map((review)=>(
              <div className="review-card" key={review.id} >
                {adminDeleteReview?(
                   <div className="supprimer-review"><button onClick={()=>DeleteReview(review.id)}>Supprimer</button></div>
                    ):(<></>)
                }
                <div className="logo-user-review"><img src={userReview} alt="" /></div>
                <div className='top-review'>
                  <div className="Nomuser">by : {review.user}</div>
                  <div className="ReviewDate">Posted on :{review.posted}</div>
                </div>
                <div className='middle-review'>
                  <div className="review-text">{review.comment}</div>
                </div>
                <div className="reviewRate">
                <StarRatings
                    rating={review.rating}
                    starRatedColor="yellow"
                    numberOfStars={5}
                    name='rating'
                />
                </div>
              </div>
            ))
            }
          </div>
        )
          :(
          <div className="user-reviews-container">
          <h1> Etudiants reviews </h1>
          <h1>no reviews found</h1>
          </div>
          )
        }   
        {/* <div className="user-reviews-container">
          <div className="review-card">ok ok</div>
        </div> */}
    </div>
    
  );
  }
export default Reviews;