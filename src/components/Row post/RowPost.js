import React, { useEffect,useState } from 'react'
import './RowPost.css'
import axios from 'axios'
import {API_KEY, imgageURL} from '../../constants/constants'
import Youtube from 'react-youtube'
function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId,setUrlId] = useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    })
  },[props])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
     if(response.data.results.length !==0){
      setUrlId(response.data.results[0])
     }
     else{
      console.log('Trailer not available!')
     }
    })

    console.log(id)

  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      
      <div className="posters">
        {movies.map((obj)=>
          
          <img onClick={()=>{handleMovie(obj.id )}} className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imgageURL+obj.backdrop_path}`}/>
          
          )}
          
      </div>
      { urlId &&  <Youtube opts={opts} videoId={urlId.key}/> }
    </div>
  )
}

export default RowPost