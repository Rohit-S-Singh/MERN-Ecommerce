import React from "react";
import './style.css'
import { Button } from "@mui/material";
import { Label } from "@mui/icons-material";
import facebook from '../../images/facebook.jpeg'
import google from '../../images/google (2).jpeg'
import instragram from '../../images/instragram.jpeg'
import linkdin from '../../images/linkdin.jpeg'
import twiter from '../../images/twitter.jpeg'
import youtube from '../../images/youtube.jpeg'
import Alert from '../../images/alert.jpg'


// import { useNavigate } from "react-router-dom";

const Footer = () => {
   
    return (
        <>
            <div className="footer">
                <div className="content">
               <h1>Let's connect!</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicingmollitia! </p>
              
               </div>
               <label>
            <input className="email" type="text" id="Email" name="Email"placeholder="type your e-mail here..." />
              <button className="btn" type="submit">Join</button>
               </label>
               <div class="icon">
               <img src={facebook}height={60} width={60} />
               <img src={google}height={60} width={60} />
               <img src={instragram}height={60} width={60} />
               <img src={linkdin}height={60} width={60} />
               <img src={twiter}height={60} width={60} />
               <img src={youtube}height={60} width={60} />
              <div className="para"> 
                    <p>Discover 2016 @ All Right Reserved  </p>
                    {/* <span>Design by <i>  Muskan </i> <img src={Alert}height={45} width={45} /> </span> */}
              </div>
              </div>
            </div>
        </>
    )
}
export default Footer