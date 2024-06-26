import React, { useEffect, useState } from 'react'
import { API_KEY } from '../../constants/constants'
import './Banner.css'
import axios from 'axios'
import { imgageURL } from '../../constants/constants'
function Banner() {
    const [movie, setMovie] = useState()
  useEffect(() => {  
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results[18])
    })  
    
  }, [])
  
  return (
    <div 
    style={{backgroundImage:`url(${movie ? imgageURL + movie.backdrop_path : "NETFLIX"})`}}
    className='banner'>
      <div className="content">
        <h1 className="title">{movie ? movie.title: <span className='title-error'>"Something went wrong..."</span>}</h1>
        <div className='banner_buttons'>
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="discription">{movie ? movie.overview : ""}</h1>
      </div>
        <div className="fade_bottom">

        </div>
    </div>
  )
}

export default Banner