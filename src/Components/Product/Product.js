import './Product.css'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Product(props) {
   
    const {details} = props
    const navigate = useNavigate()
    console.log(details);
    const {recipe} = details;
    const detailsFun = () => {
        console.log("fun called");     
        navigate('./details',{state:{recipe}});       
    }

    return (
    <div className='product-con mt-3 mb-3 pt-3 pb-3' >
       <img src = {recipe.image} className='pb-3 pro-icon'/>
       <p className='label-text'> {recipe.label} </p> 
       <p className="card-des"> Calories consumed: {Math.round(recipe.calories)}</p>
       
       <button className="btn btn-primary" onClick={detailsFun}> Try now</button>
    </div>
  )
}

export default Product