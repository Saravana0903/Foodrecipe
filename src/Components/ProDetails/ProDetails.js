import React from 'react'
import './ProDetails.css'
import { useLocation } from 'react-router-dom'; 
import Slider from 'react-slick';
import copy from "copy-to-clipboard"
import {MdContentCopy} from 'react-icons/md';

function ProDetails() {
    const location = useLocation();
    console.log(location.state.recipe);
    const data = location.state.recipe;
     var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
      };

    const copyHandler = () => {
      copy(data.url);
      alert("Your text copied to clipboard");
    }
  
    return (
    <div className='pro-det-con'>
    <div className="container detail-con pt-5 pb-5">
      <div className="row">
        <div className='col-12 col-md-5 col-lg-6 pt-3 pb-3'>
          <img src={data.images.REGULAR.url} className="left-con-img" />
        </div>
        <div className='col-12 col-md-7 col-lg-6 pt-3 pb-3 d-flex flex-column justify-content-center' >
          <h1 className="label-head">{data.label}</h1>
          <div>
          <span className="dish-ele mr-2" style={{color:'orangered'}}> Dish type :</span>
          <span className='dish-ele' style={{color:'#323f4b'}}>{data.dishType}</span> 
          </div> 
          <div>
          <span className="dish-ele mr-2" style={{color:'green'}}> Cuisine type :</span>
          <span className="dish-ele" style={{color:'#323f4b'}}>{data.cuisineType[0]}</span> 
          </div>
          <div>
          <span className="dish-ele mr-2" style={{color:"darkgoldenrod"}}> Meal type :</span>
          <span className="dish-ele" style={{color:'#323f4b'}}>{data.mealType[0]}</span> 
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
           <h1 style={{textAlign:"left"}}>Ingredients</h1>
        </div>
         <div className='col-12'>
         <table>
            <tr className='header'>
                <th> Food </th>
                <th> Quantity </th>
                <th> Measure </th>
            </tr>
            {
              data.ingredients.map((val,key) => {
                return (
                  <tr key={key} className="rower">
                    <td>{val.food}</td>
                    <td>{val.quantity}</td>
                    <td>{val.measure}</td>
                  </tr>
                )
})
            }
         </table>
         </div>
      </div>
      <div className="row mt-4 slide-con">
        <Slider {...settings} className='col-9 col-lg-5'>
          {data.ingredients.map(each => 
            <img src={each.image} className="ingredient-img" />)}
        </Slider>
      </div>

      <div className='row mt-4'>
        <h1 className='health-head col-12' style={{textAlign:"left"}}>
          Health labels
        </h1>
        <div className='col-12 label-con'>
        {data.healthLabels.map(each => <button className='btn btn-success mt-2 mb-2 ml-2 mr-2'>{each}</button>)}
        </div>

      </div>

      <div className='row mt-4'>
        <h1 className='blog-link-head col-12' style={{textAlign:"left"}}>
           Want to try out?
        </h1>
        <p className='col-12 blog-link-des'>
          Do follow the below mentioned link to navigate you to the respective food recipe blog page.
          Jump into your kitchen !🥧🍗🍽 
        </p>
        <div className='col-12 copy-link'>
          <input type='text' className='inp-ele' value={data.url} />
          <button type="button" className='copy-link-button' onClick={copyHandler}>
            <MdContentCopy className='copy-icon'/>
          </button>
         </div>
      </div>
       
    </div>
    </div>
  )
}

export default ProDetails
