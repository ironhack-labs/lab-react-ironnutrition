import React , {useState,useEffect}from 'react';


import 'bulma/css/bulma.css';

function Foodbox (props){
    const [count,setCount] = useState(0)
    const onPressCount =(value)=>{
    
        if(value === 1){
          //voy a sumar
          //a)
          //setCount(prevState => prevState + 1 )
          //b)
          setCount(count + 1)
          
        }else{
          //restando
          //a)
          setCount(prevState => prevState - 1 )
          //b)
          //setCount(count - 1)
          
        }
    
      }

    const handleChange = (e) => {
        const {value} = e.target
        setCount(value)
    }

    useEffect(()=>{ } , [count] )

    return (
<div className="box" style={{width:450, height:80, marginLeft:30, marginTop:20}} >
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={props.image} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content" style={{marginRight:100}}>
        <p>
          <strong >{props.name}</strong> <br />
          <small>{props.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input style={{width:50, height:40, marginLeft:50 }} onClick={()=>onPressCount(1)} className="input" type="number" value={count} />
        </div>
        <div className="control">
          <button   className="button is-info" >
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>

    )
}

export default Foodbox;