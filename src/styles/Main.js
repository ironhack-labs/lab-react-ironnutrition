import React, {useState} from 'react'
import styled from "styled-components"

const Main = styled.div`
    .submitbtn{
       background-color:tomato;
       border:none;
       height:50%;
       width:100px;
       border-radius:10px;
       color:white;
       font-size:18px;
       margin:10px;
       padding:10px 15px;
     }
     .submitbtn:hover{
       opacity:0.8;
       user-select: none;
     }
     h3{
       margin:10px 0 30px 0 ;
       font-size:20px;
     }
     .container{
       margin:100px 0 50px 0;
     }
     .margin-bottom{
       margin-bottom:15px;
       font-size:22px;
     }
     input{
       padding:10px;
       border-radius:10px;
       border:1px solid #333;
       margin-right:10px;
     }
     @media (min-width:768px){
       .container{
         margin-left:20px;
       }
     }
`

export default Main