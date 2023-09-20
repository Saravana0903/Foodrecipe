import "./Home.css"
import React,{useState} from 'react'
import Product from "../Product/Product"
import { Navigate, useNavigate} from "react-router-dom"
import {TypeAnimation} from "react-type-animation"

function Home() {

    const [search,setSearch] = useState("pizza")
    const [data1 , setData] = useState([])

    const submitHandler =  async (e) => {
        e.preventDefault()
        console.log(search)
        const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=fece4c0c&app_key=0f5b9d6fbeb4e735bcbc238decd9d85e`);
        const data = await res.json()
        console.log(data.hits);
        //<Product details = {data.hits}/>
        //<Navigate to="/product" />
        //changeData(data.hits);
        setData(data.hits);
    }

  return (
    <div className="bg-con">
    <div className="container">
    <div className="home-con pt-5 pb-5">
        <TypeAnimation sequence = {["Welcome to our Food Recipe App",1000,"Prepare your Yummy 😋 food",1000,"Discover Your Inner Chef",1000]}
            wrapper="h1"
            speed={50}
            style={{fontSize:"32px",color:"yellow",maxHeight:"100px"}}
            repeat={Infinity}
            />

        <center style={{display:'flex',flexDirection:'column',alignItems:'center'}} className="pt-4 pb-3">

           {/*} <img src="https://static.toiimg.com/photo/msid-66473975/66473975.jpg" className="home-img"/> */}

            <input 
            type="text"
            value = {search}
            onChange = {(e) => setSearch(e.target.value)} 
            placeholder = "recipe you want to search" 
            />
        
            <button className="btn btn-primary mt-4" onClick={submitHandler}>Submit</button> 
          </center>  

            <div className="row">
              
                {data1.map(each => 
                <div className="col-12 col-md-5 col-lg-4">
                <Product details = {each}
                 />
                 </div>
                )} 
             
            </div>
            
        
    </div>
    </div>
    </div>
  )
}

export default Home
