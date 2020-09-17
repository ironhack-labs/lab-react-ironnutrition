import React, {useState} from 'react'
import styled from "styled-components"

const Box = styled.div`
     box-sizing: border-box;
     width:80%;
     margin:10px 10%;
     display:flex;
     border:1px solid #333;
     border-radius:10px;
     padding:2px;
     img{
       width:100px;
       height:100px;
       object-fit:cover;
     }
     .text{
       width:30%;
       margin-top:30px;
       text-align:left;
       margin-left:10px;
     }
     .text h3{
       margin:0;
     }
     .text p{
       margin:0;
     }
     input{
       width:30%;
       margin:35px 10px 0 ;
       border:none;
       font-size:24px;
     }
     .btn{
       background-color:skyblue;
       border:none;
       width:20%;
       border-radius:10px;
       color:white;
       font-size:18px;
     }
     .btn:hover{
       opacity:0.8;
       user-select: none;
     }
     @media (min-width:768px){
      width:40%;
      margin:10px 50% 10px 10%;
     }
`

export default Box 